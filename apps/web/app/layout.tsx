import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduFunnel — Master Math, Science & More",
  description:
    "Join 50,000+ students using EduFunnel to ace their courses. Expert video lessons, practice problems, and step-by-step solutions.",
  openGraph: {
    title: "EduFunnel — Master Math, Science & More",
    description: "Join 50,000+ students using EduFunnel to ace their courses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
