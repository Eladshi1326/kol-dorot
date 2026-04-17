import { Link } from 'react-router-dom'
import { aboutPage, brand, newsletter } from '../data/content'

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="container-ed pt-16 md:pt-28 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute -top-24 -left-40 w-[580px] h-[580px] rounded-full bg-sage-500/10 dark:bg-sage-500/6 blur-3xl -z-10" />
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6 animate-fade-in">{aboutPage.eyebrow}</p>
            <h1 className="font-display text-5xl md:text-8xl leading-[0.95] mb-0 whitespace-pre-line animate-fade-up">
              {aboutPage.headline}
            </h1>
          </div>
          <div className="md:col-span-5">
            <p
              className="font-serif italic text-lg md:text-xl leading-relaxed text-ink-900/70 dark:text-ink-50/70 border-r-2 border-honey-500 pr-6 animate-fade-up"
              style={{ animationDelay: '160ms', animationFillMode: 'both' }}
            >
              {aboutPage.intro}
            </p>
          </div>
        </div>
      </section>

      {/* SCALLOP */}
      <div className="container-ed">
        <div className="scallop-divider" />
      </div>

      {/* EDITORIAL PROSE */}
      <section className="container-ed pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Left sticky marginalia */}
          <aside className="md:col-span-3">
            <div className="md:sticky md:top-28 space-y-6 reveal">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/45 dark:text-ink-50/45 mb-1">מיקום</p>
                <p className="font-display text-lg">תל אביב · ישראל</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/45 dark:text-ink-50/45 mb-1">נוסדה</p>
                <p className="font-display text-lg">חורף 2025</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/45 dark:text-ink-50/45 mb-1">מבנה</p>
                <p className="font-display text-lg">חברה עצמאית</p>
                <p className="text-xs text-ink-900/50 dark:text-ink-50/50 mt-1">ללא קרנות, ללא משקיעים</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/45 dark:text-ink-50/45 mb-1">צוות</p>
                <p className="font-display text-lg">ארבעה אנשים</p>
              </div>
            </div>
          </aside>

          {/* Editorial body */}
          <div className="md:col-span-9 prose-editorial reveal">
            {aboutPage.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-ink-900/85 dark:text-ink-50/85 ${i === 0 ? 'first-letter:font-display first-letter:text-6xl first-letter:float-right first-letter:ml-3 first-letter:mt-1 first-letter:text-honey-500 first-letter:leading-[0.9]' : ''}`}
              >
                {p}
              </p>
            ))}
            <p className="font-mono text-sm tracking-wider text-honey-500 mt-10">
              {aboutPage.signature}
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-paper-100/60 dark:bg-ink-950/60 border-y border-ink-900/10 dark:border-ink-50/10 py-20 md:py-28">
        <div className="container-ed">
          <div className="max-w-2xl mb-14 md:mb-20 reveal">
            <p className="eyebrow mb-4">הצוות</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] mb-6">
              ארבעה אנשים,
              <br />
              <span className="font-serif italic font-normal text-ink-900/55 dark:text-ink-50/55">ולא יותר.</span>
            </h2>
            <p className="font-serif text-lg leading-relaxed text-ink-900/65 dark:text-ink-50/65">
              אנחנו עובדים מבתים, מבית קפה בצפון תל אביב, ומפגישה של פעם בשבוע בה אנחנו מקליטים
              בעצמנו. זה עוזר לנו לזכור למה אנחנו כאן.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {aboutPage.team.map((member, i) => (
              <div key={member.name} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                {/* Portrait placeholder: warm gradient card */}
                <div className="aspect-[4/5] rounded-2xl mb-5 overflow-hidden relative border border-ink-900/10 dark:border-ink-50/10">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        i % 4 === 0
                          ? 'linear-gradient(145deg, #E5DBC8 0%, #B8824A 100%)'
                          : i % 4 === 1
                            ? 'linear-gradient(145deg, #D2C3A8 0%, #C17F5F 100%)'
                            : i % 4 === 2
                              ? 'linear-gradient(145deg, #F2EDE3 0%, #8FA68B 100%)'
                              : 'linear-gradient(145deg, #E5DBC8 0%, #6B5E7A 100%)',
                    }}
                  />
                  <div className="absolute inset-0 grain opacity-60" />
                  <div className="absolute bottom-4 right-4 font-display text-3xl text-paper-50/90">
                    {member.name.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-[0.22em] text-paper-50/80">
                    0{i + 1}
                  </div>
                </div>
                <h3 className="font-display text-2xl mb-1">{member.name}</h3>
                <p className="font-serif italic text-ink-900/65 dark:text-ink-50/65 mb-1">{member.role}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/45 dark:text-ink-50/45">
                  {member.location}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-16 md:mt-20 font-serif italic text-lg md:text-xl leading-relaxed text-ink-900/65 dark:text-ink-50/65 max-w-2xl reveal">
            ושולה — שמדברת עם סבים וסבתות כל חודש, ומחזיקה את כולנו קרובים לשטח.
          </p>
        </div>
      </section>

      {/* VALUES / BELIEFS */}
      <section className="container-ed pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="max-w-3xl mb-12 md:mb-16 reveal">
          <p className="eyebrow mb-4">במה אנחנו מאמינים</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02]">
            חמישה דברים
            <br />
            <span className="font-serif italic font-normal text-ink-900/55 dark:text-ink-50/55">שלא נתפשר עליהם.</span>
          </h2>
        </div>

        <ol className="grid md:grid-cols-2 gap-x-14 gap-y-10 md:gap-y-14">
          {[
            { n: '01', t: 'זמן חשוב יותר מתכונות.', b: 'כל חודש שאנחנו מחכים לבנות משהו חדש — יש סבא שיכל להקליט סיפור. אנחנו משחררים מוקדם, מתקנים בשטח.' },
            { n: '02', t: 'לא נמכור את הנתונים. לעולם.', b: 'לא למודלים. לא למפרסמים. לא לממשלה. אם אי פעם זה ישתנה — המשתמשים יקבלו את ההקלטות שלהם, ואנחנו נסגור.' },
            { n: '03', t: 'לכתוב כמו בני אדם.', b: 'בלי "הפלטפורמה המהפכנית". בלי "פתרונות מתקדמים". רק עברית רגילה, כזו שסבתא תבין.' },
            { n: '04', t: 'איטי כשצריך.', b: 'אין דחיפות מלאכותיות. אין טיימרים. אין "עוד 3 אנשים רוכשים עכשיו". הסבא שלכם לא חי לפי לוח זמנים של אפליקציה.' },
            { n: '05', t: 'קטנים כשאפשר.', b: 'אנחנו לא רוצים להיות ענקיים. אנחנו רוצים להיות מספיק — למשפחה שלכם, למשפחה של השכן, ולזו שלהם.' },
          ].map((v, i) => (
            <li key={v.n} className="border-t border-ink-900/10 dark:border-ink-50/10 pt-8 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-sm text-honey-500 tabular-nums">{v.n}</span>
                <h3 className="font-display text-2xl md:text-3xl">{v.t}</h3>
              </div>
              <p className="text-ink-900/70 dark:text-ink-50/70 leading-relaxed md:pr-8">{v.b}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* NEWSLETTER */}
      <section className="container-ed pb-24 md:pb-32">
        <div className="card-surface p-8 md:p-14 rounded-3xl grid md:grid-cols-5 gap-10 items-center reveal">
          <div className="md:col-span-3">
            <p className="eyebrow mb-3">{newsletter.eyebrow}</p>
            <h3 className="font-display text-3xl md:text-4xl leading-tight mb-3">
              {newsletter.headline}
            </h3>
            <p className="font-serif text-ink-900/65 dark:text-ink-50/65 leading-relaxed">
              {newsletter.subline}
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="md:col-span-2 flex gap-3 items-stretch"
          >
            <input
              type="email"
              placeholder={newsletter.placeholder}
              className="flex-1 px-4 py-3 rounded-xl bg-paper-50 dark:bg-ink-900 border border-ink-900/15 dark:border-ink-50/15 focus:outline-none focus:border-honey-500 text-sm"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              {newsletter.cta}
            </button>
          </form>
          <p className="md:col-span-5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/40 dark:text-ink-50/40">
            {newsletter.privacyNote}
          </p>
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section className="container-ed pb-20 md:pb-28">
        <div className="max-w-xl mx-auto text-center reveal">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/40 dark:text-ink-50/40 mb-4">
            {brand.smallPrintLine}
          </p>
          <Link to="/" className="font-display text-2xl md:text-3xl link-underline text-honey-500">
            {brand.name}
          </Link>
        </div>
      </section>
    </>
  )
}
