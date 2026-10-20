import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mitchell Construction | Waikato Commercial Builders",
  description:
    "Mitchell Construction delivers commercial, education, project management, accessibility and modular building projects across Waikato and New Zealand.",
  metadataBase: new URL("https://mitchellconstruction.co.nz"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
