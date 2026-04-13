"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import type { ContactDict } from "@/types/dictionary";
import { SectionHeading } from "./section-heading";
import { fadeUp, stagger } from "@/lib/motion";

type Props = {
  dict: ContactDict;
};

type FormStatus = "idle" | "success";

export function Contact({ dict }: Props) {
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("success");
    form.reset();
  }

  const fieldClass =
    "h-11 rounded-xl border border-border bg-surface px-3 text-sm text-label outline-none transition placeholder:text-label-tertiary focus:border-apple-blue focus:ring-2 focus:ring-apple-blue/20 dark:border-white/10 dark:bg-zinc-950/80 dark:text-white dark:focus:border-indigo-400/50 dark:focus:ring-indigo-500/30";

  const textareaClass =
    "resize-none rounded-xl border border-border bg-surface px-3 py-2 text-sm text-label outline-none transition placeholder:text-label-tertiary focus:border-apple-blue focus:ring-2 focus:ring-apple-blue/20 dark:border-white/10 dark:bg-zinc-950/80 dark:text-white dark:focus:border-indigo-400/50 dark:focus:ring-indigo-500/30";

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-hairline bg-surface-muted py-20 sm:py-28 dark:border-white/[0.06] dark:bg-page"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={dict.sectionLabel}
          title={dict.title}
          subtitle={dict.subtitle}
        />

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-center text-sm text-label-secondary dark:text-zinc-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {dict.emailIntro}{" "}
          <a
            href={`mailto:${dict.contactEmail}`}
            className="font-medium text-apple-blue underline-offset-2 hover:underline dark:text-indigo-300"
          >
            {dict.contactEmail}
          </a>
        </motion.p>

        <motion.div
          className="mx-auto mt-14 max-w-xl"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8 dark:border-white/[0.07] dark:bg-white/[0.02] dark:shadow-none"
          >
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-label-secondary dark:text-zinc-300">
                <span>{dict.form.name}</span>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-label-secondary dark:text-zinc-300">
                <span>{dict.form.email}</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={fieldClass}
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm text-label-secondary dark:text-zinc-300">
              <span>{dict.form.company}</span>
              <input
                name="company"
                type="text"
                autoComplete="organization"
                className={fieldClass}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-label-secondary dark:text-zinc-300">
              <span>{dict.form.message}</span>
              <textarea
                name="message"
                rows={4}
                required
                className={textareaClass}
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-full bg-cta text-sm font-semibold text-cta-fg transition hover:bg-cta-hover disabled:opacity-60 sm:w-auto sm:px-8"
            >
              {dict.form.submit}
            </button>

            {status === "success" ? (
              <p
                className="text-sm font-medium text-[#008547] dark:text-emerald-300/90"
                role="status"
              >
                {dict.form.sent}
              </p>
            ) : null}
            <p className="text-xs leading-relaxed text-label-tertiary dark:text-zinc-500">
              {dict.form.note}
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
