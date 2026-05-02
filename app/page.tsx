"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, ExternalLink, Mail } from "lucide-react";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);

  // Loader
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // ✅ FIXED DARK MODE (persistent)
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

  // Loader UI
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
<div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 blur-[120px] rounded-full -z-10" />
      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-black/40 border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold text-lg">Sandeep</h1>

          <nav className="flex items-center gap-6">
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl md:text-6xl font-extrabold leading-tight"
  >
    Frontend Developer building{" "}
    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      scalable, high-performance web applications
    </span>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="mt-6 text-gray-600 dark:text-gray-300 max-w-xl text-lg"
  >
    I build production-ready web apps using React & Next.js with focus on performance,
    clean architecture, and great user experience.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="mt-8 flex gap-4 flex-wrap"
  >
    <a
      href="/resume.pdf"
      download
      className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium shadow-lg hover:scale-105 active:scale-95 transition"
    >
      Download Resume
    </a>

    <a
      href="https://github.com/YOUR_USERNAME"
      target="_blank"
      className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
    >
      GitHub
    </a>
  </motion.div>
</section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 mt-20">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I’m a frontend developer with 2+ years of experience building
          responsive and high-performance web applications. I focus on clean UI,
          scalable architecture, and delivering real user value.
        </p>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Projects", value: "10+" },
            { label: "Tech Stack", value: "15+" },
            { label: "Performance", value: "95%+" },
            { label: "Experience", value: "2+ yrs" },
          ].map((s) => (
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-indigo-500">
                {s.value}
              </h3>
              <p className="text-gray-500 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
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
              skills: ["Tailwind CSS", "Responsive Design"],
            },
            {
              title: "Tools",
              skills: ["Git", "GitHub", "Vercel"],
            },
          ].map((group) => (
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow">
              <h3 className="font-semibold mb-4">{group.title}</h3>
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

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "E-commerce Platform",
              desc: "Built cart, filters, and product pages with optimized performance (95+ Lighthouse score).",
              link: "https://ecommerce-app-liard-eight.vercel.app",
            },
            {
              title: "Admin Dashboard",
              desc: "Developed analytics dashboard with charts, authentication, and responsive UI.",
              link: "https://admin-dashboard-tau-neon-v4jhw2udf8.vercel.app",
            },
            {
              title: "Business Website",
              desc: "Created responsive website with chatbot integration and modern UI design.",
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
            Worked on real-world projects including dashboards, e-commerce apps,
            and business websites. Focused on performance, UI/UX, and scalability.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 mt-20 pb-20">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Open to frontend developer roles and freelance opportunities.
        </p>

        <a
          href="mailto:ranjanijeyaraj23@gmail@gmail.com"
          className="px-6 py-3 bg-indigo-500 text-white rounded-lg"
        >
          Send Email
        </a>
      </section>
    </main>
  );
}