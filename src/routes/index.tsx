import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Products } from "@/components/site/Products";
import { TrustBand } from "@/components/site/TrustBand";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "eByte Software — Applications Mobile, Web & Desktop sur mesure";
const description =
  "eByte Software, studio marocain à Fès : applications mobiles, web et desktop sur mesure. POS eByte, OAPAM, CGS et Smart Menu NFC.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Products />
          <TrustBand />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
