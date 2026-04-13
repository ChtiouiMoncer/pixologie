export type Locale = "en" | "fr";

export type NavDict = {
  brand: string;
  menu: string;
  links: {
    services: string;
    whyUs: string;
    portfolio: string;
    team: string;
    contact: string;
  };
  cta: string;
  langEn: string;
  langFr: string;
  languageGroup: string;
  themeSwitchToLight: string;
  themeSwitchToDark: string;
  themeControl: string;
  skipToContent: string;
};

export type HeroDict = {
  badge: string;
  titleStart: string;
  titleAccent: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  stats: { value: string; label: string }[];
};

export type TrustDict = {
  sectionLabel: string;
  title: string;
  subtitle: string;
};

export type ServicesDict = {
  sectionLabel: string;
  title: string;
  subtitle: string;
  items: {
    title: string;
    description: string;
    tags: string[];
  }[];
};

export type WhyUsDict = {
  sectionLabel: string;
  title: string;
  subtitle: string;
  points: { title: string; body: string }[];
};

export type PortfolioDict = {
  sectionLabel: string;
  title: string;
  subtitle: string;
  projects: {
    name: string;
    category: string;
    description: string;
    result: string;
    url?: string;
  }[];
  viewLabel: string;
  livePreview: string;
};

export type TeamDict = {
  sectionLabel: string;
  title: string;
  subtitle: string;
  members: {
    name: string;
    role: string;
    description: string;
    imageSrc: string;
  }[];
};

export type ContactDict = {
  sectionLabel: string;
  title: string;
  subtitle: string;
  contactEmail: string;
  emailIntro: string;
  form: {
    name: string;
    email: string;
    company: string;
    message: string;
    submit: string;
    note: string;
    sending: string;
    sent: string;
    sendError: string;
    configError: string;
  };
};

export type FooterDict = {
  brand: string;
  tagline: string;
  rights: string;
  address: string;
  email: string;
  phone: string;
  phoneTel: string;
};

export type Dictionary = {
  meta: {
    siteName: string;
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: NavDict;
  hero: HeroDict;
  trust: TrustDict;
  services: ServicesDict;
  whyUs: WhyUsDict;
  portfolio: PortfolioDict;
  team: TeamDict;
  contact: ContactDict;
  footer: FooterDict;
};
