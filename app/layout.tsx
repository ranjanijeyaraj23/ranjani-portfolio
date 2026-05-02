"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import PageTransition from "@/components/PageTransition";
export default function RootLayout({ children }: any) {
  const [scrolled, setScrolled] = useState(false);
const [dark, setDark] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">

        {/* 🔥 STICKY NAVBAR */}
        <nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled
              ? "backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 shadow-md"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
            <h1 className="font-bold text-lg">Sandeep</h1>

            <div className="flex items-center gap-6">
              <a href="#projects" className="hover:text-indigo-500">
                Projects
              </a>
              <a href="#contact" className="hover:text-indigo-500">
                Contact
              </a>
              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:scale-110 transition"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </nav>

        {/* 🔥 IMPORTANT spacing for fixed navbar */}
        <div className="pt-20"><PageTransition>{children}</PageTransition></div>

      </body>
      
    </html>
  );
}