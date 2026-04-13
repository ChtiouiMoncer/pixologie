"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { TrustDict } from "@/types/dictionary";
import { partners } from "@/lib/partners";
import { fadeUp, stagger } from "@/lib/motion";

type Props = {
  dict: TrustDict;
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function PartnerMark({
  name,
  logoSrc,
}: {
  name: string;
  logoSrc?: string;
}) {
  if (logoSrc) {
    return (
      <div className="flex h-28 w-[260px] shrink-0 items-center justify-center px-2 sm:h-32 sm:w-[300px] lg:h-36 lg:w-[340px]">
        <Image
          src={logoSrc}
          alt={name}
          width={340}
          height={120}
          unoptimized
          className="max-h-20 w-auto max-w-[240px] object-contain opacity-80 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0 sm:max-h-24 sm:max-w-[280px] lg:max-h-28 lg:max-w-[320px] dark:opacity-95 dark:grayscale-0 dark:brightness-0 dark:invert dark:hover:opacity-100"
        />
      </div>
    );
  }

  return (
    <div
      className="flex h-28 w-[260px] shrink-0 items-center justify-center rounded-2xl border border-border-subtle bg-control px-3 text-base font-semibold tracking-wide text-label-secondary sm:h-32 sm:w-[300px] lg:h-36 lg:w-[340px] dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-zinc-400"
      role="img"
      aria-label={name}
    >
      {initials(name)}
    </div>
  );
}

export function TrustCarousel({ dict }: Props) {
  const track = [...partners, ...partners];

  return (
    <section
      id="trust"
      className="scroll-mt-24 border-t border-hairline py-14 dark:border-white/[0.06] sm:py-16"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-apple-blue dark:text-indigo-300/90"
          >
            {dict.sectionLabel}
          </motion.p>
          <motion.h2
            id="trust-heading"
            variants={fadeUp}
            className="mt-3 text-balance text-2xl font-semibold tracking-tight text-label sm:text-3xl"
          >
            {dict.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-pretty text-sm leading-relaxed text-label-secondary sm:text-base"
          >
            {dict.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          <div className="partner-marquee flex gap-14 sm:gap-20 lg:gap-24">
            {track.map((partner, index) => (
              <PartnerMark
                key={`${partner.id}-${index}`}
                name={partner.name}
                logoSrc={partner.logoSrc}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
