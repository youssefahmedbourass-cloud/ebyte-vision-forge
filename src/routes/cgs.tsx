import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CgsPage } from "@/components/site/CgsPage";

const title = "CGS — Système de Gestion de Centres de Conduite Marocains";
const description =
  "CGS, plateforme de gestion complète pour les auto-écoles marocaines — élèves, moniteurs, paiements et administratif.";

export const Route = createFileRoute("/cgs")({
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
  component: CgsRoute,
});

function CgsRoute() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <CgsPage />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
