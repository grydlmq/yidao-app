import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "医道传承 · 综合平台",
  description: "中医八奇技 · 全息生命 · 完整传承体系",
  referrerPolicy: "no-referrer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
