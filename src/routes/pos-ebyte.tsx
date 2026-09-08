import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PosEbytePage } from "@/components/site/PosEbytePage";

const title = "POS eByte — Point de vente complet pour commerces marocains";
const description =
  "POS eByte, logiciel de point de vente complet et hors ligne pour les entreprises marocaines — ventes, stock, facturation et opérations quotidiennes.";

export const Route = createFileRoute("/pos-ebyte")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
