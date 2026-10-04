"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { SectionLabel } from "./ui/section-label";
import { Button } from "./ui/button";

interface HeroProps {
  onOpenEarlyAccess?: () => void;
}

export function Hero({ onOpenEarlyAccess }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative pt-[130px] sm:pt-[150px] lg:pt-[170px] pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[920px] mx-auto text-center flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <SectionLabel dot>Your financial life, understood</SectionLabel>
          </motion.div>

          {/* Primary Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[44px] sm:text-[64px] lg:text-[80px] font-medium tracking-[-0.04em] leading-[0.98] sm:leading-[1.0] text-[#111310] mb-6 sm:mb-8"
          >
            Know where your money is. <br className="hidden sm:inline" />
            <span className="text-[#111310]">Know what to do next.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            variants={itemVariants}
            className="text-[17px] sm:text-[20px] lg:text-[22px] leading-[1.55] text-[#62665F] max-w-[700px] mb-8 sm:mb-10 text-balance"
          >
            Fermor brings your investments, spending, savings and financial
            goals together — then turns them into clear, actionable insights.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenEarlyAccess}
              className="w-full sm:w-auto h-[54px] px-8 text-[16px]"
            >
              Get early access
            </Button>
            <a
              href="#dashboard"
              className="inline-flex items-center justify-center h-[54px] px-6 text-[15px] font-medium text-[#111310] hover:text-[#173F35] transition-colors group cursor-pointer"
            >
              <span>See how it works</span>
              <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>

          {/* Trust reassurance pills */}
          <motion.div
            variants={itemVariants}
            className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-[12px] sm:text-[13px] text-[#8D9189]"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#237A55]" />
              Encrypted read-only sync
            </span>
            <span className="hidden sm:inline text-[#E5E7E2]">•</span>
            <span>120+ Indian banks & brokers</span>
            <span className="hidden sm:inline text-[#E5E7E2]">•</span>
            <span>Zero advertising, zero data monetization</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
