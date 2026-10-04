export interface Goal {
  id: string;
  name: string;
  category: string;
  current: number;
  target: number;
  progress: number;
  targetDate: string;
}

export interface AssetAllocation {
  category: string;
  percentage: number;
  value: number;
  color: string;
}

export interface PromptItem {
  id: string;
  question: string;
  tag: string;
  answer: {
    summary: string;
    details: string;
    metrics: { label: string; value: string; change?: string; positive?: boolean }[];
    actionLabel: string;
  };
}

export const financialData = {
  user: {
    name: "Arjun",
    greeting: "Good morning",
    accountsCount: 7,
    lastSync: "4m ago",
  },
  netWorth: 1842500,
  netWorthChangeYear: 118320,
  yearlyGrowth: 8.4,
  investments: 1182400,
  investmentsGrowth: 12.8,
  savings: 421000,
  savingsRate: 22,
  liabilities: 134900,
  monthlySpending: 38420,
  monthlySpendingDelta: -8, // 8% lower than last month
  creditScore: 782,
  creditStatus: "Excellent",
  creditUtilization: 9,
  emergencyRunwayMonths: 8.2,

  allocations: [
    { category: "Equity", percentage: 62, value: 1142350, color: "#173F35" },
    { category: "Debt", percentage: 18, value: 331650, color: "#245B4C" },
    { category: "Cash", percentage: 12, value: 221100, color: "#52796F" },
    { category: "Gold", percentage: 8, value: 147400, color: "#84A98C" },
  ] as AssetAllocation[],

  goals: [
    {
      id: "emergency-fund",
      name: "Emergency Fund",
      category: "Safety",
      current: 360000,
      target: 500000,
      progress: 72,
      targetDate: "Jun 2027",
    },
    {
      id: "europe-trip",
      name: "Europe Trip",
      category: "Lifestyle",
      current: 216000,
      target: 300000,
      progress: 72,
      targetDate: "Oct 2026",
    },
    {
      id: "first-cr",
      name: "₹1 Crore Corpus",
      category: "Wealth",
      current: 1842500,
      target: 10000000,
      progress: 18.4,
      targetDate: "Aug 2033",
    },
  ] as Goal[],

  marketContext: {
    benchmark: "Nifty 50",
    benchmarkChange: -0.82,
    portfolioChange: -0.31,
    explanation:
      "Your portfolio moved less than the broader market today due to lower exposure to financial stocks and a stabilizing 18% debt allocation.",
  },

  insight: {
    title: "FERMOR INSIGHT",
    highlight: "You are currently saving 22% of your monthly income.",
    recommendation:
      "Increasing this to 25% could bring your ₹1 Cr goal forward by approximately 14 months.",
    cta: "Explore scenario →",
    scenario: {
      currentMonthly: 25000,
      proposedMonthly: 28400,
      currentMonthsLeft: 98,
      acceleratedMonthsLeft: 84,
      monthsSaved: 14,
    },
  },

  actInsight: {
    title: "FERMOR INSIGHT",
    highlight: "Your dining spend increased ₹4,280 this month.",
    recommendation:
      "If you redirect ₹3,000/month to your current SIP, your projected 10-year portfolio could increase by ₹6.1L.",
    monthlyRedirect: 3000,
    tenYearProjectedGain: 610000,
  },
};

export const chartDatasets = {
  "1M": [
    { label: "Day 1", value: 1812000, date: "Sep 04" },
    { label: "Day 6", value: 1819500, date: "Sep 10" },
    { label: "Day 12", value: 1824000, date: "Sep 16" },
    { label: "Day 18", value: 1818200, date: "Sep 22" },
    { label: "Day 24", value: 1836000, date: "Sep 28" },
    { label: "Day 30", value: 1842500, date: "Oct 04" },
  ],
  "6M": [
    { label: "May", value: 1580000, date: "May 2026" },
    { label: "Jun", value: 1620000, date: "Jun 2026" },
    { label: "Jul", value: 1680000, date: "Jul 2026" },
    { label: "Aug", value: 1710000, date: "Aug 2026" },
    { label: "Sep", value: 1770000, date: "Sep 2026" },
    { label: "Oct", value: 1842500, date: "Oct 2026" },
  ],
  "1Y": [
    { label: "Jan", value: 1420000, date: "Jan 2026" },
    { label: "Feb", value: 1460000, date: "Feb 2026" },
    { label: "Mar", value: 1445000, date: "Mar 2026" },
    { label: "Apr", value: 1530000, date: "Apr 2026" },
    { label: "May", value: 1580000, date: "May 2026" },
    { label: "Jun", value: 1620000, date: "Jun 2026" },
    { label: "Jul", value: 1680000, date: "Jul 2026" },
    { label: "Aug", value: 1710000, date: "Aug 2026" },
    { label: "Sep", value: 1770000, date: "Sep 2026" },
    { label: "Oct", value: 1842500, date: "Oct 2026" },
  ],
  "ALL": [
    { label: "2023", value: 920000, date: "Jan 2023" },
    { label: "Mid '23", value: 1080000, date: "Jun 2023" },
    { label: "2024", value: 1250000, date: "Jan 2024" },
    { label: "Mid '24", value: 1340000, date: "Jun 2024" },
    { label: "2025", value: 1420000, date: "Jan 2025" },
    { label: "Mid '25", value: 1620000, date: "Jun 2025" },
    { label: "2026", value: 1842500, date: "Oct 2026" },
  ],
};

export const askFermorPrompts: PromptItem[] = [
  {
    id: "car-affordability",
    question: "Can I afford a ₹20L car?",
    tag: "Affordability",
    answer: {
      summary:
        "Based on your current savings rate, existing investments and monthly expenses, a ₹20L purchase would reduce your emergency runway from 8.2 months to 4.7 months.",
      details:
        "A ₹14–16L budget would keep you closer to your recommended 6-month buffer while preserving your SIP momentum for your ₹1 Cr milestone.",
      metrics: [
        { label: "Current Runway", value: "8.2 mos" },
        { label: "Runway After ₹20L", value: "4.7 mos", change: "-3.5 mos", positive: false },
        { label: "Recommended Price", value: "₹14L – ₹16L", positive: true },
        { label: "Monthly EMI Impact", value: "₹28,500/mo" },
      ],
      actionLabel: "View affordability breakdown →",
    },
  },
  {
    id: "overspending",
    question: "Where did I overspend this month?",
    tag: "Cash Flow",
    answer: {
      summary:
        "Your dining spend increased ₹4,280 (+28%) compared to your 3-month moving average, primarily driven by 6 weekend social outings.",
      details:
        "Groceries, fixed subscriptions, and commute utilities remained within 2% of your monthly targets. Overall discretionary spending is still within safe boundaries.",
      metrics: [
        { label: "Dining Total", value: "₹19,480", change: "+28%", positive: false },
        { label: "Target Cap", value: "₹15,200" },
        { label: "Overspend Diff", value: "₹4,280", positive: false },
        { label: "Savings Cushion", value: "₹9,200", positive: true },
      ],
      actionLabel: "Analyze dining transactions →",
    },
  },
  {
    id: "portfolio-dip",
    question: "Why is my portfolio down today?",
    tag: "Market Insight",
    answer: {
      summary:
        "Nifty 50 pulled back -0.82% following global rate commentary, but your diversified portfolio was cushioned at -0.31%.",
      details:
        "Your lower exposure to large-cap private banks and stabilizing returns from your 18% debt allocation and gold reserve counterbalanced broader market volatility.",
      metrics: [
        { label: "Nifty 50 Drop", value: "-0.82%", positive: false },
        { label: "Your Portfolio", value: "-0.31%", change: "+0.51% alpha", positive: true },
        { label: "Top Contributor", value: "Sovereign Gold (+1.2%)", positive: true },
        { label: "Top Drag", value: "Nifty IT (-1.4%)", positive: false },
      ],
      actionLabel: "Inspect asset performance →",
    },
  },
  {
    id: "retire-50",
    question: "How much should I invest to retire at 50?",
    tag: "Long-term Planning",
    answer: {
      summary:
        "To achieve a projected retirement corpus of ₹4.5 Cr by age 50 with a 7% inflation-adjusted real return, your monthly SIP should be ₹37,500.",
      details:
        "You currently invest ₹25,000/month. Increasing by ₹12,500/month today, or opting for an 8% annual step-up, bridges the gap cleanly without altering lifestyle expenses.",
      metrics: [
        { label: "Target Corpus", value: "₹4.50 Cr" },
        { label: "Target Age", value: "50 yrs (18 yrs left)" },
        { label: "Current SIP", value: "₹25,000/mo" },
        { label: "Required SIP", value: "₹37,500/mo", change: "+₹12,500", positive: true },
      ],
      actionLabel: "Adjust retirement trajectory →",
    },
  },
];
