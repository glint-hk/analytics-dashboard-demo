import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({ isDark: true })

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, toggle: () => setIsDark((d) => !d) }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

export function useChartColors() {
  const { isDark } = useTheme()
  return isDark
    ? { grid: '#27272a', cursor: '#3f3f46', tooltipBg: '#18181b', tooltipBorder: '#3f3f46', axisText: '#71717a' }
    : { grid: '#e4e4e7', cursor: '#f4f4f5', tooltipBg: '#ffffff', tooltipBorder: '#e4e4e7', axisText: '#71717a' }
}
