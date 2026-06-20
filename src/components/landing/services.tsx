"use client";

import { motion } from "framer-motion";
import type { ServicesDict } from "@/types/dictionary";
import { SectionHeading } from "./section-heading";
import { serviceIcons } from "./service-icons";
import { fadeUp, stagger } from "@/lib/motion";

type Props = {
  dict: ServicesDict;
};

export function Services({ dict }: Props) {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-hairline bg-surface-muted py-20 sm:py-28 dark:border-white/[0.06] dark:bg-page"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={dict.sectionLabel}
          title={dict.title}
          subtitle={dict.subtitle}
        />

        <motion.ul
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {dict.items.map((item) => {
            const Icon = serviceIcons[item.icon];
            return (
            <motion.li
              key={item.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8 dark:border-white/[0.07] dark:bg-gradient-to-b dark:from-white/[0.05] dark:to-transparent dark:shadow-none"
            >
              <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 ring-black/[0.04] dark:ring-white/[0.04]" />
              <div
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-apple-blue/15 bg-apple-blue-muted text-apple-blue transition group-hover:border-apple-blue/30 group-hover:bg-apple-blue/15 dark:border-apple-blue/20 dark:bg-apple-blue/10"
                aria-hidden
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-label dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-label-secondary sm:text-base dark:text-zinc-400">
                {item.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border-subtle bg-control px-2.5 py-1 text-xs font-medium text-label-secondary dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
