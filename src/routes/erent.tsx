import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ErentPage } from "@/components/site/ErentPage";

const title = "eRent — Gestion de Location de Voitures au Maroc";
const description =
  "eRent, logiciel offline de gestion de location de véhicules — contrats, flotte, clients et paiements, tout en un seul programme.";

export const Route = createFileRoute("/erent")({
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
  component: ErentRoute,
});

function ErentRoute() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <ErentPage />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
