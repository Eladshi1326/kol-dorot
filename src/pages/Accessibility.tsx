import { Link } from 'react-router-dom'
import { accessibilityPage } from '../data/content'

export default function Accessibility() {
  return (
    <>
      {/* HERO */}
      <section className="container-ed pt-12 md:pt-24 pb-10 md:pb-16 relative overflow-hidden">
        <div className="absolute -top-24 -left-40 w-[480px] h-[480px] rounded-full bg-terra-500/8 dark:bg-terra-500/6 blur-3xl -z-10" />
        <div className="max-w-3xl">
          <p className="eyebrow mb-5 animate-fade-in">{accessibilityPage.eyebrow}</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.02] mb-6 md:mb-8 whitespace-pre-line animate-fade-up">
            {accessibilityPage.headline}
          </h1>
          <p
            className="font-serif text-lg md:text-2xl leading-relaxed text-ink-900/70 dark:text-ink-50/70 animate-fade-up"
            style={{ animationDelay: '140ms', animationFillMode: 'both' }}
          >
            {accessibilityPage.intro}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/45 dark:text-ink-50/45 mt-6">
            {accessibilityPage.updated}
          </p>
        </div>
      </section>

      <div className="container-ed">
        <div className="scallop-divider" />
      </div>

      {/* COMPLIANCE */}
      <section className="container-ed pt-12 md:pt-20 pb-10 md:pb-16">
        <div className="max-w-3xl mx-auto reveal border-r-2 border-honey-500 pr-5 md:pr-8">
          <h2 className="font-display text-2xl md:text-3xl leading-tight mb-4">
            {accessibilityPage.compliance.title}
          </h2>
          <p className="font-serif text-base md:text-lg leading-relaxed text-ink-900/80 dark:text-ink-50/80">
            {accessibilityPage.compliance.body}
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container-ed pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4 md:mb-6">מה הבטחנו לכולם</p>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-14">
            {accessibilityPage.features.map((f, i) => (
              <article
                key={f.title}
                className="reveal border-t border-ink-900/10 dark:border-ink-50/10 pt-6 md:pt-8"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <h3 className="font-display text-xl md:text-2xl mb-3 leading-tight">
                  {f.title}
                </h3>
                <p className="text-ink-900/70 dark:text-ink-50/70 leading-relaxed text-[15px] md:text-base">
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="bg-paper-100/60 dark:bg-ink-950/60 border-y border-ink-900/10 dark:border-ink-50/10 py-14 md:py-20">
        <div className="container-ed">
          <div className="max-w-3xl mx-auto reveal">
            <p className="eyebrow mb-4">{accessibilityPage.limitations.title}</p>
            <h2 className="font-display text-2xl md:text-4xl leading-tight mb-6 md:mb-8">
              איפה אנחנו עדיין לא שם
            </h2>
            <ul className="space-y-4 md:space-y-5">
              {accessibilityPage.limitations.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 font-serif text-base md:text-lg leading-relaxed text-ink-900/80 dark:text-ink-50/80"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-honey-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="container-ed py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="eyebrow mb-4">{accessibilityPage.contact.title}</p>
          <p className="font-serif text-lg md:text-xl leading-relaxed text-ink-900/75 dark:text-ink-50/75 mb-8">
            {accessibilityPage.contact.body}
          </p>
          <div className="space-y-3">
            <p className="font-display text-lg md:text-xl">
              <a href={`mailto:${accessibilityPage.contact.email}`} className="link-underline text-honey-500">
                {accessibilityPage.contact.email}
              </a>
            </p>
            <p className="font-mono text-xs md:text-sm tracking-widest text-ink-900/60 dark:text-ink-50/60">
              {accessibilityPage.contact.phone}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/45 dark:text-ink-50/45 pt-2">
              {accessibilityPage.contact.response}
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="container-ed pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-3 md:gap-4 justify-center border-t border-ink-900/10 dark:border-ink-50/10 pt-10">
          <Link to="/privacy" className="btn-secondary">מדיניות פרטיות</Link>
          <Link to="/terms" className="btn-secondary">תנאי שימוש</Link>
          <Link to="/preservation" className="btn-secondary">התחייבות לשימור</Link>
          <Link to="/" className="btn-primary">חזרה לבית</Link>
        </div>
      </section>
    </>
  )
}
