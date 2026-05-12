import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustProofBar from "@/components/TrustProofBar";
import OwnerLedDifference from "@/components/OwnerLedDifference";
import AboutRussell from "@/components/AboutRussell";
import ServicesOverview from "@/components/ServicesOverview";
import ReputationReviews from "@/components/ReputationReviews";
import MovingProcess from "@/components/MovingProcess";
import ServiceAreas from "@/components/ServiceAreas";
import FinalQuoteSection from "@/components/FinalQuoteSection";
import Footer from "@/components/Footer";
import InlineCTA from "@/components/InlineCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <TrustProofBar />
      <hr className="section-divider" />
      <OwnerLedDifference />
      <AboutRussell />
      <section className="pb-12 lg:pb-16 bg-[var(--bg-primary)]">
        <div className="container">
          <InlineCTA
            headline="Ready to plan your move?"
            subtext="Russell will personally review your details and get back to you."
            variant="accent"
          />
        </div>
      </section>
      <hr className="section-divider" />
      <ServicesOverview />
      <ReputationReviews />
      <section className="pb-12 lg:pb-16 bg-[var(--bg-primary)]">
        <div className="container">
          <InlineCTA
            headline="Talk to the person who'll lead your move."
            subtext="No call centres, no runaround. Speak directly with Russell."
          />
        </div>
      </section>
      <hr className="section-divider" />
      <MovingProcess />
      <ServiceAreas />
      <FinalQuoteSection />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}

