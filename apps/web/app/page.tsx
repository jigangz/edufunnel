"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SocialProof from "@/components/social-proof";
import HowItWorks from "@/components/how-it-works";
import CourseCards from "@/components/course-cards";
import Testimonials from "@/components/testimonials";
import PricingTable from "@/components/pricing-table";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import { trackEvent } from "@/lib/funnel";

export default function HomePage() {
  // Track page view on mount
  useEffect(() => {
    trackEvent("page_view");
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <CourseCards />
      <Testimonials />
      <PricingTable />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
