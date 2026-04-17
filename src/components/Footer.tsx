import { Link } from 'react-router-dom'
import { useState } from 'react'
import { brand, footer, newsletter } from '../data/content'

type FooterLinkType = { label: string; href: string; external?: boolean }

function FooterLink({ link }: { link: FooterLinkType }) {
  if (link.external || link.href.startsWith('mailto:') || link.href.startsWith('http')) {
    return (
      <a href={link.href} className="text-sm link-underline">
        {link.label}
      </a>
    )
  }
  return (
    <Link to={link.href} className="text-sm link-underline">
      {link.label}
    </Link>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'ok'>('idle')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.length > 3) setStatus('ok')
  }

  return (
    <footer className="relative mt-20 md:mt-32 border-t border-ink-900/10 dark:border-ink-50/10">
      {/* Newsletter */}
      <section className="container-ed py-14 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-start">
          <div>
            <p className="eyebrow mb-4">{newsletter.eyebrow}</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-display-3 leading-tight mb-4">
              {newsletter.headline}
            </h2>
            <p className="text-ink-900/70 dark:text-ink-50/70 max-w-md leading-relaxed text-sm md:text-base">
              {newsletter.subline}
            </p>
          </div>

          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder={newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border-b border-ink-900/20 dark:border-ink-50/20 py-3 md:py-4 px-1 text-base md:text-lg focus:outline-none focus:border-honey-500 transition-colors font-serif"
              />
              <button type="submit" className="btn-primary shrink-0">
                {newsletter.cta}
              </button>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-900/45 dark:text-ink-50/45">
              {status === 'ok' ? newsletter.successMessage : newsletter.privacyNote}
            </p>
          </form>
        </div>
      </section>

      <div className="container-ed"><div className="hairline" /></div>

      {/* Link columns */}
      <section className="container-ed py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-display text-3xl md:text-4xl leading-none inline-block mb-3 md:mb-4">
              {brand.name}
            </Link>
            <p className="font-serif italic text-base md:text-lg text-ink-900/65 dark:text-ink-50/65 max-w-xs leading-snug">
              {brand.footerTagline}
            </p>
          </div>
          {[footer.productColumn, footer.companyColumn, footer.legalColumn].map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow-muted mb-3 md:mb-4">{col.title}</h3>
              <ul className="space-y-2 md:space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <FooterLink link={l} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="container-ed"><div className="hairline" /></div>

      <section className="container-ed py-6 md:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-3 font-mono text-[10px] uppercase tracking-widest text-ink-900/50 dark:text-ink-50/50">
          <span>{footer.copyright}</span>
          <span>{brand.smallPrintLine}</span>
        </div>
      </section>
    </footer>
  )
}
