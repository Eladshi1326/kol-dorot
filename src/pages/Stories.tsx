import { Link } from 'react-router-dom'
import { sampleStories, finalCTA } from '../data/content'
import StoryPlayer from '../components/StoryPlayer'

export default function Stories() {
  return (
    <>
      {/* HERO */}
      <section className="container-ed pt-16 md:pt-28 pb-14 md:pb-20 relative overflow-hidden">
        <div className="absolute -top-32 -right-48 w-[620px] h-[620px] rounded-full bg-terra-500/8 dark:bg-terra-500/6 blur-3xl -z-10" />
        <div className="max-w-3xl">
          <p className="eyebrow mb-6 animate-fade-in">{sampleStories.eyebrow}</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.98] mb-8 whitespace-pre-line animate-fade-up">
            {sampleStories.headline}
          </h1>
          <p
            className="font-serif text-xl md:text-2xl leading-relaxed text-ink-900/70 dark:text-ink-50/70 animate-fade-up"
            style={{ animationDelay: '140ms', animationFillMode: 'both' }}
          >
            {sampleStories.subline}
          </p>
        </div>
      </section>

      {/* INDEX / META STRIP */}
      <section className="container-ed pb-10 md:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-y border-ink-900/10 dark:border-ink-50/10 py-8 reveal">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/50 dark:text-ink-50/50 mb-2">הקלטות בארכיון</p>
            <p className="font-display text-3xl md:text-4xl tabular-nums">5</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/50 dark:text-ink-50/50 mb-2">גיל ממוצע</p>
            <p className="font-display text-3xl md:text-4xl tabular-nums">87</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/50 dark:text-ink-50/50 mb-2">סה״כ דקות</p>
            <p className="font-display text-3xl md:text-4xl tabular-nums">62</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/50 dark:text-ink-50/50 mb-2">תקופה</p>
            <p className="font-display text-xl md:text-2xl">1945 — 1967</p>
          </div>
        </div>
      </section>

      {/* STORY LIST */}
      <section className="container-ed pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto space-y-14 md:space-y-20">
          {sampleStories.items.map((story, i) => (
            <div key={story.title} className="relative">
              <div className="absolute -top-6 right-0 md:-right-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-900/35 dark:text-ink-50/35">
                הקלטה · {String(i + 1).padStart(2, '0')} מתוך {String(sampleStories.items.length).padStart(2, '0')}
              </div>
              <StoryPlayer story={story} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* SCALLOP */}
      <div className="container-ed">
        <div className="scallop-divider" />
      </div>

      {/* A QUIET NOTE */}
      <section className="container-ed py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="eyebrow mb-5">הערה קצרה</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] mb-8">
            אלה חמישה קולות.
            <br />
            <span className="font-serif italic font-normal text-ink-900/55 dark:text-ink-50/55">
              בבית שלכם יש עוד.
            </span>
          </h2>
          <p className="font-serif text-lg md:text-xl leading-relaxed text-ink-900/70 dark:text-ink-50/70 mb-10">
            ההקלטות כאן מוצגות באישור המשפחות. הקשבנו שוב ושוב לפני שפרסמנו, כי הן לא שלנו —
            הן של אופיר, של תמר, של שלום, של ירית, של ליהי.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-primary">{finalCTA.buttonPrimary}</Link>
            <Link to="/how" className="btn-secondary">איך להתחיל</Link>
          </div>
        </div>
      </section>
    </>
  )
}
