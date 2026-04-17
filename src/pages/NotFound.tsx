import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-ed pt-16 md:pt-32 pb-20 md:pb-40 min-h-[70vh] flex items-center">
      <div className="max-w-2xl reveal">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-honey-500 mb-5 md:mb-6">
          404 · הדף לא נמצא
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[1] mb-6 md:mb-8 whitespace-pre-line">
          יש דברים{'\n'}שלא מוצאים.
        </h1>
        <p className="font-serif text-lg md:text-2xl leading-relaxed text-ink-900/75 dark:text-ink-50/75 mb-8 md:mb-10">
          הדף שחיפשתם אולי עבר דירה, ואולי פשוט מעולם לא היה. בכל מקרה, יש לנו
          משהו אחר שאולי תרצו — סיפור אמיתי מפי סבתא בת שמונים ושבע.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/" className="btn-primary">
            חזרה לבית
          </Link>
          <Link to="/stories" className="btn-secondary">
            הקשיבו לסיפור
          </Link>
        </div>
        <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/40 dark:text-ink-50/40">
          כל דף מאבד פעם · רק הקול נשאר
        </p>
      </div>
    </section>
  )
}
