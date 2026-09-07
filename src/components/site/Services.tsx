import { Smartphone, Globe, Monitor, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/hooks/use-reveal";

const icons = [Smartphone, Globe, Monitor];

export function Services() {
  const { t, rtl } = useLang();
  return (
    <section id="services" className="diagonal-motif relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-cream sm:text-4xl">{t.services.title}</h2>
          <div className="gold-rule mt-6 max-w-xs" />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={s.title} delay={i * 120}>
                <a href="#products" className="card-surface group block h-full rounded-2xl p-7">
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground"
                    style={{ background: "var(--gradient-tech)" }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-cream">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold opacity-70 transition-opacity group-hover:opacity-100">
                    {t.services.learn}
                    <ArrowRight className={`h-4 w-4 ${rtl ? "rotate-180" : ""}`} />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
