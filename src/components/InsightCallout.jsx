import { TrendingUp, AlertTriangle, Info } from 'lucide-react'

const config = {
  positive: {
    border: 'border-emerald-500',
    bg: 'bg-emerald-500/5',
    iconColor: 'text-emerald-500 dark:text-emerald-400',
    Icon: TrendingUp,
  },
  warning: {
    border: 'border-amber-500',
    bg: 'bg-amber-500/5',
    iconColor: 'text-amber-500 dark:text-amber-400',
    Icon: AlertTriangle,
  },
  neutral: {
    border: 'border-indigo-500',
    bg: 'bg-indigo-500/5',
    iconColor: 'text-indigo-500 dark:text-indigo-400',
    Icon: Info,
  },
}

export default function InsightCallout({ type = 'neutral', insight, detail }) {
  const { border, bg, iconColor, Icon } = config[type] ?? config.neutral

  return (
    <div className={`flex gap-3 rounded-xl border-l-4 ${border} ${bg} px-4 py-3`}>
      <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${iconColor}`} />
      <div className="min-w-0">
        <p className="text-sm font-medium text-zinc-800 leading-snug dark:text-zinc-100">{insight}</p>
        {detail && (
          <p className="mt-1 text-xs text-zinc-500 leading-relaxed dark:text-zinc-400">{detail}</p>
        )}
      </div>
    </div>
  )
}
