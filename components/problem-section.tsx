"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "./ui/section-label";
import { Building2, LineChart, CreditCard, Target, ShieldCheck, Sparkles } from "lucide-react";

export function ProblemSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const fragmentedSources = [
    {
      id: "bank",
      title: "Bank Accounts",
      icon: Building2,
      subtitle: "HDFC, ICICI, Salary",
      detail: "Cash balances & recurring debits trapped in legacy portals",
      snippet: "Balance: ₹4,21,000",
      accent: "#8D9189",
    },
    {
      id: "investments",
      title: "Investments",
      icon: LineChart,
      subtitle: "Zerodha, Groww, MF Central",
      detail: "Multiple portfolio apps without unified asset allocation",
      snippet: "14 Funds • 8 Stocks",
      accent: "#237A55",
    },
    {
      id: "credit",
      title: "Credit & Cards",
      icon: CreditCard,
      subtitle: "Amex, OneCard, Statements",
      detail: "Hidden billing cycles, reward points & utilization ratios",
      snippet: "Due in 11 days: ₹38,420",
      accent: "#A87531",
    },
    {
      id: "goals",
      title: "Financial Goals",
      icon: Target,
      subtitle: "Notes App, Spreadsheets",
      detail: "Target dates divorced from your real-time cash flow",
      snippet: "Europe '26 • ₹1 Cr '33",
      accent: "#62665F",
    },
  ];

  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-[#111310] text-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 dark-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionLabel dark className="mb-4">
            The Fragmentation Problem
          </SectionLabel>

          <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-medium tracking-[-0.03em] leading-[1.04] text-white mb-6">
            Your money lives in <br />
            <span className="text-white/80">too many places.</span>
          </h2>

          <p className="text-[17px] sm:text-[19px] leading-[1.6] text-[#8D9189] max-w-[640px]">
            Investments in one app. Expenses somewhere else. Savings in your bank.
            Goals in your notes. Advice scattered across the internet.
          </p>
        </div>

        {/* Visual Comparison: Fragmented Silos vs Connected Fermor Core */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Fragmented Source Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fragmentedSources.map((source, index) => {
              const Icon = source.icon;
              return (
                <motion.div
                  key={source.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => setActiveTab(index)}
                  className={`p-5 rounded-[22px] border transition-all cursor-pointer ${
                    activeTab === index
                      ? "bg-[#1C201A] border-[#2E372B] shadow-lg"
                      : "bg-[#161814] border-[#222620] hover:border-[#2C332A]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center text-white/90">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-[#8D9189] bg-white/5 px-2 py-0.5 rounded">
                      Silo 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-[16px] font-medium text-white mb-1">
                    {source.title}
                  </h3>
                  <p className="text-[12px] text-[#8D9189] mb-3">
                    {source.subtitle}
                  </p>
                  <div className="text-[12px] font-mono text-white/70 bg-black/40 px-2.5 py-1.5 rounded-[8px] border border-white/5">
                    {source.snippet}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Fermor Unified Intelligence Core */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-[32px] bg-gradient-to-br from-[#173F35]/40 via-[#181B17] to-[#121411] border border-[#235144]/60 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#173F35]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#237A55]" />
                <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#8D9189]">
                  Connected Intelligence
                </span>
              </div>

              <h3 className="text-[28px] sm:text-[36px] font-medium tracking-tight text-white mb-4 leading-tight">
                Fermor connects the picture.
              </h3>

              <p className="text-[15px] sm:text-[16px] text-[#8D9189] leading-relaxed mb-8">
                Instead of demanding you cross-reference 5 tabs and a manual
                spreadsheet, Fermor synchronizes your complete financial context
                into one unified model.
              </p>

              {/* Synthesized Live View */}
              <div className="bg-[#111310]/90 border border-white/10 rounded-[20px] p-5 space-y-3.5 backdrop-blur-sm">
                <div className="flex items-center justify-between text-xs text-[#8D9189] pb-3 border-b border-white/5">
                  <span className="font-mono text-white/80">
                    FERMOR ENGINE
                  </span>
                  <span className="text-[#237A55] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> All systems aligned
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Unified Net Capital</span>
                  <span className="text-white font-medium tabular-nums">
                    ₹18,42,500
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">True Monthly Runway</span>
                  <span className="text-white font-medium">8.2 months</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Next Recommended Action</span>
                  <span className="text-[#237A55] font-medium">
                    Redirect ₹3k to SIP
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-[#8D9189]">
                <Sparkles className="w-3.5 h-3.5 text-[#237A55]" />
                <span>Zero manual calculations. Context updates continuously.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
