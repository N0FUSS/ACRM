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
import InlineCTA from "@/components/InlineCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      {/* 1. Hero — risk insight and immediate trust */}
      <Hero />
      {/* 2. Trust proof bar — compact credibility */}
      <TrustProofBar />
      <hr className="section-divider" />
      {/* 3. Russell difference — expert judgement in practical move-day decisions */}
      <OwnerLedDifference />
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
      {/* 4. Services — clear routing, not brand repetition */}
      <ServicesOverview />
      {/* 5. Reviews — customer proof */}
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
      {/* 6. Process — confidence through clarity */}
      <MovingProcess />
      {/* 7. Premium value — why proper planning costs less than mistakes */}
      <PremiumValue />
      {/* 8. Service areas — truthful geography */}
      <ServiceAreas />
      {/* 9. About Russell — human depth after the visitor understands the service */}
      <AboutRussell />
      {/* 10. Quote — conversion */}
      <FinalQuoteSection />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
