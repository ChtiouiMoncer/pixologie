"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/lib/i18n/config";
import type { Locale } from "@/types/dictionary";

type Props = {
  locale: Locale;
  labelEn: string;
  labelFr: string;
  groupLabel: string;
};

export function LanguageSwitcher({
  locale,
  labelEn,
  labelFr,
  groupLabel,
}: Props) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(en|fr)/, "") || "";

  return (
    <div
      className="flex items-center rounded-full border border-border bg-control p-0.5 text-xs font-medium dark:border-white/10 dark:bg-white/[0.04]"
      role="group"
      aria-label={groupLabel}
    >
      {locales.map((code) => {
        const active = code === locale;
        const label = code === "en" ? labelEn : labelFr;
        return (
          <Link
            key={code}
            href={`/${code}${rest}`}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              active
                ? "bg-surface text-label shadow-sm dark:bg-white/10 dark:text-white dark:shadow-inner dark:shadow-black/20"
                : "text-label-tertiary hover:text-label dark:hover:text-zinc-200"
            }`}
            hrefLang={code}
            aria-current={active ? "true" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
