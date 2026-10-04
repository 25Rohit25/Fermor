"use client";

import React, { useState } from "react";
import { Reveal } from "./ui/reveal";
import { SectionLabel } from "./ui/section-label";
import { Sparkles, ArrowRight, TrendingUp } from "lucide-react";

interface ActSectionProps {
  onOpenEarlyAccess?: () => void;
}

export function ActSection({ onOpenEarlyAccess }: ActSectionProps) {
  const [activeView, setActiveView] = useState<"projection" | "breakdown">("projection");

  return (
    <section id="act" className="py-24 sm:py-32 bg-[#F7F8F5]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-[760px] mb-14 sm:mb-16">
          <Reveal>
            <SectionLabel className="mb-3">02 / Act</SectionLabel>
            <h2 className="text-[34px] sm:text-[48px] lg:text-[56px] font-medium tracking-[-0.03em] leading-[1.05] text-[#111310] mb-5">
              Turn financial information into useful decisions.
            </h2>
            <p className="text-[17px] sm:text-[19px] leading-[1.6] text-[#62665F]">
              Knowing what happened matters. Knowing what to do next matters more.
              Fermor filters out market noise and translates raw transactions into
              clear opportunities.
            </p>
          </Reveal>
        </div>

        {/* Main Recommendation Feature Card */}
        <Reveal delay={0.1}>
          <div className="rounded-[32px] bg-white border border-[#E5E7E2] shadow-fermor-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Context & Recommendation */}
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#173F35]" />
                    <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#173F35]">
                      Fermor Contextual Insight
                    </span>
                  </div>

                  <h3 className="text-[26px] sm:text-[32px] font-medium tracking-[-0.02em] text-[#111310] leading-tight mb-4">
                    Your dining spend increased ₹4,280 this month.
                  </h3>

                  <p className="text-[16px] sm:text-[18px] text-[#62665F] leading-relaxed mb-8">
                    Redirecting <span className="text-[#111310] font-medium">₹3,000/month</span> to your
                    current index SIP could increase your projected 10-year
                    portfolio by approximately{" "}
                    <span className="text-[#173F35] font-medium">₹6.1 Lakhs</span>.
                  </p>

                  {/* Toggle View Tabs */}
                  <div className="inline-flex p-1 bg-[#F7F8F5] rounded-[12px] border border-[#E5E7E2] mb-6">
                    <button
                      onClick={() => setActiveView("projection")}
                      className={`px-3.5 py-1.5 text-[13px] font-medium rounded-[8px] transition-all cursor-pointer ${
                        activeView === "projection"
                          ? "bg-white text-[#111310] shadow-sm"
                          : "text-[#62665F] hover:text-[#111310]"
                      }`}
                    >
                      Compounding Impact
                    </button>
                    <button
                      onClick={() => setActiveView("breakdown")}
                      className={`px-3.5 py-1.5 text-[13px] font-medium rounded-[8px] transition-all cursor-pointer ${
                        activeView === "breakdown"
                          ? "bg-white text-[#111310] shadow-sm"
                          : "text-[#62665F] hover:text-[#111310]"
                      }`}
                    >
                      Dining Variance Details
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E5E7E2] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-[13px] text-[#8D9189]">
                    Based on 12% historical index CAGR • No lifestyle disruption
                  </span>
                  <button
                    onClick={onOpenEarlyAccess}
                    className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#173F35] hover:text-[#245B4C] group"
                  >
                    <span>Execute SIP adjustment</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Contrast & Compounding Metric */}
              <div className="lg:col-span-5 bg-[#F7F8F5] p-8 sm:p-10 border-t lg:border-t-0 lg:border-l border-[#E5E7E2] flex flex-col justify-center">
                {activeView === "projection" ? (
                  <div className="space-y-5">
                    <div className="p-6 rounded-[22px] bg-white border border-[#E5E7E2] shadow-sm">
                      <div className="flex items-center justify-between text-[12px] text-[#8D9189] uppercase tracking-wider mb-2">
                        <span>Projected 10-Yr Surplus</span>
                        <TrendingUp className="w-4 h-4 text-[#237A55]" />
                      </div>
                      <div className="text-[34px] sm:text-[38px] font-medium text-[#173F35] tracking-tight leading-none mb-2">
                        +₹6,10,000
                      </div>
                      <p className="text-[13px] text-[#62665F]">
                        From a ₹100/day reallocation compounded at index rates.
                      </p>
                    </div>

                    <div className="p-4 rounded-[16px] bg-[#E8F1EC] border border-[#C5DED3] text-xs text-[#173F35] flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 shrink-0 text-[#237A55]" />
                      <span>
                        Fermor identifies reallocations that compound without
                        touching essential emergency cash.
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="text-[12px] uppercase tracking-wider text-[#8D9189] mb-1 font-medium">
                      Spend Comparison
                    </div>
                    
                    <div className="p-4 rounded-[16px] bg-white border border-[#E5E7E2] flex items-center justify-between">
                      <div>
                        <span className="text-[13px] text-[#62665F] block">
                          This Month Dining
                        </span>
                        <span className="text-[18px] font-medium text-[#111310]">
                          ₹9,680
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#A87531] bg-[#FDF6ED] px-2 py-1 rounded">
                        6 outings
                      </span>
                    </div>

                    <div className="p-4 rounded-[16px] bg-white border border-[#E5E7E2] flex items-center justify-between">
                      <div>
                        <span className="text-[13px] text-[#62665F] block">
                          Typical Monthly Baseline
                        </span>
                        <span className="text-[18px] font-medium text-[#111310]">
                          ₹5,400
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#62665F] bg-[#F7F8F5] px-2 py-1 rounded">
                        3-mo avg
                      </span>
                    </div>

                    <div className="p-4 rounded-[16px] bg-[#F7F8F5] border border-[#E5E7E2] flex items-center justify-between text-xs">
                      <span className="text-[#62665F]">Unbudgeted Delta</span>
                      <span className="font-medium text-[#111310] tabular-nums">
                        +₹4,280
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
