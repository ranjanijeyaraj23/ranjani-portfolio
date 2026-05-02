"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function Navbar({ dark, setDark }: any) {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/30 dark:bg-black/30 border-b border-white/20"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
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
            className="p-2 rounded-full bg-white/50 dark:bg-gray-800/50"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}