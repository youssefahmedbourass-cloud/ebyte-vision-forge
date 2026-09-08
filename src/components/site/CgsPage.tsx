import { ArrowLeft, Wrench, Mail, Send } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/hooks/use-reveal";

export function CgsPage() {
  const { t, rtl } = useLang();
  const p = t.cgs;

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
                {t.products.badgeSoon}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                <Wrench className="h-3.5 w-3.5" />
                {p.status}
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-bold text-cream sm:text-5xl lg:text-6xl">
              {p.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{p.subtitle}</p>
          </div>
        </Reveal>

        {/* Under maintenance banner */}
        <Reveal>
          <div className="mt-12 rounded-2xl border border-tech/30 bg-tech/5 p-8 lg:p-12">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-tech/30 bg-tech/10">
                <Wrench className="h-8 w-8 text-tech" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-cream sm:text-2xl">{p.status}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">
                  {p.statusText}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                  style={{ background: "var(--gradient-tech)" }}
                >
                  <Mail className="h-4 w-4" />
                  {p.contactSales}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-tech/40 bg-tech/10 px-6 py-2.5 text-sm font-semibold text-tech transition-all hover:bg-tech/20"
                >
                  <Send className="h-4 w-4" />
                  {p.requestDemo}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Intro */}
        <Reveal>
          <p className="mt-16 max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            {p.intro}
          </p>
        </Reveal>

        {/* Feature sections */}
        <div className="mt-20 space-y-16">
          {p.sections.map((section, i) => (
            <Reveal key={section.heading}>
              <div className="rounded-2xl border border-border bg-surface p-8 lg:p-10">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tech/10 text-sm font-bold text-tech">
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-cream sm:text-2xl">{section.heading}</h2>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground lg:text-base whitespace-pre-line">
                      {section.text}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

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
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
                style={{ background: "var(--gradient-tech)" }}
              >
                <Mail className="h-4 w-4" />
                {p.contactSales}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-tech/40 bg-tech/10 px-8 py-3 text-sm font-semibold text-tech transition-all hover:bg-tech/20"
              >
                <Send className="h-4 w-4" />
                {p.requestDemo}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
