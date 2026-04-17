import { Link } from 'react-router-dom'
import {
  hero,
  manifesto,
  valueProps,
  features,
  testimonials,
  sampleStories,
  finalCTA,
  pricing,
  faq,
} from '../data/content'
import ProductMockup from '../components/ProductMockup'
import FeatureIcon from '../components/FeatureIcon'
import StoryPlayer from '../components/StoryPlayer'
import { useState } from 'react'

export default function Home() {
  return (
    <>
      {/* HERO — RTL split: text right, product mockup left */}
      <section className="container-ed pt-10 md:pt-16 pb-20 md:pb-28 relative overflow-hidden">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-12 md:gap-16 items-center">
          <div>
            <p className="eyebrow mb-6 animate-fade-in">
              {hero.eyebrow}
            </p>
            <h1 className="font-display text-display-1 mb-8 animate-fade-up whitespace-pre-line">
              {hero.headline}
            </h1>
            <p
              className="font-serif text-xl md:text-2xl font-light text-ink-900/75 dark:text-ink-50/75 max-w-xl leading-snug mb-10 animate-fade-up"
              style={{ animationDelay: '120ms', animationFillMode: 'both' }}
            >
              {hero.subline}
            </p>

            <div
              className="flex flex-wrap items-center gap-5 animate-fade-up"
              style={{ animationDelay: '240ms', animationFillMode: 'both' }}
            >
              <Link to="/how" className="btn-primary">
                {hero.primaryCTA}
                <span aria-hidden>←</span>
              </Link>
              <Link to="/stories" className="btn-secondary">
                {hero.secondaryCTA}
              </Link>
            </div>

            <p
              className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-900/45 dark:text-ink-50/45 animate-fade-in"
              style={{ animationDelay: '420ms', animationFillMode: 'both' }}
            >
              {hero.micro}
            </p>
          </div>

          <div
            className="animate-fade-up"
            style={{ animationDelay: '200ms', animationFillMode: 'both' }}
          >
            <ProductMockup />
          </div>
        </div>
      </section>

      <div className="container-ed"><div className="hairline" /></div>

      {/* SOCIAL PROOF STRIP — metric line */}
      <section className="container-ed py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center md:text-right">
          {[
            { metric: '2,147', label: 'משפחות מקליטות' },
            { metric: '18,340', label: 'סיפורים בארכיון' },
            { metric: '94%', label: 'דיוק תמלול בעברית' },
            { metric: '50 שנה', label: 'התחייבות לשמירה' },
          ].map((s, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="font-display text-4xl md:text-5xl mb-2 tabular-nums">{s.metric}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-900/55 dark:text-ink-50/55">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="container-ed"><div className="hairline" /></div>

      {/* MANIFESTO — editorial prose block */}
      <section className="container-ed py-20 md:py-32">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          <div className="md:sticky md:top-28 md:h-fit">
            <p className="eyebrow mb-4">{manifesto.eyebrow}</p>
            <h2 className="font-display text-display-2 leading-[1.05] whitespace-pre-line">
              {manifesto.headline}
            </h2>
          </div>
          <div className="prose-editorial max-w-2xl reveal">
            {manifesto.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <div className="container-ed"><div className="hairline" /></div>

      {/* THREE VALUE PROPS */}
      <section className="container-ed py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          {valueProps.map((v, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="eyebrow mb-5">{v.eyebrow}</div>
              <h3 className="font-display text-display-4 mb-4 leading-tight">{v.title}</h3>
              <p className="text-ink-900/72 dark:text-ink-50/72 text-base leading-relaxed max-w-sm">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="container-ed"><div className="hairline" /></div>

      {/* FEATURE GRID */}
      <section className="container-ed py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-20">
          <div>
            <p className="eyebrow mb-4">{features.eyebrow}</p>
            <h2 className="font-display text-display-2 leading-tight whitespace-pre-line">
              {features.headline}
            </h2>
          </div>
          <p className="text-ink-900/65 dark:text-ink-50/65 max-w-md leading-relaxed">
            {features.subline}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {features.items.map((f, i) => (
            <div
              key={i}
              className="reveal group pb-8 border-b border-ink-900/10 dark:border-ink-50/10 hover:border-honey-500 transition-colors"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mb-6 text-honey-500 group-hover:scale-110 transition-transform origin-right duration-500">
                <FeatureIcon name={f.iconHint} />
              </div>
              <h3 className="font-display text-2xl mb-3">{f.title}</h3>
              <p className="text-ink-900/68 dark:text-ink-50/68 leading-relaxed text-[15px]">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="container-ed"><div className="hairline" /></div>

      {/* STORIES PREVIEW — one sample player */}
      <section className="container-ed py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-4">{sampleStories.eyebrow}</p>
            <h2 className="font-display text-display-3 leading-tight whitespace-pre-line">
              {sampleStories.headline}
            </h2>
          </div>
          <Link to="/stories" className="font-mono text-[11px] uppercase tracking-[0.22em] link-underline hidden md:inline-block">
            כל ההקלטות ←
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {sampleStories.items.slice(0, 2).map((s, i) => (
            <StoryPlayer key={s.title} story={s} index={i} />
          ))}
        </div>
      </section>

      <div className="container-ed"><div className="hairline" /></div>

      {/* TESTIMONIALS */}
      <section className="container-ed py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-20">
          <p className="eyebrow mb-4">{testimonials.eyebrow}</p>
          <h2 className="font-display text-display-2 leading-tight mb-5">
            {testimonials.headline}
          </h2>
          <p className="font-serif italic text-xl text-ink-900/65 dark:text-ink-50/65">
            {testimonials.subline}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 max-w-5xl mx-auto">
          {testimonials.items.map((t, i) => (
            <figure
              key={i}
              className="reveal border-r-2 border-honey-500 pr-6 md:pr-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <blockquote className="font-serif text-lg md:text-xl leading-relaxed text-ink-900/90 dark:text-ink-50/90 mb-6">
                {t.quote}
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-honey-500/15 dark:bg-honey-500/20 flex items-center justify-center font-display text-lg text-honey-600 dark:text-honey-400">
                  {t.author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-serif text-base">{t.author.name}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink-900/55 dark:text-ink-50/55">
                    {t.author.role} · {t.author.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="container-ed"><div className="hairline" /></div>

      {/* PRICING */}
      <section className="container-ed py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <p className="eyebrow mb-4">{pricing.eyebrow}</p>
          <h2 className="font-display text-display-2 mb-4">{pricing.headline}</h2>
          <p className="font-serif italic text-xl text-ink-900/65 dark:text-ink-50/65">
            {pricing.subline}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {pricing.tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`reveal p-8 md:p-10 flex flex-col ${
                tier.highlighted
                  ? 'bg-ink-900 text-paper-50 dark:bg-paper-50 dark:text-ink-950 relative'
                  : 'card-surface'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {tier.highlighted && (
                <div className="absolute top-0 right-10 -translate-y-1/2 font-mono text-[10px] uppercase tracking-widest bg-honey-500 text-paper-50 px-3 py-1">
                  הנבחר
                </div>
              )}
              <h3 className="font-display text-3xl mb-2">{tier.name}</h3>
              <p className={`text-sm mb-6 ${tier.highlighted ? 'text-paper-50/70 dark:text-ink-950/70' : 'text-ink-900/65 dark:text-ink-50/65'}`}>
                {tier.description}
              </p>
              <div className="mb-8">
                <span className="font-display text-5xl">{tier.price}</span>
                {tier.pricePeriod && (
                  <span className={`mr-2 text-sm ${tier.highlighted ? 'text-paper-50/60 dark:text-ink-950/60' : 'text-ink-900/55 dark:text-ink-50/55'}`}>
                    {tier.pricePeriod}
                  </span>
                )}
              </div>
              <ul className="space-y-3 mb-10 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="text-honey-500 mt-1">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full font-mono text-[11px] uppercase tracking-[0.22em] px-6 py-4 transition-colors ${
                  tier.highlighted
                    ? 'bg-paper-50 text-ink-900 hover:bg-honey-500 hover:text-paper-50 dark:bg-ink-950 dark:text-paper-50 dark:hover:bg-honey-500'
                    : 'border border-ink-900/30 dark:border-ink-50/30 hover:border-honey-500 hover:text-honey-500'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="container-ed"><div className="hairline" /></div>

      {/* FAQ */}
      <section className="container-ed py-20 md:py-28">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          <div className="md:sticky md:top-28 md:h-fit">
            <p className="eyebrow mb-4">{faq.eyebrow}</p>
            <h2 className="font-display text-display-2 leading-tight">{faq.headline}</h2>
          </div>
          <div className="reveal">
            <FAQList items={faq.items} />
          </div>
        </div>
      </section>

      <div className="container-ed"><div className="hairline" /></div>

      {/* FINAL CTA */}
      <section className="container-ed py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-6">{finalCTA.eyebrow}</p>
          <h2 className="font-display text-display-1 leading-[1.02] mb-8 whitespace-pre-line">
            {finalCTA.headline}
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-ink-900/70 dark:text-ink-50/70 mb-12">
            {finalCTA.subline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link to="/how" className="btn-primary">
              {finalCTA.buttonPrimary}
            </Link>
            <Link to="/stories" className="btn-secondary">
              {finalCTA.buttonSecondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

// ---- inline FAQ list ----
function FAQList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-ink-900/10 dark:divide-ink-50/10 border-t border-b border-ink-900/10 dark:border-ink-50/10">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-right hover:text-honey-500 transition-colors"
            >
              <span className="font-serif text-lg md:text-xl leading-tight">{it.q}</span>
              <span className={`shrink-0 w-6 h-6 flex items-center justify-center text-honey-500 transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                +
              </span>
            </button>
            <div
              className="grid transition-all duration-500 ease-out"
              style={{
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <p className="pb-7 text-ink-900/70 dark:text-ink-50/70 leading-relaxed text-base max-w-2xl">
                  {it.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
