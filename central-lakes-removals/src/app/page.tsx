import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustProofBar from "@/components/TrustProofBar";
import OwnerLedDifference from "@/components/OwnerLedDifference";
import ServicesOverview from "@/components/ServicesOverview";
import ReputationReviews from "@/components/ReputationReviews";
import MovingProcess from "@/components/MovingProcess";
import PremiumValue from "@/components/PremiumValue";
import ServiceAreas from "@/components/ServiceAreas";
import AboutRussell from "@/components/AboutRussell";
import FinalQuoteSection from "@/components/FinalQuoteSection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <TrustProofBar />
      <OwnerLedDifference />
      <ServicesOverview />
      <ReputationReviews />
      <MovingProcess />
      <PremiumValue />
      <ServiceAreas />
      <AboutRussell />
      <FinalQuoteSection />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
