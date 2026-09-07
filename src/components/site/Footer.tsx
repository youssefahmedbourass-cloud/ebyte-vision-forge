import { Linkedin, Github } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { CONTACT } from "./Contact";
import logo from "@/assets/logo.png";

const sections = ["home", "about", "services", "products", "contact"] as const;

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="diagonal-motif relative border-t border-border bg-surface/30 py-16">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="eByte Software" width={36} height={36} loading="lazy" className="h-9 w-9" />
              <span className="font-display font-semibold text-cream">eByte Software</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{t.footer.tagline}</p>
            <div className="mt-5">
              <LanguageSwitcher />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream">{t.footer.quick}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {sections.map((s) => (
                <li key={s}>
                  <a href={`#${s}`} className="transition-colors hover:text-gold">
                    {t.nav[s]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream">{t.footer.productsTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {t.products.items.map((p) => (
                <li key={p.name}>
                  <a href="#products" className="transition-colors hover:text-gold">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream">{t.footer.contactTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>{CONTACT.email}</li>
              <li>{CONTACT.phone}</li>
              <li>{t.contact.location}</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="gold-rule mt-12" />
        <p className="mt-6 text-center text-xs text-muted-foreground">{t.footer.rights}</p>
      </div>
    </footer>
  );
}
