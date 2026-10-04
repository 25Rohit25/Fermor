"use client";

import React from "react";
import { Reveal } from "./ui/reveal";
import { SectionLabel } from "./ui/section-label";
import { Eye, Zap, TrendingUp } from "lucide-react";

export function ProductFramework() {
  const stages = [
    {
      step: "01",
      name: "Understand",
      icon: Eye,
      tagline: "Give users a clear view of their money.",
      description:
        "Everything you own, owe, spend and invest gathered into one clear, connected financial picture.",
      anchor: "#understand",
    },
    {
      step: "02",
      name: "Act",
      icon: Zap,
      tagline: "Transform financial information into useful next steps.",
      description:
        "Knowing what happened matters. Knowing what to do next matters more. Fermor highlights the signals.",
      anchor: "#act",
    },
    {
      step: "03",
      name: "Grow",
      icon: TrendingUp,
      tagline: "Help users understand how today's decisions affect their future.",
      description:
        "Simulate adjustments in real time to see their compound impact over 5, 10, and 15 years.",
      anchor: "#grow",
    },
  ];

  return (
    <section id="framework" className="py-24 sm:py-32 bg-[#F7F8F5]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Centered Headline */}
        <Reveal className="max-w-[760px] mx-auto text-center mb-16 sm:mb-20">
          <SectionLabel className="mb-4">Product Philosophy</SectionLabel>

          <h2 className="text-[36px] sm:text-[52px] lg:text-[60px] font-medium tracking-[-0.04em] leading-[1.05] text-[#111310] mb-6">
            Understand. Act. Grow.
          </h2>

          <p className="text-[18px] sm:text-[21px] leading-[1.55] text-[#62665F] text-balance">
            A clearer financial picture should lead to better financial
            decisions.
          </p>
        </Reveal>

        {/* Three Stage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <Reveal key={stage.step} delay={idx * 0.12}>
                <a
                  href={stage.anchor}
                  className="block h-full p-8 rounded-[28px] bg-white border border-[#E5E7E2] transition-all duration-300 hover:-translate-y-1 hover:border-[#173F35]/30 hover:shadow-fermor-card group"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[13px] font-mono font-medium text-[#8D9189]">
                      STAGE {stage.step}
                    </span>
                    <div className="w-10 h-10 rounded-[12px] bg-[#F7F8F5] border border-[#E5E7E2] flex items-center justify-center text-[#173F35] transition-colors group-hover:bg-[#E8F1EC]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-[24px] sm:text-[26px] font-medium tracking-tight text-[#111310] mb-2 group-hover:text-[#173F35] transition-colors">
                    {stage.name}
                  </h3>

                  <p className="text-[15px] font-medium text-[#245B4C] mb-3">
                    {stage.tagline}
                  </p>

                  <p className="text-[14px] text-[#62665F] leading-relaxed">
                    {stage.description}
                  </p>

                  <div className="mt-6 flex items-center gap-1.5 text-[13px] font-medium text-[#173F35]">
                    <span>Explore chapter</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
