import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/hooks/use-reveal";

export const CONTACT = {
  email: "contact@ebyte-software.ma",
  phone: "+212 6 00 00 00 00",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
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
          <Reveal>
            <form onSubmit={onSubmit} className="card-surface rounded-2xl p-7 hover:translate-y-0">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  className={field}
                  placeholder={t.contact.name}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  required
                  type="email"
                  className={field}
                  placeholder={t.contact.email}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <input
                className={`${field} mt-4`}
                placeholder={t.contact.phone}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <textarea
                required
                rows={5}
                className={`${field} mt-4 resize-none`}
                placeholder={t.contact.message}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto sm:px-10"
              >
                {t.contact.submit}
              </button>
            </form>
          </Reveal>

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
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
                    {CONTACT.phone}
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
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
