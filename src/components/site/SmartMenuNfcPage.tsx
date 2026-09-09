import {
  ArrowLeft,
  Clock,
  Percent,
  Mail,
  Send,
  Star,
  Smartphone,
  Utensils,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/hooks/use-reveal";

import imgScan from "@/assets/NFE Project/ScanEsly.jpeg";
import imgClientMenu from "@/assets/NFE Project/ClientMenu.jpeg";
import imgDemand from "@/assets/NFE Project/Demand.jpeg";
import imgAdmin from "@/assets/NFE Project/AdminPage.jpeg";

const imageMap: Record<string, string> = {
  "ScanEsly.jpeg": imgScan,
  "ClientMenu.jpeg": imgClientMenu,
  "Demand.jpeg": imgDemand,
  "AdminPage.jpeg": imgAdmin,
};

const benefitIcons = [Clock, Utensils, CheckCircle, Smartphone, BarChart3];

export function SmartMenuNfcPage() {
  const { t, rtl } = useLang();
  const p = t.nfc;

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

        {/* Promo ticker */}
        <Reveal>
          <div className="mt-8 overflow-hidden rounded-full border border-gold/40 bg-gold/10">
            <div className="flex items-center justify-center gap-3 px-6 py-3">
              <Percent className="h-4 w-4 text-gold" />
              <span className="text-sm font-bold text-gold">{p.promo}</span>
              <span className="text-xs text-muted-foreground">—</span>
              <span className="text-xs text-muted-foreground">{p.promoDetail}</span>
            </div>
          </div>
        </Reveal>

        {/* Hero */}
        <Reveal>
          <div className="mt-10">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-tech)" }}
              >
                <Clock className="h-3.5 w-3.5" />
                {p.status}
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-bold text-cream sm:text-5xl lg:text-6xl">
              {p.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{p.subtitle}</p>
          </div>
        </Reveal>

        {/* Scan + Menu preview */}
        <Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img src={imgScan} alt="Scan NFC" className="w-full object-cover" loading="eager" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={imgClientMenu}
                alt="Menu client"
                className="w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </Reveal>

        {/* Intro */}
        <Reveal>
          <p className="mt-12 max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            {p.intro}
          </p>
        </Reveal>

        {/* How it works */}
        <Reveal>
          <h2 className="mt-20 text-2xl font-bold text-cream sm:text-3xl">{p.howItWorks}</h2>
          <div className="gold-rule mt-6 max-w-xs" />
        </Reveal>

        <div className="mt-12 space-y-16">
          {p.sections.map((section, i) => {
            const imgs = section.images.map((name) => imageMap[name]).filter(Boolean);
            return (
              <Reveal key={section.heading}>
                <div
                  className={`flex flex-col gap-10 ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center`}
                >
                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cream sm:text-2xl">{section.heading}</h3>
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

        {/* Benefits */}
        <Reveal>
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-cream sm:text-3xl">{p.benefits}</h2>
            <div className="gold-rule mt-6 max-w-xs" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {p.benefitsList.map((benefit, i) => {
                const Icon = benefitIcons[i] || CheckCircle;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-border bg-surface p-5"
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Admin dashboard */}
        <Reveal>
          <div className="mt-20 flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cream sm:text-3xl">{p.adminTitle}</h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground lg:text-base">
                {p.adminText}
              </p>
            </div>
            <div className="flex-1">
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={imgAdmin}
                  alt="Admin dashboard"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Reviews */}
        <Reveal>
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-cream sm:text-3xl">{p.reviews}</h2>
            <div className="gold-rule mt-6 max-w-xs" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {p.reviewsList.map((review, i) => (
                <div key={i} className="rounded-2xl border border-border bg-surface p-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    "{review.text}"
                  </p>
                  <p className="mt-4 text-sm font-semibold text-cream">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <div className="mt-24 rounded-2xl border border-tech/30 bg-surface p-10 text-center lg:p-16">
            {/* Promo badge in CTA */}
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2">
              <Percent className="h-4 w-4 text-gold" />
              <span className="text-sm font-bold text-gold">{p.promo}</span>
            </div>

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
                style={{ background: "var(--gradient-tech)" }}
              >
                <Mail className="h-4 w-4" />
                {p.joinWaitlist}
              </Link>
              <Link
                to="/contact-sales"
                className="inline-flex items-center gap-2 rounded-full border border-tech/40 bg-tech/10 px-8 py-3 text-sm font-semibold text-tech transition-all hover:bg-tech/20"
              >
                <Send className="h-4 w-4" />
                {p.contactSales}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
