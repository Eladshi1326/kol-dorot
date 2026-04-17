import { Link } from 'react-router-dom'
import { preservationPage } from '../data/content'

export default function Preservation() {
  return (
    <>
      {/* HERO */}
      <section className="container-ed pt-12 md:pt-24 pb-10 md:pb-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-40 w-[580px] h-[580px] rounded-full bg-honey-500/10 dark:bg-honey-500/6 blur-3xl -z-10" />
        <div className="grid md:grid-cols-12 gap-8 md:gap-14 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow mb-5 animate-fade-in">{preservationPage.eyebrow}</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-8xl leading-[0.98] mb-0 whitespace-pre-line animate-fade-up">
              {preservationPage.headline}
            </h1>
          </div>
          <div className="md:col-span-5">
            <p
              className="font-serif italic text-lg md:text-xl leading-relaxed text-ink-900/70 dark:text-ink-50/70 border-r-2 border-honey-500 pr-5 md:pr-6 animate-fade-up"
              style={{ animationDelay: '160ms', animationFillMode: 'both' }}
            >
              {preservationPage.intro}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/45 dark:text-ink-50/45 mt-5">
              {preservationPage.updated}
            </p>
          </div>
        </div>
      </section>

      <div className="container-ed">
        <div className="scallop-divider" />
      </div>

      {/* PLEDGE */}
      <section className="container-ed pt-12 md:pt-20 pb-10 md:pb-16">
        <div className="max-w-3xl mx-auto reveal">
          <p className="eyebrow mb-4">{preservationPage.pledge.title}</p>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.15] text-ink-900/90 dark:text-ink-50/90">
            {preservationPage.pledge.body}
          </p>
        </div>
      </section>

      {/* LAYERS */}
      <section className="bg-paper-100/60 dark:bg-ink-950/60 border-y border-ink-900/10 dark:border-ink-50/10 py-16 md:py-24">
        <div className="container-ed">
          <div className="max-w-3xl mb-10 md:mb-16 reveal">
            <p className="eyebrow mb-4">חמישה רבדים של הגנה</p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05]">
              לא דבר אחד.
              <br />
              <span className="font-serif italic font-normal text-ink-900/55 dark:text-ink-50/55">
                חמישה.
              </span>
            </h2>
          </div>

          <ol className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-14">
            {preservationPage.layers.map((layer, i) => (
              <li
                key={layer.number}
                className="reveal border-t border-ink-900/10 dark:border-ink-50/10 pt-6 md:pt-8"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-mono text-sm text-honey-500 tabular-nums">
                    {layer.number}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl leading-tight">
                    {layer.title}
                  </h3>
                </div>
                <p className="text-ink-900/75 dark:text-ink-50/75 leading-relaxed text-[15px] md:text-base">
                  {layer.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SCENARIOS */}
      <section className="container-ed py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 md:mb-14 reveal">
            <p className="eyebrow mb-4">{preservationPage.scenarios.title}</p>
            <h2 className="font-display text-2xl md:text-4xl leading-tight">
              שאלות ותשובות — בכנות.
            </h2>
          </div>

          <div className="divide-y divide-ink-900/10 dark:divide-ink-50/10 border-t border-b border-ink-900/10 dark:border-ink-50/10">
            {preservationPage.scenarios.items.map((item, i) => (
              <article key={i} className="py-7 md:py-8 reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <h3 className="font-serif text-lg md:text-xl leading-tight mb-3 text-honey-600 dark:text-honey-400">
                  {item.q}
                </h3>
                <p className="text-ink-900/75 dark:text-ink-50/75 leading-relaxed text-base">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="container-ed pb-16 md:pb-24">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="font-serif italic text-lg md:text-2xl leading-relaxed text-ink-900/75 dark:text-ink-50/75">
            {preservationPage.closing}
          </p>
          <p className="font-mono text-sm tracking-wider text-honey-500 mt-10">
            — הצוות של קול־דורות
          </p>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="container-ed pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-3 md:gap-4 justify-center border-t border-ink-900/10 dark:border-ink-50/10 pt-10">
          <Link to="/privacy" className="btn-secondary">מדיניות פרטיות</Link>
          <Link to="/terms" className="btn-secondary">תנאי שימוש</Link>
          <Link to="/accessibility" className="btn-secondary">הנגשה</Link>
          <Link to="/" className="btn-primary">חזרה לבית</Link>
        </div>
      </section>
    </>
  )
}
