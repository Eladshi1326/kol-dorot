import { Link } from 'react-router-dom'
import { howItWorks, features, languages, privacy, finalCTA } from '../data/content'
import FeatureIcon from '../components/FeatureIcon'

export default function HowItWorks() {
  return (
    <>
      {/* HERO */}
      <section className="container-ed pt-16 md:pt-28 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute -top-20 -left-40 w-[580px] h-[580px] rounded-full bg-honey-500/8 dark:bg-honey-500/6 blur-3xl -z-10" />
        <div className="max-w-3xl">
          <p className="eyebrow mb-6 animate-fade-in">{howItWorks.eyebrow}</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.98] mb-8 whitespace-pre-line animate-fade-up">
            {howItWorks.headline}
          </h1>
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink-900/70 dark:text-ink-50/70 animate-fade-up" style={{ animationDelay: '140ms', animationFillMode: 'both' }}>
            {howItWorks.subline}
          </p>
        </div>
      </section>

      {/* SCALLOP */}
      <div className="container-ed">
        <div className="scallop-divider" />
      </div>

      {/* FOUR STEPS */}
      <section className="container-ed pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid md:grid-cols-12 gap-8 md:gap-14">
          {/* Left rail (sticky label) */}
          <aside className="md:col-span-4">
            <div className="md:sticky md:top-28 reveal">
              <p className="eyebrow mb-3">ארבעת השלבים</p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight">
                פשוט מספיק
                <br />
                <span className="font-serif italic font-normal text-ink-900/55 dark:text-ink-50/55">כדי שסבתא תעשה זה לבדה.</span>
              </h2>
              <p className="mt-6 text-ink-900/60 dark:text-ink-50/60 text-sm leading-relaxed border-r-2 border-honey-500 pr-4">
                תכננו את הזרימה הזו על סבתות אמיתיות. בדקנו אותה עם עשרים ושמונה מהן, בין שש עשרה למאה ואחת, בשלוש שפות. מה שלא עבד — זרקנו.
              </p>
            </div>
          </aside>

          {/* Right list */}
          <ol className="md:col-span-8 space-y-10 md:space-y-14">
            {howItWorks.steps.map((step, i) => (
              <li
                key={step.number}
                className="relative pr-0 md:pr-10 border-t border-ink-900/10 dark:border-ink-50/10 pt-10 md:pt-12 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="font-mono text-sm text-honey-500 tabular-nums">{step.number}</span>
                  <h3 className="font-display text-3xl md:text-4xl leading-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="font-serif text-lg md:text-xl leading-relaxed text-ink-900/80 dark:text-ink-50/80 max-w-2xl">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-paper-100/60 dark:bg-ink-950/60 border-y border-ink-900/10 dark:border-ink-50/10 py-20 md:py-28">
        <div className="container-ed">
          <div className="max-w-3xl mb-14 md:mb-20">
            <p className="eyebrow mb-4 reveal">{features.eyebrow}</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] mb-6 whitespace-pre-line reveal">
              {features.headline}
            </h2>
            <p className="font-serif text-lg md:text-xl leading-relaxed text-ink-900/65 dark:text-ink-50/65 reveal">
              {features.subline}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-16">
            {features.items.map((f, i) => (
              <div key={f.title} className="reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="text-honey-500 mb-5">
                  <FeatureIcon name={f.iconHint} className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl mb-3">{f.title}</h3>
                <p className="text-ink-900/70 dark:text-ink-50/70 leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="container-ed pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5 reveal">
            <p className="eyebrow mb-4">{languages.eyebrow}</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.02] mb-6">
              {languages.headline}
            </h2>
            <p className="font-serif text-lg leading-relaxed text-ink-900/65 dark:text-ink-50/65">
              {languages.body}
            </p>
          </div>
          <ul className="md:col-span-7 divide-y divide-ink-900/10 dark:divide-ink-50/10">
            {languages.items.map((lang, i) => (
              <li
                key={lang.he}
                className="flex items-baseline justify-between gap-6 py-5 reveal"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="font-display text-xl md:text-2xl">{lang.he}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-900/50 dark:text-ink-50/50 text-left shrink-0">
                  {lang.note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-ink-900 dark:bg-ink-950 text-paper-50">
        <div className="absolute inset-0 grain opacity-50" />
        <div className="container-ed relative z-10">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-honey-500 mb-5 reveal">
              {privacy.eyebrow}
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] mb-10 md:mb-14 reveal">
              {privacy.headline}
            </h2>
            <ul className="space-y-6 md:space-y-7">
              {privacy.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-5 font-serif text-lg md:text-xl leading-relaxed text-paper-50/85 reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="mt-3 w-2 h-2 rounded-full bg-honey-500 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="container-ed py-20 md:py-28">
        <div className="max-w-3xl text-center mx-auto reveal">
          <p className="eyebrow mb-5">{finalCTA.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] mb-8 whitespace-pre-line">
            {finalCTA.headline}
          </h2>
          <p className="font-serif text-lg md:text-xl leading-relaxed text-ink-900/65 dark:text-ink-50/65 mb-10">
            {finalCTA.subline}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-primary">{finalCTA.buttonPrimary}</Link>
            <Link to="/stories" className="btn-secondary">{finalCTA.buttonSecondary}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
