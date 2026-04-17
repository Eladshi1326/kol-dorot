import { useEffect, useState } from 'react'

type Props = {
  bars?: number
  height?: number
  playing?: boolean
  className?: string
  seed?: number
}

// Deterministic pseudo-random so SSR / re-renders are stable per seed
function seeded(seed: number, n: number) {
  const out: number[] = []
  let s = seed
  for (let i = 0; i < n; i++) {
    s = (s * 9301 + 49297) % 233280
    out.push(0.2 + (s / 233280) * 0.8)
  }
  return out
}

export default function Waveform({
  bars = 40,
  height = 56,
  playing = false,
  className = '',
  seed = 7,
}: Props) {
  const [progress, setProgress] = useState(0)
  const levels = seeded(seed, bars)

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => {
      setProgress((p) => (p + 1) % (bars + 1))
    }, 120)
    return () => clearInterval(id)
  }, [playing, bars])

  return (
    <div className={`flex items-end gap-[2px] ${className}`} style={{ height }}>
      {levels.map((lv, i) => {
        const active = i < progress
        return (
          <span
            key={i}
            className={`wave-bar transition-colors duration-300 ${
              active ? 'text-honey-500' : 'text-ink-900/35 dark:text-ink-50/35'
            }`}
            style={{
              height: `${lv * 100}%`,
              animation: playing && !active ? 'slowPulse 2.8s ease-in-out infinite' : 'none',
              animationDelay: `${(i % 8) * 90}ms`,
            }}
          />
        )
      })}
    </div>
  )
}
