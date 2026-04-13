"use client";

import { motion } from "framer-motion";
import type { PortfolioDict } from "@/types/dictionary";
import { SectionHeading } from "./section-heading";
import { fadeUp, stagger } from "@/lib/motion";

type Props = {
  dict: PortfolioDict;
};

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}

export function Portfolio({ dict }: Props) {
  return (
    <section
      id="portfolio"
      className="scroll-mt-24 border-t border-hairline bg-surface-muted py-20 sm:py-28 dark:border-white/[0.06] dark:bg-page"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={dict.sectionLabel}
          title={dict.title}
          subtitle={dict.subtitle}
        />

        <motion.div
          className="mt-14 space-y-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {dict.projects.map((project, i) => (
            <motion.article
              key={project.name}
              variants={fadeUp}
              className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:flex-row sm:items-center sm:justify-between sm:p-8 dark:border-white/[0.07] dark:bg-gradient-to-r dark:from-white/[0.04] dark:to-transparent dark:shadow-none"
            >
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-label dark:text-white">
                    {project.name}
                  </h3>
                  <span className="rounded-full border border-border-subtle bg-control px-2.5 py-0.5 text-xs font-medium text-label-secondary dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300">
                    {project.category}
                  </span>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-label-secondary sm:text-base dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-4 sm:items-end">
                <p className="text-sm font-medium text-[#008547] dark:text-emerald-300/90">
                  {project.result}
                </p>
                <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                  <span className="text-xs font-medium uppercase tracking-wider text-label-tertiary">
                    {dict.viewLabel} · {String(i + 1).padStart(2, "0")}
                  </span>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${dict.livePreview} — ${project.name}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-sm font-medium text-label shadow-sm transition hover:border-apple-blue hover:bg-apple-blue-muted hover:text-apple-blue dark:border-white/15 dark:bg-white/[0.06] dark:text-zinc-100 dark:hover:border-apple-blue dark:hover:bg-white/[0.1] dark:hover:text-white"
                    >
                      <ExternalLinkIcon className="shrink-0 opacity-80" />
                      <span>{dict.livePreview}</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
