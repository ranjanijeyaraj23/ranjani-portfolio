"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, ExternalLink, Mail } from "lucide-react";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);

  // Loader
  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  // Dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Cursor glow
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    const move = (e: MouseEvent) => {
      if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Loader screen
  if (loading)
    return (
      <div className="h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 text-gray-900 dark:text-white">

      {/* Cursor Glow */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed w-40 h-40 bg-purple-500/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 z-0"
      />

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-black/40 border-b border-white/20">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold text-lg">Sandeep</h1>

          <nav className="flex items-center gap-6">
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
            Sandeep
          </span>
        </motion.h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          Frontend Developer building modern, high-performance apps using React & Next.js.
        </p>

        <p className="mt-4 text-indigo-500 font-medium">
          Building production-ready apps with clean architecture & performance focus.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white hover:scale-105 active:scale-95 transition">
            <Mail className="inline mr-2" size={16} /> Contact
          </button>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="px-6 py-3 rounded-lg border hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
          I’m a passionate Frontend Developer focused on building high-performance,
          scalable web applications using React and Next.js. I enjoy transforming
          complex problems into simple, beautiful, and intuitive user interfaces.
        </p>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Projects", value: "10+" },
            { label: "Technologies", value: "15+" },
            { label: "Performance", value: "95%+" },
            { label: "Experience", value: "2+ yrs" },
          ].map((stat) => (
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow">
              <h3 className="text-3xl font-bold text-indigo-500">{stat.value}</h3>
              <p className="text-gray-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Frontend", skills: ["React", "Next.js", "TypeScript"] },
            { title: "Styling", skills: ["Tailwind", "UI/UX"] },
            { title: "Tools", skills: ["Git", "Vercel"] },
          ].map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow hover:shadow-2xl transition"
            >
              <h3 className="font-semibold mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span className="px-3 py-1 bg-indigo-500/10 text-indigo-500 rounded-full text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 mt-24">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "E-commerce App",
              desc: "Full UI with cart, filters, 95 Lighthouse score",
              link: "https://ecommerce-app-liard-eight.vercel.app",
            },
            {
              title: "Admin Dashboard",
              desc: "Analytics dashboard with charts & auth",
              link: "#",
            },
            {
              title: "Business Website",
              desc: "Website with chatbot integration",
              link: "#",
            },
          ].map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              whileHover={{ rotateX: 5, rotateY: -5 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition"
            >
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{p.desc}</p>

              <span className="text-indigo-500 mt-4 inline-block">
                View Project <ExternalLink size={14} className="inline ml-1" />
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-5xl mx-auto px-6 mt-28">
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="border-l-2 pl-6 space-y-8">
          <div>
            <h3 className="font-semibold">Frontend Developer</h3>
            <p className="text-gray-500 text-sm">2023 - Present</p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Building scalable apps with React & Next.js.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 mt-24 pb-20">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Want to work together? Let’s connect.
        </p>

        <a
          href="mailto:youremail@gmail.com"
          className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:scale-105 transition"
        >
          Send Email
        </a>
      </section>

    </main>
  );
}