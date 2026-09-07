import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "ar" | "en";

export const translations = {
  fr: {
    dir: "ltr",
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      products: "Produits",
      contact: "Contact",
      cta: "Demander un devis",
    },
    hero: {
      tagline: "Built by Engineers. Powered by Vision.",
      subtitle:
        "eByte Software conçoit des applications sur mesure — mobiles, web et desktop — pensées et développées selon la vision et les besoins réels de chaque client. Nous transformons vos idées en solutions digitales fiables et performantes.",
      ctaProducts: "Découvrir nos produits",
      ctaContact: "Nous contacter",
      stats: [
        { value: "10+", label: "clients au Maroc" },
        { value: "4", label: "produits phares" },
        { value: "100%", label: "sur mesure" },
      ],
    },
    about: {
      title: "Notre Vision",
      body: "eByte Software est née d'une vision claire : créer des logiciels qui s'adaptent aux entreprises, et non l'inverse. Chaque application est personnalisée selon le workflow réel, le marché et le stade de croissance du client. Nous couvrons toute la chaîne : Mobile, Web et Desktop, avec des solutions pensées pour les entreprises marocaines et de la région MENA.",
      cards: [
        {
          title: "Sur mesure, jamais générique",
          text: "Chaque application est conçue autour des besoins exacts du client.",
        },
        {
          title: "Expertise full-stack",
          text: "Mobile, Web et Desktop, livrés de bout en bout.",
        },
        {
          title: "Ancrage local",
          text: "Pensé pour les entreprises marocaines, en français et en arabe.",
        },
      ],
    },
    services: {
      title: "Ce que nous créons",
      learn: "En savoir plus",
      items: [
        {
          title: "Applications mobiles",
          text: "Applications natives et cross-platform adaptées à votre activité et à vos clients.",
        },
        {
          title: "Applications web",
          text: "Plateformes et portails web modernes et évolutifs, construits autour de votre workflow.",
        },
        {
          title: "Logiciels desktop",
          text: "Solutions desktop robustes et hors ligne pour les entreprises qui veulent le contrôle total.",
        },
      ],
    },
    products: {
      title: "Nos Produits",
      intro:
        "Des bibliothèques au commerce de détail, nos produits sont déjà utilisés par des clients partout au Maroc.",
      flagship: "Produit phare",
      badgeNew: "Nouveau",
      reserve: "Réservez maintenant",
      items: [
        {
          name: "POS eByte",
          text: "Un logiciel de point de vente complet et hors ligne pour les entreprises marocaines — ventes, stock, facturation et opérations quotidiennes au même endroit, sans internet.",
          stat: "Utilisé par plus de 10 entreprises au Maroc",
        },
        {
          name: "OAPAM — Gestion de bibliothèque",
          text: "Un système dédié aux bibliothèques : catalogage, emprunts, gestion des membres et rapports, réunis sur une seule plateforme.",
        },
        {
          name: "CGS — Gestion de centres",
          text: "Une plateforme conçue pour digitaliser et fluidifier les opérations quotidiennes des centres de services, adaptable au workflow de chacun.",
        },
        {
          name: "Smart Menu NFC",
          text: "La nouvelle génération de menus de restaurant au Maroc — menus numériques sans contact, instantanés et interactifs via NFC. Aucune application à télécharger : il suffit d'approcher son téléphone.",
        },
      ],
    },
    trust: {
      title: "Pourquoi eByte",
      items: [
        "Développement sur mesure, sans templates",
        "Livré sur Mobile, Web et Desktop",
        "Conçu au Maroc, pour les entreprises marocaines",
        "Français et arabe natifs dans chaque produit",
      ],
    },
    contact: {
      title: "Construisons ensemble",
      subtitle: "Parlez-nous de votre projet, nous revenons vers vous rapidement.",
      name: "Nom",
      email: "Email",
      phone: "Téléphone (optionnel)",
      message: "Message",
      submit: "Envoyer le message",
      infoTitle: "Coordonnées",
      location: "Fès, Maroc",
      toast: "Merci ! Votre messagerie va s'ouvrir pour envoyer le message.",
    },
    footer: {
      tagline: "Built by Engineers. Powered by Vision.",
      quick: "Liens rapides",
      productsTitle: "Produits",
      contactTitle: "Contact",
      rights: "© 2026 eByte Software. Tous droits réservés.",
    },
  },
  en: {
    dir: "ltr",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      products: "Products",
      contact: "Contact",
      cta: "Get a Quote",
    },
    hero: {
      tagline: "Built by Engineers. Powered by Vision.",
      subtitle:
        "eByte Software builds custom applications — mobile, web and desktop — designed and developed around each client's real vision and needs. We turn your ideas into reliable, high-performance digital solutions.",
      ctaProducts: "Discover our products",
      ctaContact: "Contact us",
      stats: [
        { value: "10+", label: "clients across Morocco" },
        { value: "4", label: "flagship products" },
        { value: "100%", label: "custom-built" },
      ],
    },
    about: {
      title: "Our Vision",
      body: "eByte Software was founded with a clear vision — to build software that adapts to businesses, not the other way around. Every application we ship is customized to the client's real workflow, market, and growth stage. We work across the full stack: Mobile, Web, and Desktop, delivering solutions tailored to Moroccan and MENA businesses.",
      cards: [
        {
          title: "Custom-built, not off-the-shelf",
          text: "Every app is designed around the client's exact requirements.",
        },
        {
          title: "Full-stack expertise",
          text: "Mobile, Web & Desktop, delivered end-to-end.",
        },
        {
          title: "Local market focus",
          text: "Built for Moroccan businesses, in French & Arabic, with local workflows in mind.",
        },
      ],
    },
    services: {
      title: "What We Build",
      learn: "Learn more",
      items: [
        {
          title: "Mobile Apps",
          text: "Native and cross-platform mobile applications tailored to your business and your customers.",
        },
        {
          title: "Web Applications",
          text: "Modern, scalable web platforms and portals built around your workflow.",
        },
        {
          title: "Desktop Software",
          text: "Robust offline-capable desktop solutions for businesses that need full control and reliability.",
        },
      ],
    },
    products: {
      title: "Our Products",
      intro: "From libraries to retail, our products are already trusted by clients across Morocco.",
      flagship: "Flagship",
      badgeNew: "New",
      reserve: "Reserve Now",
      items: [
        {
          name: "POS eByte",
          text: "A complete offline point-of-sale software for Moroccan businesses — manage sales, stock, invoicing, and daily operations from one place, no internet required.",
          stat: "Trusted by 10+ businesses across Morocco",
        },
        {
          name: "OAPAM — Library Management System",
          text: "A dedicated management system built for libraries — cataloging, borrowing, member management, and reporting, streamlined into one platform.",
        },
        {
          name: "CGS — Centers Management System",
          text: "A dedicated management platform built to digitize and streamline day-to-day operations for service centers, adaptable to each center's specific workflow.",
        },
        {
          name: "Smart Menu NFC",
          text: "The next generation of restaurant menus for Morocco — contactless, instant, and interactive digital menus via NFC. No app to download, just tap and order.",
        },
      ],
    },
    trust: {
      title: "Why eByte",
      items: [
        "Custom development, no templates",
        "Delivered across Mobile, Web & Desktop",
        "Built in Morocco, for Moroccan businesses",
        "French & Arabic native support in every product",
      ],
    },
    contact: {
      title: "Let's Build Something Together",
      subtitle: "Tell us about your project and we'll get back to you shortly.",
      name: "Name",
      email: "Email",
      phone: "Phone (optional)",
      message: "Message",
      submit: "Send message",
      infoTitle: "Contact details",
      location: "Fès, Morocco",
      toast: "Thanks! Your email app will open to send the message.",
    },
    footer: {
      tagline: "Built by Engineers. Powered by Vision.",
      quick: "Quick links",
      productsTitle: "Products",
      contactTitle: "Contact",
      rights: "© 2026 eByte Software. All rights reserved.",
    },
  },
  ar: {
    dir: "rtl",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      products: "المنتجات",
      contact: "اتصل بنا",
      cta: "اطلب عرض سعر",
    },
    hero: {
      tagline: "صُنع بأيدي مهندسين. مدفوع برؤية.",
      subtitle:
        "تصمم eByte Software تطبيقات مخصصة — للهاتف والويب وسطح المكتب — تُبنى وفق رؤية كل عميل واحتياجاته الحقيقية. نحوّل أفكارك إلى حلول رقمية موثوقة وعالية الأداء.",
      ctaProducts: "اكتشف منتجاتنا",
      ctaContact: "تواصل معنا",
      stats: [
        { value: "+10", label: "عميل في المغرب" },
        { value: "4", label: "منتجات رئيسية" },
        { value: "100%", label: "تطوير مخصص" },
      ],
    },
    about: {
      title: "رؤيتنا",
      body: "تأسست eByte Software برؤية واضحة: بناء برمجيات تتكيف مع الشركات، لا العكس. كل تطبيق نطوّره مصمم وفق سير العمل الفعلي للعميل وسوقه ومرحلة نموه. نعمل على كامل المنظومة: الهاتف، الويب، وسطح المكتب، بحلول مصممة للشركات المغربية وشركات منطقة الشرق الأوسط وشمال إفريقيا.",
      cards: [
        {
          title: "تطوير مخصص لا جاهز",
          text: "كل تطبيق يُصمم حول متطلبات العميل بالضبط.",
        },
        {
          title: "خبرة شاملة",
          text: "الهاتف والويب وسطح المكتب، من البداية إلى التسليم.",
        },
        {
          title: "تركيز على السوق المحلي",
          text: "مبني للشركات المغربية، بالفرنسية والعربية، وفق سير العمل المحلي.",
        },
      ],
    },
    services: {
      title: "ما نصنعه",
      learn: "اعرف المزيد",
      items: [
        {
          title: "تطبيقات الهاتف",
          text: "تطبيقات أصلية ومتعددة المنصات مصممة لنشاطك ولعملائك.",
        },
        {
          title: "تطبيقات الويب",
          text: "منصات وبوابات ويب حديثة وقابلة للتوسع، مبنية حول سير عملك.",
        },
        {
          title: "برمجيات سطح المكتب",
          text: "حلول قوية تعمل دون إنترنت للشركات التي تحتاج تحكماً كاملاً وموثوقية.",
        },
      ],
    },
    products: {
      title: "منتجاتنا",
      intro: "من المكتبات إلى التجارة، منتجاتنا موثوقة لدى عملاء في مختلف أنحاء المغرب.",
      flagship: "المنتج الرئيسي",
      badgeNew: "جديد",
      reserve: "احجز الآن",
      items: [
        {
          name: "POS eByte",
          text: "برنامج نقاط بيع متكامل يعمل دون إنترنت للشركات المغربية — إدارة المبيعات والمخزون والفوترة والعمليات اليومية من مكان واحد.",
          stat: "يستخدمه أكثر من 10 شركات في المغرب",
        },
        {
          name: "OAPAM — نظام إدارة المكتبات",
          text: "نظام مخصص للمكتبات: الفهرسة والإعارة وإدارة الأعضاء والتقارير في منصة واحدة.",
        },
        {
          name: "CGS — نظام إدارة المراكز",
          text: "منصة إدارة مصممة لرقمنة وتبسيط العمليات اليومية لمراكز الخدمات، قابلة للتكيف مع سير عمل كل مركز.",
        },
        {
          name: "Smart Menu NFC",
          text: "الجيل الجديد من قوائم المطاعم في المغرب — قوائم رقمية تفاعلية وفورية دون تلامس عبر NFC. لا حاجة لتحميل أي تطبيق.",
        },
      ],
    },
    trust: {
      title: "لماذا eByte",
      items: [
        "تطوير مخصص بدون قوالب جاهزة",
        "تسليم على الهاتف والويب وسطح المكتب",
        "صُنع في المغرب، للشركات المغربية",
        "دعم أصلي للفرنسية والعربية في كل منتج",
      ],
    },
    contact: {
      title: "لنبني شيئاً معاً",
      subtitle: "أخبرنا عن مشروعك وسنعود إليك في أقرب وقت.",
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "الهاتف (اختياري)",
      message: "الرسالة",
      submit: "إرسال الرسالة",
      infoTitle: "معلومات التواصل",
      location: "فاس، المغرب",
      toast: "شكراً! سيفتح تطبيق البريد لإرسال رسالتك.",
    },
    footer: {
      tagline: "صُنع بأيدي مهندسين. مدفوع برؤية.",
      quick: "روابط سريعة",
      productsTitle: "المنتجات",
      contactTitle: "التواصل",
      rights: "© 2026 eByte Software. جميع الحقوق محفوظة.",
    },
  },
} as const;

export type Dict = (typeof translations)["fr"];

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict; rtl: boolean };

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = localStorage.getItem("ebyte-lang") as Lang | null;
    if (stored && stored in translations) setLangState(stored);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("ebyte-lang", l);
  }, []);

  const rtl = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.documentElement.classList.toggle("font-arabic-root", rtl);
  }, [lang, rtl]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] as unknown as Dict, rtl }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
