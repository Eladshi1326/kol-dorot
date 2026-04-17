import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { brand, nav } from '../data/content'
import DarkModeToggle from './DarkModeToggle'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const links = [
    { to: '/how', label: nav.howItWorks },
    { to: '/stories', label: nav.stories },
    { to: '/about', label: nav.about },
  ]

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-paper-50/85 dark:bg-ink-950/85 backdrop-blur-md border-b border-ink-900/8 dark:border-ink-50/8'
          : 'bg-transparent'
      }`}
    >
      <div className="container-ed flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl md:text-3xl leading-none group-hover:text-honey-500 transition-colors">
            {brand.name}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-ink-900/45 dark:text-ink-50/45 hidden sm:inline">
            {brand.nameLatin}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-sans text-sm hover:text-honey-500 transition-colors link-underline ${
                  isActive ? 'text-honey-500' : ''
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <Link
            to="/how"
            className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] bg-ink-900 text-paper-50 dark:bg-paper-50 dark:text-ink-950 px-5 py-3 hover:bg-honey-500 transition-colors"
          >
            {nav.downloadCTA}
          </Link>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="תפריט"
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 border border-ink-900/15 dark:border-ink-50/15"
          >
            <span className={`block w-4 h-px bg-current transition-transform ${mobileOpen ? 'translate-y-[3px] rotate-45' : ''}`} />
            <span className={`block w-4 h-px bg-current transition-transform ${mobileOpen ? '-translate-y-[3px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-ink-900/10 dark:border-ink-50/10 bg-paper-50 dark:bg-ink-950">
          <div className="container-ed py-8 flex flex-col gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `font-display text-2xl ${isActive ? 'text-honey-500' : ''}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/how" className="btn-primary self-start mt-4">
              {nav.downloadCTA}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
