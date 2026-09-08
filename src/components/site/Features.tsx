import {
  Brain,
  Shield,
  Lightbulb,
  Handshake,
  Headphones,
  Target,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/hooks/use-reveal";

const icons: LucideIcon[] = [Brain, Shield, Lightbulb, Handshake, Headphones, Target];

export function Features() {
  const { t } = useLang();
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] text-tech uppercase">Excellence</p>
          <h2 className="mt-4 text-3xl font-bold text-cream sm:text-4xl">{t.features.title}</h2>
          <div
            className="mt-6 max-w-xs"
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, var(--tech), transparent)",
            }}
          />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {t.features.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((f, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={f.title} delay={i * 100}>
                <div className="card-tech h-full rounded-2xl p-7">
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white"
                    style={{ background: "var(--gradient-tech)" }}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-cream">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
