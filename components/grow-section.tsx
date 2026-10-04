"use client";

import React, { useState, useMemo } from "react";
import { Reveal } from "./ui/reveal";
import { SectionLabel } from "./ui/section-label";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { calculateProjection } from "@/lib/projection";
import { formatINR } from "@/lib/utils";
import { TrendingUp, Info } from "lucide-react";

export function GrowSection() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(25000);

  // Compute projection dynamically whenever slider changes
  const projection = useMemo(() => {
    return calculateProjection(monthlyInvestment, 1240000, 0.112);
  }, [monthlyInvestment]);

  return (
    <section id="grow" className="py-24 sm:py-32 bg-[#F7F8F5]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-[760px] mb-14 sm:mb-16">
          <Reveal>
            <SectionLabel className="mb-3">03 / Grow</SectionLabel>
            <h2 className="text-[34px] sm:text-[48px] lg:text-[56px] font-medium tracking-[-0.03em] leading-[1.05] text-[#111310] mb-5">
              See where today&apos;s decisions can take you.
            </h2>
            <p className="text-[17px] sm:text-[19px] leading-[1.6] text-[#62665F]">
              Explore how small changes in saving and investing could influence
              your financial future over 5, 10, and 15 years.
            </p>
          </Reveal>
        </div>

        {/* Wealth Projection Card */}
        <Reveal delay={0.1}>
          <div className="p-6 sm:p-10 lg:p-12 rounded-[32px] bg-white border border-[#E5E7E2] shadow-fermor-card">
            {/* Top Interactive Controls */}
            <div className="mb-10 pb-8 border-b border-[#E5E7E2]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#8D9189] block mb-1">
                    Monthly Investment Contribution
                  </span>
                  <span className="text-[32px] sm:text-[36px] font-medium text-[#111310] tracking-tight tabular-nums">
                    {formatINR(monthlyInvestment)}
                    <span className="text-[18px] text-[#62665F] font-normal">
                      {" "}/ month
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#237A55] bg-[#E8F1EC] px-3 py-1.5 rounded-full self-start sm:self-auto font-medium">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>11.2% illustrative compounding CAGR</span>
                </div>
              </div>

              {/* Range Slider */}
              <div className="space-y-2 mt-4">
                <input
                  type="range"
                  min={10000}
                  max={50000}
                  step={2500}
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  aria-label="Monthly investment slider"
                  className="w-full h-2 bg-[#E5E7E2] rounded-lg appearance-none cursor-pointer accent-[#173F35]"
                />
                <div className="flex justify-between text-[12px] text-[#8D9189] font-mono">
                  <span>₹10,000/mo</span>
                  <span className="hidden sm:inline">₹25,000/mo</span>
                  <span>₹50,000/mo</span>
                </div>
              </div>
            </div>

            {/* Projection Metric Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="p-5 rounded-[20px] bg-[#F7F8F5] border border-[#E5E7E2]">
                <span className="text-[12px] uppercase tracking-wider text-[#8D9189] block mb-1">
                  Starting Base (Today)
                </span>
                <span className="text-[26px] sm:text-[28px] font-medium text-[#111310] tabular-nums">
                  {formatINR(projection.current, true)}
                </span>
                <span className="text-[12px] text-[#62665F] block mt-1">
                  Current verified portfolio
                </span>
              </div>

              <div className="p-5 rounded-[20px] bg-[#F7F8F5] border border-[#E5E7E2]">
                <span className="text-[12px] uppercase tracking-wider text-[#8D9189] block mb-1">
                  In 10 Years
                </span>
                <span className="text-[26px] sm:text-[28px] font-medium text-[#173F35] tabular-nums">
                  {formatINR(projection.tenYears, true)}
                </span>
                <span className="text-[12px] text-[#237A55] block mt-1">
                  +₹{((projection.tenYears - projection.current) / 100000).toFixed(1)}L growth
                </span>
              </div>

              <div className="p-5 rounded-[20px] bg-[#E8F1EC] border border-[#C5DED3]">
                <span className="text-[12px] uppercase tracking-wider text-[#173F35] font-medium block mb-1">
                  In 15 Years
                </span>
                <span className="text-[26px] sm:text-[28px] font-medium text-[#173F35] tabular-nums">
                  {formatINR(projection.fifteenYears, true)}
                </span>
                <span className="text-[12px] text-[#245B4C] block mt-1">
                  Compound interest dominates
                </span>
              </div>
            </div>

            {/* Dynamic Projection Area Chart */}
            <div className="h-[260px] sm:h-[320px] w-full -ml-2 sm:ml-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={projection.points}
                  margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#173F35" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#173F35" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="label"
                    stroke="#8D9189"
                    fontSize={12}
                    tickLine={false}
                    axisLine={{ stroke: "#E5E7E2" }}
                  />
                  <YAxis
                    stroke="#8D9189"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(val) => `₹${(val / 100000).toFixed(0)}L`}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const pt = payload[0].payload;
                        return (
                          <div className="bg-[#111310] text-white p-3.5 rounded-[14px] shadow-xl border border-[#272C25] text-xs space-y-1">
                            <span className="text-[#8D9189] block font-medium">
                              {pt.label === "Today" ? "Year 0 (Today)" : `Milestone: ${pt.label}`}
                            </span>
                            <div className="flex items-center justify-between gap-4">
                              <span className="text-white/70">Projected Wealth:</span>
                              <span className="text-white font-medium text-sm tabular-nums">
                                {formatINR(pt.wealth)}
                              </span>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                              <span className="text-white/50">Capital Contributed:</span>
                              <span className="text-white/80 tabular-nums">
                                {formatINR(pt.invested)}
                              </span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="wealth"
                    stroke="#173F35"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#growthGrad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Responsible Disclaimer */}
            <div className="mt-8 pt-6 border-t border-[#E5E7E2] flex items-center justify-between flex-wrap gap-3 text-[12px] text-[#8D9189]">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#8D9189]" />
                Illustrative projection only. Actual returns may vary depending on market conditions.
              </span>
              <span>Compounded monthly • Re-balanced annually</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
