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
      partners: "Partenaires",
      features: "Avantages",
      contact: "Contact",
      who: "Qui sommes-nous",
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
      ourTeam: "Notre équipe",
    },
    team: {
      title: "Notre équipe",
      subtitle: "L'équipe derrière eByte Software",
      roles: {
        coFounder: "Co-Fondateur",
        sales: "Ventes",
      },
      members: [
        { name: "Hamza Kherazi", role: "coFounder", phone: "+212 773-313707" },
        { name: "Mohammed Bourass", role: "coFounder", phone: "06 19 34 4478" },
        { name: "OTHMANE EL MARZOUQY", role: "sales", phone: "+212 684-651514" },
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
    mobileApps: {
      back: "Retour aux services",
      hero: {
        title: "Applications Mobiles",
        subtitle:
          "Chez eByte Software, le développement mobile n'est pas un accessoire — c'est l'un de nos points forts. Que vous ayez besoin d'une application grand public, d'un outil interne pour votre équipe, ou d'une plateforme complète connectant des milliers d'utilisateurs, nous concevons et développons des applications mobiles rapides, fiables et conçues pour durer.",
      },
      sections: [
        {
          title: "Native & Cross-Platform, choisi stratégiquement",
          text: "Nous n'obligeons pas chaque projet dans le même moule. Selon vos objectifs, budget et calendrier, nous développons avec la technologie la plus adaptée — qu'il s'agisse d'une solution cross-platform comme Flutter pour une livraison rapide sur iOS et Android avec une base de code unique et soignée, ou d'un développement natif quand la performance et l'intégration profonde de la plateforme comptent. Vous obtenez une application qui semble naturelle sur chaque appareil, sans compromis inutiles.",
        },
        {
          title: "Construite avec une vraie architecture, pas juste une UI",
          text: "Une bonne application n'est pas juste une jolie interface — c'est un système qui tient face à une utilisation réelle. Nos applications mobiles sont construites sur des architectures propres et évolutives (MVVM, gestion d'état Cubit/BLoC, injection de dépendances) connectées à des backends sécurisés et bien structurés. Votre application reste maintenable à mesure qu'elle grandit, gère les erreurs avec élégance, et peut évoluer avec de nouvelles fonctionnalités sans casser ce qui fonctionne déjà.",
        },
        {
          title: "Conçue autour de vos utilisateurs",
          text: "Chaque entreprise est différente, et ses clients aussi. Nous concevons des interfaces qui correspondent à la façon dont vos utilisateurs pensent et agissent — navigation fluide, parcours intuitifs et identité visuelle qui reflète votre marque. Des applications e-commerce et marketplace à la réservation de services, au suivi de livraison et aux outils métier internes, nous adaptons chaque écran à de vrais cas d'usage, pas à des modèles génériques.",
        },
        {
          title: "Sécurisée et connectée",
          text: "Les applications modernes doivent communiquer avec le monde en toute sécurité. Nous implémentons une authentification sécurisée (JWT, sessions basées sur des tokens), un stockage local chiffré pour les données sensibles, des fonctionnalités en temps réel comme les notifications et les mises à jour live, et des intégrations API robustes — pour que votre application ne soit pas seulement belle, mais fonctionne de manière fiable dans le monde réel, en ligne ou avec une connectivité limitée.",
        },
        {
          title: "De l'idée à l'App Store",
          text: "Nous vous accompagnons tout au long du voyage : comprendre vos besoins métier, concevoir l'expérience utilisateur, développer l'application, la tester rigoureusement, et la préparer pour la publication sur l'App Store et Google Play. Notre objectif n'est pas seulement de livrer une application fonctionnelle — c'est de livrer un produit que vos utilisateurs seront vraiment heureux d'utiliser.",
        },
      ],
      bullets: [
        "Solutions sur mesure, pas des modèles prêts à l'emploi",
        "Architecture propre construite pour la scalabilité à long terme",
        "Interface multilingue et locale (prête français/arabe)",
        "Fonctionnalités en temps réel et intégration backend sécurisée",
        "Support complet, du concept au lancement",
      ],
      cta: "Vous avez une idée pour une application mobile ? Transformons-la en quelque chose que vos clients adoreront utiliser tous les jours.",
    },
    webApps: {
      back: "Retour aux services",
      hero: {
        title: "Applications Web",
        subtitle:
          "Chez eByte Software, le développement web ne signifie pas seulement créer un site web — cela signifie construire le socle numérique de votre entreprise. De la landing page qui amène les clients, au système interne qui fait tourner vos opérations quotidiennes, nous concevons et développons des plateformes web rapides, évolutives et construites autour de la façon dont votre entreprise fonctionne réellement.",
      },
      sections: [
        {
          title: "Des Landing Pages aux Plateformes Complètes",
          text: "Nous couvrons tout le spectre des besoins web. Besoin d'une landing page propre et performante pour présenter votre entreprise et vos produits ? Nous la construisons avec un design moderne et de vraies performances. Besoin de quelque chose de plus grand — un système de gestion, une plateforme B2B ou B2C, un ERP complet pour piloter vos opérations ? Nous le construisons aussi, avec la même attention à l'architecture, la sécurité et la scalabilité à long terme.",
        },
        {
          title: "SaaS, Multi-Tenant & Plateformes Métier",
          text: "Nous concevons et développons des plateformes SaaS dès le départ — des architectures multi-tenant où chaque client ou entreprise obtient son espace sécurisé, la gestion des abonnements et des comptes, des tableaux de bord administrateur, et tout ce qui est nécessaire pour faire tourner un logiciel comme un vrai produit commercial. Que vous lanciez un nouveau produit SaaS ou ayez besoin d'un portail B2B connectant votre entreprise avec des partenaires et clients, nous structurons le système pour qu'il grandisse avec votre croissance.",
        },
        {
          title: "Systèmes de Gestion & ERPs Construits Autour de Votre Workflow",
          text: "Aucune entreprise ne fonctionne de la même manière — nous n'obligeons donc pas la vôtre dans un template rigide et générique. Nous construisons des systèmes de gestion sur mesure et des plateformes de style ERP adaptés à vos vrais processus : gestion des stocks et inventaires, suivi des clients et fournisseurs, modules de paiement et facturation, gestion du personnel et des rôles, tableaux de bord de reporting, et tout workflow spécifique dont dépend votre entreprise.",
        },
        {
          title: "Architecture Solide Derrière Chaque Plateforme",
          text: "Chaque application web que nous construisons repose sur une architecture propre et stratifiée — backends structurés (ASP.NET Core, Laravel), bases de données bien organisées, authentification sécurisée et contrôle d'accès basé sur des rôles, et frontends modernes et réactifs (React, TypeScript) qui fonctionnent parfaitement sur desktop et mobile. Il ne s'agit pas seulement de bien paraître au lancement — c'est un système qui reste maintenable, sécurisé et facile à étendre à mesure que votre entreprise grandit.",
        },
        {
          title: "Conçu pour Scalé, Déployé pour Durer",
          text: "Nous gérons le parcours technique complet : développement, tests et déploiement en production — y compris l'infrastructure Docker, l'hébergement sécurisé, le SSL et le monitoring — pour que votre plateforme ne soit pas seulement bien construite, mais fonctionne de manière fiable dès le premier jour et continue de fonctionner à mesure que votre trafic et vos données grandissent.",
        },
      ],
      bullets: [
        "Des landing pages simples aux ERPs complexes — une équipe pour toute la gamme",
        "Expertise en architectures SaaS et multi-tenant",
        "Construit sur mesure autour de votre vrai workflow, pas un template générique",
        "Accès sécurisé et basé sur des rôles pour les cas B2B et B2C",
        "Infrastructure évolutive et déploiement fiable",
        "Design multilingue et local (prête français/arabe)",
      ],
      cta: "Quel que soit le stade de votre entreprise — une landing page pour commencer, ou une plateforme complète pour piloter vos opérations — nous construisons l'application web qui correspond à là où vous êtes et là où vous allez.",
    },
    desktopApps: {
      back: "Retour aux services",
      hero: {
        title: "Logiciels Desktop",
        subtitle:
          "Toutes les entreprises ne tournent pas dans le cloud — et toutes ne devraient pas avoir à le faire. Chez eByte Software, nous développons des applications desktop pour les entreprises qui ont besoin de rapidité, de fiabilité et d'un contrôle total sur leurs systèmes, que ce soit pour travailler complètement hors ligne, rester connecté en ligne, ou un hybride des deux.",
      },
      sections: [
        {
          title: "Hors ligne en priorité, quand ça compte",
          text: "Pour de nombreuses entreprises — boutiques de vente, agences de location, centres de services locaux — une connexion internet stable n'est pas garantie, et dépendre entièrement du cloud peut signifier des ventes perdues ou des opérations bloquées dès que la connexion tombe. Nous développons des logiciels desktop qui tournent entièrement hors ligne, stockant vos données localement et en sécurité sur votre propre machine, pour que votre entreprise continue de tourner quoi qu'il arrive.",
        },
        {
          title: "En ligne et connecté, quand vous en avez besoin",
          text: "D'autres entreprises ont besoin que leur logiciel desktop communique avec un serveur central, synchronise les données entre succursales, ou se connecte à des services et API en ligne. Nous faisons aussi cela — des applications desktop qui restent connectées en temps réel, synchronisent de manière sécurisée avec des serveurs cloud ou sur site, et vous donnent le même contrôle qu'un système hors ligne avec la puissance supplémentaire de données centralisées.",
        },
        {
          title: "Systèmes ERP et de Gestion Complets",
          text: "Au-delà des outils de point de vente et à usage unique, nous développons des systèmes desktop complets de style ERP : gestion des stocks et inventaires avec alertes automatiques, gestion des clients et fournisseurs, accès du personnel et basé sur des rôles, modules de paiement et facturation, reporting et analytics — le tout dans une application adaptée à la façon dont votre entreprise fonctionne réellement.",
        },
        {
          title: "Conçu pour un Vrai Usage Métier",
          text: "Chaque application desktop que nous développons est conçue autour de vrais besoins opérationnels, pas de modèles génériques : scan de codes-barres/QR, génération de factures et documents, sauvegardes automatisées avec chiffrement, gestion des licences et des accès, support multi-utilisateurs, et reporting détaillé. Nous connaissons la différence entre une démo et un système sur lequel une entreprise tourne chaque jour — et nous construisons pour ce dernier.",
        },
        {
          title: "Fondation Technique Solide",
          text: "Nos applications desktop sont construites avec une technologie éprouvée et fiable (WPF, C#, SQL Server/SQLite), suivant une architecture propre et stratifiée qui rend le système maintenable et facile à étendre à mesure que votre entreprise grandit. Cela signifie que de nouvelles fonctionnalités peuvent être ajoutées au fil du temps — nouveaux modules, nouveaux rapports, nouvelles intégrations — sans perturber le système dont votre équipe dépend déjà.",
        },
      ],
      bullets: [
        "Capacité hors ligne complète — aucune dépendance à la connexion internet",
        "Options en ligne/hybride quand les données centralisées comptent",
        "Développement complet de systèmes ERP et de gestion",
        "Données sécurisées et chiffrées avec solutions de sauvegarde automatisées",
        "Construit autour de votre vrai workflow, pas un modèle générique",
        "Maintenable à long terme et espace de croissance",
      ],
      cta: "Que votre entreprise doive tourner complètement hors ligne, rester connectée entre les sites, ou gérer des opérations complexes via un ERP complet, nous développons le logiciel desktop qui vous donne le contrôle total — de manière fiable, chaque jour.",
    },
    products: {
      title: "Nos Produits",
      intro:
        "Du point de vente à la gestion de flotte, nos produits sont déjà utilisés par des clients partout au Maroc.",
      flagship: "Produit phare",
      badgeNew: "Nouveau",
      badgeSoon: "Bientôt",
      reserve: "Réservez maintenant",
      download: "Télécharger",
      contact: "Contacter les ventes",
      order: "Passer commande",
      moreInfo: "En savoir plus",
      items: [
        {
          name: "POS eByte",
          text: "Un logiciel de point de vente complet et hors ligne pour les entreprises marocaines — ventes, stock, facturation et opérations quotidiennes au même endroit, sans internet.",
          stat: "Utilisé par plus de 10 entreprises au Maroc",
        },
        {
          name: "CGS — Gestion de centres",
          text: "Une plateforme conçue pour digitaliser et fluidifier les opérations quotidiennes des centres de services, adaptable au workflow de chacun.",
        },
        {
          name: "Smart Menu NFC",
          text: "La nouvelle génération de menus de restaurant au Maroc — menus numériques sans contact, instantanés et interactifs via NFC. Aucune application à télécharger : il suffit d'approcher son téléphone.",
        },
        {
          name: "eRent — Gestion de location de voitures",
          text: "Un système complet de gestion de location de véhicules — réservations, facturation, suivi de flotte et gestion des clients, tout en une seule plateforme.",
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
      techSupport: "Support technique",
      toast: "Merci ! Votre messagerie va s'ouvrir pour envoyer le message.",
    },
    footer: {
      tagline: "Built by Engineers. Powered by Vision.",
      quick: "Liens rapides",
      productsTitle: "Produits",
      contactTitle: "Contact",
      rights: "© 2026 eByte Software. Tous droits réservés.",
    },
    whoPage: {
      title: "Qui sommes-nous",
      subtitle: "L'équipe derrière eByte Software",
      back: "Retour à l'accueil",
      roles: {
        coFounder: "Co-Fondateur",
        sales: "Ventes",
      },
      team: [
        { name: "Hamza Kherazi", role: "coFounder", phone: "+212 773-313707" },
        { name: "Mohammed Bourass", role: "coFounder", phone: "06 19 34 4478" },
        { name: "OTHMANE EL MARZOUQY", role: "sales", phone: "+212 684-651514" },
      ],
    },
    partners: {
      title: "Applications pour nos Partenaires",
      intro:
        "Nous développons des applications sur mesure pour nos partenaires, en nous appuyant sur des technologies de pointe.",
      visitSite: "Visiter le site",
    },
    features: {
      title: "Pourquoi nous choisir",
      intro: "L'expertise rencontre l'excellence",
      items: [
        {
          title: "Experts métier",
          text: "Nous aidons les entreprises à surmonter les défis, optimiser leurs opérations et atteindre une croissance durable.",
        },
        {
          title: "Qualité & Sécurité",
          text: "Nous garantissons des solutions de haute qualité, sécurisées et faciles à utiliser.",
        },
        {
          title: "Innovation continue",
          text: "Nous innovons pour stimuler le progrès et améliorer les performances de votre entreprise.",
        },
        {
          title: "Partenariats stratégiques",
          text: "Nous construisons des partenariats qui favorisent la croissance mutuelle et créent de la valeur à long terme.",
        },
        {
          title: "Support dédié",
          text: "Nous accompagnons nos clients avec des solutions adaptées et une assistance continue.",
        },
        {
          title: "Excellence opérationnelle",
          text: "Nous délivrons des résultats mesurables grâce à une approche méthodique et rigoureuse.",
        },
      ],
    },
    techStack: {
      label: "Stack technique",
      title: "Ce que notre équipe utilise",
      intro:
        "Nous travaillons avec les technologies les plus fiables du marché pour livrer des solutions performantes et maintenables.",
    },
    posEbyte: {
      title: "POS eByte",
      subtitle: "Point de vente complet pour commerces marocains",
      intro:
        "Vous gérez un commerce et vous en avez assez de jongler entre un cahier de caisse, un carnet de stock et des notes éparpillées pour vos fournisseurs et vos clients ? POS eByte a été pensé pour vous simplifier la vie et vous faire gagner du temps au quotidien.",
      back: "Retour aux produits",
      downloadTitle: "Télécharger POS eByte",
      downloadDesc:
        "Installez POS eByte sur votre ordinateur et commencez à gérer votre commerce dès aujourd'hui.",
      downloadBtn: "Télécharger la dernière version",
      version: "Version 1.0.2 — Windows",
      sections: [
        {
          heading: "Vendez plus vite, plus simplement",
          text: "Avec POS eByte, chaque vente se fait en quelques clics. Vous scannez ou recherchez vos produits, vous encaissez, et une facture professionnelle est générée automatiquement — prête à imprimer ou à envoyer à votre client. Fini les erreurs de calcul et les tickets griffonnés à la main.",
          images: ["3 - POS.png", "10 - Gestion des ventes.png"],
        },
        {
          heading: "Ne tombez plus jamais en rupture de stock",
          text: "POS eByte surveille votre stock en permanence. Dès qu'un produit atteint le seuil critique, vous êtes alerté immédiatement. Vous savez toujours quoi commander, et quand — pour ne jamais perdre une vente à cause d'un article manquant.",
          images: [
            "4 - Gestion des produits.png",
            "5 - Ajouter produit.png",
            "13 - Gestion des entrees produits.png",
          ],
        },
        {
          heading: "Gardez le contrôle sur vos fournisseurs",
          text: "Toutes les informations sur vos fournisseurs sont centralisées : coordonnées, historique d'achats, produits fournis. Quand il est temps de réapprovisionner, vous avez toutes les informations sous la main, sans chercher dans vos anciens papiers.",
          images: ["8 - Gestion des fournisseurs.png", "9 - Ajouter fournisseur.png"],
        },
        {
          heading: "Fidélisez vos clients",
          text: "POS eByte garde une fiche complète pour chacun de vos clients : historique d'achats, soldes de crédit, coordonnées. Vous savez qui sont vos meilleurs clients et vous pouvez gérer les ventes à crédit facilement, une pratique courante dans le commerce marocain.",
          images: [
            "11 - Gestion des clients.png",
            "12 - Credits du client.png",
            "6 - Gestion des credits.png",
            "7 - Paiements des credits.png",
          ],
        },
        {
          heading: "Une solution 100% adaptée au marché marocain",
          text: "Interface en français, montants en Dirhams (MAD), et bientôt disponible en arabe — POS eByte est conçu pour les commerces marocains, par une équipe marocaine.",
          images: ["15 - Parametres1.png", "16 - Parametres2.png"],
        },
      ],
      galleryTitle: "Aperçu de l'interface",
      ctaTitle:
        "Avec POS eByte, vous ne gérez plus seulement une caisse — vous pilotez votre commerce.",
      ctaSubtitle:
        "Téléchargez la version d'essai et découvrez comment POS eByte peut transformer la gestion de votre commerce.",
    },
    cgs: {
      title: "CGS — Système de Gestion de Centres",
      subtitle: "Plateforme complète de gestion pour les auto-écoles marocaines",
      status: "En maintenance",
      statusText:
        "Ce produit est actuellement en cours de développement. Contactez nos ventes pour plus d'informations ou pour obtenir une version d'essai.",
      back: "Retour aux produits",
      contactSales: "Contacter les ventes",
      requestDemo: "Demander une démo",
      intro:
        "CGS est spécialement conçu pour les centres de conduite marocains (auto-écoles) qui doivent gérer tout, de l'inscription des élèves à l'规划 des moniteurs, en passant par les certificats médicaux et les paiements — le tout au même endroit, remplaçant les registres papier et les tableurs éparpillés dont beaucoup de centres se servent encore.",
      sections: [
        {
          heading: "Gestion des Élèves",
          text: "Chaque élève dispose d'un dossier numérique complet dès son inscription : informations personnelles, documents d'identité/CIN, catégorie de permis visée (B, A, C, etc.), date d'inscription et suivi de progression à travers les phases théorique (code) et pratique (conduite). Les centres peuvent suivre les leçons effectuées, les heures de conduite restantes, l'historique des passages d'examens et les résultats — offrant une vue claire du parcours de chaque élève sans fouiller dans des dossiers papier.",
        },
        {
          heading: "Gestion des Moniteurs & Médecins",
          text: "CGS gère deux catégories clés de personnel liées au processus d'obtention du permis :\n\nMoniteurs (enseignants de conduite) : leurs plannings, élèves assignés, véhicules, heures de travail et historique des leçons — aidant à planifier des journées efficaces sans double réservation.\n\nMédecins agréés : depuis que les demandes de permis de conduire marocains nécessitent un certificat d'aptitude médicale, CGS suit quel médecin a examiné quel élève, les dates de délivrance des certificats et leur validité — garantissant qu'aucun dossier ne soit incomplet au moment de la soumission aux autorités.",
        },
        {
          heading: "Gestion des Paiements",
          text: "Les frais d'auto-école au Maroc sont très souvent payés par tranches plutôt qu'en une seule fois. CGS gère cela nativement : suivi des frais totaux dus par élève, paiements reçus, soldes en attente et échéances. Le personnel peut voir d'un coup d'œil qui est à jour et qui doit de l'argent, réduisant la comptabilité manuelle et les discussions maladroites sur les paiements. Des reçus peuvent être générés pour chaque paiement.",
        },
        {
          heading: "Vue d'ensemble administrative",
          text: "Au-delà des dossiers individuels, CGS offre aux propriétaires et administrateurs une vue à 360° de l'activité : nombre d'élèves actifs, ceux proches de l'examen, expirations de certificats médicaux à venir, répartition de la charge des moniteurs et revenus globaux — transformant les opérations quotidiennes en quelque chose de mesurable et de gérable.",
        },
        {
          heading: "Conçu pour le contexte marocain",
          text: "Interface en français reflétant le fonctionnement réel des auto-écoles marocaines, avec des workflows construits autour des étapes concrètes d'obtention d'un permis de conduire marocain (code, conduite, examen, certificat médical) plutôt qu'un modèle international générique.",
        },
      ],
      ctaTitle: "CGS est en cours de développement. Soyez parmi les premiers à l'utiliser.",
      ctaSubtitle: "Contactez-nous pour en savoir plus ou demander une version d'essai.",
    },
    nfc: {
      title: "Smart Menu NFC",
      subtitle: "Le menu digital qui transforme chaque table en commande instantanée",
      status: "Bientôt disponible",
      promo: "50% de réduction pendant 1 an",
      promoDetail:
        "Profitez de -50% sur votre première année d'abonnement. Réservez votre place dès maintenant.",
      back: "Retour aux produits",
      joinWaitlist: "Rejoindre la liste d'attente",
      contactSales: "Contacter les ventes",
      intro:
        "Smart Menu NFC est une solution SaaS destinée aux restaurants, cafés et snacks qui veulent moderniser l'expérience client tout en simplifiant le travail en salle. Chaque établissement dispose de son propre compte, où il configure et met à jour son menu — plats, boissons, prix, photos, disponibilité — en temps réel, sans jamais avoir à réimprimer un seul menu papier.",
      howItWorks: "Comment ça marche",
      sections: [
        {
          heading: "Pour le client",
          text: "Sur chaque table, une puce NFC et un QR code sont installés. Le client n'a qu'à approcher son téléphone (ou scanner le code) pour être redirigé instantanément vers le menu digital de l'établissement — aucune application à télécharger, aucune inscription requise. Il parcourt le menu, sélectionne ses produits, et valide sa commande directement depuis son téléphone.",
          images: ["ScanEsly.jpeg", "ClientMenu.jpeg"],
        },
        {
          heading: "Pour le personnel",
          text: "Dès que la commande est validée, elle arrive instantanément chez le serveur ou en cuisine — plus besoin de se déplacer table par table pour prendre les commandes, plus d'erreurs de transcription, plus d'attente. Le service devient plus rapide, plus fluide, et le personnel peut se concentrer sur l'expérience client plutôt que sur la logistique.",
          images: ["Demand.jpeg"],
        },
      ],
      benefits: "Pourquoi c'est gagnant pour l'établissement",
      benefitsList: [
        "Gain de temps : commandes prises automatiquement, sans intermédiaire humain",
        "Réduction des erreurs : ce que le client sélectionne est exactement ce qui arrive en cuisine",
        "Menu toujours à jour : plus de rupture de stock affichée, plus de prix obsolètes — tout se modifie depuis l'espace admin en quelques secondes",
        "Image moderne : une expérience fluide et technologique qui distingue l'établissement de la concurrence",
        "Données précieuses : visibilité sur les produits les plus commandés, les heures de pointe, et les habitudes des clients",
      ],
      adminTitle: "Espace administrateur",
      adminText:
        "Gérez votre menu depuis une interface simple et intuitive. Ajoutez des plats, modifiez les prix, mettez à jour les disponibilités — tout se fait en quelques clics, sans compétence technique requise.",
      reviews: "Avis de nos futurs clients",
      reviewsList: [
        {
          name: "Restaurant Le Medina",
          text: "Concept génial ! Fini les menus papier qui s'abîment. Nos clients adorent la facilité d'utilisation.",
        },
        {
          name: "Café Rendez-Vous",
          text: "On attend plus que la sortie officielle. Ça va révolutionner notre service en salle.",
        },
        {
          name: "Snack Quick Bite",
          text: "Le fait de pouvoir modifier le menu en temps réel quand on est en rupture, c'est exactement ce qu'il nous faut.",
        },
      ],
      ctaTitle: "Smart Menu NFC arrive bientôt. Soyez parmi les premiers à l'adopter.",
      ctaSubtitle: "Réservez votre place et bénéficiez de 50% de réduction sur la première année.",
    },
    erent: {
      title: "eRent — Gestion de location de voitures",
      subtitle: "Le logiciel offline qui simplifie la gestion de votre agence de location",
      status: "Bientôt disponible",
      back: "Retour aux produits",
      contactSales: "Contacter les ventes",
      orderBtn: "Passer commande",
      intro:
        "eRent est un logiciel de bureau, conçu pour fonctionner sans connexion internet, destiné aux agences de location de voitures qui veulent gérer leur activité efficacement — sans dépendre d'une connexion instable ou d'un abonnement cloud coûteux. Installé directement sur votre ordinateur, eRent centralise tout ce dont une agence a besoin : véhicules, clients, contrats, et historique complet de chaque location.",
      sections: [
        {
          heading: "Gérez vos locations en quelques clics",
          text: "Créez un contrat de location rapidement : sélectionnez le véhicule, le client, la durée, ajoutez vos notes (état du véhicule, kilométrage, accessoires fournis, remarques particulières). Tout est enregistré et accessible à tout moment.",
          images: ["App.jpeg"],
        },
        {
          heading: "Ne perdez plus le fil d'un véhicule en circulation",
          text: 'eRent vous permet de suivre en temps réel quels véhicules sont actuellement loués, par qui, depuis quand, et quand ils doivent revenir. Fini les appels pour savoir "où est la voiture ?"',
          images: ["man work on system.jpeg"],
        },
        {
          heading: "Un historique complet à chaque retour",
          text: "Au moment où un client ramène une voiture, eRent affiche instantanément l'historique complet du véhicule : qui l'a loué la dernière fois, dans quel état il a été rendu, les remarques précédentes, le kilométrage parcouru — vous permettant de vérifier rapidement que tout est en ordre avant la prochaine location.",
          images: ["image 1.jpeg"],
        },
        {
          heading: "Évaluez et suivez vos clients",
          text: "Chaque client dispose de sa propre fiche avec son historique de location complet. eRent vous permet de noter vos clients (fiabilité, respect des délais, état de restitution du véhicule) — une information précieuse pour décider en toute confiance qui mérite votre confiance pour les prochaines locations, et repérer les clients à risque.",
          images: ["contact us.jpeg"],
        },
      ],
      features: "Et bien plus encore",
      featuresList: [
        {
          heading: "Gestion de la flotte",
          text: "Fiche complète par véhicule (marque, modèle, immatriculation, assurance, vidanges, entretiens, documents d'expiration avec alertes avant échéance)",
        },
        {
          heading: "Contrats imprimables",
          text: "Génération automatique de contrats de location professionnels, prêts à signer et à imprimer",
        },
        {
          heading: "Calendrier de disponibilité",
          text: "Visualisez en un coup d'œil quels véhicules sont libres, réservés, ou en location, pour planifier sans conflit",
        },
        {
          heading: "Gestion des paiements et cautions",
          text: "Suivi des paiements reçus, cautions retenues/restituées, et retard de paiement",
        },
        {
          heading: "Alertes automatiques",
          text: "Retour de véhicule en retard, document bientôt expiré, entretien à prévoir",
        },
        {
          heading: "Statistiques et rentabilité",
          text: "Quel véhicule rapporte le plus, taux d'occupation de la flotte, revenus par période",
        },
        {
          heading: "100% hors ligne",
          text: "Vos données restent sur votre ordinateur, aucune dépendance à une connexion internet, aucun abonnement mensuel imposé",
        },
        {
          heading: "Sauvegarde sécurisée",
          text: "Export/sauvegarde de vos données pour ne jamais rien perdre",
        },
      ],
      context: "Pensé pour les agences marocaines",
      contextText:
        "Interface en français, adaptée aux réalités du terrain — que vous gériez 5 voitures ou une flotte de plusieurs dizaines, eRent grandit avec votre agence.",
      ctaTitle: "eRent arrive bientôt. Soyez parmi les premiers à l'utiliser.",
      ctaSubtitle: "Contactez-nous pour en savoir plus ou passer commande.",
    },
  },
  en: {
    dir: "ltr",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      products: "Products",
      partners: "Partners",
      features: "Why Us",
      contact: "Contact",
      who: "Who We Are",
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
      ourTeam: "Our Team",
    },
    team: {
      title: "Our Team",
      subtitle: "The team behind eByte Software",
      roles: {
        coFounder: "Co-Founder",
        sales: "Sales",
      },
      members: [
        { name: "Hamza Kherazi", role: "coFounder", phone: "+212 773-313707" },
        { name: "Mohammed Bourass", role: "coFounder", phone: "06 19 34 4478" },
        { name: "OTHMANE EL MARZOUQY", role: "sales", phone: "+212 684-651514" },
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
    mobileApps: {
      back: "Back to services",
      hero: {
        title: "Mobile Apps",
        subtitle:
          "At eByte Software, mobile development isn't an afterthought — it's one of our core strengths. Whether you need a customer-facing app, an internal tool for your team, or a full-scale platform connecting thousands of users, we design and build mobile applications that are fast, reliable, and built to last.",
      },
      sections: [
        {
          title: "Native & Cross-Platform, Chosen Strategically",
          text: "We don't force every project into the same mold. Depending on your goals, budget, and timeline, we build with the technology that fits best — whether that's a cross-platform solution like Flutter for faster delivery across iOS and Android with a single, polished codebase, or native development when performance and deep platform integration matter most. You get an app that feels right at home on every device, without unnecessary trade-offs.",
        },
        {
          title: "Built with a Real Architecture, Not Just a UI",
          text: "A good app isn't just a nice interface — it's a system that holds up under real usage. Our mobile apps are built on clean, scalable architectures (MVVM, Cubit/BLoC state management, dependency injection) connected to secure, well-structured backends. This means your app stays maintainable as it grows, handles errors gracefully, and can evolve with new features without breaking what already works.",
        },
        {
          title: "Designed Around Your Users",
          text: "Every business is different, and so are its customers. We design interfaces that match how your users actually think and behave — smooth navigation, intuitive flows, and visual identity that reflects your brand. From e-commerce and marketplace apps to service booking, delivery tracking, and internal business tools, we tailor every screen to real use cases, not generic templates.",
        },
        {
          title: "Secure & Connected",
          text: "Modern apps need to talk to the world safely. We implement secure authentication (JWT, token-based sessions), encrypted local storage for sensitive data, real-time features like notifications and live updates, and robust API integrations — so your app doesn't just look good, it works reliably in the real world, online or with limited connectivity.",
        },
        {
          title: "From Idea to App Store",
          text: "We support you through the entire journey: understanding your business needs, designing the user experience, developing the application, testing it thoroughly, and preparing it for publishing on the App Store and Google Play. Our goal isn't just to deliver a working app — it's to deliver a product your users will actually enjoy using.",
        },
      ],
      bullets: [
        "Tailored solutions, not off-the-shelf templates",
        "Clean architecture built for long-term scalability",
        "Multilingual, locally-relevant UI (French/Arabic-ready)",
        "Real-time features and secure backend integration",
        "End-to-end support, from concept to launch",
      ],
      cta: "Have an idea for a mobile app? Let's turn it into something your customers will love using every day.",
    },
    webApps: {
      back: "Back to services",
      hero: {
        title: "Web Applications",
        subtitle:
          "At eByte Software, web development means more than building a website — it means building the digital backbone of your business. From the landing page that brings customers in, to the internal system that runs your daily operations, we design and develop web platforms that are fast, scalable, and built around how your business actually works.",
      },
      sections: [
        {
          title: "From Landing Pages to Full Platforms",
          text: "We work across the full spectrum of web needs. Need a clean, high-converting landing page to showcase your business and products? We build it with modern design and real performance in mind. Need something bigger — a management system, a B2B or B2C platform, a full ERP to run your operations? We build that too, with the same attention to architecture, security, and long-term scalability.",
        },
        {
          title: "SaaS, Multi-Tenant & Business Platforms",
          text: "We design and build SaaS platforms from the ground up — multi-tenant architectures where each client or business gets their own secure space, subscription and account management, admin dashboards, and everything needed to run a software product as a real business. Whether you're launching a new SaaS product or need a B2B portal connecting your company with partners and clients, we structure the system to scale with your growth, not against it.",
        },
        {
          title: "Management Systems & ERPs Built Around Your Workflow",
          text: "No two businesses run the same way — so we don't force yours into a rigid, generic template. We build custom management systems and ERP-style platforms tailored to your real processes: inventory and stock management, client and provider tracking, payment and invoicing modules, staff and role management, reporting dashboards, and whatever specific workflow your business depends on.",
        },
        {
          title: "Solid Architecture Behind Every Platform",
          text: "Every web application we build rests on a clean, layered architecture — structured backends (ASP.NET Core, Laravel), well-organized databases, secure authentication and role-based access control, and modern, responsive frontends (React, TypeScript) that work smoothly across desktop and mobile browsers. This isn't just about looking good on launch day — it's about a system that stays maintainable, secure, and easy to extend as your business grows.",
        },
        {
          title: "Built to Scale, Deployed to Last",
          text: "We handle the full technical journey: development, testing, and production deployment — including Docker-based infrastructure, secure hosting, SSL, and monitoring — so your platform isn't just built well, it runs reliably from day one and keeps running as your traffic and data grow.",
        },
      ],
      bullets: [
        "From simple landing pages to complex ERPs — one team for the full range",
        "SaaS and multi-tenant architecture expertise",
        "Custom-built around your real workflow, not a generic template",
        "Secure, role-based access for B2B and B2C use cases",
        "Scalable infrastructure and reliable deployment",
        "Multilingual, locally-relevant design (French/Arabic-ready)",
      ],
      cta: "Whatever stage your business is at — a landing page to start, or a full platform to run your operations — we build the web application that fits where you are and where you're going.",
    },
    desktopApps: {
      back: "Back to services",
      hero: {
        title: "Desktop Software",
        subtitle:
          "Not every business runs on the cloud — and not every business should have to. At eByte Software, we build desktop applications for companies that need speed, reliability, and full control over their systems, whether that means working completely offline, staying connected online, or a hybrid of both.",
      },
      sections: [
        {
          title: "Offline-First, When It Matters",
          text: "For many businesses — retail shops, rental agencies, local service centers — a stable internet connection isn't guaranteed, and depending entirely on the cloud can mean lost sales or blocked operations the moment the connection drops. We build desktop software that runs fully offline, storing your data locally and securely on your own machine, so your business keeps running no matter what.",
        },
        {
          title: "Online & Connected, When You Need It",
          text: "Other businesses need their desktop software talking to a central server, syncing data across branches, or connecting to online services and APIs. We build that too — desktop applications that stay connected in real time, sync securely with cloud or on-premise servers, and give you the same control as an offline system with the added power of centralized data across multiple locations or users.",
        },
        {
          title: "Full ERP & Management Systems",
          text: "Beyond point-of-sale and single-purpose tools, we build complete ERP-style desktop systems: inventory and stock management with automatic alerts, client and provider management, staff and role-based access, payment and invoicing modules, reporting and analytics — all packaged into one application tailored to how your business actually operates.",
        },
        {
          title: "Built for Real Business Use",
          text: "Every desktop application we build is designed around real operational needs, not generic templates: barcode/QR scanning, invoice and document generation, automated backups with encryption, license and access management, multi-user support, and detailed reporting. We know the difference between a demo and a system a business runs on every single day — and we build for the latter.",
        },
        {
          title: "Solid Technical Foundation",
          text: "Our desktop applications are built with proven, reliable technology (WPF, C#, SQL Server/SQLite), following a clean layered architecture that keeps the system maintainable and easy to extend as your business grows. This means new features can be added over time — new modules, new reports, new integrations — without disrupting the system your team already depends on.",
        },
      ],
      bullets: [
        "Full offline capability — no dependency on internet connectivity",
        "Online/hybrid options when centralized data matters",
        "Complete ERP and management system development",
        "Secure, encrypted data with automated backup solutions",
        "Built around your real workflow, not a generic template",
        "Long-term maintainability and room to grow",
      ],
      cta: "Whether your business needs to run completely offline, stay connected across locations, or manage complex operations through a full ERP, we build the desktop software that gives you full control — reliably, every single day.",
    },
    products: {
      title: "Our Products",
      intro:
        "From point of sale to fleet management, our products are already trusted by clients across Morocco.",
      flagship: "Flagship",
      badgeNew: "New",
      badgeSoon: "Coming Soon",
      reserve: "Reserve Now",
      download: "Download",
      contact: "Contact Sales",
      order: "Place Order",
      moreInfo: "More Info",
      items: [
        {
          name: "POS eByte",
          text: "A complete offline point-of-sale software for Moroccan businesses — manage sales, stock, invoicing, and daily operations from one place, no internet required.",
          stat: "Trusted by 10+ businesses across Morocco",
        },
        {
          name: "CGS — Centers Management System",
          text: "A dedicated management platform built to digitize and streamline day-to-day operations for service centers, adaptable to each center's specific workflow.",
        },
        {
          name: "Smart Menu NFC",
          text: "The next generation of restaurant menus for Morocco — contactless, instant, and interactive digital menus via NFC. No app to download, just tap and order.",
        },
        {
          name: "eRent — Car Rental System",
          text: "A complete car rental management system — reservations, invoicing, fleet tracking, and customer management, all in one platform.",
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
      techSupport: "Tech support",
      toast: "Thanks! Your email app will open to send the message.",
    },
    footer: {
      tagline: "Built by Engineers. Powered by Vision.",
      quick: "Quick links",
      productsTitle: "Products",
      contactTitle: "Contact",
      rights: "© 2026 eByte Software. All rights reserved.",
    },
    whoPage: {
      title: "Who We Are",
      subtitle: "The team behind eByte Software",
      back: "Back to home",
      roles: {
        coFounder: "Co-Founder",
        sales: "Sales",
      },
      team: [
        { name: "Hamza Kherazi", role: "coFounder", phone: "+212 773-313707" },
        { name: "Mohammed Bourass", role: "coFounder", phone: "06 19 34 4478" },
        { name: "OTHMANE EL MARZOUQY", role: "sales", phone: "+212 684-651514" },
      ],
    },
    partners: {
      title: "Apps Built for Our Partners",
      intro:
        "We develop custom applications for our partners, leveraging cutting-edge technologies.",
      visitSite: "Visit Site",
    },
    features: {
      title: "Why Choose Us",
      intro: "Where Expertise Meets Excellence",
      items: [
        {
          title: "Business Experts",
          text: "We help organizations overcome challenges, optimize operations, and achieve lasting growth.",
        },
        {
          title: "Quality & Security",
          text: "We deliver solutions that meet the highest standards of quality, security, and usability.",
        },
        {
          title: "Continuous Innovation",
          text: "We innovate to drive progress and elevate your business performance.",
        },
        {
          title: "Strategic Partnerships",
          text: "We build partnerships that drive mutual growth and deliver long-term value.",
        },
        {
          title: "Dedicated Support",
          text: "We support our clients with tailored solutions and continuous assistance.",
        },
        {
          title: "Operational Excellence",
          text: "We deliver measurable results through a methodical and rigorous approach.",
        },
      ],
    },
    techStack: {
      label: "Tech Stack",
      title: "What Our Team Uses",
      intro:
        "We work with the most reliable technologies on the market to deliver high-performance, maintainable solutions.",
    },
    posEbyte: {
      title: "POS eByte",
      subtitle: "Complete point-of-sale for Moroccan businesses",
      intro:
        "Do you run a business and are tired of juggling between a cashbook, a stock notebook, and scattered notes for your suppliers and customers? POS eByte was designed to simplify your life and save you time every day.",
      back: "Back to products",
      downloadTitle: "Download POS eByte",
      downloadDesc: "Install POS eByte on your computer and start managing your business today.",
      downloadBtn: "Download latest version",
      version: "Version 1.0.2 — Windows",
      sections: [
        {
          heading: "Sell faster, more simply",
          text: "With POS eByte, every sale takes just a few clicks. You scan or search for your products, check out, and a professional invoice is generated automatically — ready to print or send to your customer. No more calculation errors and handwritten receipts.",
          images: ["3 - POS.png", "10 - Gestion des ventes.png"],
        },
        {
          heading: "Never run out of stock again",
          text: "POS eByte monitors your stock at all times. As soon as a product reaches the critical threshold, you are alerted immediately. You always know what to order, and when — to never lose a sale because of a missing item.",
          images: [
            "4 - Gestion des produits.png",
            "5 - Ajouter produit.png",
            "13 - Gestion des entrees produits.png",
          ],
        },
        {
          heading: "Keep control over your suppliers",
          text: "All supplier information is centralized: contact details, purchase history, products supplied. When it's time to restock, you have all the information at hand, without searching through old papers.",
          images: ["8 - Gestion des fournisseurs.png", "9 - Ajouter fournisseur.png"],
        },
        {
          heading: "Keep your customers loyal",
          text: "POS eByte maintains a complete profile for each of your customers: purchase history, credit balances, contact details. You know who your best customers are and you can manage credit sales easily — a common practice in Moroccan commerce.",
          images: [
            "11 - Gestion des clients.png",
            "12 - Credits du client.png",
            "6 - Gestion des credits.png",
            "7 - Paiements des credits.png",
          ],
        },
        {
          heading: "A solution 100% adapted to the Moroccan market",
          text: "French interface, amounts in Dirhams (MAD), and soon available in Arabic — POS eByte is designed for Moroccan businesses, by a Moroccan team.",
          images: ["15 - Parametres1.png", "16 - Parametres2.png"],
        },
      ],
      galleryTitle: "Interface Preview",
      ctaTitle:
        "With POS eByte, you're not just managing a register — you're running your business.",
      ctaSubtitle:
        "Download the trial version and discover how POS eByte can transform your business management.",
    },
    cgs: {
      title: "CGS — Centers Management System",
      subtitle: "Complete management platform for Moroccan driving schools",
      status: "Under Maintenance",
      statusText:
        "This product is currently under development. Contact our sales team for more information or to request a trial version.",
      back: "Back to products",
      contactSales: "Contact Sales",
      requestDemo: "Request a Demo",
      intro:
        "CGS is built specifically for Moroccan driving centers (auto-écoles) that need to manage everything from student enrollment to instructor scheduling, medical certifications, and payments — all in one place, replacing the paper registers and scattered spreadsheets many centers still rely on.",
      sections: [
        {
          heading: "Student Management",
          text: "Every student gets a complete digital file from the moment they enroll: personal information, ID/CIN documents, category of license being pursued (B, A, C, etc.), enrollment date, and progress tracking through both the theory (code) and practical (conduite) phases. Centers can track which lessons a student has completed, how many hours of driving practice remain, exam attempt history, and pass/fail results — giving staff a clear view of every student's journey without digging through paper folders.",
        },
        {
          heading: "Instructor & Doctor Management",
          text: "CGS manages two key categories of personnel tied to the licensing process:\n\nMoniteurs (driving instructors): their schedules, assigned students, vehicle assignments, working hours, and lesson history — helping centers plan efficient daily schedules and avoid double-booking.\n\nApproved Doctors: since Moroccan driving license applications require a medical fitness certificate, CGS tracks which doctor examined which student, certificate issue dates, and validity — ensuring no student's file is incomplete when it's time to submit to the authorities.",
        },
        {
          heading: "Payment Management",
          text: "Driving school fees in Morocco are very often paid in installments rather than a single lump sum. CGS handles this natively: tracking total fees owed per student, payments received, outstanding balances, and payment due dates. Staff can see at a glance who's up to date and who owes money, reducing the manual bookkeeping and awkward conversations. Receipts can be generated for each payment for transparency and record-keeping.",
        },
        {
          heading: "Administrative Oversight",
          text: "Beyond individual student and instructor records, CGS gives center owners and administrators a bird's-eye view of the business: how many active students, how many are close to exam-ready, upcoming medical certificate expirations, instructor workload distribution, and overall revenue from payments — turning day-to-day center operations into something measurable and manageable rather than reactive.",
        },
        {
          heading: "Built for the Moroccan Context",
          text: "French-language interface reflecting how Moroccan driving centers actually operate, with workflows built around the real steps of getting a Moroccan driving license (code, conduite, exam, medical certificate) rather than a generic international template.",
        },
      ],
      ctaTitle: "CGS is currently under development. Be among the first to use it.",
      ctaSubtitle: "Contact us to learn more or request a trial version.",
    },
    nfc: {
      title: "Smart Menu NFC",
      subtitle: "The digital menu that turns every table into an instant order",
      status: "Coming Soon",
      promo: "50% off for 1 year",
      promoDetail: "Enjoy 50% off your first year of subscription. Reserve your spot now.",
      back: "Back to products",
      joinWaitlist: "Join the Waitlist",
      contactSales: "Contact Sales",
      intro:
        "Smart Menu NFC is a SaaS solution for restaurants, cafés, and snack bars looking to modernize the customer experience while simplifying floor service. Each establishment gets its own account to configure and update its menu — dishes, drinks, prices, photos, availability — in real time, without ever having to reprint a single paper menu.",
      howItWorks: "How it works",
      sections: [
        {
          heading: "For the customer",
          text: "On each table, an NFC chip and a QR code are installed. The customer simply brings their phone close (or scans the code) to be instantly redirected to the establishment's digital menu — no app to download, no sign-up required. They browse the menu, select their items, and confirm their order directly from their phone.",
          images: ["ScanEsly.jpeg", "ClientMenu.jpeg"],
        },
        {
          heading: "For the staff",
          text: "As soon as the order is confirmed, it arrives instantly at the server or kitchen — no more walking table to table to take orders, no more transcription errors, no more waiting. Service becomes faster, smoother, and staff can focus on the customer experience rather than logistics.",
          images: ["Demand.jpeg"],
        },
      ],
      benefits: "Why it wins for the establishment",
      benefitsList: [
        "Time savings: orders taken automatically, no human intermediary",
        "Error reduction: what the customer selects is exactly what arrives in the kitchen",
        "Always up-to-date menu: no more out-of-stock items displayed, no more obsolete prices — everything is modified from the admin panel in seconds",
        "Modern image: a smooth, tech-forward experience that sets the establishment apart from competitors",
        "Valuable data: visibility into most-ordered products, peak hours, and customer habits",
      ],
      adminTitle: "Admin Dashboard",
      adminText:
        "Manage your menu from a simple and intuitive interface. Add dishes, modify prices, update availability — all done in a few clicks, no technical skills required.",
      reviews: "What our future customers say",
      reviewsList: [
        {
          name: "Restaurant Le Medina",
          text: "Brilliant concept! No more paper menus that get worn out. Our customers love how easy it is to use.",
        },
        {
          name: "Café Rendez-Vous",
          text: "We can't wait for the official release. It's going to revolutionize our table service.",
        },
        {
          name: "Snack Quick Bite",
          text: "Being able to update the menu in real time when we're out of stock — that's exactly what we need.",
        },
      ],
      ctaTitle: "Smart Menu NFC is coming soon. Be among the first to adopt it.",
      ctaSubtitle: "Reserve your spot and get 50% off your first year.",
    },
    erent: {
      title: "eRent — Car Rental System",
      subtitle: "The offline software that simplifies managing your car rental agency",
      status: "Coming Soon",
      back: "Back to products",
      contactSales: "Contact Sales",
      orderBtn: "Place Order",
      intro:
        "eRent is desktop software designed to work without an internet connection, built for car rental agencies that want to manage their business efficiently — without relying on unstable connections or expensive cloud subscriptions. Installed directly on your computer, eRent centralizes everything an agency needs: vehicles, clients, contracts, and a complete history of every rental.",
      sections: [
        {
          heading: "Manage your rentals in a few clicks",
          text: "Create a rental contract quickly: select the vehicle, the client, the duration, add your notes (vehicle condition, mileage, accessories provided, special remarks). Everything is recorded and accessible at any time.",
          images: ["App.jpeg"],
        },
        {
          heading: "Never lose track of a vehicle in circulation",
          text: 'eRent lets you track in real time which vehicles are currently rented, by whom, since when, and when they\'re due back. No more calls asking "where is the car?"',
          images: ["man work on system.jpeg"],
        },
        {
          heading: "A complete history at every return",
          text: "When a client returns a car, eRent instantly displays the vehicle's complete history: who rented it last, in what condition it was returned, previous remarks, mileage driven — allowing you to quickly verify everything is in order before the next rental.",
          images: ["image 1.jpeg"],
        },
        {
          heading: "Rate and track your clients",
          text: "Each client has their own profile with a complete rental history. eRent lets you rate your clients (reliability, timeliness, vehicle return condition) — valuable information to confidently decide who deserves your trust for future rentals, and spot high-risk clients.",
          images: ["contact us.jpeg"],
        },
      ],
      features: "And much more",
      featuresList: [
        {
          heading: "Fleet management",
          text: "Complete profile per vehicle (make, model, registration, insurance, oil changes, maintenance, expiration documents with advance alerts)",
        },
        {
          heading: "Printable contracts",
          text: "Automatic generation of professional rental contracts, ready to sign and print",
        },
        {
          heading: "Availability calendar",
          text: "See at a glance which vehicles are free, reserved, or rented, to plan without conflicts",
        },
        {
          heading: "Payments & deposits",
          text: "Track payments received, deposits held/refunded, and late payments",
        },
        {
          heading: "Automatic alerts",
          text: "Late vehicle return, expiring documents, upcoming maintenance",
        },
        {
          heading: "Statistics & profitability",
          text: "Which vehicle earns the most, fleet occupancy rate, revenue by period",
        },
        {
          heading: "100% offline",
          text: "Your data stays on your computer, no internet dependency, no forced monthly subscription",
        },
        { heading: "Secure backup", text: "Export/backup your data to never lose anything" },
      ],
      context: "Built for Moroccan agencies",
      contextText:
        "French-language interface, adapted to real-world conditions — whether you manage 5 cars or a fleet of several dozen, eRent grows with your agency.",
      ctaTitle: "eRent is coming soon. Be among the first to use it.",
      ctaSubtitle: "Contact us to learn more or place an order.",
    },
  },
  ar: {
    dir: "rtl",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      products: "المنتجات",
      partners: "الشركاء",
      features: "مميزاتنا",
      contact: "اتصل بنا",
      who: "من نحن",
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
      ourTeam: "فريقنا",
    },
    team: {
      title: "فريقنا",
      subtitle: "الفريق وراء eByte Software",
      roles: {
        coFounder: "Co-Founder",
        sales: "Sales",
      },
      members: [
        { name: "Hamza Kherazi", role: "coFounder", phone: "+212 773-313707" },
        { name: "Mohammed Bourass", role: "coFounder", phone: "06 19 34 4478" },
        { name: "OTHMANE EL MARZOUQY", role: "sales", phone: "+212 684-651514" },
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
    mobileApps: {
      back: "العودة إلى الخدمات",
      hero: {
        title: "تطبيقات الهاتف",
        subtitle:
          "في eByte Software، تطوير الهاتف ليس أمراً ثانوياً — إنه أحد نقاط قوتنا الأساسية. سواء كنت بحاجة إلى تطبيق للعملاء، أو أداة داخلية لفريقك، أو منصة كاملة تربط آلاف المستخدمين، نصمم ونطور تطبيقات هاتف سريعة وموثوقة ومتينة.",
      },
      sections: [
        {
          title: "أصلية ومتعددة المنصات، باختيار استراتيجي",
          text: "لا نُجبر كل مشروع في نفس القالب. حسب أهدافك وميزانيتك والجدول الزمني، نطور بأفضل تقنية تناسب — سواء كانت حلاً متعدد المنصات مثل Flutter للتسليم السريع على iOS وAndroid بقاعدة كود واحدة ومصقولة، أو تطوير أصلي عندما تكون الأداء والتكامل العميق مع المنصة أمراً مهماً. تحصل على تطبيق يبدو طبيعياً على كل جهاز، دون تنازلات غير ضرورية.",
        },
        {
          title: "مبني ببنية حقيقية، ليست مجرد واجهة",
          text: "التطبيق الجيد ليس مجرد واجهة جميلة — إنه نظام يصمد أمام الاستخدام الفعلي. تطبيقاتنا الهاتف مبنية على بنية نظيفة وقابلة للتوسع (MVVM، إدارة الحالة Cubit/BLoC، حقن التبعيات) مربوطة بخوادم آمنة ومنظمة. هذا يعني أن تطبيقك يبقى قابل للصيانة مع نموه، يتعامل مع الأخطاء برشاقة، ويمكنه التطور بميزات جديدة دون كسر ما يعمل بالفعل.",
        },
        {
          title: "مصمم حول مستخدميك",
          text: "كل شركة مختلفة، وعملاؤها كذلك. نصمم واجهات تتطابق مع طريقة تفكير سلوك مستخدميك — تنقل سلس، مسارات بديهية، وهوية بصرية تعكس علامتك التجارية. من تطبيقات التجارة الإلكترونية والأسواق إلى حجز الخدمات، وتتبع التوصيل، وأدوات الأعمال الداخلية، نُكيّف كل شاشة لحالات استخدام حقيقية، لا قوالب عامة.",
        },
        {
          title: "آمنة ومتصلة",
          text: "التطبيقات الحديثة تحتاج للتواصل مع العالم بأمان. نُنفذ مصادقة آمنة (JWT، جلسات قائمة على الرموز)، وتخزين محلي مشفر للبيانات الحساسة، وميزات في الوقت الحقيقي مثل الإشعارات والتحديثات المباشرة، وتكاملات API قوية — لكي لا يبدو تطبيقك جميلاً فحسب، بل يعمل بشكل موثوق في العالم الحقيقي، عبر الإنترنت أو باتصال محدود.",
        },
        {
          title: "من الفكرة إلى متجر التطبيقات",
          text: "ندعمك طوال الرحلة: فهم احتياجات عملك، وتصميم تجربة المستخدم، وتطوير التطبيق، واختباره بدقة، وإعداده للنشر على App Store وGoogle Play. هدفنا ليس فقط تسليم تطبيق يعمل — بل تسليم منتج سيستخدمه مستخدموك حقاً بكل سعادة.",
        },
      ],
      bullets: [
        "حلول مخصصة، لا قوالب جاهزة",
        "بنية نظيفة مبنية للقابلية طويلة الأمد",
        "واجهة متعددة اللغات ومحلي relevance (جاهزة للفرنسية/العربية)",
        "ميزات في الوقت الحقيقي وتكامل آمن مع الخادم",
        "دعم كامل، من المفهوم إلى الإطلاق",
      ],
      cta: "هل لديك فكرة لتطبيق هاتف؟ دعنا نحولها إلى شيء سيحبه عملاؤك استخدامه كل يوم.",
    },
    webApps: {
      back: "العودة إلى الخدمات",
      hero: {
        title: "تطبيقات الويب",
        subtitle:
          "في eByte Software، تطوير الويب لا يعني مجرد إنشاء موقع — بل يعني بناء العمود الفقري الرقمي لشركتك. من الصفحة المالية التي تجلب العملاء، إلى النظام الداخلي الذي يدير عملياتك اليومية، نصمم ونطور منصات ويب سريعة وقابلة للتوسع ومبنية حول طريقة عمل شركتك الفعلية.",
      },
      sections: [
        {
          title: "من الصفحات المالية إلى المنصات الكاملة",
          text: "نغطي طيف كامل من احتياجات الويب. هل تحتاج صفحة هبوط نظيفة و عالية التحويل لعرض شركتك ومنتجاتك؟ نبنيها بتصميم حديث وأداء حقيقي. هل تحتاج شيئاً أكبر — نظام إدارة، منصة B2B أو B2C، ERP كامل لإدارة عملياتك؟ نبنيه أيضاً، بنفس الاهتمام بالعمليات والأمان والقابلية طويلة الأمد.",
        },
        {
          title: "SaaS، Multi-Tenant ومنصات الأعمال",
          text: "نصمم ونبني منصات SaaS من الصفر — بنى multi-tenant حيث كل عميل أو شركة تحصل على مساحتها الآمنة، وإدارة الاشتراكات والحسابات، ولوحات تحكم المسؤول، وكل ما يلزم لتشغيل منتج برمجي كProduto تجاري حقيقي. سواء كنت تطلق منتج SaaS جديد أو تحتاج بوابة B2B تربط شركتك بالشركاء والعملاء، نُهيكل النظام ليكون مع نموك وليس ضده.",
        },
        {
          title: "أنظمة الإدارة والـ ERP مبنية حول سير عملك",
          text: "لا توجد شركتان تعملان بنفس الطريقة — لذلك لا نُجبر شركتك في قالب صلب عام. نبني أنظمة إدارة مخصصة ومنصات بأسلوب ERP مُكيّفة لعملياتك الحقيقية: إدارة المخزون والمستودعات، وتتبع العملاء والموردين، ووحدات الدفع والفوترة، وإدارة الموظفين والأدوار، ولوحات تقارير التقارير، وأي سير عمل تعتمد عليه شركتك.",
        },
        {
          title: "بنية خلف كل منصة",
          text: "كل تطبيق ويب نبنيه يرتكز على بنية نظيفة ومُرتبة — خوادم مُهيكلة (ASP.NET Core، Laravel)، وقواعد بيانات منظمة، ومصادقة آمنة وتحكم بالوصول قائم على الأدوار، وواجهات أمامية حديثة ومتجاوبة (React، TypeScript) تعمل بسلاسة على سطح المكتب والهاتف. الأمر لا يتعلق فقط بالpearance الجيد في يوم الإطلاق — بل بنظام يبقى قابل للصيانة وآمن وسهل التوسع مع نمو شركتك.",
        },
        {
          title: "مُصمم للنمو، مُنشر ليستمر",
          text: "نتولى الرحلة التقنية الكاملة: التطوير والاختبار والإنتاج والنشر — بما في ذلك البنية التحتية Docker، والاستضافة الآمنة، وSSL، والمراقبة — لكي لا تكون منصتك فقط جيدة البنية، بل تعمل بشكل موثوق من اليوم الأول وتستمر في العمل مع نمو حركة مرورك وبياناتك.",
        },
      ],
      bullets: [
        "من الصفحات البسيطة إلى أنظمة ERP المعقدة — فريق واحد للمجموعة الكاملة",
        "خبرة في بنى SaaS و multi-tenant",
        "مُبني حسب الطلب حول سير عملك الفعلي، لا قالب عام",
        "وصول آمن وقائم على الأدوار لحالات B2B و B2C",
        "بنية تحتية قابلة للتوسع ونشر موثوق",
        "تصميم متعدد اللغات ومحل relevance (جاهز للفرنسية/العربية)",
      ],
      cta: "أياً كان مرحلة شركتك — صفحة هبوط للبدء، أو منصة كاملة لإدارة عملياتك — نبني تطبيق الويب الذي يناسب أين أنت وأين ستذهب.",
    },
    desktopApps: {
      back: "العودة إلى الخدمات",
      hero: {
        title: "برمجيات سطح المكتب",
        subtitle:
          "لا ت/company جميع الشركات تعمل عبر السحابة — وليست كل شركة يجب أن تفعل ذلك. في eByte Software، نبني تطبيقات سطح المكتب للشركات التي تحتاج السرعة والموثوقية والتحكم الكامل في أنظمتها، سواء كان ذلك للعمل دون إنترنت بالكامل، أو البقاء متصلأً عبر الإنترنت، أو نمط هجين من الاثنين.",
      },
      sections: [
        {
          title: "Offline-First، عندما يكون ذلك مهماً",
          text: "للعديد من الشركات — متاجر التجزئة، ووكالات التأجير، ومراكز الخدمات المحلية — اتصال الإنترنت المستورد غير مضمون، والاعتماد كلياً على السحابة يمكن أن يعني فقدان المبيعات أو توقف العمليات في لحظة انقطاع الاتصال. نبني برمجيات سطح مكتب تعمل بالكامل دون إنترنت، تخزن بياناتك محلياً وعلى نحو آمن على جهازك الخاص، لكي تستمر شركتك في العمل مهما حدث.",
        },
        {
          title: "متصل وعبر الإنترنت، عندما تحتاج ذلك",
          text: "الشركات الأخرى تحتاج برمجيات سطح المكتب שלה للتحدث إلى خادم مركزي، أو مزامنة البيانات عبر الفروع، أو الاتصال بالخدمات والـ API عبر الإنترنت. نفعل ذلك أيضاً — تطبيقات سطح مكتب تبقى متصلة في الوقت الحقيقي، وتتزامن بشكل آمن مع الخوادم السحابية أو المحلية، وتعطيك نفس التحكم كنظام دون إنترنت مع قوة البيانات المركزة عبر مواقع أو مستخدمين متعددين.",
        },
        {
          title: "أنظمة ERP وإدارة كاملة",
          text: "eyond أدوات نقاط البيعة والأدوات أحادية الغرض، نبني أنظمة سطح مكتب كاملة بأسلوب ERP: إدارة المخزون والمستودعات مع تنبيهات تلقائية، وإدارة العملاء والموردين، والوصول الموظفين وقائم على الأدوار، ووحدات الدفع والفوترة، والتقارير والتحليلات — كل ذلك في تطبيق واحد مُكيّف لطريقة عمل شركتك الفعلية.",
        },
        {
          title: "مُصمم للاستخدام الفعلي في الأعمال",
          text: "كل تطبيق سطح مكتب نبنيه مُصمم حول احتياجات تشغيلية حقيقية، لا قوالب عامة: مسح الباركود/الرمز المربع، وإنشاء الفواتير والمستندات، والنسخ الاحتياطي المشفر تلقائياً، وإدارة التراخيص والوصول، ودعم المستخدمين المتعددين، والتقارير التفصيلية. نعرف الفرق بين العرض التوضيحي ونظام تعمل عليه الشركة كل يوم — ونبني للأخير.",
        },
        {
          title: "بنية تقنية متينة",
          text: "تطبيقات سطح المكتب لدينا مبنية بتقنية موثوقة ومُجربة (WPF، C#، SQL Server/SQLite)، تتبع بنية نظيفة ومُرتبة تجعل النظام قابل للصيانة وسهلاً للتوسع مع نمو شركتك. هذا يعني أنه يمكن إضافة ميزات جديدة بمرور الوقت — وحدات جديدة، وتقارير جديدة، وتكاملات جديدة — دون إ打扰 النظام الذي يعتمد عليه فريقك بالفعل.",
        },
      ],
      bullets: [
        "قدرة عمل كاملة دون إنترنت — لا اعتماد على اتصال الإنترنت",
        "خيارات عبر الإنترنت/هجين عندما تكون البيانات المركزة مهمة",
        "تطوير أنظمة ERP وإدارة كاملة",
        "بيانات آمنة ومشفرة مع حلول نسخ احتياطي تلقائية",
        "مُبني حول سير عملك الفعلي، لا قالب عام",
        "قابلية صيانة طويلة الأمد ومساحة للنمو",
      ],
      cta: "سواء كانت شركتك تحتاج للعمل بالكامل دون إنترنت، أو البقاء متصلة عبر المواقع، أو إدارة عمليات معقدة عبر ERP كامل، نبني برمجيات سطح المكتب التي تعطيك تحكماً كاملاً — بشكل موثوق، كل يوم.",
    },
    products: {
      title: "منتجاتنا",
      intro: "من نقاط البيع إلى إدارة الأسطول، منتجاتنا موثوقة لدى عملاء في مختلف أنحاء المغرب.",
      flagship: "المنتج الرئيسي",
      badgeNew: "جديد",
      badgeSoon: "قريباً",
      reserve: "احجز الآن",
      download: "تحميل",
      contact: "التواصل مع المبيعات",
      order: "اطلب الآن",
      moreInfo: "المزيد من المعلومات",
      items: [
        {
          name: "POS eByte",
          text: "برنامج نقاط بيع متكامل يعمل دون إنترنت للشركات المغربية — إدارة المبيعات والمخزون والفوترة والعمليات اليومية من مكان واحد.",
          stat: "يستخدمه أكثر من 10 شركات في المغرب",
        },
        {
          name: "CGS — نظام إدارة المراكز",
          text: "منصة إدارة مصممة لرقمنة وتبسيط العمليات اليومية لمراكز الخدمات، قابلة للتكيف مع سير عمل كل مركز.",
        },
        {
          name: "Smart Menu NFC",
          text: "الجيل الجديد من قوائم المطاعم في المغرب — قوائم رقمية تفاعلية وفورية دون تلامس عبر NFC. لا حاجة لتحميل أي تطبيق.",
        },
        {
          name: "eRent — نظام إدارة تأجير السيارات",
          text: "نظام متكامل لإدارة تأجير السيارات — الحجوزات والفواتير وتتبع الأسطول وإدارة العملاء، كل ذلك في منصة واحدة.",
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
      title: "Construisons ensemble",
      subtitle: "Parlez-nous de votre projet, nous revenons vers vous rapidement.",
      name: "Nom",
      email: "Email",
      phone: "Téléphone (optionnel)",
      message: "Message",
      submit: "Envoyer le message",
      infoTitle: "معلومات التواصل",
      location: "فاس، المغرب",
      techSupport: "الدعم الفني",
      toast: "شكراً!",
    },
    footer: {
      tagline: "صُنع بأيدي مهندسين. مدفوع برؤية.",
      quick: "روابط سريعة",
      productsTitle: "المنتجات",
      contactTitle: "التواصل",
      rights: "© 2026 eByte Software. جميع الحقوق محفوظة.",
    },
    whoPage: {
      title: "Who We Are",
      subtitle: "The team behind eByte Software",
      back: "Back to home",
      roles: {
        coFounder: "Co-Founder",
        sales: "Sales",
      },
      team: [
        { name: "Hamza Kherazi", role: "coFounder", phone: "+212 773-313707" },
        { name: "Mohammed Bourass", role: "coFounder", phone: "06 19 34 4478" },
        { name: "OTHMANE EL MARZOUQY", role: "sales", phone: "+212 684-651514" },
      ],
    },
    partners: {
      title: "تطبيقات مُطوّرة لشركائنا",
      intro: "نطور تطبيقات مخصصة لشركائنا، مستفيدين من أحدث التقنيات.",
      visitSite: "زيارة الموقع",
    },
    features: {
      title: "لماذا تختارنا",
      intro: "حيث تلتقي الخبرة بالتميز",
      items: [
        {
          title: "خبراء أعمال",
          text: "نساعد المؤسسات على تجاوز التحديات وتحسين العمليات وتحقيق نمو مستدام.",
        },
        {
          title: "الجودة والأمان",
          text: "نقدم حلولاً تلبي أعلى معايير الجودة والأمان وسهولة الاستخدام.",
        },
        {
          title: "الابتكار المستمر",
          text: "نابتك لدفع التقدم وتحسين أداء شركتك.",
        },
        {
          title: "شراكات استراتيجية",
          text: "نبني شراكات تعزز النمو المتبادل وتوفر قيمة طويلة الأمد.",
        },
        {
          title: "دعم مخصص",
          text: "ندعم عملاءنا بحلول مخصصة ومساعدة مستمرة.",
        },
        {
          title: "التميز التشغيلي",
          text: "نحقق نتائج قابلة للقياس من خلال منهجية صارمة.",
        },
      ],
    },
    techStack: {
      label: "المجموعة التقنية",
      title: "ما تستخدمه فريقنا",
      intro: "نعمل بأكثر التقنيات موثوقية في السوق لتقديم حلول عالية الأداء وقابلة للصيانة.",
    },
    posEbyte: {
      title: "POS eByte",
      subtitle: "نظام نقاط بيع متكامل للشركات المغربية",
      intro:
        "هل تدير متجرًا ومللت من التنقّل بين دفتر الصندوق ودفتر المخزون والملاحظات المبعثرة لمورديك وعملائك؟ صُمم POS eByte لتبسيط حياتك وتوفر عليك الوقت يوميًا.",
      back: "العودة إلى المنتجات",
      downloadTitle: "تحميل POS eByte",
      downloadDesc: "قم بتثبيت POS eByte على جهاز الكمبيوتر الخاص بك وابدأ في إدارة عملك اليوم.",
      downloadBtn: "تحميل أحدث إصدار",
      version: "الإصدار 1.0.2 — ويندوز",
      sections: [
        {
          heading: "بيع أسرع وببساطة",
          text: "مع POS eByte، كل عملية بيع تتم بنقرات قليلة. تمسح أو تبحث عن منتجاتك، وتقوم بالدفع، وتُنشأ فوترة احترافية تلقائيًا — جاهزة للطباعة أو الإرسال إلى عميلك. لا مزيد من أخطاء الحساب والتذاكر المكتوبة يدويًا.",
          images: ["3 - POS.png", "10 - Gestion des ventes.png"],
        },
        {
          heading: "لا ت فقد المخزون أبدًا",
          text: "POS eByte يراقب مخزونك باستمرار. ما إن يصل منتج إلى الحد الحرج، يتم تنبيهك فورًا. تعرف دائمًا ماذا تطلب ومتى — لئلا تفقدبيعًا بسبب نقص في المخزون.",
          images: [
            "4 - Gestion des produits.png",
            "5 - Ajouter produit.png",
            "13 - Gestion des entrees produits.png",
          ],
        },
        {
          heading: "حافظ على السيطرة على مورديك",
          text: "جميع معلومات الموردين مركّزة: بيانات الاتصال، سجل المشتريات، المنتجات الموردة. عندما يحين وقت إعادة التعبئة، لديك جميع المعلومات تحت يدك، دون البحث في أوراقك القديمة.",
          images: ["8 - Gestion des fournisseurs.png", "9 - Ajouter fournisseur.png"],
        },
        {
          heading: "احتفظ بعملائك",
          text: "POS eByte يحافظ على ملف كامل لكل عميل: سجل المشتريات، أرصدة الائتمان، بيانات الاتصال. تعرف من هم أفضل عملائك ويمكنك إدارة المبيعات الآجلة بسهولة — وهي ممارسة شائعة في التجارة المغربية.",
          images: [
            "11 - Gestion des clients.png",
            "12 - Credits du client.png",
            "6 - Gestion des credits.png",
            "7 - Paiements des credits.png",
          ],
        },
        {
          heading: "حل مئ بالمئة مخصص للسوق المغربي",
          text: "واجهة باللغة الفرنسية، المبالغ بالدرهم المغربي (MAD)، وقريبًا باللغة العربية — POS eByte مصمم للمتاجر المغربية، من طرف فريق مغربي.",
          images: ["15 - Parametres1.png", "16 - Parametres2.png"],
        },
      ],
      galleryTitle: "معاينة الواجهة",
      ctaTitle: "مع POS eByte، أنت لا تدير صندوقًا فحسب — أنت تدير متجرك.",
      ctaSubtitle: "قم بتحميل النسخة التجريبية واكتشف كيف يمكن لـ POS eByte تحويل إدارة متجرك.",
    },
    cgs: {
      title: "CGS — نظام إدارة المراكز",
      subtitle: "منصة إدارة متكاملة لمدارس القيادة المغربية",
      status: "تحت الصيانة",
      statusText:
        "هذا المنتج قيد التطوير حاليًا. تواصل مع فريق المبيعات لمزيد من المعلومات أو للحصول على نسخة تجريبية.",
      back: "العودة إلى المنتجات",
      contactSales: "التواصل مع المبيعات",
      requestDemo: "طلب عرض توضيحي",
      intro:
        "CGS مصمم خصيصًا لمراكز القيادة المغربية (المدارس السيارة) التي تحتاج إلى إدارة كل شيء من تسجيل الطلاب إلى جدولة المدرسين، والشهادات الطبية والمدفوعات — كل ذلك في مكان واحد، لتحل محل السجلات الورقية وجداول البيانات المبعثرة التي لا تزال العديد من المراكز تعتمد عليها.",
      sections: [
        {
          heading: "إدارة الطلاب",
          text: "يحصل كل طالب على ملف رقمي كامل منذ لحظة تسجيله: معلومات شخصية، وثائق الهوية/CIN، فئة الرخصة المطلوبة (B، A، C، إلخ)، تاريخ التسجيل، وتتبع التقدم عبر المراحل النظرية (الكود) والعملية (القيادة). يمكن للمراكز تتبع الدروس التي أنهىها الطالب، وساعات التدريب المتبقية، سجل محاولات الامتحان، ونتائج النجاح/الرسوب — مما يوفر للطاقم رؤية واضحة لرحلة كل طالب.",
        },
        {
          heading: "إدارة المدرسين والأطباء",
          text: "يدير CGS فئتين رئيسيتين من الموظفين المشاركين في عملية الحصول على الرخصة:\n\nالمدرسون (مدرسو القيادة): جداولهم، الطلاب المعيّنون، تعيينات المركبات، ساعات العمل، وسجل الدروس — مما يساعد المراكز على تخطيط أيام عمل فعالة避免 الحجز المزدوج.\n\nالأطباء المعتمدون: نظرًا لأن طلبات رخصة القيادة المغربية تتطلب شهادة لياقة طبية، يتتبع CGS أي طبيب فحص أي طالب، تواريخ إصدار الشهادات، وصلاحيتها — لضمان عدم عدم اكتمال أي ملف طالب عند التسجيل لدى السلطات.",
        },
        {
          heading: "إدارة المدفوعات",
          text: "رسوم مدارس القيادة في المغرب غالبًا ما تُدفع على أقساط بدلاً من دفعة واحدة. يتعامل مع ذلك CGS بشكل أصلي: تتبع الرسوم المستحقة الإجمالية لكل طالب، المدفوعات المستلمة، الأرصدة المستحقة، ومواعيد الدفع. يمكن للطاقم بلمحة أن يرى من هو محدث الوضعي ومن عليه ديون، مما يقلل من اليدوية في المحاسبة. يمكن إصدار إيصالات لكل دفوعة.",
        },
        {
          heading: "ال oversight الإداري",
          text: "eyond سجلات الطلاب والمدرسين الفردية، يوفر CGS لأصحاب المراكز والمديرين نظرة شاملة على النشاط: عدد الطلاب النشطين،those الذين هم على وشك الام tidal، انتهاء صلاحية الشهادات الطبية القادمة، توزيع عبء العمل للمدرسين، والإيرادات الإجمالية — مما يحول العمليات اليومية إلى شيء قابل للقياس والإدارة.",
        },
        {
          heading: "مصمم للسياق المغربي",
          text: "واجهة باللغة الفرنسية تعكس الطريقة التي تعمل بها مراكز القيادة المغربية فعليًا، مع سير عمل مبني حول الخطوات الفعلية للحصول على رخصة قيادة مغربية (الكود، القيادة، الامتحان، الشهادة الطبية) بدلاً من قالب دولي عام.",
        },
      ],
      ctaTitle: "CGS قيد التطوير حاليًا. كن من أوائل من يستخدمونه.",
      ctaSubtitle: "تواصل معنا لمعرفة المزيد أو طلب نسخة تجريبية.",
    },
    nfc: {
      title: "Smart Menu NFC",
      subtitle: "القائمة الرقمية التي حوّل كل طاولة إلى طلب فوري",
      status: "قريباً",
      promo: "خصم 50% لمدة سنة",
      promoDetail: "استمتع بخصم 50% على أول سنة اشتراك. احجز مكانك الآن.",
      back: "العودة إلى المنتجات",
      joinWaitlist: "الانضمام لقائمة الانتظار",
      contactSales: "التواصل مع المبيعات",
      intro:
        "Smart Menu NFC هو حل SaaS للمطاعم والمقاهي والمقاهي السريعة التي تريد تحديث تجربة العميل whilst تبسيط العمل في الصالة. كل مؤسسة تحصل على حسابها الخاص لتكوين وتحديث قائمتها — الأطباق والمشروبات والأسعار والصور والتوفر — في الوقت الفعلي، دون الحاجة لإعادة طباعة أي قائمة ورقية.",
      howItWorks: "كيف يعمل",
      sections: [
        {
          heading: "للعميل",
          text: "على كل طاولة، يتم تركيب رقاقة NFC ورمز QR. لا عليك سوى الاقتراب بهاتفك (أو مسح الرمز) لتتم إعادة توجيهك فورًا إلى القائمة الرقمية للمؤسسة — لا حاجة لتحميل أي تطبيق، لا تسجيل مطلوب. تتصفح القائمة، تختار منتجاتك، وتؤكد طلبك مباشرة من هاتفك.",
          images: ["ScanEsly.jpeg", "ClientMenu.jpeg"],
        },
        {
          heading: "للكادر",
          text: "بمجرد تأكيد الطلب، يصل فورًا إلى النادل أو المطبخ — لا مزيد من التنقل بين الطاولات لأخذ الطلبات، لا مزيد من أخطاء النسخ، لا مزيد من الانتظار. يصبح الخدمة أسرع وأكثر سلاسة، ويمكن للكادر التركيز على تجربة العميل بدلاً من اللوجستيات.",
          images: ["Demand.jpeg"],
        },
      ],
      benefits: "لماذا يكسب المؤسسة",
      benefitsList: [
        "توفير الوقت: الطلبات تؤخذ تلقائيًا، بدون وسيط بشري",
        "تقليل الأخطاء: ما يختاره العميل هو ما يصل إلى المطبخ بالضبط",
        "قائمة محدّثة دائمًا: لا مزيد من عرض المنتجات النافدة، لا مزيد من الأسعار القديمة — كل شيء يُعدّل من لوحة التحكم في ثوانٍ",
        "صورة حديثة: تجربة سلسة وتقنية تميز المؤسسة عن المنافسة",
        "بيانات ثمينة: رؤية واضحة على المنتجات الأكثر طلبًا، ساعات الذروة، وعادات العملاء",
      ],
      adminTitle: "لوحة التحكم الإدارية",
      adminText:
        "أدر قائمتك من واجهة بسيطة وسهلة الاستخدام. أضف أطباقًا، عدّل الأسعار، حدّث التوفر — كل ذلك بنقرات قليلة، دون الحاجة لمهارات تقنية.",
      reviews: "ماذا يقول عملاؤنا المستقبليون",
      reviewsList: [
        {
          name: "مطعم المدينة",
          text: "مفهوم رائع! لا مزيد من القوائم الورقية التي تتأكل. عملاؤنا يحبون سهولة الاستخدام.",
        },
        {
          name: "مقهى لاليه",
          text: "ننتظر الإصدار الرسمي بشغف. سيحدث ثورة في خدمة الطاولات لدينا.",
        },
        {
          name: "وجبة سريعة",
          text: "إمكانية تحديث القائمة في الوقت الفعلي عندما ننفد من المنتجات — هذا بالضبط ما نحتاجه.",
        },
      ],
      ctaTitle: "Smart Menu NFC قريباً. كن من أوائل من يتبنونه.",
      ctaSubtitle: "احجز مكانك واستمتع بخصم 50% على السنة الأولى.",
    },
    erent: {
      title: "eRent — نظام إدارة تأجير السيارات",
      subtitle: "البرنامج الذي يعمل دون إنترنت ويُبسّط إدارة وكالة تأجير السيارات الخاصة بك",
      status: "قريباً",
      back: "العودة إلى المنتجات",
      contactSales: "التواصل مع المبيعات",
      orderBtn: "اطلب الآن",
      intro:
        "eRent هو برنامج سطح مكتب مصمم للعمل دون اتصال بالإنترنت، مخصص لوكالات تأجير السيارات التي تريد إدارة نشاطها بكفاءة — دون الاعتماد على اتصال غير مستقر أو اشتراك سحابي مكلف. يُثبَّت مباشرة على جهاز الكمبيوتر الخاص بك، ويركّز eRent كل ما تحتاجه الوكالة: المركبات والعملاء والعقود وسجل كامل لكل إيجار.",
      sections: [
        {
          heading: "أدر إيجاراتك بنقرات قليلة",
          text: "أنشئ عقد إيجار بسرعة: اختر المركبة والعميل والمدة، وأضف ملاحظاتك (حالة المركبة، قراءة العداد، الملحقات المقدمة، ملاحظات خاصة). كل شيء مسجل ومتاح في أي وقت.",
          images: ["App.jpeg"],
        },
        {
          heading: "لا تفقد أثر المركبة الدائرة",
          text: 'يتيح لك eRent تتبع المركبات المؤجرة حاليًا في الوقت الفعلي، ومن أجرها، ومتى استأجروها، ومتى يجب إعادتها. لا مزيد من المكالمات لسؤال "أين السيارة؟"',
          images: ["man work on system.jpeg"],
        },
        {
          heading: "سجل كامل عند كل إرجاع",
          text: "عندما يُعيد العميل السيارة، يعرض eRent فورًا السجل الكامل للمركبة: من أجرها آخر مرة، وبأي حالة أُعيدت، والملاحظات السابقة، ومسافة السير — مما يتيح لك التحقق بسرعة من أن كل شيء في النظام قبل الإيجار التالي.",
          images: ["image 1.jpeg"],
        },
        {
          heading: "قيّم وتابع عملاءك",
          text: "لدى كل عميل ملف خاص به مع سجل إيجار كامل. يتيح لك eRent تقييم عملائك (الموثوقية، الالتزام بالمواعيد، حالة إرجاع المركبة) — معلومات ثمينة لاتخاذ قرار واثق بشأن من يستحق ثقتك في الإيجارات القادمة.",
          images: ["contact us.jpeg"],
        },
      ],
      features: "والمزيد الكثير",
      featuresList: [
        {
          heading: "إدارة الأسطول",
          text: "ملف كامل لكل مركبة (العلامة التجارية، الطراز، التسجيل، التأمين، التغييرات، الصيانة، وثائق انتهاء الصلاحية مع تنبيهات مسبقة)",
        },
        {
          heading: "عقود قابلة للطباعة",
          text: "إنشاء تلقائي لعقود إيجار احترافية جاهزة للتوقيع والطباعة",
        },
        {
          heading: "تقويم التوفر",
          text: "اطلع بنظرة واحدة على المركبات المتاحة أو المحجوزة أو المؤجرة للتخطيط دون تعارض",
        },
        {
          heading: "المدفوعات والودائع",
          text: "تتبع المدفوعات المستلمة، والودائع المحتجزة/المُعادة، والمدفوعات المتأخرة",
        },
        {
          heading: "تنبيهات تلقائية",
          text: "تأخير إرجاع المركبة، انتهاء صلاحية الوثائق، صيانة قادمة",
        },
        {
          heading: "الإحصائيات والربحية",
          text: "أي مركبة تحقق 가장، معدل occupancy الأسطول، الإيرادات لكل فترة",
        },
        {
          heading: "يعمل 100% دون إنترنت",
          text: "بياناتك تبقى على جهاز الكمبيوتر، لا اعتماد على الإنترنت، لا اشتراك شهري مفروض",
        },
        { heading: "نسخ احتياطي آمن", text: "تصدير/نسخ احتياطي لبياناتك لئلا تفقد أي شيء أبدًا" },
      ],
      context: "مصمم للوكالات المغربية",
      contextText:
        "واجهة باللغة الفرنسية، م adapting للظروف الميدانية — سواء أدرت 5 سيارات أو أسطولًا من عدة عشرات، ينمو eRent مع وكالتك.",
      ctaTitle: "eRent قريباً. كن من أوائل من يستخدمونه.",
      ctaSubtitle: "تواصل معنا لمعرفة المزيد أو طلب الطلب.",
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
