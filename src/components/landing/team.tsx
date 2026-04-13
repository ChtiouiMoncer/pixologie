"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { TeamDict } from "@/types/dictionary";
import { SectionHeading } from "./section-heading";
import { fadeUp, stagger } from "@/lib/motion";

type Props = {
  dict: TeamDict;
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Team({ dict }: Props) {
  return (
    <section
      id="team"
      className="scroll-mt-24 border-t border-hairline py-20 sm:py-28 dark:border-white/[0.06]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={dict.sectionLabel}
          title={dict.title}
          subtitle={dict.subtitle}
        />

        <motion.ul
          className="mt-14 grid gap-5 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {dict.members.map((member) => (
            <motion.li
              key={member.name}
              variants={fadeUp}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)] dark:border-white/[0.07] dark:bg-zinc-900/35 dark:shadow-none"
            >
              <div className="relative aspect-[4/5] w-full bg-control dark:bg-white/[0.04]">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
              </div>
              <div className="flex flex-col p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-label dark:text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-apple-blue dark:text-indigo-200/90">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-label-secondary dark:text-zinc-400">
                  {member.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
