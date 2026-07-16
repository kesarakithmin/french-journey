import { useEffect, useMemo, useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { applyTheme, getStoredTheme, THEME_STORAGE_KEY, type ThemeMode } from "../theme"

const navItems = [
  { to: "/", label: "Home", icon: "⌂" },
  { to: "/lessons", label: "Lessons", icon: "📘" },
  { to: "/profile", label: "Profile", icon: "⚙" },
]

function Layout() {
  const location = useLocation()
  const [themeMode, setThemeMode] = useState<ThemeMode>(getStoredTheme())

  useEffect(() => {
    applyTheme(themeMode)
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode)
  }, [themeMode])

  const activeLabel = useMemo(() => {
    const current = navItems.find((item) => item.to === location.pathname)
    return current?.label ?? "Home"
  }, [location.pathname])

  return (
    <div className="min-h-screen pb-24 text-[color:var(--color-text)]">
      <header className="sticky top-0 z-20 border-b border-[color:var(--color-border)] bg-[color:var(--color-surface)]/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-primary)]">French Journey</p>
            <h1 className="text-xl font-semibold">{activeLabel}</h1>
          </div>

          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-3 py-2 text-sm shadow-sm">
              <span>Theme</span>
              <select
                aria-label="Select theme"
                value={themeMode}
                onChange={(event) => setThemeMode(event.target.value as ThemeMode)}
                className="bg-transparent outline-none"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </label>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-5 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <footer className="mx-auto w-full max-w-5xl px-4 py-6 text-center text-sm text-[color:var(--color-text-muted)]">
        🇫🇷 French Journey
        <br />
        Made with ❤️ by Kezi
      </footer>

      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)]/95 px-3 py-3 shadow-[0_-10px-30px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="mx-auto flex max-w-5xl justify-around gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex min-w-[72px] flex-col items-center rounded-2xl px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-[color:var(--color-primary)] text-white shadow-lg"
                    : "text-[color:var(--color-text-muted)] hover:bg-[color:var(--color-card)]"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="mt-1">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default Layout