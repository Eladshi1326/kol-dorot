import { Link } from 'react-router-dom'
import { termsPage } from '../data/content'

export default function Terms() {
  return (
    <>
      {/* HERO */}
      <section className="container-ed pt-12 md:pt-24 pb-10 md:pb-16 relative overflow-hidden">
        <div className="absolute -top-24 -right-40 w-[480px] h-[480px] rounded-full bg-honey-500/10 dark:bg-honey-500/6 blur-3xl -z-10" />
        <div className="max-w-3xl">
          <p className="eyebrow mb-5 animate-fade-in">{termsPage.eyebrow}</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.02] mb-6 md:mb-8 whitespace-pre-line animate-fade-up">
            {termsPage.headline}
          </h1>
          <p
            className="font-serif text-lg md:text-2xl leading-relaxed text-ink-900/70 dark:text-ink-50/70 animate-fade-up"
            style={{ animationDelay: '140ms', animationFillMode: 'both' }}
          >
            {termsPage.intro}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/45 dark:text-ink-50/45 mt-6">
            {termsPage.updated}
          </p>
        </div>
      </section>

      <div className="container-ed">
        <div className="scallop-divider" />
      </div>

      {/* SECTIONS */}
      <section className="container-ed pt-12 md:pt-20 pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto space-y-10 md:space-y-14">
          {termsPage.sections.map((s, i) => (
            <article
              key={s.title}
              className="reveal border-t border-ink-900/10 dark:border-ink-50/10 pt-8 md:pt-10"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <h2 className="font-display text-2xl md:text-3xl leading-tight mb-4 md:mb-5">
                {s.title}
              </h2>
              <p className="font-serif text-base md:text-lg leading-relaxed text-ink-900/80 dark:text-ink-50/80">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="container-ed pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-3 md:gap-4 justify-center border-t border-ink-900/10 dark:border-ink-50/10 pt-10">
          <Link to="/privacy" className="btn-secondary">מדיניות פרטיות</Link>
          <Link to="/accessibility" className="btn-secondary">הנגשה</Link>
          <Link to="/preservation" className="btn-secondary">התחייבות לשימור</Link>
          <Link to="/" className="btn-primary">חזרה לבית</Link>
        </div>
      </section>
    </>
  )
}
