import { Package, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/hooks/use-reveal";

const partnerApps = [
  {
    name: "OAPAM",
    description: {
      fr: "Gestion de stock et inventaire pour fournitures et équipements de bureau — suivi des distributions, rapports, génération PDF, fonctionne hors ligne.",
      en: "Stock and inventory management for office supplies and equipment — distribution tracking, reports, PDF generation, works offline.",
      ar: "إدارة المخزون والجرد للمستلزمات والتجهيزات المكتبية — تتبع التوزيعات، التقارير، توليد PDF، يعمل دون إنترنت.",
    },
    icon: Package,
    color: "tech",
  },
];

export function PartnerApps() {
  const { t, lang } = useLang();
  return (
    <section id="partners" className="diagonal-motif relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] text-tech uppercase">Partners</p>
          <h2 className="mt-4 text-3xl font-bold text-cream sm:text-4xl">{t.partners.title}</h2>
          <div
            className="mt-6 max-w-xs"
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, var(--tech), transparent)",
            }}
          />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {t.partners.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partnerApps.map((app, i) => {
            const Icon = app.icon;
            return (
              <Reveal key={app.name} delay={i * 100}>
                <div className="card-tech relative h-full overflow-hidden rounded-2xl p-7">
                  <div
                    className="pointer-events-none absolute -top-20 right-0 h-40 w-40 rounded-full blur-3xl"
                    style={{ background: "var(--gradient-tech)", opacity: 0.15 }}
                  />
                  <div className="relative">
                    <div
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-white"
                      style={{ background: "var(--gradient-tech)" }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-cream">{app.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {app.description[lang as keyof typeof app.description] || app.description.en}
                    </p>
                    <div className="mt-5 flex items-center gap-4">
                      <Link
                        to="/oapam"
                        className="inline-flex items-center gap-2 text-sm font-medium text-tech transition-colors hover:text-tech-deep"
                      >
                        {t.partners.visitSite}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={100}>
            <div className="card-tech relative h-full overflow-hidden rounded-2xl p-7 border-dashed">
              <div className="relative flex flex-col items-center justify-center text-center h-full min-h-[200px]">
                <ExternalLink className="h-10 w-10 text-tech/50" />
                <p className="mt-4 text-sm text-muted-foreground">
                  {lang === "fr"
                    ? "Plus de partenaires à venir..."
                    : lang === "ar"
                      ? "المزيد من الشركاء قريباً..."
                      : "More partners coming soon..."}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
