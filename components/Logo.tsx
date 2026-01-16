'use client'

import Link from 'next/link'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'light' | 'dark'
}

export default function Logo({ className = '', showText = true, size = 'md', variant = 'light' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  }

  return (
    <Link href="/" className={`flex items-center space-x-3 ${className}`}>
      {/* Logo SVG */}
      <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background Circle */}
          <circle cx="60" cy="60" r="58" fill="url(#gradient)" stroke="#16a34a" strokeWidth="2" />
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#16a34a" />
            </linearGradient>
          </defs>

          {/* Globe/World Icon (representing international trade) */}
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

          {/* Agricultural Plant/Leaf (representing agro products) */}
          <path
            d="M 60 65 Q 55 75 50 85 Q 55 80 60 85 Q 65 80 70 85 Q 65 75 60 65 Z"
            fill="white"
            opacity="0.9"
          />
          <path
            d="M 60 65 Q 52 70 45 80 Q 50 75 60 80 Q 70 75 75 80 Q 68 70 60 65 Z"
            fill="white"
            opacity="0.7"
          />

          {/* Small decorative elements - representing fresh produce */}
          <circle cx="45" cy="35" r="3" fill="white" opacity="0.8" />
          <circle cx="75" cy="35" r="3" fill="white" opacity="0.8" />
          <circle cx="50" cy="55" r="2.5" fill="white" opacity="0.7" />
          <circle cx="70" cy="55" r="2.5" fill="white" opacity="0.7" />
        </svg>
      </div>

      {/* Company Name */}
      {showText && (
        <div className="flex flex-col">
          <div className={`font-bold ${variant === 'dark' ? 'text-white' : 'text-primary-600'} ${textSizes[size]} leading-tight`}>
            Amaan Agro
          </div>
          <div className={`${variant === 'dark' ? 'text-gray-300' : 'text-gray-600'} ${size === 'sm' ? 'text-xs' : 'text-xs'} leading-tight`}>
            International
          </div>
        </div>
      )}
    </Link>
  )
}

