import {
  ArrowLeft,
  Clock,
  Mail,
  Send,
  CheckCircle,
  Wifi,
  Shield,
  Printer,
  Calendar,
  CreditCard,
  AlertTriangle,
  BarChart3,
  HardDrive,
  FileDown,
  Car,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/hooks/use-reveal";

import imgApp from "@/assets/eRent/App.jpeg";
import imgMan from "@/assets/eRent/man work on system.jpeg";
import imgImage1 from "@/assets/eRent/image 1.jpeg";
import imgContact from "@/assets/eRent/contact us.jpeg";

const imageMap: Record<string, string> = {
  "App.jpeg": imgApp,
  "man work on system.jpeg": imgMan,
  "image 1.jpeg": imgImage1,
  "contact us.jpeg": imgContact,
};

const featureIcons = [
  Car,
  Printer,
  Calendar,
  CreditCard,
  AlertTriangle,
  BarChart3,
  Wifi,
  HardDrive,
];

export function ErentPage() {
  const { t, rtl } = useLang();
  const p = t.erent;

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

        {/* App preview */}
        <Reveal>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border">
            <img src={imgApp} alt="eRent App" className="w-full object-cover" loading="eager" />
          </div>
        </Reveal>

        {/* Intro */}
        <Reveal>
          <p className="mt-12 max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            {p.intro}
          </p>
        </Reveal>

        {/* Feature sections */}
        <div className="mt-20 space-y-16">
          {p.sections.map((section, i) => {
            const imgs = section.images.map((name) => imageMap[name]).filter(Boolean);
            return (
              <Reveal key={section.heading}>
                <div
                  className={`flex flex-col gap-10 ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center`}
                >
                  {/* Text */}
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-cream sm:text-2xl">{section.heading}</h2>
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

        {/* Features grid */}
        <Reveal>
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-cream sm:text-3xl">{p.features}</h2>
            <div className="gold-rule mt-6 max-w-xs" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {p.featuresList.map((feature, i) => {
                const Icon = featureIcons[i] || CheckCircle;
                return (
                  <div key={i} className="rounded-xl border border-border bg-surface p-5">
                    <Icon className="h-5 w-5 text-gold" />
                    <h3 className="mt-3 text-sm font-bold text-cream">{feature.heading}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Moroccan context */}
        <Reveal>
          <div className="mt-20 rounded-2xl border border-gold/30 bg-surface p-8 lg:p-12">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10">
                <Shield className="h-8 w-8 text-gold" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-cream sm:text-2xl">{p.context}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">
                  {p.contextText}
                </p>
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
                style={{ background: "var(--gradient-tech)" }}
              >
                <Mail className="h-4 w-4" />
                {p.orderBtn}
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
