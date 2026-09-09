import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { OapamPage } from "@/components/site/OapamPage";
import { Footer } from "@/components/site/Footer";

const title = "OAPAM — Gestion de Stock et Inventaire | eByte Software";
const description =
  "OAPAM : système de gestion de stock et inventaire pour fournitures et équipements de bureau. Suivi des distributions, rapports, génération PDF, fonctionne hors ligne.";

export const Route = createFileRoute("/oapam")({
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
  component: Oapam,
});

function Oapam() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <OapamPage />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
