import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import InsightCallout from './InsightCallout'
import { mrrGrowth } from '../data/mockAnalytics'
import { useChartColors } from '../ThemeContext'

function fmt(v) {
  if (Math.abs(v) >= 1000) return `$${(v / 1000).toFixed(0)}k`
  return `$${v}`
}

function CustomTooltip({ active, payload, label, colors }) {
  if (!active || !payload?.length) return null
  return (
    <div
      className="rounded-lg px-3 py-2 shadow-xl border min-w-[140px]"
      style={{ background: colors.tooltipBg, borderColor: colors.tooltipBorder }}
    >
      <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-300 mb-2">{label}</p>
      {payload.map((entry) => (
        <div key={entry.dataKey} className="flex justify-between gap-4 text-xs">
          <span style={{ color: entry.fill ?? entry.color }}>{entry.name}</span>
          <span className="font-medium text-zinc-900 dark:text-zinc-100">{fmt(entry.value)}</span>
        </div>
      ))}
    </div>
  )
}

const legendFormatter = (value) =>
  <span className="text-xs text-zinc-500">{value}</span>

export default function RevenueGrowth() {
  const colors = useChartColors()

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">MRR Growth</h2>
        <p className="mt-0.5 text-xs text-zinc-500">New + Expansion − Churn, last 6 months</p>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={mrrGrowth} margin={{ top: 8, right: 8, left: -20, bottom: 0 }} barGap={2}>
          <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: colors.axisText, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={fmt}
            tick={{ fill: colors.axisText, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip colors={colors} />} cursor={{ fill: 'rgba(0,0,0,0.04)' }} />
          <Legend formatter={legendFormatter} iconSize={8} wrapperStyle={{ paddingTop: 8 }} />
          <Bar dataKey="newMrr" name="New MRR" stackId="mrr" fill="#6366f1" />
          <Bar dataKey="expansionMrr" name="Expansion MRR" stackId="mrr" fill="#10b981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="churnedMrr" name="Churned MRR" fill="#ef4444" radius={[0, 0, 4, 4]} opacity={0.7} />
        </BarChart>
      </ResponsiveContainer>

      <InsightCallout
        type="neutral"
        insight="Growth is steady but increasingly driven by expansion revenue rather than new logos — worth revisiting acquisition spend allocation."
        detail="Expansion MRR grew from 5% to 29% of gross adds over the period — a strong signal of product-led growth potential."
      />
    </div>
  )
}
