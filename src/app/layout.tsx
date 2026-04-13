import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies, headers } from "next/headers";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import type { Locale } from "@/types/dictionary";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pixologie",
    template: "%s · Pixologie",
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localeHeader = (await headers()).get("x-locale");
  const lang: Locale =
    localeHeader && isLocale(localeHeader) ? localeHeader : defaultLocale;

  const themeCookie = (await cookies()).get("pixologie-theme")?.value;
  const themeClass = themeCookie === "dark" ? "dark" : "light";

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} ${themeClass} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full font-sans antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
