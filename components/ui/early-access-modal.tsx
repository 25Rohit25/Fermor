"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Copy, Check } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "./button";

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEmail?: string;
}

export function EarlyAccessModal({
  isOpen,
  onClose,
  defaultEmail = "",
}: EarlyAccessModalProps) {
  const [email, setEmail] = useState(defaultEmail);
  const [focusArea, setFocusArea] = useState<string>("Unified Portfolio View");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);



  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#173F35", "#245B4C", "#E8F1EC", "#237A55"],
        });
      } catch {
        // Safe fallback if canvas not available
      }
    }, 600);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://fermor.app/?invite=FRM-412");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111310]/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative w-full max-w-[480px] bg-white rounded-[28px] border border-[#E5E7E2] shadow-fermor-hover p-6 sm:p-8 z-10 text-[#111310]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#62665F] hover:text-[#111310] hover:bg-[#F7F8F5] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#173F35]" />
                  <span className="text-[12px] uppercase tracking-[0.08em] font-medium text-[#62665F]">
                    Early Access Cohort 02
                  </span>
                </div>

                <h3
                  id="modal-title"
                  className="text-[26px] sm:text-[28px] font-medium tracking-[-0.03em] leading-tight mb-2 text-[#111310]"
                >
                  Experience Fermor first.
                </h3>
                <p className="text-[15px] text-[#62665F] leading-relaxed mb-6">
                  We are rolling out invites weekly to maintain private,
                  high-fidelity account aggregator connections.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="early-access-email"
                      className="block text-[13px] font-medium text-[#111310] mb-1.5"
                    >
                      Email address
                    </label>
                    <input
                      id="early-access-email"
                      type="email"
                      required
                      placeholder="arjun@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-[48px] px-4 rounded-[12px] bg-[#F7F8F5] border border-[#E5E7E2] text-[15px] text-[#111310] placeholder:text-[#8D9189] focus:outline-none focus:ring-2 focus:ring-[#173F35] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-[#111310] mb-2">
                      Primary financial focus
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-[13px]">
                      {[
                        "Unified Portfolio View",
                        "SIP / Wealth Projection",
                        "Expense Rationalization",
                        "Retirement Runway",
                      ].map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => setFocusArea(item)}
                          className={`px-3 py-2 text-left rounded-[10px] border transition-all ${
                            focusArea === item
                              ? "border-[#173F35] bg-[#E8F1EC] text-[#173F35] font-medium"
                              : "border-[#E5E7E2] bg-white text-[#62665F] hover:border-[#111310]"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full h-[50px]"
                      disabled={isLoading}
                    >
                      {isLoading ? "Securing spot..." : "Request invite"}
                    </Button>
                  </div>

                  <p className="text-[12px] text-center text-[#8D9189]">
                    Strict zero-spam policy. Read-only encrypted sync.
                  </p>
                </form>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full bg-[#E8F1EC] text-[#237A55] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <h3 className="text-[24px] font-medium tracking-[-0.03em] mb-2 text-[#111310]">
                  You are #412 on the waitlist.
                </h3>
                <p className="text-[14px] text-[#62665F] mb-6">
                  We sent a confirmation to{" "}
                  <span className="font-medium text-[#111310]">{email}</span>.
                  You will receive your activation link when Cohort 02 opens.
                </p>

                <div className="bg-[#F7F8F5] border border-[#E5E7E2] rounded-[14px] p-3 flex items-center justify-between mb-6">
                  <span className="text-[13px] font-mono text-[#62665F] truncate max-w-[280px]">
                    fermor.app/?invite=FRM-412
                  </span>
                  <button
                    onClick={handleCopyLink}
                    className="p-1.5 text-[#173F35] hover:bg-white rounded-lg transition-colors inline-flex items-center gap-1 text-[12px] font-medium"
                    aria-label="Copy invitation link"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#237A55]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <Button variant="secondary" onClick={handleReset} className="w-full">
                  Back to homepage
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
