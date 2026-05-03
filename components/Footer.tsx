"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          © {year} Ranjani Jeyaraj. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-4 text-zinc-500">
          <a
            href="https://github.com/ranjanijeyaraj23"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-500 transition"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-500 transition"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:ranjanijeyaraj23@gmail.com"
            aria-label="Email"
            className="hover:text-indigo-500 transition"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
