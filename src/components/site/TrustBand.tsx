import { Check } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/hooks/use-reveal";

export function TrustBand() {
  const { t } = useLang();
  return (
    <section className="diagonal-motif relative border-y border-border bg-surface/40 py-16">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <h2 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            {t.trust.title}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.trust.items.map((item, i) => (
            <Reveal key={item} delay={i * 90}>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
