import type { Dictionary } from "@/types/dictionary";

const dictionary: Dictionary = {
  meta: {
    siteName: "Pixologie",
    title: "Pixologie — Digital Marketing Agency",
    description:
      "Pixologie helps ambitious brands grow with performance-led strategy, creative campaigns, and measurable results.",
    ogTitle: "Pixologie — Digital Marketing Agency",
    ogDescription:
      "Strategy, creative, and performance in one partner. Build demand that converts.",
  },
  nav: {
    brand: "Pixologie",
    menu: "Menu",
    links: {
      services: "Services",
      whyUs: "Why us",
      portfolio: "Work",
      team: "Team",
      contact: "Contact",
    },
    cta: "Start a project",
    langEn: "EN",
    langFr: "FR",
    languageGroup: "Language",
    themeSwitchToLight: "Switch to light mode",
    themeSwitchToDark: "Switch to dark mode",
    themeControl: "Color mode",
    skipToContent: "Skip to content",
  },
  hero: {
    badge: "Digital Agency — Web & Marketing",
    titleStart: "Demand that becomes ",
    titleAccent: "inevitable.",
    subtitle:
      "We build high-performance websites and growth-driven marketing strategies by combining storytelling, acquisition, and conversion design into one unified system where every interaction creates value.",
    primaryCta: "Unlock your growth",
    secondaryCta: "View selected work",
    stats: [
      { value: "10+", label: "Projects delivered" },
      { value: "Web + Ads", label: "Integrated services" },
      { value: "Fast execution", label: "Delivery mindset" },
    ]
  },
  trust: {
    sectionLabel: "Trusted by",
    title: "Teams who trust Pixologie",
   subtitle: "Brands that trust us to grow"
  },
  services: {
    sectionLabel: "Services",
    title: "Everything you need to grow, without the agency noise.",
    subtitle:
      "Modular teams, senior operators, and a single thread of accountability from brief to reporting.",
      items: [
        {
          title: "Web development",
          description: "Modern websites built for performance and conversion.",
          tags: ["Web", "UX", "Development"],
        },
        {
          title: "Digital marketing",
          description: "Ads and strategies to grow your audience and sales.",
          tags: ["Ads", "Growth", "Traffic"],
        },
        {
          title: "Brand identity",
          description: "Clear and consistent branding across all channels.",
          tags: ["Branding", "Design"],
        },
        {
          title: "Performance optimization",
          description: "Data-driven improvements to maximize results.",
          tags: ["CRO", "Analytics"],
        },
      ]
  },
  whyUs: {
    sectionLabel: "Why Pixologie",
    title: "A growth team fully integrated into your business.",
    subtitle:
      "We act as an extension of your team—fast, aligned with your goals, and focused on performance.",
  
    points: [
      {
        title: "Senior-led execution",
        body: "Your projects are handled end-to-end by experienced senior specialists.",
      },
      {
        title: "Unified marketing & creative",
        body: "Strategy, content, and acquisition work together to drive performance.",
      },
      {
        title: "Full transparency",
        body: "Clear reporting, simple insights, and decisions driven by real data.",
      },
    ],
  },
  portfolio: {
    sectionLabel: "Portfolio",
    title: "Recent work",
    subtitle:
      "A selection of web and digital projects delivered for companies across different industries.",
  
    projects: [
      {
        name: "Riva Trip",
        category: "Travel agency",
        description:
          "UI redesign and backend operations optimization to improve user experience and overall performance.",
        result: "Modernized interface + optimized operations",
        url: "https://rivatrip.com/",
      },
      {
        name: "Floral Fashion",
        category: "E-commerce fashion",
        description:
          "Full e-commerce website built for a Tunisian fashion brand with a modern shopping experience.",
        result: "Ready-to-sell online store",
        url: "https://floralfashion.tn/",
      },
      {
        name: "France Métal Fermeture",
        category: "Industrial website",
        description:
          "Complete website redesign for a company specialized in metal shutter manufacturing and repair services.",
        result: "Modern website + improved brand image",
        url: "https://www.rideaux-francemetal.fr/",
      },
    ],

    viewLabel: "View project",
    livePreview: "Live site",
  },
  team: {
    sectionLabel: "Team",
    title: "Meet the team",
    subtitle:
      "Engineering, design, and creative strategy—working together to ship products and campaigns that perform.",
    members: [
      {
        name: "Moncer",
        role: "Software Engineer",
        description:
          "Builds fast, reliable web products—architecture, performance, and clean code from prototype to production.",
        imageSrc: "/team/moncer.png",
      },
      {
        name: "Med",
        role: "UX/UI & Graphic Designer",
        description:
          "Shapes interfaces and brand systems—user flows, visual identity, and polished design for web and campaigns.",
        imageSrc: "/team/med.png",
      },
      {
        name: "Nada",
        role: "Photographer",
        description:
          "Captures brand and product stories through photography—studio, lifestyle, and content for digital and print.",
        imageSrc: "/team/nada.PNG",
      },
    ],
  },
  contact: {
    sectionLabel: "Contact",
    title: "Tell us what you are building.",
    subtitle:
      "Share a few lines about your goals—we will reply with next steps and a realistic timeline.",
    contactEmail: "contact@pixologie.agency",
    emailIntro: "Prefer email? Reach us at",
    form: {
      name: "Name",
      email: "Work email",
      company: "Company",
      message: "Project details",
      submit: "Send message",
      note: "Messages are sent securely to our team. You can also write to us directly at the address above.",
      sending: "Sending…",
      sent: "Thanks—we received your message and will reply soon.",
      sendError: "Something went wrong. Please try again or email us directly.",
      configError:
        "Email delivery is not configured yet. Add RESEND_API_KEY on the server (see Vercel env).",
    },
  },
  footer: {
    brand: "Pixologie",
    tagline: "Pixologie — precision growth for modern brands.",
    rights: "All rights reserved.",
    address: "IMM GLOULOU 4000, Sousse ville, Sousse",
    email: "contact@pixologie.agency",
    phone: "+216 52 956 813",
    phoneTel: "+21652956813",
  },
};

export default dictionary;
