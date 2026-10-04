import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatINR(value: number, compact: boolean = false): string {
  if (compact) {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    }
    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)}L`;
    }
    if (value >= 1000) {
      return `₹${(value / 1000).toFixed(1)}k`;
    }
    return `₹${value}`;
  }

  // Indian Number Format (e.g. 18,42,500)
  const isNegative = value < 0;
  const absVal = Math.abs(Math.round(value)).toString();
  
  if (absVal.length <= 3) {
    return `${isNegative ? "-" : ""}₹${absVal}`;
  }

  const lastThree = absVal.substring(absVal.length - 3);
  const otherNumbers = absVal.substring(0, absVal.length - 3);
  const formattedOther = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");

  return `${isNegative ? "-" : ""}₹${formattedOther},${lastThree}`;
}
