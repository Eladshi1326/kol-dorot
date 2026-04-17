import { useEffect, useState } from 'react'
import Waveform from './Waveform'

// A hero-side mockup that looks like the app mid-recording.
// Not a static render — shows live-feeling state changes.

export default function ProductMockup() {
  const [seconds, setSeconds] = useState(47)
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [])
  const mm = Math.floor(seconds / 60).toString().padStart(2, '0')
  const ss = (seconds % 60).toString().padStart(2, '0')

  return (
    <div className="relative">
      {/* Soft ambient glow */}
      <div className="absolute -inset-6 bg-honey-500/12 dark:bg-honey-500/8 blur-3xl -z-10 rounded-full" />

      {/* Phone frame */}
      <div className="relative mx-auto w-full max-w-[340px] aspect-[9/18] bg-ink-950 dark:bg-ink-900 rounded-[2.8rem] p-2 shadow-2xl shadow-ink-900/30 dark:shadow-black/50 border border-ink-900/20 dark:border-ink-50/10">
        {/* Screen */}
        <div className="w-full h-full bg-paper-50 dark:bg-ink-900 rounded-[2.3rem] overflow-hidden relative">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 pt-4 pb-2 font-mono text-[10px] text-ink-900/70 dark:text-ink-50/70">
            <span>9:42</span>
            <span className="flex gap-1">
              <span>●●●</span>
              <span>100%</span>
            </span>
          </div>

          {/* Top chrome */}
          <div className="px-5 pt-3 pb-6">
            <p className="font-mono text-[9px] uppercase tracking-widest text-honey-500 mb-1">מקליטים עכשיו</p>
            <h3 className="font-display text-lg leading-tight">סיפור שלישי<br/><span className="text-ink-900/50 dark:text-ink-50/50 font-serif italic text-base font-normal">רבקה, סבתא של אופיר</span></h3>
          </div>

          {/* Recording card */}
          <div className="mx-4 mb-4 p-4 bg-paper-100 dark:bg-ink-950 rounded-2xl border border-ink-900/8 dark:border-ink-50/8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-900/70 dark:text-ink-50/70">הקלטה חיה</span>
              <span className="mr-auto font-mono text-sm tabular-nums">{mm}:{ss}</span>
            </div>
            <Waveform bars={32} height={42} playing seed={21} />
          </div>

          {/* Live transcription */}
          <div className="mx-4 mb-4 p-4 bg-paper-50 dark:bg-ink-900 rounded-2xl border border-ink-900/8 dark:border-ink-50/8">
            <p className="font-mono text-[9px] uppercase tracking-widest text-ink-900/45 dark:text-ink-50/45 mb-2">מתמלל בזמן אמת</p>
            <p className="font-serif text-[13px] leading-relaxed text-ink-900/85 dark:text-ink-50/85">
              ...הלכתי ברחוב שדרות הים של חיפה, ירדנו לעיר, והבטן שלי היתה שקטה
              <span className="inline-block w-1.5 h-3 bg-honey-500 mr-0.5 align-text-bottom animate-pulse" />
            </p>
          </div>

          {/* Chapter markers */}
          <div className="mx-4 space-y-2">
            <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest">
              <span className="text-ink-900/70 dark:text-ink-50/70">פרק ראשון · העלייה</span>
              <span className="text-ink-900/45 dark:text-ink-50/45">00:42</span>
            </div>
            <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest">
              <span className="text-ink-900/70 dark:text-ink-50/70">פרק שני · בית דודה רחל</span>
              <span className="text-honey-500">{mm}:{ss}</span>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="absolute bottom-0 inset-x-0 p-4 flex items-center justify-between">
            <button className="w-11 h-11 rounded-full border border-ink-900/15 dark:border-ink-50/15 flex items-center justify-center text-ink-900/60 dark:text-ink-50/60">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
            </button>
            <button className="w-16 h-16 rounded-full bg-honey-500 flex items-center justify-center shadow-lg shadow-honey-500/30">
              <span className="block w-5 h-5 bg-paper-50 rounded-sm" />
            </button>
            <button className="w-11 h-11 rounded-full border border-ink-900/15 dark:border-ink-50/15 flex items-center justify-center text-ink-900/60 dark:text-ink-50/60">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="9"/>
                <path d="M12 8v4l2.5 2.5"/>
              </svg>
            </button>
          </div>

          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-ink-950 dark:bg-ink-900 rounded-full" />
        </div>
      </div>

      {/* Floating caption card */}
      <div className="absolute -right-6 md:-right-10 top-1/3 hidden md:flex card-surface px-5 py-4 rounded-xl items-center gap-3 shadow-xl shadow-ink-900/10 dark:shadow-black/30 animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
        <span className="w-2 h-2 rounded-full bg-sage-500 animate-slow-pulse" />
        <div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-ink-900/50 dark:text-ink-50/50">משפחה הצטרפה</p>
          <p className="text-sm font-serif">אופיר מקשיב עכשיו</p>
        </div>
      </div>
    </div>
  )
}
