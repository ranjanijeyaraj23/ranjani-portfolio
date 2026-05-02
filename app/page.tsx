"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 900);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* GLOW */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 blur-[120px] rounded-full -z-10" />

      {/* NAVBAR */}
      <header className="fixed top-0 w-full backdrop-blur-xl bg-white/70 dark:bg-black/40 border-b z-50">
        <div className="max-w-6xl mx-auto flex justify-between px-6 py-4">
          <h1 className="font-bold">Sandeep</h1>

          <div className="flex gap-6 items-center">
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

            <button onClick={toggleTheme}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Frontend Developer building{" "}
          <span className="text-indigo-500">
            scalable, high-performance web applications
          </span>
        </motion.h1>

        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-xl">
          I build production-ready applications using React & Next.js with strong
          focus on performance, clean architecture, and user experience.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/resume.pdf"
            className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow hover:scale-105 transition"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            className="px-6 py-3 border rounded-lg"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* WHY HIRE ME */}
      <section className="max-w-5xl mx-auto px-6 mt-20">
        <h2 className="text-2xl font-bold mb-4">Why Hire Me</h2>
        <p className="text-gray-600 dark:text-gray-300">
          I focus on building real-world applications, not just UI demos. My work
          emphasizes performance optimization, scalability, and clean code
          practices. I deliver production-ready features that solve real problems.
        </p>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Frontend",
              skills: ["React", "Next.js", "TypeScript", "JavaScript"],
            },
            {
              title: "Styling",
              skills: ["Tailwind CSS", "Responsive UI"],
            },
            {
              title: "Tools",
              skills: ["Git", "GitHub", "Vercel"],
            },
          ].map((group) => (
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow">
              <h3 className="font-semibold mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span className="px-3 py-1 text-sm bg-indigo-500/10 text-indigo-500 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS (UPGRADED) */}
      <section id="projects" className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "E-commerce Platform",
              desc: "Built full-featured e-commerce system with cart, filters, and dynamic product pages.",
              points: [
                "Achieved 95+ Lighthouse performance score",
                "Implemented dynamic routing with Next.js",
                "Optimized UI rendering for fast load times",
              ],
              link: "https://ecommerce-app-liard-eight.vercel.app",
            },
            {
              title: "Admin Dashboard",
              desc: "Developed analytics dashboard with authentication and data visualization.",
              points: [
                "Integrated charts for real-time insights",
                "Built secure authentication system",
                "Designed fully responsive UI",
              ],
              link: "https://admin-dashboard-tau-neon-v4jhw2udf8.vercel.app",
            },
            {
              title: "Business Website",
              desc: "Created responsive business site with chatbot integration.",
              points: [
                "Improved user engagement with chatbot",
                "Built mobile-first responsive layout",
                "Optimized UI for performance",
              ],
              link: "https://eeshisoft-nine.vercel.app",
            },
          ].map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{p.desc}</p>

              <ul className="mt-3 text-xs text-gray-500 space-y-1">
                {p.points.map((pt) => (
                  <li key={pt}>• {pt}</li>
                ))}
              </ul>

              <span className="text-indigo-500 mt-4 inline-block">
                View Project →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-5xl mx-auto px-6 mt-20">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>

        <div className="border-l pl-6">
          <h3 className="font-semibold">Frontend Developer</h3>
          <p className="text-sm text-gray-500">2023 – Present</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Developed scalable applications including dashboards and e-commerce
            platforms. Focused on performance optimization, UI/UX, and maintainable
            architecture.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 mt-20 pb-20">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Open to frontend roles and freelance opportunities.
        </p>

        <a
          href="mailto:ranjanijeyaraj23@gmail.com"
          className="px-6 py-3 bg-indigo-500 text-white rounded-lg"
        >
          Send Email
        </a>
      </section>
    </main>
  );
}