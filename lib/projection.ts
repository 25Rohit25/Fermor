export interface ProjectionPoint {
  year: number;
  label: string;
  invested: number;
  wealth: number;
}

export interface ProjectionResult {
  current: number;
  tenYears: number;
  fifteenYears: number;
  twentyYears: number;
  points: ProjectionPoint[];
}

/**
 * Calculates compounding wealth projection based on monthly investment.
 * Designed to provide intuitive, realistic estimates while remaining illustrative.
 * @param monthlyInvestment Monthly contribution in INR
 * @param currentBase Initial starting portfolio in INR (default ₹12,40,000)
 * @param expectedAnnualReturn Rate of return (default 11.2% CAGR)
 */
export function calculateProjection(
  monthlyInvestment: number,
  currentBase: number = 1240000,
  expectedAnnualReturn: number = 0.112
): ProjectionResult {
  const monthlyRate = expectedAnnualReturn / 12;
  const points: ProjectionPoint[] = [];

  for (let year = 0; year <= 15; year++) {
    const months = year * 12;

    // Compound growth on initial capital
    const baseGrowth = currentBase * Math.pow(1 + monthlyRate, months);

    // Future value of regular monthly contributions
    let sipGrowth = 0;
    const totalInvested = currentBase + monthlyInvestment * months;

    if (months > 0 && monthlyRate > 0) {
      sipGrowth =
        monthlyInvestment *
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate);
    }

    const totalWealth = Math.round(baseGrowth + sipGrowth);

    points.push({
      year,
      label: year === 0 ? "Today" : `Yr ${year}`,
      invested: totalInvested,
      wealth: totalWealth,
    });
  }

  const point10 = points.find((p) => p.year === 10)?.wealth ?? 7680000;
  const point15 = points.find((p) => p.year === 15)?.wealth ?? 14800000;
  
  // Also compute 20 years for extra insight
  const months20 = 20 * 12;
  const wealth20 = Math.round(
    currentBase * Math.pow(1 + monthlyRate, months20) +
      monthlyInvestment *
        ((Math.pow(1 + monthlyRate, months20) - 1) / monthlyRate) *
        (1 + monthlyRate)
  );

  return {
    current: currentBase,
    tenYears: point10,
    fifteenYears: point15,
    twentyYears: wealth20,
    points,
  };
}
