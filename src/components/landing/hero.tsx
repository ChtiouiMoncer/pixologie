"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { HeroDict, Locale } from "@/types/dictionary";
import { fadeUp, stagger } from "@/lib/motion";

type Props = {
  dict: HeroDict;
  locale: Locale;
};

export function Hero({ dict, locale }: Props) {
  const base = `/${locale}`;

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32">
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full blur-[120px]"
        style={{ backgroundColor: "var(--glow-indigo)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full blur-[110px]"
        style={{ backgroundColor: "var(--glow-violet)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-px w-[min(80%,720px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-black/[0.08] to-transparent dark:via-white/15"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-label-secondary shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-400 dark:shadow-none"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#34c759] shadow-[0_0_10px_rgba(52,199,89,0.45)] dark:bg-emerald-400 dark:shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
            {dict.badge}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-semibold tracking-tight text-label sm:text-5xl lg:text-6xl"
          >
            {dict.titleStart}
            <span className="bg-gradient-to-r from-[#0066cc] via-label to-[#5856d6] bg-clip-text text-transparent dark:from-indigo-200 dark:via-white dark:to-violet-200">
              {dict.titleAccent}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-label-secondary sm:text-xl dark:text-zinc-400"
          >
            {dict.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href={`${base}#contact`}
              className="inline-flex h-12 items-center justify-center rounded-full bg-cta px-6 text-sm font-semibold text-cta-fg transition hover:bg-cta-hover"
            >
              {dict.primaryCta}
            </Link>
            <Link
              href={`${base}#portfolio`}
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface/90 px-6 text-sm font-medium text-label shadow-sm backdrop-blur-sm transition hover:border-border hover:bg-surface dark:border-white/15 dark:bg-white/[0.03] dark:text-zinc-100 dark:shadow-none dark:hover:border-white/25 dark:hover:bg-white/[0.06]"
            >
              {dict.secondaryCta}
            </Link>
          </motion.div>

          {/* <motion.dl
            variants={fadeUp}
            className="mt-16 grid grid-cols-1 gap-6 border-t border-hairline pt-10 sm:grid-cols-3 dark:border-white/[0.06]"
          >
            {dict.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="text-sm text-label-tertiary dark:text-zinc-500">
                  {stat.label}
                </dt>
                <dd className="text-2xl font-semibold tracking-tight text-label sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl> */}
        </motion.div>
      </div>
    </section>
  );
}
