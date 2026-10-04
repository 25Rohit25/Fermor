import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text" | "dark";
  size?: "default" | "sm" | "lg";
  icon?: React.ReactNode;
  arrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      children,
      icon,
      arrow = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "group inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-[#173F35] text-white hover:bg-[#245B4C] shadow-sm border border-transparent",
      secondary:
        "bg-transparent text-[#111310] border border-[#E6E8E3] hover:border-[#111310] hover:bg-black/[0.02]",
      text: "bg-transparent text-[#173F35] hover:text-[#245B4C] p-0 font-medium active:scale-100",
      dark: "bg-white text-[#111310] hover:bg-[#F7F8F5] border border-transparent font-medium",
    };

    const sizeStyles = {
      default:
        variant === "text"
          ? "h-auto text-[15px]"
          : "h-[52px] px-6 text-[15px] rounded-[14px]",
      sm:
        variant === "text"
          ? "h-auto text-[13px]"
          : "h-[40px] px-4 text-[13px] rounded-[10px]",
      lg:
        variant === "text"
          ? "h-auto text-[17px]"
          : "h-[56px] px-8 text-[16px] rounded-[16px]",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {icon && <span className="mr-2 inline-flex items-center">{icon}</span>}
        <span>{children}</span>
        {arrow && (
          <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
