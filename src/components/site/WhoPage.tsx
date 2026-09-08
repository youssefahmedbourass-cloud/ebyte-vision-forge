import { Link } from "@tanstack/react-router";
import { Phone, User, ArrowLeft } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/hooks/use-reveal";

export function WhoPage() {
  const { t } = useLang();
  const p = t.whoPage;

  return (
    <section id="who" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {p.back}
          </Link>

          <h2 className="text-3xl font-bold text-cream sm:text-4xl">{p.title}</h2>
          <div className="gold-rule mt-6 max-w-xs" />
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">{p.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.team.map((member, i) => (
            <Reveal key={member.name} delay={i * 100}>
              <div className="card-surface relative h-full overflow-hidden rounded-2xl p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-secondary/60">
                  <User className="h-8 w-8 text-gold" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-cream">{member.name}</h3>

                <span
                  className="mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground"
                  style={{ background: "var(--gradient-tech)" }}
                >
                  {p.roles[member.role as keyof typeof p.roles]}
                </span>

                <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-gold" />
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {member.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
