import { ArrowLeft, Download, CheckCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/hooks/use-reveal";

import imgLogin from "@/assets/POS eByte/1 - login.png";
import imgDashboard from "@/assets/POS eByte/2 - Dashboard.png";
import imgPos from "@/assets/POS eByte/3 - POS.png";
import imgProduits from "@/assets/POS eByte/4 - Gestion des produits.png";
import imgAjouterProduit from "@/assets/POS eByte/5 - Ajouter produit.png";
import imgCredits from "@/assets/POS eByte/6 - Gestion des credits.png";
import imgPaiementsCredits from "@/assets/POS eByte/7 - Paiements des credits.png";
import imgFournisseurs from "@/assets/POS eByte/8 - Gestion des fournisseurs.png";
import imgAjouterFournisseur from "@/assets/POS eByte/9 - Ajouter fournisseur.png";
import imgVentes from "@/assets/POS eByte/10 - Gestion des ventes.png";
import imgClients from "@/assets/POS eByte/11 - Gestion des clients.png";
import imgCreditsClient from "@/assets/POS eByte/12 - Credits du client.png";
import imgEntreesProduits from "@/assets/POS eByte/13 - Gestion des entrees produits.png";
import imgPaiements from "@/assets/POS eByte/14 - Les paiements.png";
import imgParametres1 from "@/assets/POS eByte/15 - Parametres1.png";
import imgParametres2 from "@/assets/POS eByte/16 - Parametres2.png";

const imageMap: Record<string, string> = {
  "1 - login.png": imgLogin,
  "2 - Dashboard.png": imgDashboard,
  "3 - POS.png": imgPos,
  "4 - Gestion des produits.png": imgProduits,
  "5 - Ajouter produit.png": imgAjouterProduit,
  "6 - Gestion des credits.png": imgCredits,
  "7 - Paiements des credits.png": imgPaiementsCredits,
  "8 - Gestion des fournisseurs.png": imgFournisseurs,
  "9 - Ajouter fournisseur.png": imgAjouterFournisseur,
  "10 - Gestion des ventes.png": imgVentes,
  "11 - Gestion des clients.png": imgClients,
  "12 - Credits du client.png": imgCreditsClient,
  "13 - Gestion des entrees produits.png": imgEntreesProduits,
  "14 - Les paiements.png": imgPaiements,
  "15 - Parametres1.png": imgParametres1,
  "16 - Parametres2.png": imgParametres2,
};

const DOWNLOAD_URL =
  "https://www.mediafire.com/file/fsz5pbmoelqo0hl/POS+eByte+Instalation+v1_0_2.zip/file";

const galleryImages = [
  imgLogin,
  imgDashboard,
  imgPos,
  imgProduits,
  imgAjouterProduit,
  imgCredits,
  imgPaiementsCredits,
  imgFournisseurs,
  imgAjouterFournisseur,
  imgVentes,
  imgClients,
  imgCreditsClient,
  imgEntreesProduits,
  imgPaiements,
  imgParametres1,
  imgParametres2,
];

const galleryAlts = [
  "Login",
  "Dashboard",
  "Point de vente",
  "Gestion des produits",
  "Ajouter produit",
  "Gestion des crédits",
  "Paiements des crédits",
  "Gestion des fournisseurs",
  "Ajouter fournisseur",
  "Gestion des ventes",
  "Gestion des clients",
  "Crédits du client",
  "Gestion des entrées produits",
  "Les paiements",
  "Paramètres 1",
  "Paramètres 2",
];

export function PosEbytePage() {
  const { t, rtl } = useLang();
  const p = t.posEbyte;

  return (
    <section className="relative pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* Back link */}
        <Reveal>
          <Link
            to="/"
            hash="products"
            className={`inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold ${rtl ? "flex-row-reverse" : ""}`}
          >
            <ArrowLeft className={`h-4 w-4 ${rtl ? "rotate-180" : ""}`} />
            {p.back}
          </Link>
        </Reveal>

        {/* Hero */}
        <Reveal>
          <div className="mt-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Produit phare
            </span>
            <h1 className="mt-6 text-4xl font-bold text-cream sm:text-5xl lg:text-6xl">
              {p.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{p.subtitle}</p>
          </div>
        </Reveal>

        {/* Dashboard screenshot */}
        <Reveal>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border">
            <img
              src={imgDashboard}
              alt="POS eByte Dashboard"
              className="w-full object-cover"
              loading="eager"
            />
          </div>
        </Reveal>

        {/* Intro text */}
        <Reveal>
          <p className="mt-12 max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            {p.intro}
          </p>
        </Reveal>

        {/* Feature sections */}
        <div className="mt-20 space-y-24">
          {p.sections.map((section, i) => {
            const isReversed = i % 2 !== 0;
            const imgs = section.images.map((name) => imageMap[name]).filter(Boolean);
            return (
              <Reveal key={section.heading}>
                <div
                  className={`flex flex-col gap-10 ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center`}
                >
                  {/* Text */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-cream sm:text-3xl">{section.heading}</h2>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground lg:text-base">
                      {section.text}
                    </p>
                  </div>

                  {/* Images */}
                  <div className="flex-1">
                    {imgs.length === 1 ? (
                      <div className="overflow-hidden rounded-xl border border-border">
                        <img
                          src={imgs[0]}
                          alt={section.heading}
                          className="w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        {imgs.map((src, j) => (
                          <div key={j} className="overflow-hidden rounded-xl border border-border">
                            <img
                              src={src}
                              alt={`${section.heading} ${j + 1}`}
                              className="w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Gallery */}
        <Reveal>
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-cream sm:text-3xl">{p.galleryTitle}</h2>
            <div className="gold-rule mt-6 max-w-xs" />
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {galleryImages.map((src, i) => (
                <div
                  key={i}
                  className="group overflow-hidden rounded-xl border border-border transition-transform hover:scale-[1.02]"
                >
                  <img
                    src={src}
                    alt={galleryAlts[i]}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA + Download */}
        <Reveal>
          <div className="mt-24 rounded-2xl border border-gold/30 bg-surface p-10 text-center lg:p-16">
            <h2 className="mx-auto max-w-2xl text-2xl font-bold text-cream sm:text-3xl">
              {p.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground lg:text-base">
              {p.ctaSubtitle}
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
                style={{ background: "var(--gradient-gold)" }}
              >
                <Download className="h-4 w-4" />
                {p.downloadBtn}
              </a>
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-8 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold/20"
              >
                <Download className="h-4 w-4" />
                {p.downloadBtn}
              </a>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">{p.version}</p>

            <div className="mx-auto mt-8 flex max-w-md flex-col gap-2 text-left">
              {p.sections.map((s) => (
                <div
                  key={s.heading}
                  className={`flex items-start gap-2 text-sm text-muted-foreground ${rtl ? "flex-row-reverse" : ""}`}
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{s.heading}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
