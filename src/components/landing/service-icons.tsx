import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WebDevIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <rect x="3" y="4" width="18" height="14" rx="2.5" {...stroke} />
      <path d="M3 8h18" {...stroke} />
      <circle cx="6" cy="6" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="8.5" cy="6" r="0.75" fill="currentColor" stroke="none" />
      <path d="M8 13l2.5 2.5L16 10" {...stroke} />
    </svg>
  );
}

export function MarketingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        d="M4 10v4a1 1 0 0 0 1 1h2l5 4V6L7 10H5a1 1 0 0 0-1 1z"
        {...stroke}
      />
      <path d="M16 8.5a4.5 4.5 0 0 1 0 7" {...stroke} />
      <path d="M18.5 6a7.5 7.5 0 0 1 0 12" {...stroke} />
    </svg>
  );
}

export function BrandIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path d="M12 3l2.2 6.8H21l-5.6 4.1 2.2 6.8L12 16.6 6.4 20.7l2.2-6.8L3 9.8h6.8L12 3z" {...stroke} />
      <circle cx="12" cy="12" r="2" {...stroke} />
    </svg>
  );
}

export function PerformanceIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path d="M4 19V5" {...stroke} />
      <path d="M4 19h16" {...stroke} />
      <rect x="7" y="12" width="3" height="7" rx="0.75" {...stroke} />
      <rect x="12" y="9" width="3" height="10" rx="0.75" {...stroke} />
      <rect x="17" y="6" width="3" height="13" rx="0.75" {...stroke} />
    </svg>
  );
}

export type ServiceIconId = "web" | "marketing" | "brand" | "performance";

export const serviceIcons: Record<
  ServiceIconId,
  ComponentType<IconProps>
> = {
  web: WebDevIcon,
  marketing: MarketingIcon,
  brand: BrandIcon,
  performance: PerformanceIcon,
};
