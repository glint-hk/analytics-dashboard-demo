// Activation Funnel — 5 stages
export const activationFunnel = [
  { stage: 'Signups', value: 1000, fill: '#6366f1' },
  { stage: 'Email Verified', value: 820, fill: '#818cf8' },
  { stage: 'Onboarded', value: 510, fill: '#a5b4fc' },
  { stage: 'Activated', value: 380, fill: '#10b981' },
  { stage: 'Paid', value: 95, fill: '#34d399' },
]

// Drop-off rates between each stage
export const funnelDropOffs = [
  { from: 'Signups', to: 'Email Verified', dropPct: 18 },
  { from: 'Email Verified', to: 'Onboarded', dropPct: 38 },
  { from: 'Onboarded', to: 'Activated', dropPct: 25.5 },
  { from: 'Activated', to: 'Paid', dropPct: 75 },
]

// Retention Curve — weekly cohort, 9 data points (week 0–8)
export const retentionCurve = [
  { week: 0, retention: 100 },
  { week: 1, retention: 68 },
  { week: 2, retention: 54 },
  { week: 3, retention: 31 },
  { week: 4, retention: 28 },
  { week: 5, retention: 26 },
  { week: 6, retention: 25 },
  { week: 7, retention: 24 },
  { week: 8, retention: 23 },
]

// MRR Growth — 6 months
export const mrrGrowth = [
  { month: 'Jan', newMrr: 8000, expansionMrr: 400, churnedMrr: -300, netNewMrr: 8100 },
  { month: 'Feb', newMrr: 9200, expansionMrr: 600, churnedMrr: -450, netNewMrr: 9350 },
  { month: 'Mar', newMrr: 10500, expansionMrr: 1100, churnedMrr: -500, netNewMrr: 11100 },
  { month: 'Apr', newMrr: 11800, expansionMrr: 2000, churnedMrr: -600, netNewMrr: 13200 },
  { month: 'May', newMrr: 12500, expansionMrr: 3200, churnedMrr: -650, netNewMrr: 15050 },
  { month: 'Jun', newMrr: 13000, expansionMrr: 5200, churnedMrr: -700, netNewMrr: 17500 },
]

// Running MRR totals (cumulative, for reference)
export const mrrTotals = [8100, 17450, 28550, 41750, 56800, 74300]

// Channel Attribution — signup volume + CAC
export const channelAttribution = [
  { channel: 'Organic Search', signups: 340, cac: 0, color: '#6366f1' },
  { channel: 'Referral', signups: 260, cac: 12, color: '#10b981' },
  { channel: 'Paid Ads', signups: 185, cac: 78, color: '#f59e0b' },
  { channel: 'Content/SEO', signups: 140, cac: 8, color: '#818cf8' },
  { channel: 'Direct', signups: 75, cac: 0, color: '#34d399' },
]

// Paid Ads CAC trend over 6 months (for the mini chart)
export const paidAdsCacTrend = [
  { month: 'Jan', cac: 48 },
  { month: 'Feb', cac: 52 },
  { month: 'Mar', cac: 57 },
  { month: 'Apr', cac: 63 },
  { month: 'May', cac: 71 },
  { month: 'Jun', cac: 78 },
]
