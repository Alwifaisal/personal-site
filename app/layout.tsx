import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio Alwi Faisal",
  description: "Dibuat dengan Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}