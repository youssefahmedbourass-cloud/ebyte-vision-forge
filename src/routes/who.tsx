import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { WhoPage } from "@/components/site/WhoPage";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/who")({
  head: () => ({
    meta: [
      { title: "Qui sommes-nous — eByte Software" },
      {
        name: "description",
        content: "L'équipe derrière eByte Software.",
      },
      { property: "og:title", content: "Qui sommes-nous — eByte Software" },
      {
        property: "og:description",
        content: "L'équipe derrière eByte Software.",
      },
    ],
  }),
  component: WhoRoute,
});

function WhoRoute() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <WhoPage />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
