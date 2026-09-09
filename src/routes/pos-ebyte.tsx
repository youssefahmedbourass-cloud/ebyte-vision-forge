import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PosEbytePage } from "@/components/site/PosEbytePage";

const title = "POS eByte – Logiciel de Caisse et Gestion pour Commerces au Maroc";
const description =
  "POS eByte : système de caisse complet pour magasins de pièces auto et commerces au Maroc. Gestion des stocks, facturation, sauvegardes sécurisées.";
const canonical = "https://ebytesoftware.onrender.com/pos-ebyte";

export const Route = createFileRoute("/pos-ebyte")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: "fr", href: canonical },
      { rel: "alternate", hrefLang: "ar", href: canonical },
      { rel: "alternate", hrefLang: "en", href: canonical },
      { rel: "alternate", hrefLang: "x-default", href: canonical },
    ],
  }),
  component: PosEbyteRoute,
});

function PosEbyteRoute() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <PosEbytePage />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
