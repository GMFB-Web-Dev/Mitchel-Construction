type ValueIconProps = {
  type: "quality" | "delivery" | "safety" | "relationships" | "experience";
};

export function ValueIcon({ type }: ValueIconProps) {
  if (type === "quality") {
    return <svg className="value-icon" viewBox="0 0 88 88" aria-hidden="true"><path d="m32 58-4 20 12-8 9 10 4-22M29 22l6-2 4-5 7 2 6-2 4 5 7 2 1 7 5 5-2 7 2 7-5 5-1 7-7 2-4 5-6-2-7 2-4-5-6-2-1-7-5-5 2-7-2-7 5-5 1-7Z"/><circle cx="46" cy="40" r="15"/><path d="m38 40 6 6 11-13"/></svg>;
  }

  if (type === "delivery") {
    return <svg className="value-icon" viewBox="0 0 88 88" aria-hidden="true"><circle cx="42" cy="41" r="29"/><path d="M42 19v22h15M42 12v5M20 41h-5M42 70v-5M65 41h5M23 22l4 4M61 22l-4 4M23 60l4-4M61 60l-4-4M69 57v13l-12-5"/><path d="M67 65c-6 6-15 9-24 9"/></svg>;
  }

  if (type === "safety") {
    return <svg className="value-icon" viewBox="0 0 88 88" aria-hidden="true"><path d="M18 53c1-18 9-31 26-33 17 2 25 15 26 33M12 55c0-3 2-5 5-5h54c3 0 5 2 5 5v5c-9 7-20 10-32 10S21 67 12 60Z"/><path d="M32 24v17M44 20v21M56 24v17M24 54v6M33 54v8M44 54v9M55 54v8M64 54v6"/></svg>;
  }

  if (type === "relationships") {
    return <svg className="value-icon" viewBox="0 0 88 88" aria-hidden="true"><path d="m13 38 17-17c6-6 15-6 21 0l3 3M75 38 58 21c-6-6-15-6-21 0l-9 9c-3 3-3 7 0 10s7 3 10 0l8-8 26 25c3 3 3 7 0 10s-7 3-10 0l-4-4M58 63c3 3 3 7 0 10s-7 3-10 0l-4-4M44 69c3 3 2 7-1 9s-6 1-8-1l-4-4"/><path d="m15 39 8 8-9 9c-2 2-5 2-7 0s-2-5 0-7ZM23 47l8 8-10 10c-2 2-5 2-7 0s-2-5 0-7ZM31 55l8 8-9 9c-2 2-5 2-7 0s-2-5 0-7Z"/></svg>;
  }

  return <svg className="value-icon" viewBox="0 0 88 88" aria-hidden="true"><circle cx="44" cy="44" r="12"/><path d="M39 42c0-4 2-7 5-7s5 3 5 7c0 3-1 5-3 6 4 1 7 4 7 8H35c0-4 3-7 7-8-2-1-3-3-3-6ZM44 18v9M44 61v9M18 44h9M61 44h9M25 25l7 7M56 56l7 7M63 25l-7 7M32 56l-7 7"/><circle cx="44" cy="13" r="6"/><circle cx="44" cy="75" r="6"/><circle cx="13" cy="44" r="6"/><circle cx="75" cy="44" r="6"/><circle cx="22" cy="22" r="6"/><circle cx="66" cy="66" r="6"/><circle cx="66" cy="22" r="6"/><circle cx="22" cy="66" r="6"/></svg>;
}
