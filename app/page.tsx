"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FinancialDashboard } from "@/components/financial-dashboard";
import { ProblemSection } from "@/components/problem-section";
import { ProductFramework } from "@/components/product-framework";
import { UnderstandSection } from "@/components/understand-section";
import { ActSection } from "@/components/act-section";
import { GrowSection } from "@/components/grow-section";
import { AskFermor } from "@/components/ask-fermor";
import { SecuritySection } from "@/components/security-section";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { EarlyAccessModal } from "@/components/ui/early-access-modal";

export default function Home() {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  const handleOpenEarlyAccess = () => {
    setIsEarlyAccessOpen(true);
  };

  const handleCloseEarlyAccess = () => {
    setIsEarlyAccessOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F8F5] text-[#111310] flex flex-col">
      {/* Sticky Translucent Navbar */}
      <Navbar onOpenEarlyAccess={handleOpenEarlyAccess} />

      {/* Main Storytelling Flow */}
      <main className="flex-1">
        {/* Stage 1: Hero */}
        <Hero onOpenEarlyAccess={handleOpenEarlyAccess} />

        {/* Stage 1B: Tangible Product Dashboard Preview */}
        <FinancialDashboard onOpenEarlyAccess={handleOpenEarlyAccess} />

        {/* Stage 2: Fragmentation Problem (Dark contrast section) */}
        <ProblemSection />

        {/* Stage 3: Product Framework (Understand. Act. Grow.) */}
        <ProductFramework />

        {/* Stage 4: Chapter 01 — Understand */}
        <UnderstandSection />

        {/* Stage 5: Chapter 02 — Act */}
        <ActSection onOpenEarlyAccess={handleOpenEarlyAccess} />

        {/* Stage 6: Chapter 03 — Grow (Interactive wealth compounding slider & chart) */}
        <GrowSection />

        {/* Stage 7: Conversational Financial Intelligence */}
        <AskFermor onOpenEarlyAccess={handleOpenEarlyAccess} />

        {/* Stage 8: Privacy & Security */}
        <SecuritySection />

        {/* Stage 9: Final Emotional CTA */}
        <FinalCTA onOpenEarlyAccess={handleOpenEarlyAccess} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Early Access Modal */}
      <EarlyAccessModal
        isOpen={isEarlyAccessOpen}
        onClose={handleCloseEarlyAccess}
      />
    </div>
  );
}
