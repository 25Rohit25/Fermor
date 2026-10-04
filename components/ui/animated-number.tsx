"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { formatINR } from "@/lib/utils";

interface AnimatedNumberProps {
  value: number;
  format?: "inr" | "percent" | "raw" | "compact";
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedNumber({
  value,
  format = "inr",
  prefix = "",
  suffix = "",
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, {
    damping: 32,
    stiffness: 90,
  });

  const [displayValue, setDisplayValue] = useState<string>(() => {
    return formatValue(value, format, prefix, suffix);
  });

  function formatValue(
    val: number,
    fmt: "inr" | "percent" | "raw" | "compact",
    pfx: string,
    sfx: string
  ): string {
    let formatted = "";
    if (fmt === "inr") {
      formatted = formatINR(val, false);
    } else if (fmt === "compact") {
      formatted = formatINR(val, true);
    } else if (fmt === "percent") {
      formatted = `${val.toFixed(1)}%`;
    } else {
      formatted = Math.round(val).toLocaleString("en-IN");
    }
    return `${pfx}${formatted}${sfx}`;
  }

  useEffect(() => {
    if (isInView) {
      motionVal.set(value);
    }
  }, [isInView, value, motionVal]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplayValue(formatValue(latest, format, prefix, suffix));
    });
    return () => unsubscribe();
  }, [spring, format, prefix, suffix]);

  return (
    <span ref={ref} className={`tabular-nums ${className || ""}`}>
      {displayValue}
    </span>
  );
}
