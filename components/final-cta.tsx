"use client";

import React, { useState } from "react";
import { Reveal } from "./ui/reveal";
import { Button } from "./ui/button";
import { CheckCircle2, Shield } from "lucide-react";
import confetti from "canvas-confetti";

interface FinalCTAProps {
  onOpenEarlyAccess?: () => void;
}

export function FinalCTA({ onOpenEarlyAccess }: FinalCTAProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#FFFFFF", "#E8F1EC", "#237A55", "#84A98C"],
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-[#173F35] text-white relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#245B4C]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-[840px] mx-auto text-center flex flex-col items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-[12px] uppercase tracking-[0.08em] font-medium mb-6 backdrop-blur-sm border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8F1EC]" />
              Now Accepting Cohort 02 Waitlist
            </div>

            <h2 className="text-[38px] sm:text-[54px] lg:text-[66px] font-medium tracking-[-0.04em] leading-[1.0] text-white mb-6 sm:mb-8 text-balance">
              Your money gets easier when you can see the whole picture.
            </h2>

            <p className="text-[18px] sm:text-[21px] leading-[1.55] text-white/80 max-w-[660px] mx-auto mb-10 text-balance">
              Build a clearer relationship with your finances and make your next
              decision with confidence.
            </p>

            {/* Quick Email Capture or Direct CTA */}
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-[480px] mx-auto flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-[52px] px-5 rounded-[14px] bg-white text-[#111310] placeholder:text-[#8D9189] text-[15px] focus:outline-none focus:ring-2 focus:ring-white flex-1"
                />
                <Button
                  type="submit"
                  variant="dark"
                  onClick={(e) => {
                    if (!email) {
                      e.preventDefault();
                      onOpenEarlyAccess?.();
                    }
                  }}
                  className="h-[52px] px-7 text-[15px] font-medium rounded-[14px]"
                >
                  Join Fermor
                </Button>
              </form>
            ) : (
              <div className="bg-white/10 border border-white/20 rounded-[18px] p-5 max-w-[440px] mx-auto flex items-center gap-3 backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-[#E8F1EC] shrink-0" />
                <span className="text-[15px] text-white text-left">
                  You are registered for Cohort 02. We will reach out to{" "}
                  <span className="font-semibold">{email}</span> shortly.
                </span>
              </div>
            )}

            <div className="mt-8 flex items-center justify-center gap-6 text-[13px] text-white/70">
              <a
                href="#dashboard"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>Explore the product</span>
                <span>→</span>
              </a>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" /> Private by design
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
