"use client";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white overflow-x-hidden">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}