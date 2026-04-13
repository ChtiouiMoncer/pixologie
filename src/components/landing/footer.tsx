import type { FooterDict } from "@/types/dictionary";

type Props = {
  dict: FooterDict;
};

export function Footer({ dict }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-surface py-12 dark:border-white/[0.06] dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-border-subtle bg-surface-muted/45 p-6 shadow-[var(--shadow-card)] dark:border-white/[0.07] dark:bg-white/[0.02] dark:shadow-none sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <p className="text-base font-semibold text-label sm:text-lg dark:text-white">
              {dict.brand}
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-label-secondary dark:text-zinc-400">
              {dict.tagline}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-label-secondary dark:text-zinc-300">
              {dict.address}
            </p>
          </div>

          <div className="grid gap-3 sm:max-w-sm lg:ml-auto lg:w-full">
            <a
              href={`mailto:${dict.email}`}
              className="group flex items-center justify-between rounded-2xl border border-border bg-surface px-4 py-3 text-sm transition hover:border-apple-blue/50 hover:bg-apple-blue-muted/50 dark:border-white/12 dark:bg-white/[0.03] dark:hover:border-indigo-300/40 dark:hover:bg-white/[0.07]"
            >
              <span className="text-label-secondary dark:text-zinc-400">Email</span>
              <span className="font-medium text-apple-blue underline-offset-2 group-hover:underline dark:text-indigo-300">
                {dict.email}
              </span>
            </a>
            <a
              href={`tel:${dict.phoneTel}`}
              className="group flex items-center justify-between rounded-2xl border border-border bg-surface px-4 py-3 text-sm transition hover:border-apple-blue/50 hover:bg-apple-blue-muted/50 dark:border-white/12 dark:bg-white/[0.03] dark:hover:border-indigo-300/40 dark:hover:bg-white/[0.07]"
            >
              <span className="text-label-secondary dark:text-zinc-400">Phone</span>
              <span className="font-medium text-label group-hover:text-apple-blue dark:text-zinc-200 dark:group-hover:text-indigo-300">
                {dict.phone}
              </span>
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-label-tertiary dark:text-zinc-600">
          © {year} {dict.brand}. {dict.rights}
        </p>
      </div>
    </footer>
  );
}
