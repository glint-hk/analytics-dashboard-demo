import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'
import InsightCallout from './InsightCallout'
import { channelAttribution, paidAdsCacTrend } from '../data/mockAnalytics'
import { useChartColors } from '../ThemeContext'

function PieTooltip({ active, payload, colors }) {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div
      className="rounded-lg px-3 py-2 shadow-xl border text-xs"
      style={{ background: colors.tooltipBg, borderColor: colors.tooltipBorder }}
    >
      <p className="font-semibold text-zinc-700 dark:text-zinc-300">{d.channel}</p>
      <p className="font-bold" style={{ color: d.color }}>{d.signups.toLocaleString()} signups</p>
      {d.cac > 0 && <p className="text-zinc-500">CAC: ${d.cac}</p>}
    </div>
  )
}

function CacTooltip({ active, payload, label, colors }) {
  if (!active || !payload?.length) return null
  return (
    <div
      className="rounded-lg px-3 py-2 shadow-xl border text-xs"
      style={{ background: colors.tooltipBg, borderColor: colors.tooltipBorder }}
    >
      <p className="text-zinc-500">{label}</p>
      <p className="font-semibold text-amber-500">${payload[0].value} CAC</p>
    </div>
  )
}

const RADIAN = Math.PI / 180
function renderCustomLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }) {
  if (percent < 0.08) return null
  const r = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + r * Math.cos(-midAngle * RADIAN)
  const y = cy + r * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={600}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export default function ChannelAttribution() {
  const colors = useChartColors()
  const total = channelAttribution.reduce((s, c) => s + c.signups, 0)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">Channel Attribution</h2>
        <p className="mt-0.5 text-xs text-zinc-500">Signup source mix · {total.toLocaleString()} total</p>
      </div>

      <div className="flex gap-4 items-center">
        {/* Donut */}
        <div className="flex-1 min-w-0">
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={channelAttribution}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={78}
                paddingAngle={2}
                dataKey="signups"
                labelLine={false}
                label={renderCustomLabel}
              >
                {channelAttribution.map((entry) => (
                  <Cell key={entry.channel} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<PieTooltip colors={colors} />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-2 shrink-0">
          {channelAttribution.map((c) => (
            <div key={c.channel} className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: c.color }} />
              <span className="text-xs text-zinc-600 dark:text-zinc-300 whitespace-nowrap">{c.channel}</span>
              <span className="ml-1 text-xs font-semibold text-zinc-800 dark:text-zinc-100">{c.signups}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Paid Ads CAC trend mini chart */}
      <div>
        <p className="text-xs font-medium text-zinc-500 mb-2">Paid Ads CAC trend (6-month)</p>
        <ResponsiveContainer width="100%" height={80}>
          <LineChart data={paidAdsCacTrend} margin={{ top: 4, right: 8, left: -28, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} vertical={false} />
            <XAxis dataKey="month" tick={{ fill: colors.axisText, fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={(v) => `$${v}`} tick={{ fill: colors.axisText, fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CacTooltip colors={colors} />} cursor={{ stroke: colors.cursor }} />
            <Line
              type="monotone"
              dataKey="cac"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={{ fill: '#f59e0b', r: 3, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <InsightCallout
        type="warning"
        insight="Organic and referral now outperform paid acquisition — Paid Ads CAC has increased 40% over the past two months."
        detail="At $78 CAC vs. near-zero for organic, rebalancing spend toward content and referral programs could meaningfully improve blended CAC."
      />
    </div>
  )
}
