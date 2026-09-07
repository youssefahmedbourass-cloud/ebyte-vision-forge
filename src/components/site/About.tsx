import { Layers, Boxes, MapPin } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/hooks/use-reveal";

const icons = [Boxes, Layers, MapPin];

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">eByte</p>
          <h2 className="mt-4 text-3xl font-bold text-cream sm:text-4xl">{t.about.title}</h2>
          <div className="gold-rule mt-6 max-w-xs" />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {t.about.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.about.cards.map((c, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={c.title} delay={i * 120}>
                <div className="card-surface h-full rounded-2xl p-7">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary/60 text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-cream">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
