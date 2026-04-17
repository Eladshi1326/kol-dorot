import { useState } from 'react'
import Waveform from './Waveform'

type Story = {
  title: string
  speaker: { name: string; age: number; relationship: string; recorded: string }
  durationLabel: string
  excerptSnippet: string
  context: string
}

export default function StoryPlayer({ story, index = 0 }: { story: Story; index?: number }) {
  const [playing, setPlaying] = useState(false)

  return (
    <article className="card-surface p-5 sm:p-7 md:p-10 rounded-xl md:rounded-2xl reveal" style={{ transitionDelay: `${index * 60}ms` }}>
      <div className="flex items-start justify-between gap-4 md:gap-6 mb-5 md:mb-6">
        <div className="min-w-0">
          <p className="eyebrow mb-2">
            {story.speaker.recorded}
          </p>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight mb-2">
            {story.title}
          </h3>
          <p className="font-serif italic text-sm md:text-base text-ink-900/65 dark:text-ink-50/65">
            {story.speaker.name} · בת {story.speaker.age} · {story.speaker.relationship}
          </p>
        </div>
        <button
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? 'עצרו הקלטה' : 'נגנו הקלטה'}
          className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border transition-all ${
            playing
              ? 'bg-honey-500 border-honey-500 text-paper-50'
              : 'border-ink-900/30 dark:border-ink-50/30 hover:border-honey-500 hover:text-honey-500'
          }`}
        >
          {playing ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <rect x="7" y="5" width="3.5" height="14" rx="0.5" />
              <rect x="13.5" y="5" width="3.5" height="14" rx="0.5" />
            </svg>
          ) : (
            <svg className="w-5 h-5 mr-[-2px]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 4.5v15l13-7.5z" />
            </svg>
          )}
        </button>
      </div>

      <Waveform playing={playing} seed={(story.title.length + index) * 11} className="mb-4" />

      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink-900/50 dark:text-ink-50/50 mb-7">
        <span>{playing ? '0:07' : '0:00'}</span>
        <span>{story.durationLabel}</span>
      </div>

      <blockquote className="font-serif text-base md:text-xl leading-relaxed text-ink-900/90 dark:text-ink-50/90 mb-5 md:mb-6">
        <span className="text-honey-500 font-display text-2xl md:text-3xl leading-none mr-1">״</span>
        {story.excerptSnippet}
      </blockquote>

      <p className="text-[13px] md:text-sm text-ink-900/55 dark:text-ink-50/55 border-t border-ink-900/10 dark:border-ink-50/10 pt-4 md:pt-5">
        {story.context}
      </p>
    </article>
  )
}
