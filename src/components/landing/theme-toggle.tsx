"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

type Props = {
  switchToLight: string;
  switchToDark: string;
  controlLabel: string;
};

function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

const toggleBtn =
  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-control text-label-secondary transition hover:border-border hover:bg-control-hover hover:text-label disabled:pointer-events-none dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:border-white/20 dark:hover:bg-white/[0.08]";

export function ThemeToggle({
  switchToLight,
  switchToDark,
  controlLabel,
}: Props) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const onClick = useCallback(() => {
    setTheme(isDark ? "light" : "dark");
  }, [isDark, setTheme]);

  return (
    <button
      type="button"
      disabled={!mounted}
      onClick={mounted ? onClick : undefined}
      className={toggleBtn}
      aria-label={mounted ? (isDark ? switchToLight : switchToDark) : controlLabel}
      aria-busy={!mounted}
    >
      <span className="flex h-[18px] w-[18px] items-center justify-center">
        {!mounted ? null : isDark ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
