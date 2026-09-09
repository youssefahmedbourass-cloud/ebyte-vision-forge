import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { ContactSalesPage } from "@/components/site/ContactSalesPage";
import { Footer } from "@/components/site/Footer";

const title = "Contact Ventes — eByte Software";
const description =
  "Contactez l'équipe commerciale eByte Software — ventes et support technique.";

export const Route = createFileRoute("/contact-sales")({
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
  component: ContactSales,
});

function ContactSales() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <ContactSalesPage />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
