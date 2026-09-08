import { Reveal } from "@/hooks/use-reveal";
import { useLang } from "@/lib/i18n";

const techCategories = [
  {
    label: { fr: "Frontend", en: "Frontend", ar: "الواجهة الأمامية" },
    items: ["React", "Flutter", "WPF", ".NET MVC"],
  },
  {
    label: { fr: "Backend", en: "Backend", ar: "الخادم" },
    items: [".NET Core", "Laravel"],
  },
  {
    label: { fr: "Base de données", en: "Databases", ar: "قواعد البيانات" },
    items: ["SQL Server", "PostgreSQL", "MongoDB", "SQLite", "Supabase", "Firebase"],
  },
  {
    label: { fr: "DevOps & Outils", en: "DevOps & Tools", ar: "DevOps والأدوات" },
    items: ["Docker", "Jenkins", "Git", "GitHub", "Prometheus", "Grafana"],
  },
];

export function TechStack() {
  const { t, lang } = useLang();
  return (
    <section id="tech" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] text-tech uppercase">
            {t.techStack.label}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-cream sm:text-4xl">{t.techStack.title}</h2>
          <div
            className="mt-6 max-w-xs"
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, var(--tech), transparent)",
            }}
          />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {t.techStack.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {techCategories.map((cat, ci) => (
            <Reveal key={cat.label.en} delay={ci * 100}>
              <div className="card-tech rounded-2xl p-6">
                <h3 className="text-sm font-semibold tracking-wider text-tech uppercase">
                  {cat.label[lang as keyof typeof cat.label] || cat.label.en}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-tech/30 bg-tech/10 px-3 py-1.5 text-xs font-medium text-tech"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
