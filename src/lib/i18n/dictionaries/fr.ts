import type { Dictionary } from "@/types/dictionary";

const dictionary: Dictionary = {
  meta: {
    siteName: "Pixologie",
    title: "Pixologie — Agence de marketing digital",
    description:
      "Pixologie aide les marques ambitieuses à croître grâce à une stratégie orientée performance, des campagnes créatives et des résultats mesurables.",
    ogTitle: "Pixologie — Agence de marketing digital",
    ogDescription:
      "Stratégie, création et performance dans un seul partenaire. Construisez une demande qui convertit.",
  },
  nav: {
    brand: "Pixologie",
    menu: "Menu",
    links: {
      services: "Services",
      whyUs: "Pourquoi nous",
      portfolio: "Réalisations",
      team: "Équipe",
      contact: "Contact",
    },
    cta: "Lancer un projet",
    langEn: "EN",
    langFr: "FR",
    languageGroup: "Langue",
    themeSwitchToLight: "Passer en mode clair",
    themeSwitchToDark: "Passer en mode sombre",
    themeControl: "Mode couleur",
    skipToContent: "Aller au contenu",
  },
  hero: {
    badge: "Agence digitale — Web & Marketing",
    titleStart: "Une demande qui devient ",
    titleAccent: "inévitable.",
    subtitle:
      "Nous concevons des sites web performants et des stratégies marketing orientées croissance — en combinant storytelling, acquisition et design de conversion pour créer un système cohérent où chaque interaction génère de la valeur.",
    primaryCta: "Débloquer votre croissance",
    secondaryCta: "Voir des références",
    stats: [
      { value: "10+", label: "Projets livrés" },
      { value: "Web + Ads", label: "Services intégrés" },
      { value: "Exécution rapide", label: "Approche orientée livraison" },
    ]
  },
  trust: {
    sectionLabel: "Ils nous font confiance",
    title: "Des équipes qui comptent sur Pixologie",
    subtitle: "Des marques qui nous font confiance pour grandir."
  },
  services: {
    sectionLabel: "Services",
    title: "Tout pour grandir, sans le bruit d’agence.",
    subtitle:
      "Équipes modulaires, profils seniors et une ligne de responsabilité unique du brief au reporting.",
      items: [
        {
          title: "Création de sites web",
          description:
            "Sites modernes, rapides et pensés pour convertir vos visiteurs en clients.",
          tags: ["Design", "Développement", "UX"],
        },
        {
          title: "Marketing digital",
          description:
            "Stratégies d’acquisition via publicités et canaux digitaux pour générer de la croissance.",
          tags: ["Ads", "Social", "Search"],
        },
        {
          title: "Branding & identité",
          description:
            "Création d’univers de marque cohérents pour renforcer votre image et votre impact.",
          tags: ["Logo", "Design", "Direction artistique"],
        },
        {
          title: "Optimisation & performance",
          description:
            "Amélioration continue des performances web et marketing pour maximiser les résultats.",
          tags: ["CRO", "Analytics", "Optimisation"],
        },
      ]
  },
  whyUs: {
    sectionLabel: "Pourquoi Pixologie",
    title: "Une équipe growth intégrée à votre business.",
    subtitle:
      "Nous travaillons comme une extension de votre équipe : rapide, alignée sur vos objectifs et focalisée sur la performance.",
  
    points: [
      {
        title: "Pilotage senior",
        body: "Vos projets sont gérés par des experts seniors, impliqués du début à la fin.",
      },
      {
        title: "Marketing & création unifiés",
        body: "Stratégie, contenu et acquisition fonctionnent ensemble pour améliorer les performances.",
      },
      {
        title: "Transparence totale",
        body: "Suivi clair, reporting simple et décisions basées sur des données réelles.",
      },
    ],
  },
  portfolio: {
    sectionLabel: "Portfolio",
    title: "Projets récents",
    subtitle:
      "Une sélection de projets web et marketing réalisés pour des entreprises dans différents secteurs.",
  
    projects: [
      {
        name: "Riva Trip",
        category: "Agence de voyage",
        description:
          "Refonte de l’interface utilisateur et optimisation des opérations backend pour améliorer l’expérience et la performance globale.",
        result: "Interface modernisée + processus optimisés",
        url: "https://rivatrip.com/",
      },
      {
        name: "Floral Fashion",
        category: "E-commerce mode",
        description:
          "Création d’un site e-commerce complet pour une marque tunisienne avec expérience d’achat optimisée et design moderne.",
        result: "Boutique en ligne prête à vendre",
        url: "https://floralfashion.tn/",
      },
      {
        name: "France Métal Fermeture",
        category: "Site vitrine industriel",
        description:
          "Refonte complète du site web pour une entreprise spécialisée dans la fabrication et réparation de rideaux métalliques.",
        result: "Site moderne + image de marque améliorée",
        url: "https://www.rideaux-francemetal.fr/",
      },
    ],

    viewLabel: "Voir le projet",
    livePreview: "Site en ligne",
  },
  team: {
    sectionLabel: "Équipe",
    title: "Rencontrez l’équipe",
    subtitle:
      "Développement, design et stratégie créative—réunis pour livrer des produits et des campagnes qui performent.",
    members: [
      {
        name: "Moncer",
        role: "Ingénieur logiciel",
        description:
          "Conçoit des produits web performants et fiables—architecture, optimisation et code propre du prototype à la mise en ligne.",
        imageSrc: "/team/moncer.png",
      },
      {
        name: "Med",
        role: "Designer UX/UI & graphique",
        description:
          "Donne forme aux interfaces et à l’identité visuelle—parcours utilisateurs, design system et rendu soigné pour le web et les campagnes.",
        imageSrc: "/team/med.png",
      },
      {
        name: "Nada",
        role: "Photographe",
        description:
          "Raconte la marque et les produits en images—studio, lifestyle et contenus photo pour le digital et le print.",
        imageSrc: "/team/nada.PNG",
      },
    ],
  },
  contact: {
    sectionLabel: "Contact",
    title: "Parlez-nous de ce que vous construisez.",
    subtitle:
      "Quelques lignes sur vos objectifs—nous répondons avec la suite et un calendrier réaliste.",
    contactEmail: "contact@pixologie.agency",
    emailIntro: "Vous préférez l’e-mail ? Écrivez-nous à",
    form: {
      name: "Nom",
      email: "E-mail professionnel",
      company: "Entreprise",
      message: "Détails du projet",
      submit: "Envoyer",
      note: "Votre message est envoyé de façon sécurisée à notre équipe. Vous pouvez aussi nous écrire directement à l’adresse ci-dessus.",
      sending: "Envoi en cours…",
      sent: "Merci—nous avons bien reçu votre message et vous répondrons bientôt.",
      sendError: "Une erreur s’est produite. Réessayez ou écrivez-nous directement.",
      configError:
        "L’envoi d’e-mails n’est pas encore configuré. Ajoutez RESEND_API_KEY sur le serveur (variables Vercel).",
    },
  },
  footer: {
    brand: "Pixologie",
    tagline: "Pixologie — croissance précise pour les marques modernes.",
    rights: "Tous droits réservés.",
    address: "IMM GLOULOU 4000, Sousse ville, Sousse",
    email: "contact@pixologie.agency",
    phone: "+216 52 956 813",
    phoneTel: "+21652956813",
  },
};

export default dictionary;
