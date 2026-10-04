"use client";

import React from "react";
import { Reveal } from "./ui/reveal";
import { SectionLabel } from "./ui/section-label";
import { financialData } from "@/data/demo-financial-data";
import { AnimatedNumber } from "./ui/animated-number";
import {
  TrendingUp,
  TrendingDown,
  PieChart as PieIcon,
  Target,
} from "lucide-react";

export function UnderstandSection() {
  const goal = financialData.goals[0];

  return (
    <section id="understand" className="py-24 sm:py-32 bg-[#F7F8F5]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-[760px] mb-14 sm:mb-16">
          <Reveal>
            <SectionLabel className="mb-3">01 / Understand</SectionLabel>
            <h2 className="text-[34px] sm:text-[48px] lg:text-[56px] font-medium tracking-[-0.03em] leading-[1.05] text-[#111310] mb-5">
              Everything you own, owe, spend and invest — understood together.
            </h2>
            <p className="text-[17px] sm:text-[19px] leading-[1.6] text-[#62665F]">
              Fermor gives you one connected view of your financial life instead
              of making you move between accounts, applications and spreadsheets.
            </p>
          </Reveal>
        </div>

        {/* Bento Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* Card 1: Net Worth (Span 7) */}
          <div className="md:col-span-7">
            <Reveal delay={0.05}>
              <div className="h-full p-7 sm:p-8 rounded-[28px] bg-white border border-[#E5E7E2] shadow-fermor-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-[#8D9189]">
                      Net Worth
                    </span>
                    <span className="inline-flex items-center gap-1 text-[13px] font-medium text-[#237A55] bg-[#E8F1EC] px-2.5 py-0.5 rounded-full">
                      <TrendingUp className="w-3.5 h-3.5" />
                      +{financialData.yearlyGrowth}% YTD
                    </span>
                  </div>

                  <div className="text-[40px] sm:text-[48px] font-medium tracking-tight text-[#111310] mb-2 leading-none">
                    <AnimatedNumber value={1842500} format="compact" />
                  </div>
                  <p className="text-[14px] text-[#62665F]">
                    Total assets minus active obligations across 7 verified institutions.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E5E7E2] grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-[#8D9189] block">Assets</span>
                    <span className="font-medium text-[#111310] text-[15px]">
                      ₹19.77L
                    </span>
                  </div>
                  <div>
                    <span className="text-[#8D9189] block">Liabilities</span>
                    <span className="font-medium text-[#111310] text-[15px]">
                      ₹1.35L
                    </span>
                  </div>
                  <div>
                    <span className="text-[#8D9189] block">Liquid Share</span>
                    <span className="font-medium text-[#237A55] text-[15px]">
                      22.8%
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Card 2: Savings Rate (Span 5) */}
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <div className="h-full p-7 sm:p-8 rounded-[28px] bg-white border border-[#E5E7E2] shadow-fermor-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-[#8D9189]">
                      Savings Rate
                    </span>
                    <span className="text-[12px] font-medium text-[#237A55] bg-[#E8F1EC] px-2 py-0.5 rounded-full">
                      +3% vs last Q
                    </span>
                  </div>
                  <div className="text-[40px] sm:text-[48px] font-medium tracking-tight text-[#111310] mb-2 leading-none">
                    {financialData.savingsRate}%
                  </div>
                  <p className="text-[14px] text-[#62665F]">
                    Percentage of active take-home allocated into liquid reserves & investments.
                  </p>
                </div>

                <div className="mt-6">
                  <div className="w-full bg-[#F7F8F5] h-2.5 rounded-full overflow-hidden border border-[#E5E7E2]">
                    <div
                      className="bg-[#173F35] h-full rounded-full transition-all duration-1000"
                      style={{ width: `${financialData.savingsRate}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-[#8D9189] mt-2 font-mono">
                    <span>0% Baseline</span>
                    <span className="text-[#173F35] font-medium">Recommended: 25%</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Card 3: Monthly Spending (Span 4) */}
          <div className="md:col-span-4">
            <Reveal delay={0.15}>
              <div className="h-full p-7 rounded-[28px] bg-white border border-[#E5E7E2] shadow-fermor-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-[#8D9189]">
                      Monthly Spending
                    </span>
                    <span className="inline-flex items-center gap-1 text-[12px] font-medium text-[#237A55] bg-[#E8F1EC] px-2 py-0.5 rounded">
                      <TrendingDown className="w-3.5 h-3.5" />
                      8% lower
                    </span>
                  </div>
                  <div className="text-[32px] sm:text-[36px] font-medium text-[#111310] tracking-tight mb-2">
                    ₹38,420
                  </div>
                  <p className="text-[13px] text-[#62665F]">
                    Across dining, transit, groceries and recurring utilities.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 text-[11px]">
                  <span className="px-2 py-1 rounded-[8px] bg-[#F7F8F5] text-[#62665F] border border-[#E5E7E2]">
                    Dining ₹9,680
                  </span>
                  <span className="px-2 py-1 rounded-[8px] bg-[#F7F8F5] text-[#62665F] border border-[#E5E7E2]">
                    Rent ₹18,000
                  </span>
                  <span className="px-2 py-1 rounded-[8px] bg-[#F7F8F5] text-[#62665F] border border-[#E5E7E2]">
                    Utilities ₹4,200
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Card 4: Investment Allocation (Span 4) */}
          <div className="md:col-span-4">
            <Reveal delay={0.2}>
              <div className="h-full p-7 rounded-[28px] bg-white border border-[#E5E7E2] shadow-fermor-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-[#8D9189]">
                      Asset Allocation
                    </span>
                    <PieIcon className="w-4 h-4 text-[#8D9189]" />
                  </div>
                  
                  {/* Visual stacked allocation bar */}
                  <div className="h-3 w-full rounded-full overflow-hidden flex gap-0.5 mb-5 bg-[#E5E7E2]">
                    <div className="bg-[#173F35] h-full" style={{ width: "62%" }} title="Equity 62%" />
                    <div className="bg-[#245B4C] h-full" style={{ width: "18%" }} title="Debt 18%" />
                    <div className="bg-[#52796F] h-full" style={{ width: "12%" }} title="Cash 12%" />
                    <div className="bg-[#84A98C] h-full" style={{ width: "8%" }} title="Gold 8%" />
                  </div>

                  <div className="space-y-2 text-[13px]">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-[#62665F]">
                        <span className="w-2 h-2 rounded-full bg-[#173F35]" />
                        Equity
                      </span>
                      <span className="font-medium text-[#111310] tabular-nums">62%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-[#62665F]">
                        <span className="w-2 h-2 rounded-full bg-[#245B4C]" />
                        Debt & Bonds
                      </span>
                      <span className="font-medium text-[#111310] tabular-nums">18%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-[#62665F]">
                        <span className="w-2 h-2 rounded-full bg-[#52796F]" />
                        Liquid Cash
                      </span>
                      <span className="font-medium text-[#111310] tabular-nums">12%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-[#62665F]">
                        <span className="w-2 h-2 rounded-full bg-[#84A98C]" />
                        Gold & Commodities
                      </span>
                      <span className="font-medium text-[#111310] tabular-nums">8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Card 5: Goals & Credit (Span 4) */}
          <div className="md:col-span-4">
            <Reveal delay={0.25}>
              <div className="h-full p-7 rounded-[28px] bg-white border border-[#E5E7E2] shadow-fermor-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-[#8D9189]">
                      Active Milestone
                    </span>
                    <Target className="w-4 h-4 text-[#173F35]" />
                  </div>

                  <h3 className="text-[18px] font-medium text-[#111310] mb-1">
                    {goal.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-[26px] font-medium text-[#111310] tabular-nums">
                      ₹3.6L
                    </span>
                    <span className="text-[14px] text-[#8D9189]">/ ₹5.0L</span>
                  </div>

                  <div className="w-full bg-[#F7F8F5] h-2 rounded-full overflow-hidden border border-[#E5E7E2] mb-3">
                    <div
                      className="bg-[#237A55] h-full rounded-full"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-[12px] text-[#62665F]">
                    <span>{goal.progress}% completed</span>
                    <span className="text-[#237A55] font-medium">8.2 mos runway</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E7E2] flex items-center justify-between text-xs">
                  <span className="text-[#8D9189]">Credit Score</span>
                  <span className="font-medium text-[#111310]">
                    782 • Excellent
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
