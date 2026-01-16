'use client'

export default function LogoIcon({ className = '', size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle with Gradient */}
      <circle cx="60" cy="60" r="58" fill="url(#logoGradient)" stroke="#16a34a" strokeWidth="2" />
      
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="50%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>

      {/* Globe/World Icon (International Trade) */}
      <circle cx="60" cy="45" r="18" fill="none" stroke="white" strokeWidth="2.5" />
      <path
        d="M 42 45 Q 50 40 60 45 Q 70 50 78 45"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 42 45 Q 50 50 60 45 Q 70 40 78 45"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <line x1="60" y1="27" x2="60" y2="63" stroke="white" strokeWidth="2" />

      {/* Agricultural Plant/Leaf (Agro Products) */}
      <path
        d="M 60 65 Q 55 75 50 85 Q 55 80 60 85 Q 65 80 70 85 Q 65 75 60 65 Z"
        fill="white"
        opacity="0.95"
      />
      <path
        d="M 60 65 Q 52 70 45 80 Q 50 75 60 80 Q 70 75 75 80 Q 68 70 60 65 Z"
        fill="white"
        opacity="0.75"
      />

      {/* Decorative Elements - Fresh Produce */}
      <circle cx="45" cy="35" r="3" fill="white" opacity="0.85" />
      <circle cx="75" cy="35" r="3" fill="white" opacity="0.85" />
      <circle cx="50" cy="55" r="2.5" fill="white" opacity="0.7" />
      <circle cx="70" cy="55" r="2.5" fill="white" opacity="0.7" />
    </svg>
  )
}

