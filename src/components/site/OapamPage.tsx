import {
  ArrowLeft,
  Star,
  Mail,
  Send,
  Package,
  BarChart3,
  FileText,
  Users,
  Truck,
  Settings,
  Shield,
  Database,
  Printer,
  Search,
  CheckCircle,
  Download,
  Calendar,
  Building2,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/hooks/use-reveal";

import imgServices from "@/assets/OAPAM/lesService.png";
import imgArticles from "@/assets/OAPAM/lesArtcles.png";
import imgReappro from "@/assets/OAPAM/Rea.png";
import imgParams from "@/assets/OAPAM/Parameters.png";
import imgFournisseurs from "@/assets/OAPAM/Fournisseurs.png";

const imageMap: Record<string, string> = {
  "lesService.png": imgServices,
  "lesArtcles.png": imgArticles,
  "Rea.png": imgReappro,
  "Parameters.png": imgParams,
  "Fournisseurs.png": imgFournisseurs,
};

const galleryImages = [imgServices, imgArticles, imgReappro, imgParams, imgFournisseurs];

const galleryAlts = [
  "Services",
  "Articles",
  "Réapprovisionnements",
  "Paramètres",
  "Fournisseurs",
];

const moduleIcons = [Package, Truck, FileText, Users, Building2, Settings];

export function OapamPage() {
  const { t, rtl } = useLang();
  const p = t.oapam;

  return (
    <section className="relative pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* Back link */}
        <Reveal>
          <Link
            to="/"
            hash="partners"
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
              {p.badge}
            </span>
            <h1 className="mt-6 text-4xl font-bold text-cream sm:text-5xl lg:text-6xl">
              {p.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{p.subtitle}</p>
          </div>
        </Reveal>

        {/* Main preview - Articles */}
        <Reveal>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border">
            <img
              src={imgArticles}
              alt="OAPAM Articles"
              className="w-full object-cover"
              loading="eager"
            />
          </div>
        </Reveal>

        {/* Intro */}
        <Reveal>
          <p className="mt-12 max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            {p.intro}
          </p>
        </Reveal>

        {/* Modules */}
        <Reveal>
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-cream sm:text-3xl">{p.modulesTitle}</h2>
            <div className="gold-rule mt-6 max-w-xs" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {p.modules.map((mod, i) => {
                const Icon = moduleIcons[i] || Package;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-border bg-surface p-5"
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <h3 className="text-sm font-bold text-cream">{mod.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {mod.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Feature sections */}
        <div className="mt-24 space-y-24">
          {p.sections.map((section, i) => {
            const isReversed = i % 2 !== 0;
            const imgSrc = imageMap[section.image as keyof typeof imageMap];
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

                  {/* Image */}
                  <div className="flex-1">
                    <div className="overflow-hidden rounded-xl border border-border">
                      <img
                        src={imgSrc}
                        alt={section.heading}
                        className="w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Key features grid */}
        <Reveal>
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-cream sm:text-3xl">{p.featuresTitle}</h2>
            <div className="gold-rule mt-6 max-w-xs" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {p.features.map((feature, i) => {
                const icons = [BarChart3, FileText, Database, Shield, Search, Printer, Calendar, Download];
                const Icon = icons[i] || CheckCircle;
                return (
                  <div key={i} className="rounded-xl border border-border bg-surface p-5">
                    <Icon className="h-5 w-5 text-gold" />
                    <h3 className="mt-3 text-sm font-bold text-cream">{feature.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Offline + Security */}
        <Reveal>
          <div className="mt-20 rounded-2xl border border-gold/30 bg-surface p-8 lg:p-12">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10">
                <Shield className="h-8 w-8 text-gold" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-cream sm:text-2xl">{p.offlineTitle}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">
                  {p.offlineText}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Gallery */}
        <Reveal>
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-cream sm:text-3xl">{p.galleryTitle}</h2>
            <div className="gold-rule mt-6 max-w-xs" />
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
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

        {/* Client Testimonial */}
        <Reveal>
          <div className="mt-24 rounded-2xl border border-gold/30 bg-surface p-10 lg:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-6 w-6 fill-gold text-gold" />
                ))}
              </div>
              <h2 className="mt-6 text-2xl font-bold text-cream sm:text-3xl">{p.testimonialTitle}</h2>
              <div className="gold-rule mx-auto mt-6 max-w-xs" />
              <p className="mt-8 text-base leading-relaxed text-muted-foreground lg:text-lg italic">
                "{p.testimonial.text}"
              </p>
              <div className="mt-8">
                <p className="text-sm font-bold text-cream">{p.testimonial.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{p.testimonial.role}</p>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {p.testimonialRatings.map((rating, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2"
                  >
                    <CheckCircle className="h-4 w-4 text-gold" />
                    <span className="text-xs text-muted-foreground">{rating}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <div className="mt-24 rounded-2xl border border-tech/30 bg-surface p-10 text-center lg:p-16">
            <h2 className="mx-auto max-w-2xl text-2xl font-bold text-cream sm:text-3xl">
              {p.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground lg:text-base">
              {p.ctaSubtitle}
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/contact-sales"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
                style={{ background: "var(--gradient-gold)" }}
              >
                <Mail className="h-4 w-4" />
                {p.ctaBtn}
              </Link>
              <Link
                to="/contact-sales"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-8 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold/20"
              >
                <Send className="h-4 w-4" />
                {p.ctaBtn2}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
