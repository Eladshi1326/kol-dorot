import { Link } from 'react-router-dom'
import { useState } from 'react'
import { brand, footer, newsletter } from '../data/content'

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
      <section className="container-ed py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-start">
          <div>
            <p className="eyebrow mb-4">{newsletter.eyebrow}</p>
            <h2 className="font-display text-display-3 leading-tight mb-4">
              {newsletter.headline}
            </h2>
            <p className="text-ink-900/70 dark:text-ink-50/70 max-w-md leading-relaxed">
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
                className="flex-1 bg-transparent border-b border-ink-900/20 dark:border-ink-50/20 py-4 px-1 text-lg focus:outline-none focus:border-honey-500 transition-colors font-serif"
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
      <section className="container-ed py-14 md:py-16">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-12">
          <div>
            <Link to="/" className="font-display text-4xl leading-none inline-block mb-4">
              {brand.name}
            </Link>
            <p className="font-serif italic text-lg text-ink-900/65 dark:text-ink-50/65 max-w-xs leading-snug">
              {brand.footerTagline}
            </p>
          </div>
          {[footer.productColumn, footer.companyColumn, footer.legalColumn].map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow-muted mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm link-underline">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="container-ed"><div className="hairline" /></div>

      <section className="container-ed py-8">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widest text-ink-900/50 dark:text-ink-50/50">
          <span>{footer.copyright}</span>
          <span>{brand.smallPrintLine}</span>
        </div>
      </section>
    </footer>
  )
}
