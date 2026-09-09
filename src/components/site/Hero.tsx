import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/hooks/use-reveal";
import banner from "@/assets/banner.jpg";

export function Hero() {
  const { t, rtl } = useLang();

  return (
    <section id="home" className="diagonal-motif relative overflow-hidden pt-32 pb-20 lg:pt-44">
      <img
        src={banner}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      <div
        className="pointer-events-none absolute left-1/2 top-40 h-72 w-[38rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "var(--gradient-tech)", opacity: 0.18 }}
      />

      <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            eByte Software · Global Solutions
          </span>
        </Reveal>

        {/* Free Trial Banner */}
        <Reveal delay={50}>
          <div className="mx-auto mt-6 max-w-md">
            <Link
              to="/pos-ebyte"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-gold/50 bg-gold/10 px-5 py-2.5 text-sm font-semibold text-gold transition-all hover:scale-105 hover:border-gold hover:bg-gold/20 hover:shadow-[0_0_24px_rgba(212,175,55,0.25)]"
            >
              <span className="absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0" />
              <Sparkles className="h-4 w-4 text-gold" />
              <span>{t.hero.freeTrial}</span>
              <ArrowRight className={`h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 ${rtl ? "rotate-180 group-hover:-translate-x-0.5" : ""}`} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 text-4xl leading-tight font-bold text-cream sm:text-5xl lg:text-6xl">
            <span className="text-gradient-gold">{t.hero.tagline}</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.subtitle}
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              {t.hero.ctaProducts}
              <ArrowRight className={`h-4 w-4 ${rtl ? "rotate-180" : ""}`} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              {t.hero.ctaContact}
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {t.hero.stats.map((s) => (
              <div key={s.label} className="bg-background/80 px-6 py-7">
                <div className="font-display text-3xl font-bold text-gradient-tech">{s.value}</div>
                <div className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
