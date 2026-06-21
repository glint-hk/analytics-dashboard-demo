import { Sun, Moon, ExternalLink } from 'lucide-react'
import { useTheme } from './ThemeContext'
import ActivationFunnel from './components/ActivationFunnel'
import RetentionCurve from './components/RetentionCurve'
import RevenueGrowth from './components/RevenueGrowth'
import ChannelAttribution from './components/ChannelAttribution'

function Card({ children }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-colors duration-200 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 flex flex-col gap-0">
      {children}
    </div>
  )
}

export default function App() {
  const { isDark, toggle } = useTheme()

  return (
    <div className="min-h-screen bg-white font-sans dark:bg-zinc-950">
      {/* Top bar */}
      <div className="border-b border-zinc-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10 dark:border-zinc-800 dark:bg-zinc-900/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <span className="text-xs font-medium text-indigo-500 tracking-wide uppercase dark:text-indigo-400">
            Portfolio Build · Sample Data Audit Deliverable
          </span>
          <button
            onClick={toggle}
            className="rounded-lg border border-zinc-300 bg-zinc-100 p-2 text-zinc-500 hover:text-zinc-900 hover:border-zinc-400 transition-colors dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:border-zinc-600"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Hero header */}
        <div className="mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Founder Analytics Dashboard
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-zinc-600 leading-relaxed dark:text-zinc-400">
            A sample of the kind of data story I build for early-stage startups during a{' '}
            <span className="text-zinc-800 font-medium dark:text-zinc-200">Data &amp; Growth Audit</span> engagement.
            All data shown is fictional, generated to demonstrate structure and insight format.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 items-center">
            <a
              href="https://hrishikeshkumar.me"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-500 hover:text-indigo-600 transition-colors dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              ← Back to portfolio
              <ExternalLink className="h-3 w-3" />
            </a>
            <span className="text-zinc-300 text-xs dark:text-zinc-700">·</span>
            <span className="text-xs text-zinc-500">
              Interested in a real audit?{' '}
              <a
                href="mailto:hrishikeshkumar.me"
                className="text-emerald-600 hover:text-emerald-700 transition-colors dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                Let&apos;s talk
              </a>
            </span>
          </div>
        </div>

        {/* 2×2 dashboard grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Card>
            <ActivationFunnel />
          </Card>
          <Card>
            <RetentionCurve />
          </Card>
          <Card>
            <RevenueGrowth />
          </Card>
          <Card>
            <ChannelAttribution />
          </Card>
        </div>

        {/* Context strip */}
        <div className="mt-8 rounded-xl border border-zinc-200 bg-zinc-50/60 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900/40">
          <p className="text-xs text-zinc-500 leading-relaxed dark:text-zinc-500">
            <span className="text-zinc-700 font-medium dark:text-zinc-300">What a real engagement includes:</span>{' '}
            A 2-week deep-dive into your product analytics, marketing attribution, revenue data, and user
            behaviour — delivered as an actionable slide deck + a live dashboard like this one.
            Pricing starts at a flat project fee.{' '}
            <a
              href="https://hrishikeshkumar.me"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-500 hover:text-indigo-600 transition-colors dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              View portfolio →
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 mt-8 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-500">
            Built by{' '}
            <a
              href="https://hrishikeshkumar.me"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-700 hover:text-zinc-900 transition-colors dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              Hrishikesh Kumar
            </a>{' '}
            · All data is fictional
          </p>
          <a
            href="https://hrishikeshkumar.me"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs text-indigo-500 hover:text-indigo-600 transition-colors dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            View more work <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </footer>
    </div>
  )
}
