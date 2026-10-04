"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenEarlyAccess?: () => void;
}

export function Navbar({ onOpenEarlyAccess }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Product", href: "#dashboard" },
    { label: "How it works", href: "#framework" },
    { label: "Insights", href: "#act" },
    { label: "Security", href: "#security" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 h-[72px] transition-all duration-300 flex items-center",
          scrolled
            ? "bg-[#F7F8F5]/85 backdrop-blur-[18px] border-b border-[#E5E7E2]/70 shadow-sm"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-[1200px] mx-auto w-full px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] rounded-lg"
          >
            <div className="w-7 h-7 rounded-[8px] bg-[#173F35] flex items-center justify-center text-white text-[15px] font-medium tracking-tight shadow-sm transition-transform duration-200 group-hover:scale-105">
              F
            </div>
            <span className="text-[20px] font-medium tracking-[-0.03em] text-[#111310]">
              Fermor
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] text-[#62665F]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#111310] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] rounded-md px-1 py-0.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenEarlyAccess}
              className="text-[14px] font-medium text-[#62665F] hover:text-[#111310] transition-colors px-3 py-2 cursor-pointer"
            >
              Sign in
            </button>
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenEarlyAccess}
              className="rounded-[12px] h-[42px] px-5"
            >
              Get early access
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111310] hover:text-[#173F35] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] rounded-lg cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[72px] z-30 bg-[#F7F8F5]/98 backdrop-blur-2xl md:hidden px-6 py-8 flex flex-col justify-between border-t border-[#E5E7E2]"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[20px] font-medium tracking-tight text-[#111310] hover:text-[#173F35] transition-colors py-2 border-b border-[#E5E7E2]/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-3 pt-6 border-t border-[#E5E7E2]">
            <Button
              variant="primary"
              className="w-full h-[52px]"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEarlyAccess?.();
              }}
            >
              Get early access
            </Button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEarlyAccess?.();
              }}
              className="w-full text-center py-3 text-[15px] font-medium text-[#62665F] hover:text-[#111310]"
            >
              Already registered? Sign in
            </button>
          </div>
        </div>
      )}
    </>
  );
}
