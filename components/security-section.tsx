"use client";

import React from "react";
import { Reveal } from "./ui/reveal";
import { SectionLabel } from "./ui/section-label";
import { Lock, EyeOff, ShieldCheck, ArrowDown } from "lucide-react";

export function SecuritySection() {
  const principles = [
    {
      title: "Private by design",
      description:
        "Your financial information should remain yours, with clear control over how it is used. We never sell your data, run targeted ads, or share portfolio records with third parties.",
      icon: EyeOff,
    },
    {
      title: "Secure connections",
      description:
        "Financial accounts link via regulated, read-only Account Aggregator standards with end-to-end 256-bit TLS encryption. Fermor never has access to execute transactions or move funds.",
      icon: Lock,
    },
    {
      title: "Transparent insights",
      description:
        "Every calculation and insight provides full visibility into the underlying math. We explain why a recommendation surfaces rather than hiding behind unexplained black-box algorithms.",
      icon: ShieldCheck,
    },
  ];

  const architectureFlow = [
    { label: "Financial Accounts", sub: "Banks, Depositories, Mutual Funds" },
    { label: "Secure Connections", sub: "Regulated Read-Only Aggregation" },
    { label: "Fermor Vault", sub: "Zero-Knowledge Local Keying" },
    { label: "Financial Context", sub: "Asset Allocation & Runway Math" },
    { label: "Useful Insights", sub: "Clear Next Actions & Projections" },
  ];

  return (
    <section id="security" className="py-24 sm:py-32 bg-[#F7F8F5] border-t border-[#E5E7E2]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <Reveal>
            <SectionLabel className="mb-3">Privacy & Trust</SectionLabel>
            <h2 className="text-[34px] sm:text-[48px] lg:text-[56px] font-medium tracking-[-0.03em] leading-[1.05] text-[#111310] mb-5">
              Your finances deserve serious privacy.
            </h2>
            <p className="text-[17px] sm:text-[19px] leading-[1.6] text-[#62665F]">
              Financial clarity should never come at the cost of control over your
              information. Fermor is built around explicit data ownership and
              tamper-proof transparency.
            </p>
          </Reveal>
        </div>

        {/* Three Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={idx * 0.1}>
                <div className="h-full p-8 rounded-[28px] bg-white border border-[#E5E7E2] shadow-fermor-card flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-[12px] bg-[#F7F8F5] border border-[#E5E7E2] flex items-center justify-center text-[#173F35] mb-6">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[20px] sm:text-[22px] font-medium text-[#111310] mb-3">
                      {p.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-[#62665F] leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Minimal Architecture Flow Graphic */}
        <Reveal delay={0.2}>
          <div className="p-8 sm:p-10 rounded-[32px] bg-white border border-[#E5E7E2] shadow-fermor-card">
            <div className="text-center max-w-[600px] mx-auto mb-8">
              <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#8D9189] block mb-2">
                Information Architecture
              </span>
              <h3 className="text-[22px] sm:text-[26px] font-medium text-[#111310] tracking-tight">
                How information moves to you.
              </h3>
            </div>

            {/* Horizontal flow on desktop, vertical on mobile */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-2">
              {architectureFlow.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div className="w-full lg:w-auto p-4 rounded-[18px] bg-[#F7F8F5] border border-[#E5E7E2] text-center min-w-[190px]">
                    <span className="text-[14px] font-medium text-[#111310] block">
                      {step.label}
                    </span>
                    <span className="text-[11px] text-[#8D9189] block mt-0.5">
                      {step.sub}
                    </span>
                  </div>

                  {idx < architectureFlow.length - 1 && (
                    <div className="text-[#8D9189] py-1 lg:px-2 flex items-center justify-center">
                      <span className="hidden lg:inline text-lg text-[#8D9189]">→</span>
                      <ArrowDown className="lg:hidden w-4 h-4 text-[#8D9189]" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-center text-[12px] text-[#8D9189] mt-8">
              Read-only protocols ensure neither Fermor nor external actors can initiate fund transfers.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
