import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts'
import InsightCallout from './InsightCallout'
import { retentionCurve } from '../data/mockAnalytics'
import { useChartColors } from '../ThemeContext'

function CustomTooltip({ active, payload, label, colors }) {
  if (!active || !payload?.length) return null
  return (
    <div
      className="rounded-lg px-3 py-2 shadow-xl border text-xs"
      style={{ background: colors.tooltipBg, borderColor: colors.tooltipBorder }}
    >
      <p className="text-zinc-500 mb-1">Week {label}</p>
      <p className="font-semibold text-indigo-500">{payload[0].value}% retained</p>
    </div>
  )
}

export default function RetentionCurve() {
  const colors = useChartColors()

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">Retention Curve</h2>
        <p className="mt-0.5 text-xs text-zinc-500">Weekly cohort · % still active</p>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={retentionCurve} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} vertical={false} />
          <XAxis
            dataKey="week"
            tickFormatter={(v) => `W${v}`}
            tick={{ fill: colors.axisText, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(v) => `${v}%`}
            tick={{ fill: colors.axisText, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip colors={colors} />} cursor={{ stroke: colors.cursor }} />
          <ReferenceLine
            x={3}
            stroke="#f59e0b"
            strokeDasharray="4 3"
            strokeWidth={1.5}
            label={{
              value: 'Cliff',
              position: 'top',
              fill: '#f59e0b',
              fontSize: 10,
              fontWeight: 600,
            }}
          />
          <Line
            type="monotone"
            dataKey="retention"
            stroke="#6366f1"
            strokeWidth={2.5}
            dot={{ fill: '#6366f1', r: 4, strokeWidth: 0 }}
            activeDot={{ fill: '#818cf8', r: 5, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <InsightCallout
        type="warning"
        insight="Week 1 retention is healthy at 68%, but the cliff at week 3 suggests onboarding fatigue rather than product-market mismatch."
        detail="Users are making it past initial setup but disengaging before habitual use forms — a common signal for missing 'aha moment' timing."
      />
    </div>
  )
}
