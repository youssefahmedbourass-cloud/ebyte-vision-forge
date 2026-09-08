import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { MobileAppsPage } from "@/components/site/MobileAppsPage";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services/mobile")({
  head: () => ({
    meta: [
      { title: "Applications Mobiles — eByte Software" },
      {
        name: "description",
        content:
          "Applications natives et cross-platform adaptées à votre activité. Flutter, iOS, Android — du concept au lancement.",
      },
      {
        property: "og:title",
        content: "Applications Mobiles — eByte Software",
      },
      {
        property: "og:description",
        content: "Applications natives et cross-platform adaptées à votre activité.",
      },
    ],
  }),
  component: MobileAppsRoute,
});

function MobileAppsRoute() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <MobileAppsPage />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
