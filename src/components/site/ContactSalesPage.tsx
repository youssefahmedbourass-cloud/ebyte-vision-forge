import { ArrowLeft, Phone, Headset, User } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/hooks/use-reveal";

export function ContactSalesPage() {
  const { t, rtl } = useLang();
  const p = t.contactSalesPage;

  return (
    <section className="relative pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        {/* Back link */}
        <Reveal>
          <Link
            to="/"
            className={`inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold ${rtl ? "flex-row-reverse" : ""}`}
          >
            <ArrowLeft className={`h-4 w-4 ${rtl ? "rotate-180" : ""}`} />
            {p.back}
          </Link>
        </Reveal>

        {/* Hero */}
        <Reveal>
          <div className="mt-10 text-center">
            <h1 className="text-4xl font-bold text-cream sm:text-5xl">{p.title}</h1>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">{p.subtitle}</p>
          </div>
        </Reveal>

        {/* Contact Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {/* Sales Contact */}
          <Reveal>
            <div className="rounded-2xl border border-gold/30 bg-surface p-8 text-center">
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{ background: "var(--gradient-gold)" }}
              >
                <User className="h-8 w-8 text-white" />
              </div>
              <h2 className="mt-6 text-xl font-bold text-cream">{p.salesTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.salesRole}</p>
              <div className="mt-6 space-y-3">
                <p className="text-base font-semibold text-cream">{p.salesName}</p>
                <a
                  href={`tel:${p.salesPhone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-6 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold/20"
                >
                  <Phone className="h-4 w-4" />
                  {p.salesPhone}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Tech Support */}
          <Reveal delay={100}>
            <div className="rounded-2xl border border-tech/30 bg-surface p-8 text-center">
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{ background: "var(--gradient-tech)" }}
              >
                <Headset className="h-8 w-8 text-white" />
              </div>
              <h2 className="mt-6 text-xl font-bold text-cream">{p.supportTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.supportRole}</p>
              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${p.supportPhone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-tech/40 bg-tech/10 px-6 py-3 text-sm font-semibold text-tech transition-all hover:bg-tech/20"
                >
                  <Phone className="h-4 w-4" />
                  {p.supportPhone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
