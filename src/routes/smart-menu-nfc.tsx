import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SmartMenuNfcPage } from "@/components/site/SmartMenuNfcPage";

const title = "Smart Menu NFC — Menu Digital pour Restaurants au Maroc";
const description =
  "Smart Menu NFC, menus numériques sans contact pour restaurants et cafés au Maroc — commandes instantanées via NFC et QR code.";

export const Route = createFileRoute("/smart-menu-nfc")({
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
  component: SmartMenuNfcRoute,
});

function SmartMenuNfcRoute() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <SmartMenuNfcPage />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
