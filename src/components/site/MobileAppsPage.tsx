import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/hooks/use-reveal";

import mobileHero from "@/assets/Mobile/Devloppements.jpeg";
import mobileImg1 from "@/assets/Mobile/Connected Apps.jpeg";
import mobileImg2 from "@/assets/Mobile/5. Architecture  backend connection concept.jpeg";
import mobileImg3 from "@/assets/Mobile/Gemini_Generated_Image_whbnjrwhbnjrwhbn.jpeg";
import mobileImg4 from "@/assets/Mobile/Gemini_Generated_Image_6r9gdt6r9gdt6r9g.jpeg";
import mobileImg5 from "@/assets/Mobile/manTakeTheApp.jpeg";

const images = [mobileImg1, mobileImg2, mobileImg3, mobileImg4, mobileImg5];

export function MobileAppsPage() {
  const { t, rtl } = useLang();
  const p = t.mobileApps;

  return (
    <section id="mobile-apps" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className={`h-4 w-4 ${rtl ? "rotate-180" : ""}`} />
            {p.back}
          </Link>

          <h2 className="text-3xl font-bold text-cream sm:text-4xl">{p.hero.title}</h2>
          <div className="gold-rule mt-6 max-w-xs" />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {p.hero.subtitle}
          </p>
        </Reveal>

        <div className="mt-10">
          <Reveal>
            <img
              src={mobileHero}
              alt="Mobile Apps"
              className="w-full rounded-2xl border border-border object-cover"
              style={{ maxHeight: 420 }}
            />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {p.sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 80}>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-cream">{section.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{section.text}</p>
                {images[i] && (
                  <img
                    src={images[i]}
                    alt={section.title}
                    className="mt-4 w-full rounded-xl border border-border object-cover"
                    style={{ maxHeight: 260 }}
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 rounded-2xl border border-border bg-secondary/30 p-8">
            <h3 className="text-xl font-bold text-cream">
              {rtl ? "لماذا تختار eByte للهاتف" : "Pourquoi choisir eByte pour le Mobile"}
            </h3>
            <ul className="mt-6 space-y-3">
              {p.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-12 text-center text-base font-medium text-cream">{p.cta}</p>
        </Reveal>
      </div>
    </section>
  );
}
