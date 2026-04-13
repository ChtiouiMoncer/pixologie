"use client";

import { motion } from "framer-motion";
import type { WhyUsDict } from "@/types/dictionary";
import { SectionHeading } from "./section-heading";
import { fadeUp, stagger } from "@/lib/motion";

type Props = {
  dict: WhyUsDict;
};

export function WhyUs({ dict }: Props) {
  return (
    <section
      id="why-us"
      className="scroll-mt-24 border-t border-hairline py-20 sm:py-28 dark:border-white/[0.06]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={dict.sectionLabel}
          title={dict.title}
          subtitle={dict.subtitle}
        />

        <motion.ol
          className="mt-14 grid gap-5 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {dict.points.map((point, index) => (
            <motion.li
              key={point.title}
              variants={fadeUp}
              className="relative rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8 dark:border-white/[0.07] dark:bg-zinc-900/40 dark:shadow-none"
            >
              <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-apple-blue-muted bg-apple-blue-muted text-sm font-semibold text-apple-blue dark:border-indigo-400/25 dark:bg-indigo-500/10 dark:text-indigo-200">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-label dark:text-white">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-label-secondary sm:text-base dark:text-zinc-400">
                {point.body}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
