import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const sourceUrl = "https://cdn.amcharts.com/lib/4/geodata/newZealandLow.js";
const source = await (await fetch(sourceUrl)).text();
const match = source.match(/var a=(\{.*\});window\.am4geodata_newZealandLow/s);

if (!match) throw new Error("Could not read the New Zealand regional map data.");

const geoJson = Function(`"use strict";return (${match[1]})`)();
const labels = {
  "NZ-AUK": "Auckland",
  "NZ-BOP": "Bay of Plenty",
  "NZ-HKB": "Hawke’s Bay / Napier",
  "NZ-TKI": "New Plymouth",
  "NZ-NTL": "Upper North",
  "NZ-WKO": "Taupō",
  "NZ-MWT": "Central North",
};

const visibleIds = new Set(["NZ-AUK", "NZ-BOP", "NZ-GIS", "NZ-HKB", "NZ-MWT", "NZ-NTL", "NZ-TKI", "NZ-WKO", "NZ-WGN"]);
const features = geoJson.features.filter((feature) => visibleIds.has(feature.id));
const polygons = (geometry) => (geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates)
  .map((polygon) => polygon.filter((ring) => ring.reduce((sum, point) => sum + point[1], 0) / ring.length <= -33))
  .filter((polygon) => polygon.length);
const project = ([longitude, latitude]) => {
  const x = longitude * Math.PI / 180;
  const y = 1.25 * Math.log(Math.tan(Math.PI / 4 + .4 * latitude * Math.PI / 180));
  const angle = -15 * Math.PI / 180;
  return [x * Math.cos(angle) + y * Math.sin(angle), x * Math.sin(angle) - y * Math.cos(angle)];
};

const projected = features.flatMap((feature) => polygons(feature.geometry).flatMap((polygon) => polygon.flatMap((ring) => ring.map(project))));
const xs = projected.map(([x]) => x);
const ys = projected.map(([, y]) => y);
const bounds = {
  minX: Math.min(...xs),
  maxX: Math.max(...xs),
  minY: Math.min(...ys),
  maxY: Math.max(...ys),
};

const viewBox = { width: 1500, height: 500 };
const target = { width: 620, height: 450 };
const scale = Math.min(target.width / (bounds.maxX - bounds.minX), target.height / (bounds.maxY - bounds.minY));
const renderedWidth = (bounds.maxX - bounds.minX) * scale;
const renderedHeight = (bounds.maxY - bounds.minY) * scale;
const offsetX = (viewBox.width - renderedWidth) / 2;
const offsetY = (viewBox.height - renderedHeight) / 2;
const renderPoint = (point) => {
  const [x, y] = project(point);
  return [(x - bounds.minX) * scale + offsetX, (y - bounds.minY) * scale + offsetY];
};

const distanceToSegment = (point, start, end) => {
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  if (dx === 0 && dy === 0) return Math.hypot(point[0] - start[0], point[1] - start[1]);
  const t = Math.max(0, Math.min(1, ((point[0] - start[0]) * dx + (point[1] - start[1]) * dy) / (dx * dx + dy * dy)));
  return Math.hypot(point[0] - (start[0] + t * dx), point[1] - (start[1] + t * dy));
};

const simplify = (points, tolerance = .38) => {
  if (points.length <= 3) return points;
  let maxDistance = 0;
  let split = 0;
  for (let index = 1; index < points.length - 1; index += 1) {
    const distance = distanceToSegment(points[index], points[0], points.at(-1));
    if (distance > maxDistance) {
      maxDistance = distance;
      split = index;
    }
  }
  if (maxDistance <= tolerance) return [points[0], points.at(-1)];
  return [...simplify(points.slice(0, split + 1), tolerance).slice(0, -1), ...simplify(points.slice(split), tolerance)];
};

const polygonArea = (points) => Math.abs(points.reduce((sum, point, index) => {
  const next = points[(index + 1) % points.length];
  return sum + point[0] * next[1] - next[0] * point[1];
}, 0) / 2);
const number = (value) => Number(value.toFixed(1));

const regions = features.map((feature) => {
  const paths = polygons(feature.geometry).flatMap((polygon) => polygon.map((ring) => {
    const rendered = ring.map(renderPoint);
    if (polygonArea(rendered) < .8) return "";
    const openRing = rendered.length > 1 && rendered[0][0] === rendered.at(-1)[0] && rendered[0][1] === rendered.at(-1)[1]
      ? rendered.slice(0, -1)
      : rendered;
    const simplified = simplify([...openRing, openRing[0]]);
    return `M${simplified.map(([x, y]) => `${number(x)},${number(y)}`).join("L")}Z`;
  })).filter(Boolean).join("");
  return { id: feature.id, name: feature.properties.name, label: labels[feature.id] ?? null, path: paths };
});

const output = `// Generated from amCharts' newZealandLow geodata by scripts/generate-nz-region-paths.mjs.\nexport const nzRegionPaths = ${JSON.stringify(regions, null, 2)} as const;\n`;
const outputPath = fileURLToPath(new URL("../lib/nz-region-paths.ts", import.meta.url));
await writeFile(outputPath, output);
console.log(`Generated ${regions.length} regional paths (${output.length} bytes).`);
