import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { WebAppsPage } from "@/components/site/WebAppsPage";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services/web")({
  head: () => ({
    meta: [
      { title: "Applications Web — eByte Software" },
      {
        name: "description",
        content:
          "Plateformes web modernes et évolutives. Landing pages, SaaS, ERP, systèmes de gestion — du concept au déploiement.",
      },
      {
        property: "og:title",
        content: "Applications Web — eByte Software",
      },
      {
        property: "og:description",
        content:
          "Plateformes web modernes et évolutives. Landing pages, SaaS, ERP, systèmes de gestion.",
      },
    ],
  }),
  component: WebAppsRoute,
});

function WebAppsRoute() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <WebAppsPage />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
