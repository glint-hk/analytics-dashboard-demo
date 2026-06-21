import InsightCallout from './InsightCallout'
import { activationFunnel } from '../data/mockAnalytics'

const MAX = activationFunnel[0].value

function pct(v) {
  return Math.round((v / MAX) * 100)
}

function dropOff(curr, prev) {
  return Math.round(((prev - curr) / prev) * 100)
}

export default function ActivationFunnel() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">Activation Funnel</h2>
        <p className="mt-0.5 text-xs text-zinc-500">All signups, last 30 days</p>
      </div>

      <div className="flex flex-col gap-2">
        {activationFunnel.map((item, i) => {
          const widthPct = pct(item.value)
          const drop = i > 0 ? dropOff(item.value, activationFunnel[i - 1].value) : null

          return (
            <div key={item.stage} className="flex flex-col gap-0.5">
              {drop !== null && (
                <div className="flex items-center gap-1.5 pl-2 py-0.5">
                  <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                  <span className="text-[10px] font-medium text-amber-500 shrink-0 dark:text-amber-400">
                    ↓ {drop}% drop
                  </span>
                  <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className="w-28 shrink-0 text-right">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">{item.stage}</span>
                </div>
                <div className="flex-1 rounded-full bg-zinc-100 dark:bg-zinc-800/60 h-8 relative overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${widthPct}%`,
                      background: item.fill,
                      opacity: 0.85,
                    }}
                  />
                </div>
                <div className="w-16 shrink-0 text-right">
                  <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {item.value.toLocaleString()}
                  </span>
                  <span className="ml-1 text-[10px] text-zinc-400">  {widthPct}%</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <InsightCallout
        type="warning"
        insight="62% of signups never reach activation — the biggest leak is at the Onboarded → Activated step, not initial signup."
        detail="Focus on in-app onboarding quality before investing in more top-of-funnel acquisition."
      />
    </div>
  )
}
