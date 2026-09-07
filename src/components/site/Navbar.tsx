import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import logo from "@/assets/logo.png";

const sections = ["home", "about", "services", "products", "contact"] as const;

export function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="eByte Software" width={40} height={40} className="h-10 w-10" />
          <span className="font-display text-lg font-semibold tracking-tight text-cream">
            eByte <span className="text-gradient-gold">Software</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.nav[s]}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          className="text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 py-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-foreground"
              >
                {t.nav[s]}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex items-center justify-between gap-4">
            <LanguageSwitcher />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}

      <div className="h-px w-full bg-transparent">
        <div
          className="h-px bg-gold transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
