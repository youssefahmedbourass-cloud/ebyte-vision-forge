import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { DesktopAppsPage } from "@/components/site/DesktopAppsPage";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services/desktop")({
  head: () => ({
    meta: [
      { title: "Logiciels Desktop — eByte Software" },
      {
        name: "description",
        content:
          "Applications desktop robustes et hors ligne. POS, ERP, systèmes de gestion — du concept au déploiement.",
      },
      {
        property: "og:title",
        content: "Logiciels Desktop — eByte Software",
      },
      {
        property: "og:description",
        content: "Applications desktop robustes et hors ligne. POS, ERP, systèmes de gestion.",
      },
    ],
  }),
  component: DesktopAppsRoute,
});

function DesktopAppsRoute() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <DesktopAppsPage />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
