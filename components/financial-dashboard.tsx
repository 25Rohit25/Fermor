"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { financialData, chartDatasets } from "@/data/demo-financial-data";
import { AnimatedNumber } from "./ui/animated-number";
import { formatINR } from "@/lib/utils";

type TimeRange = "1M" | "6M" | "1Y" | "ALL";

interface FinancialDashboardProps {
  onOpenEarlyAccess?: () => void;
}

export function FinancialDashboard({ onOpenEarlyAccess }: FinancialDashboardProps) {
  const [selectedRange, setSelectedRange] = useState<TimeRange>("1Y");
  const [showScenario, setShowScenario] = useState(false);

  const currentDataset = chartDatasets[selectedRange];

  const rangeReturnLabels: Record<TimeRange, { pct: string; amt: string }> = {
    "1M": { pct: "+1.7%", amt: "+₹30,500" },
    "6M": { pct: "+16.6%", amt: "+₹2,62,500" },
    "1Y": { pct: "+8.4%", amt: "+₹1,18,320" },
    "ALL": { pct: "+100.2%", amt: "+₹9,22,500" },
  };

  return (
    <section id="dashboard" className="pt-2 pb-16 sm:pb-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
          className="w-full bg-white rounded-[28px] sm:rounded-[36px] border border-[#E5E7E2] shadow-fermor-subtle overflow-hidden"
        >
          {/* Top Bar Header */}
          <div className="p-6 sm:p-8 border-b border-[#E5E7E2] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FFFFFF]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[14px] text-[#62665F]">
                  Good morning,{" "}
                  <span className="text-[#111310] font-medium">
                    {financialData.user.name}
                  </span>
                </span>
                <span className="text-[#E5E7E2]">•</span>
                <span className="inline-flex items-center gap-1.5 text-[12px] text-[#8D9189]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#237A55]" />
                  {financialData.user.accountsCount} accounts synced{" "}
                  {financialData.user.lastSync}
                </span>
              </div>
              <h2 className="text-[12px] tracking-[0.08em] uppercase font-medium text-[#8D9189]">
                Total Net Worth
              </h2>
            </div>

            {/* Timeframe selector tabs */}
            <div className="flex items-center bg-[#F7F8F5] p-1 rounded-[12px] border border-[#E5E7E2] self-start sm:self-auto">
              {(["1M", "6M", "1Y", "ALL"] as TimeRange[]).map((range) => (
                <button
                  key={range}
                  onClick={() => setSelectedRange(range)}
                  className={`px-3 py-1.5 text-[13px] font-medium rounded-[8px] transition-all cursor-pointer ${
                    selectedRange === range
                      ? "bg-white text-[#111310] shadow-sm"
                      : "text-[#62665F] hover:text-[#111310]"
                  }`}
                  aria-pressed={selectedRange === range}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Main Net Worth & Chart Section */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <div className="text-[36px] sm:text-[48px] lg:text-[56px] font-medium tracking-[-0.04em] text-[#111310] leading-none mb-2">
                  <AnimatedNumber value={financialData.netWorth} format="inr" />
                </div>
                <div className="flex flex-wrap items-center gap-2.5 text-[14px] sm:text-[15px]">
                  <span className="inline-flex items-center gap-1 text-[#237A55] font-medium bg-[#E8F1EC] px-2.5 py-0.5 rounded-[8px]">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {rangeReturnLabels[selectedRange].pct}
                  </span>
                  <span className="text-[#62665F]">
                    {rangeReturnLabels[selectedRange].amt} in this period
                  </span>
                </div>
              </div>

              <div className="hidden sm:block text-right">
                <span className="text-[12px] uppercase tracking-wider text-[#8D9189] block mb-0.5">
                  Portfolio Health
                </span>
                <span className="text-[14px] font-medium text-[#111310] flex items-center justify-end gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#237A55]" />
                  Optimal Diversification
                </span>
              </div>
            </div>

            {/* Recharts Area Chart */}
            <div className="h-[240px] sm:h-[300px] w-full mt-4 -ml-2 sm:ml-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={currentDataset}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="wealthGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#173F35" stopOpacity={0.16} />
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
                    tickFormatter={(val) => `₹${(val / 100000).toFixed(1)}L`}
                    domain={["dataMin - 50000", "dataMax + 50000"]}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-[#111310] text-white p-3 rounded-[12px] shadow-lg border border-[#272C25] text-xs">
                            <p className="text-[#8D9189] mb-1">{data.date}</p>
                            <p className="text-[15px] font-medium tabular-nums text-white">
                              {formatINR(data.value)}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#173F35"
                    strokeWidth={2.2}
                    fillOpacity={1}
                    fill="url(#wealthGradient)"
                    animationDuration={900}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Secondary Metric Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#E5E7E2]">
              {/* Investments */}
              <div className="p-4 sm:p-5 rounded-[20px] bg-[#F7F8F5] border border-[#E5E7E2] transition-colors hover:border-[#D0D4CC]">
                <div className="flex items-center justify-between text-[13px] text-[#62665F] mb-1.5">
                  <span>Investments</span>
                  <span className="text-[#237A55] font-medium text-[12px] bg-[#E8F1EC] px-1.5 py-0.5 rounded">
                    +{financialData.investmentsGrowth}%
                  </span>
                </div>
                <div className="text-[22px] sm:text-[24px] font-medium text-[#111310] tracking-tight">
                  <AnimatedNumber value={financialData.investments} format="inr" />
                </div>
                <span className="text-[12px] text-[#8D9189] mt-1 block">
                  Mutual funds, equity & gold
                </span>
              </div>

              {/* Cash & Savings */}
              <div className="p-4 sm:p-5 rounded-[20px] bg-[#F7F8F5] border border-[#E5E7E2] transition-colors hover:border-[#D0D4CC]">
                <div className="flex items-center justify-between text-[13px] text-[#62665F] mb-1.5">
                  <span>Cash & Savings</span>
                  <span className="text-[#62665F] text-[12px]">4.2% yield</span>
                </div>
                <div className="text-[22px] sm:text-[24px] font-medium text-[#111310] tracking-tight">
                  <AnimatedNumber value={financialData.savings} format="inr" />
                </div>
                <span className="text-[12px] text-[#8D9189] mt-1 block">
                  8.2 months emergency buffer
                </span>
              </div>

              {/* Liabilities */}
              <div className="p-4 sm:p-5 rounded-[20px] bg-[#F7F8F5] border border-[#E5E7E2] transition-colors hover:border-[#D0D4CC]">
                <div className="flex items-center justify-between text-[13px] text-[#62665F] mb-1.5">
                  <span>Liabilities</span>
                  <span className="text-[#237A55] text-[12px]">All on-time</span>
                </div>
                <div className="text-[22px] sm:text-[24px] font-medium text-[#111310] tracking-tight">
                  <AnimatedNumber value={financialData.liabilities} format="inr" />
                </div>
                <span className="text-[12px] text-[#8D9189] mt-1 block">
                  Credit cards & ongoing dues
                </span>
              </div>
            </div>

            {/* Fermor Insight Card */}
            <div className="mt-6 p-5 sm:p-6 rounded-[22px] bg-[#E8F1EC] border border-[#C5DED3] transition-all">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#173F35] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#173F35]">
                        {financialData.insight.title}
                      </span>
                      <span className="text-[11px] text-[#245B4C] bg-white/70 px-2 py-0.5 rounded-full">
                        Goal Acceleration
                      </span>
                    </div>
                    <p className="text-[15px] sm:text-[16px] text-[#111310] font-normal leading-relaxed">
                      <span className="font-medium">
                        {financialData.insight.highlight}
                      </span>{" "}
                      {financialData.insight.recommendation}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowScenario(!showScenario)}
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#173F35] hover:text-[#245B4C] shrink-0 self-start lg:self-auto cursor-pointer group"
                >
                  <span>
                    {showScenario ? "Hide scenario" : "Explore scenario"}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showScenario ? "rotate-90" : "group-hover:translate-x-0.5"
                    }`}
                  />
                </button>
              </div>

              {/* Collapsible Scenario Exploration */}
              <AnimatePresence>
                {showScenario && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 pt-5 border-t border-[#C5DED3] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                      <div className="bg-white/80 p-3.5 rounded-[14px]">
                        <span className="text-[#62665F] block text-xs mb-1">
                          Current Trajectory
                        </span>
                        <span className="font-medium text-[#111310] text-[15px]">
                          98 months to ₹1 Cr
                        </span>
                        <span className="text-[#8D9189] block text-[11px] mt-0.5">
                          At ₹25,000 / month SIP
                        </span>
                      </div>
                      <div className="bg-white/80 p-3.5 rounded-[14px]">
                        <span className="text-[#62665F] block text-xs mb-1">
                          25% Savings Trajectory
                        </span>
                        <span className="font-medium text-[#173F35] text-[15px]">
                          84 months to ₹1 Cr
                        </span>
                        <span className="text-[#237A55] block text-[11px] mt-0.5">
                          +₹3,400 / month reallocation
                        </span>
                      </div>
                      <div className="bg-[#173F35] text-white p-3.5 rounded-[14px] flex flex-col justify-between">
                        <div>
                          <span className="text-white/70 block text-xs mb-0.5">
                            Time Saved
                          </span>
                          <span className="text-[17px] font-medium">
                            14 months earlier
                          </span>
                        </div>
                        <button
                          onClick={onOpenEarlyAccess}
                          className="mt-2 text-xs text-[#E8F1EC] hover:underline inline-flex items-center gap-1"
                        >
                          Apply to my plan <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
