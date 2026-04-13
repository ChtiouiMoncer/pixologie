"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale, NavDict } from "@/types/dictionary";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

type Props = {
  dict: NavDict;
  locale: Locale;
};

export function Navbar({ dict, locale }: Props) {
  const [open, setOpen] = useState(false);
  const base = `/${locale}`;

  const items = [
    { href: `${base}#services`, label: dict.links.services },
    { href: `${base}#why-us`, label: dict.links.whyUs },
    { href: `${base}#portfolio`, label: dict.links.portfolio },
    { href: `${base}#team`, label: dict.links.team },
    { href: `${base}#contact`, label: dict.links.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface-glass shadow-[var(--shadow-nav)] backdrop-blur-2xl backdrop-saturate-150 dark:border-white/[0.06] dark:bg-zinc-950/75 dark:shadow-none">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-cta focus:px-3 focus:py-2 focus:text-sm focus:text-cta-fg dark:focus:bg-white dark:focus:text-zinc-900"
      >
        {dict.skipToContent}
      </a>
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          href={base}
          className="text-base font-semibold tracking-tight text-label sm:text-lg"
        >
          {dict.brand}
        </Link>

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          <ul className="flex items-center gap-6 text-sm text-label-secondary">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-label"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher
            locale={locale}
            labelEn={dict.langEn}
            labelFr={dict.langFr}
            groupLabel={dict.languageGroup}
          />
          <ThemeToggle
            switchToLight={dict.themeSwitchToLight}
            switchToDark={dict.themeSwitchToDark}
            controlLabel={dict.themeControl}
          />
          <Link
            href={`${base}#contact`}
            className="rounded-full bg-cta px-4 py-2 text-sm font-medium text-cta-fg transition hover:bg-cta-hover"
          >
            {dict.cta}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher
            locale={locale}
            labelEn={dict.langEn}
            labelFr={dict.langFr}
            groupLabel={dict.languageGroup}
          />
          <ThemeToggle
            switchToLight={dict.themeSwitchToLight}
            switchToDark={dict.themeSwitchToDark}
            controlLabel={dict.themeControl}
          />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-control text-label transition hover:bg-control-hover dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.08]"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{dict.menu}</span>
            <span className="flex flex-col gap-1">
              <span
                className={`block h-0.5 w-4 bg-label transition dark:bg-white ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-label transition dark:bg-white ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-label transition dark:bg-white ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-border bg-surface/95 backdrop-blur-xl md:hidden dark:border-white/[0.06] dark:bg-zinc-950/95"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-sm text-label-secondary transition hover:bg-control hover:text-label dark:text-zinc-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`${base}#contact`}
                  className="mt-2 block rounded-full bg-cta px-3 py-2.5 text-center text-sm font-medium text-cta-fg hover:bg-cta-hover"
                  onClick={() => setOpen(false)}
                >
                  {dict.cta}
                </Link>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
