import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "dark" | "mint";
  radius?: "md" | "lg" | "xl";
  hoverable?: boolean;
}

export function Card({
  variant = "default",
  radius = "lg",
  hoverable = false,
  className,
  children,
  ...props
}: CardProps) {
  const radiusStyles = {
    md: "rounded-[18px]",
    lg: "rounded-[24px]",
    xl: "rounded-[32px]",
  };

  const variantStyles = {
    default: "bg-white border border-[#E5E7E2] text-[#111310] shadow-fermor-card",
    elevated: "bg-white border border-[#E5E7E2] text-[#111310] shadow-fermor-subtle",
    dark: "bg-[#181B17] border border-[#272C25] text-white shadow-none",
    mint: "bg-[#E8F1EC] border border-[#C5DED3] text-[#111310]",
  };

  const hoverStyle = hoverable
    ? "transition-all duration-300 hover:-translate-y-1 hover:border-[#D0D4CC] hover:shadow-fermor-hover"
    : "";

  return (
    <div
      className={cn(
        "p-6 sm:p-8 relative",
        radiusStyles[radius],
        variantStyles[variant],
        hoverStyle,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
