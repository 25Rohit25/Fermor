import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
  dark?: boolean;
}

export function SectionLabel({
  children,
  className,
  dot = true,
  dark = false,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium tracking-[0.08em] uppercase select-none",
        dark ? "text-[#8D9189]" : "text-[#62665F]",
        className
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              "absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",
              dark ? "bg-[#237A55]" : "bg-[#173F35]"
            )}
          />
          <span
            className={cn(
              "relative inline-flex rounded-full h-2 w-2",
              dark ? "bg-[#237A55]" : "bg-[#173F35]"
            )}
          />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
