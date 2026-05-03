"use client";

import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal>
      <div className="mb-10 sm:mb-14">
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-indigo-500">
          <span>{index}</span>
          <span className="h-px w-8 bg-indigo-500/40" />
          <span>{label}</span>
        </div>
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400 text-balance">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
