// Minimal line-icons keyed to our feature content.
type Props = { name: string; className?: string }

export default function FeatureIcon({ name, className = 'w-7 h-7' }: Props) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (name) {
    case 'mic':
      return (
        <svg {...common}>
          <rect x="9" y="3" width="6" height="12" rx="3" />
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
        </svg>
      )
    case 'type':
      return (
        <svg {...common}>
          <path d="M4 7V5h16v2M12 5v14M9 19h6" />
        </svg>
      )
    case 'image':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <circle cx="8.5" cy="10.5" r="1.5" />
          <path d="M21 15l-5-5L5 19" />
        </svg>
      )
    case 'users':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="10" r="2.5" />
          <path d="M3 20c0-3 2.5-5.5 6-5.5S15 17 15 20M14 20c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5" />
        </svg>
      )
    case 'search':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6" />
          <path d="M21 21l-5.2-5.2" />
        </svg>
      )
    case 'download':
      return (
        <svg {...common}>
          <path d="M12 3v12M7 11l5 5 5-5M5 21h14" />
        </svg>
      )
    default:
      return <svg {...common}><circle cx="12" cy="12" r="4" /></svg>
  }
}
