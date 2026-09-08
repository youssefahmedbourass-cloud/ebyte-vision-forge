import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/hooks/use-reveal";

export const CONTACT = {
  email: "eByteSofware@proton.me",
  phone: "+212 684-651514",
  techSupport: "+212 664-845803",
  linkedin: "https://www.linkedin.com/company/ebyte-software/posts/?viewAsMember=true",
  instagram: "https://www.instagram.com/ebytesofwar?stkn=aXNteTQwNzFoMzBv",
  facebook: "https://web.facebook.com/people/EByte-Software/61592461932058/",
};

export function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `${form.name}\n${form.email}\n${form.phone}\n\n${form.message}`;
    toast.success(t.contact.toast);
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Contact — ${form.name}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none";

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-cream sm:text-4xl">{t.contact.title}</h2>
          <div className="gold-rule mt-6 max-w-xs" />
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">{t.contact.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal delay={120}>
            <div className="card-surface h-full rounded-2xl p-7 hover:translate-y-0">
              <h3 className="text-lg font-semibold text-cream">{t.contact.infoTitle}</h3>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gold" />
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-foreground">
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gold" />
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="hover:text-foreground"
                  >
                    {CONTACT.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-tech" />
                  <span className="text-xs text-muted-foreground">{t.contact.techSupport}:</span>
                  <a
                    href={`tel:${CONTACT.techSupport.replace(/\s/g, "")}`}
                    className="hover:text-foreground"
                  >
                    {CONTACT.techSupport}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gold" />
                  {t.contact.location}
                </li>
              </ul>
              <div className="mt-8 flex gap-3">
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
