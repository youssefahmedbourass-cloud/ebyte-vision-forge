import { Store, Library, Building2, Nfc, Sparkles } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/hooks/use-reveal";

const icons = [Store, Library, Building2, Nfc];

export function Products() {
  const { t } = useLang();
  return (
    <section id="products" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-cream sm:text-4xl">{t.products.title}</h2>
          <div className="gold-rule mt-6 max-w-xs" />
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">{t.products.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {t.products.items.map((p, i) => {
            const Icon = icons[i];
            const flagship = i === 0;
            const isNfc = i === 3;
            return (
              <Reveal key={p.name} delay={i * 100} className={flagship ? "md:col-span-2" : ""}>
                <div
                  className={`card-surface relative h-full overflow-hidden rounded-2xl p-8 ${
                    flagship ? "border-gold/40" : ""
                  }`}
                >
                  {flagship && (
                    <div
                      className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full blur-3xl"
                      style={{ background: "var(--gradient-gold)", opacity: 0.12 }}
                    />
                  )}
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/60 text-gold">
                      <Icon className="h-6 w-6" />
                    </div>
                    {flagship && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        <Sparkles className="h-3.5 w-3.5" />
                        {t.products.flagship}
                      </span>
                    )}
                    {isNfc && (
                      <span
                        className="rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground"
                        style={{ background: "var(--gradient-tech)" }}
                      >
                        {t.products.badgeNew}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`relative mt-6 font-semibold text-cream ${flagship ? "text-2xl" : "text-lg"}`}
                  >
                    {p.name}
                  </h3>
                  <p className="relative mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>

                  {"stat" in p && p.stat && (
                    <p className="relative mt-5 inline-block rounded-full border border-gold/40 px-4 py-1.5 text-xs font-medium text-gold">
                      {p.stat}
                    </p>
                  )}

                  {isNfc && (
                    <a
                      href="#contact"
                      className="glow-pulse relative mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                    >
                      {t.products.reserve}
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
