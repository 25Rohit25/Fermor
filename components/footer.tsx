import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#F7F8F5] border-t border-[#E5E7E2] pt-16 pb-12 text-[#62665F]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand Column (Span 2 on desktop) */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-[6px] bg-[#173F35] flex items-center justify-center text-white text-[13px] font-medium">
                F
              </div>
              <span className="text-[18px] font-medium tracking-tight text-[#111310]">
                Fermor
              </span>
            </Link>
            <p className="text-[14px] text-[#62665F] max-w-[280px] leading-relaxed mb-4">
              A unified financial intelligence layer connecting where your money
              is with what to do next.
            </p>
            <div className="text-[12px] text-[#8D9189] font-mono">
              INR (₹) • Read-only Sync • India
            </div>
          </div>

          {/* Column: Product */}
          <div>
            <h4 className="text-[13px] font-medium uppercase tracking-[0.06em] text-[#111310] mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a href="#dashboard" className="hover:text-[#111310] transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#understand" className="hover:text-[#111310] transition-colors">
                  Understand
                </a>
              </li>
              <li>
                <a href="#act" className="hover:text-[#111310] transition-colors">
                  Insights & Actions
                </a>
              </li>
              <li>
                <a href="#grow" className="hover:text-[#111310] transition-colors">
                  Wealth Projection
                </a>
              </li>
              <li>
                <a href="#ask-fermor" className="hover:text-[#111310] transition-colors">
                  Ask Fermor
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Company */}
          <div>
            <h4 className="text-[13px] font-medium uppercase tracking-[0.06em] text-[#111310] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a href="#security" className="hover:text-[#111310] transition-colors">
                  About Fermor
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-[#111310] transition-colors">
                  Security Architecture
                </a>
              </li>
              <li>
                <span className="text-[#8D9189] cursor-not-allowed">
                  Careers (Hiring)
                </span>
              </li>
              <li>
                <a href="#security" className="hover:text-[#111310] transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Legal */}
          <div>
            <h4 className="text-[13px] font-medium uppercase tracking-[0.06em] text-[#111310] mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a href="#security" className="hover:text-[#111310] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-[#111310] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-[#111310] transition-colors">
                  Data Governance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-[#E5E7E2] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-[#8D9189]">
          <p className="max-w-[700px]">
            Financial values, projections and insights shown in this project are
            demonstration data created for the frontend experience and should not
            be interpreted as formal financial advice.
          </p>
          <div className="font-mono text-[11px] shrink-0">
            © 2026 Fermor Technologies Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}
