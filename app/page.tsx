"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Mail,
  Sparkles,
  Gauge,
  Layers,
  Wand2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { GithubIcon } from "@/components/icons";

const projects = [
  {
    title: "E-commerce Platform",
    tagline: "Full-stack shop with cart, filters, dynamic catalog.",
    impact: "95+ Lighthouse",
    points: [
      "Achieved 95+ Lighthouse performance score",
      "Dynamic routing & ISR with Next.js App Router",
      "Optimized rendering for sub-second TTI",
    ],
    stack: ["Next.js", "React", "Tailwind"],
    link: "https://ecommerce-app-liard-eight.vercel.app",
    featured: true,
  },
  {
    title: "Admin Dashboard",
    tagline: "Analytics console with auth and live charts.",
    impact: "Real-time data",
    points: [
      "Charts for real-time business insights",
      "Secure authentication system",
      "Fully responsive across devices",
    ],
    stack: ["React", "Charts", "Auth"],
    link: "https://admin-dashboard-tau-neon-v4jhw2udf8.vercel.app",
  },
  {
    title: "Business Website",
    tagline: "Marketing site with embedded chatbot.",
    impact: "Mobile-first",
    points: [
      "Improved engagement with chatbot integration",
      "Mobile-first responsive layout",
      "Performance-optimized UI",
    ],
    stack: ["Next.js", "Tailwind"],
    link: "https://eeshisoft-nine.vercel.app",
  },
];

const techGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "Node.js"],
  },
  {
    title: "Styling & UI",
    items: ["Tailwind CSS", "Framer Motion", "Responsive UI", "Accessibility"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel", "VS Code"],
  },
];

const marqueeStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Git",
  "Vercel",
  "Accessibility",
  "Performance",
];

const principles = [
  {
    icon: Gauge,
    title: "Performance first",
    body:
      "Lighthouse 95+ isn't a target, it's a baseline. I profile, measure, and ship the version that's actually fast for users.",
  },
  {
    icon: Layers,
    title: "Architecture that scales",
    body:
      "Component boundaries, route patterns, and data flow chosen so the codebase reads well at 10× its current size.",
  },
  {
    icon: Wand2,
    title: "Details matter",
    body:
      "Motion that respects reduced-motion. Focus rings that don't disappear. Empty states that don't feel empty.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        id="main"
        className="relative min-h-screen text-zinc-900 dark:text-zinc-100"
      >
        {/* ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-[-180px] left-1/2 -translate-x-1/2 w-[280px] h-[280px] sm:w-[520px] sm:h-[520px] md:w-[720px] md:h-[720px] bg-indigo-500/15 blur-[120px] rounded-full -z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[400px] right-[-120px] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-fuchsia-500/10 blur-[120px] rounded-full -z-10"
        />

        {/* HERO */}
        <section
          id="top"
          className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-20 sm:pb-28"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            Available for frontend roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-balance"
          >
            Frontend Developer
            <br />
            building{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
              fast, accessible
            </span>
            <br />
            web applications.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 max-w-2xl text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 text-balance"
          >
            I'm Ranjani — I ship production-grade React & Next.js apps with a
            focus on performance, clean architecture, and the details that make
            an interface feel right.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="/Ranjani_Frontend_Developer_Resume.pdf"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white transition"
            >
              <Download size={16} />
              Download resume
            </a>
            <a
              href="mailto:ranjanijeyaraj23@gmail.com"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm font-medium hover:border-indigo-500 hover:text-indigo-500 transition"
            >
              <Mail size={16} />
              Get in touch
              <ArrowUpRight
                size={14}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="https://github.com/ranjanijeyaraj23"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm font-medium hover:border-indigo-500 hover:text-indigo-500 transition"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </motion.div>

          {/* Metrics strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800"
          >
            {[
              { k: "95+", v: "Lighthouse score" },
              { k: "3", v: "Production apps" },
              { k: "2+ yrs", v: "Frontend focus" },
              { k: "100%", v: "Mobile-first builds" },
            ].map((m) => (
              <div
                key={m.v}
                className="p-5 sm:p-6 bg-white dark:bg-zinc-950"
              >
                <div className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  {m.k}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-zinc-500 font-mono uppercase tracking-wider">
                  {m.v}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* MARQUEE */}
        <section className="border-y border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40">
          <div className="overflow-hidden mask-fade-x py-5">
            <div className="flex gap-12 animate-marquee whitespace-nowrap text-sm font-mono uppercase tracking-[0.2em] text-zinc-500">
              {[...marqueeStack, ...marqueeStack].map((s, i) => (
                <span key={`${s}-${i}`} className="flex items-center gap-12">
                  {s}
                  <Sparkles size={12} className="text-indigo-500/60" />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* WORK */}
        <section
          id="work"
          className="max-w-6xl mx-auto px-4 sm:px-6 mt-24 sm:mt-32"
        >
          <SectionHeading
            index="01"
            label="Selected work"
            title="Projects I've shipped"
            description="Production apps spanning e-commerce, dashboards, and marketing sites — built with performance, accessibility, and maintainability in mind."
          />

          {/* Featured project */}
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <Reveal key={p.title}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 p-6 sm:p-10 hover:border-indigo-500/50 transition"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-[0.18em] text-indigo-500">
                        Featured
                      </div>
                      <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                        {p.tagline}
                      </p>
                      <ul className="mt-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex gap-2">
                            <span className="text-indigo-500 mt-1.5 w-1 h-1 rounded-full bg-indigo-500 shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.stack.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-xs font-mono rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-transparent">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl font-semibold tracking-tight bg-gradient-to-br from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
                            {p.impact}
                          </div>
                          <div className="mt-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
                            Performance
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 group-hover:border-indigo-500 group-hover:text-indigo-500 transition">
                    <ArrowUpRight size={16} />
                  </div>
                </a>
              </Reveal>
            ))}

          {/* Grid of remaining */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
            {projects
              .filter((p) => !p.featured)
              .map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-500/50 transition"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold tracking-tight">
                        {p.title}
                      </h3>
                      <ArrowUpRight
                        size={16}
                        className="text-zinc-400 transition group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {p.tagline}
                    </p>
                    <ul className="mt-4 space-y-1.5 text-xs text-zinc-500">
                      {p.points.map((pt) => (
                        <li key={pt}>— {pt}</li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[11px] font-mono rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </a>
                </Reveal>
              ))}
          </div>
        </section>

        {/* TECH */}
        <section
          id="tech"
          className="max-w-6xl mx-auto px-4 sm:px-6 mt-24 sm:mt-32"
        >
          <SectionHeading
            index="02"
            label="Tech stack"
            title="Tools I reach for"
            description="A focused stack chosen for shipping speed without sacrificing quality."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {techGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.06}>
                <div className="h-full p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <div className="text-xs font-mono uppercase tracking-[0.18em] text-indigo-500">
                    {g.title}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="text-sm text-zinc-700 dark:text-zinc-300"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* APPROACH */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-24 sm:mt-32">
          <SectionHeading
            index="03"
            label="Approach"
            title="How I think about frontend"
          />
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="h-full p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                    <div className="inline-flex p-2.5 rounded-lg bg-indigo-500/10 text-indigo-500">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="max-w-6xl mx-auto px-4 sm:px-6 mt-24 sm:mt-32"
        >
          <SectionHeading
            index="04"
            label="Experience"
            title="Where I've been working"
          />
          <Reveal>
            <div className="relative pl-6 border-l border-zinc-200 dark:border-zinc-800">
              <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-500" />
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-zinc-500">
                2023 — Present
              </div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                Frontend Developer
              </h3>
              <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
                Developed scalable applications including dashboards and
                e-commerce platforms. Focused on performance optimization,
                UI/UX, and maintainable architecture. Shipped features end to
                end — from spec to production.
              </p>
            </div>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="max-w-6xl mx-auto px-4 sm:px-6 mt-24 sm:mt-32"
        >
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 p-8 sm:p-14 text-center">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.18),transparent_60%)]"
              />
              <div className="relative">
                <div className="text-xs font-mono uppercase tracking-[0.18em] text-indigo-500">
                  05 — Contact
                </div>
                <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-balance">
                  Let's build something{" "}
                  <span className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
                    great
                  </span>{" "}
                  together.
                </h2>
                <p className="mt-4 max-w-xl mx-auto text-zinc-600 dark:text-zinc-400">
                  Open to frontend roles and freelance projects. The fastest
                  way to reach me is email — I usually reply within a day.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href="mailto:ranjanijeyaraj23@gmail.com"
                    className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white transition"
                  >
                    <Mail size={16} />
                    ranjanijeyaraj23@gmail.com
                  </a>
                  <a
                    href="/Ranjani_Frontend_Developer_Resume.pdf"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm font-medium hover:border-indigo-500 hover:text-indigo-500 transition"
                  >
                    <Download size={16} />
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <Footer />
      </main>
    </>
  );
}
