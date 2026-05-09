import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalQuoteSection from "@/components/FinalQuoteSection";

export const metadata: Metadata = {
  title: "Contact | Central Lakes Removals",
  description: "Get in touch with Russell Brown to discuss your move. Request a quote or call directly. Based in Cromwell, serving Central Otago and the South Island.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <Header />
      <div id="quote">
        <FinalQuoteSection />
      </div>
      <Footer />
    </main>
  );
}
