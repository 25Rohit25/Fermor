"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./ui/reveal";
import { SectionLabel } from "./ui/section-label";
import { askFermorPrompts, PromptItem } from "@/data/demo-financial-data";
import { ArrowRight, Sparkles, Send } from "lucide-react";

interface AskFermorProps {
  onOpenEarlyAccess?: () => void;
}

export function AskFermor({ onOpenEarlyAccess }: AskFermorProps) {
  const [selectedPrompt, setSelectedPrompt] = useState<PromptItem>(
    askFermorPrompts[0]
  );
  const [customInput, setCustomInput] = useState("");
  const [isTypingCustom, setIsTypingCustom] = useState(false);

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setIsTypingCustom(true);
    // Find closest match or custom response
    setTimeout(() => {
      setSelectedPrompt({
        id: "custom",
        question: customInput,
        tag: "Personal Inquiry",
        answer: {
          summary: `Evaluating "${customInput}" against your current liquidity (₹4.21L) and ongoing investments (₹25k/mo).`,
          details:
            "Your balanced debt-to-equity ratio gives you flexibility. We recommend maintaining at least 6 months of emergency reserves before expanding discretionary allocations.",
          metrics: [
            { label: "Available Buffer", value: "₹4,21,000", positive: true },
            { label: "Savings Stability", value: "Optimal (8.2 mos)" },
            { label: "Risk Tolerance", value: "Moderate" },
          ],
          actionLabel: "Analyze full scenario in Fermor →",
        },
      });
      setIsTypingCustom(false);
      setCustomInput("");
    }, 400);
  };

  return (
    <section id="ask-fermor" className="py-24 sm:py-32 bg-[#F7F8F5]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-[760px] mb-12 sm:mb-14">
          <Reveal>
            <SectionLabel className="mb-3">Conversational Intelligence</SectionLabel>
            <h2 className="text-[34px] sm:text-[48px] lg:text-[56px] font-medium tracking-[-0.03em] leading-[1.05] text-[#111310] mb-5">
              Ask your money a question.
            </h2>
            <p className="text-[17px] sm:text-[19px] leading-[1.6] text-[#62665F]">
              Fermor uses your financial context to help you understand questions
              that are personal to your financial situation.
            </p>
          </Reveal>
        </div>

        {/* Prompt Selector Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {askFermorPrompts.map((prompt) => {
            const isSelected = selectedPrompt.id === prompt.id;
            return (
              <button
                key={prompt.id}
                onClick={() => setSelectedPrompt(prompt)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-[14px] font-medium whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? "bg-[#173F35] text-white border-[#173F35] shadow-sm"
                    : "bg-white text-[#62665F] border-[#E5E7E2] hover:border-[#111310] hover:text-[#111310]"
                }`}
                aria-pressed={isSelected}
              >
                {prompt.question}
              </button>
            );
          })}
        </div>

        {/* Interactive Response Container */}
        <div className="rounded-[32px] bg-white border border-[#E5E7E2] shadow-fermor-card overflow-hidden">
          <div className="p-6 sm:p-10 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPrompt.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                className="space-y-6"
              >
                {/* User Prompt Query Bubble */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F7F8F5] border border-[#E5E7E2] flex items-center justify-center text-[#111310] shrink-0 text-xs font-medium">
                    You
                  </div>
                  <div className="bg-[#F7F8F5] border border-[#E5E7E2] rounded-[18px] px-5 py-3 text-[15px] sm:text-[16px] text-[#111310] font-medium">
                    {selectedPrompt.question}
                  </div>
                </div>

                {/* Fermor Contextual Response */}
                <div className="flex items-start gap-3 pt-2">
                  <div className="w-8 h-8 rounded-full bg-[#173F35] text-white flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="space-y-4 max-w-[840px]">
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#173F35]">
                        Fermor Intelligence
                      </span>
                      <span className="text-[11px] font-mono text-[#8D9189] bg-[#F7F8F5] px-2 py-0.5 rounded">
                        {selectedPrompt.tag}
                      </span>
                    </div>

                    <p className="text-[17px] sm:text-[19px] text-[#111310] font-medium leading-relaxed">
                      {selectedPrompt.answer.summary}
                    </p>

                    <p className="text-[15px] sm:text-[16px] text-[#62665F] leading-relaxed">
                      {selectedPrompt.answer.details}
                    </p>

                    {/* Context Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                      {selectedPrompt.answer.metrics.map((m, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-[16px] bg-[#F7F8F5] border border-[#E5E7E2]"
                        >
                          <span className="text-[11px] text-[#8D9189] block mb-1">
                            {m.label}
                          </span>
                          <span
                            className={`text-[15px] font-medium block tabular-nums ${
                              m.positive === true
                                ? "text-[#237A55]"
                                : m.positive === false
                                ? "text-[#A87531]"
                                : "text-[#111310]"
                            }`}
                          >
                            {m.value}
                          </span>
                          {m.change && (
                            <span className="text-[11px] text-[#8D9189] mt-0.5 block">
                              {m.change}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Action Link */}
                    <div className="pt-2">
                      <button
                        onClick={onOpenEarlyAccess}
                        className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#173F35] hover:text-[#245B4C] group cursor-pointer"
                      >
                        <span>{selectedPrompt.answer.actionLabel}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Custom Query Input Simulator */}
            <div className="mt-10 pt-6 border-t border-[#E5E7E2]">
              <form onSubmit={handleCustomSubmit} className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Or ask anything about your finances (e.g. Can I afford a 2-week vacation in Japan?)"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  className="w-full h-[52px] pl-5 pr-14 rounded-[16px] bg-[#F7F8F5] border border-[#E5E7E2] text-[14px] sm:text-[15px] text-[#111310] placeholder:text-[#8D9189] focus:outline-none focus:ring-2 focus:ring-[#173F35] focus:bg-white transition-all"
                />
                <button
                  type="submit"
                  disabled={!customInput.trim() || isTypingCustom}
                  className="absolute right-2 p-2.5 rounded-[12px] bg-[#173F35] text-white hover:bg-[#245B4C] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  aria-label="Send financial question"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <span className="text-[11px] text-[#8D9189] mt-2 block">
                Demonstration scenarios calibrated against verified demo portfolio data.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
