"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const THEME_COOKIE = "pixologie-theme";

function ThemeCookieSync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme !== "light" && resolvedTheme !== "dark") return;
    document.cookie = `${THEME_COOKIE}=${resolvedTheme};path=/;max-age=31536000;SameSite=Lax`;
  }, [resolvedTheme]);

  return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      themes={["light", "dark"]}
      enableSystem={false}
      enableColorScheme={false}
      storageKey={THEME_COOKIE}
      disableTransitionOnChange
      {...props}
    >
      <ThemeCookieSync />
      {children}
    </NextThemesProvider>
  );
}
