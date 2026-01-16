'use client'

import Link from 'next/link'

interface LogoEnhancedProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'light' | 'dark'
  singleLine?: boolean
}

export default function LogoEnhanced({
  className = '',
  showText = true,
  size = 'md',
  variant = 'light',
  singleLine = false,
}: LogoEnhancedProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
  }

  return (
    <Link href="/" className={`flex items-center space-x-3 group ${className}`}>
      {/* Enhanced Logo SVG */}
      <div className={`${sizeClasses[size]} relative flex-shrink-0 transition-transform group-hover:scale-105`}>
        <svg
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-lg"
        >
          {/* Outer Glow Circle */}
          <circle cx="70" cy="70" r="68" fill="url(#outerGradient)" opacity="0.2" />
          
          {/* Main Background Circle */}
          <circle cx="70" cy="70" r="65" fill="url(#mainGradient)" stroke="#15803d" strokeWidth="2.5" />
          
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="50%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
            <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#16a34a" />
            </linearGradient>
          </defs>

          {/* Globe/World Icon - Enhanced */}
          <circle cx="70" cy="50" r="20" fill="none" stroke="white" strokeWidth="3" />
          <path
            d="M 50 50 Q 60 45 70 50 Q 80 55 90 50"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M 50 50 Q 60 55 70 50 Q 80 45 90 50"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
          />
          <line x1="70" y1="30" x2="70" y2="70" stroke="white" strokeWidth="2.5" />
          
          {/* Additional Globe Lines */}
          <ellipse cx="70" cy="50" rx="20" ry="8" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />

          {/* Agricultural Plant/Leaf - Enhanced with more detail */}
          <path
            d="M 70 75 Q 63 88 55 100 Q 60 95 70 100 Q 80 95 85 100 Q 77 88 70 75 Z"
            fill="white"
            opacity="0.95"
          />
          <path
            d="M 70 75 Q 60 82 48 95 Q 55 90 70 95 Q 85 90 92 95 Q 80 82 70 75 Z"
            fill="white"
            opacity="0.8"
          />
          
          {/* Additional leaf details */}
          <path
            d="M 70 75 L 65 85 L 70 90 L 75 85 Z"
            fill="white"
            opacity="0.7"
          />

          {/* Decorative Elements - Representing fresh produce (fruits/vegetables) */}
          <circle cx="52" cy="42" r="3.5" fill="white" opacity="0.9" />
          <circle cx="88" cy="42" r="3.5" fill="white" opacity="0.9" />
          <circle cx="58" cy="62" r="3" fill="white" opacity="0.8" />
          <circle cx="82" cy="62" r="3" fill="white" opacity="0.8" />
          
          {/* Small dots representing seeds/growth */}
          <circle cx="65" cy="55" r="1.5" fill="white" opacity="0.6" />
          <circle cx="75" cy="55" r="1.5" fill="white" opacity="0.6" />
        </svg>
      </div>

      {/* Company Name with Enhanced Typography */}
      {showText && (
        <div className="flex flex-col">
          {singleLine ? (
            <div
              className={`font-extrabold whitespace-nowrap ${
                variant === 'dark' ? 'text-white' : 'text-primary-700'
              } ${
                size === 'sm' ? 'text-base' : size === 'md' ? 'text-2xl' : 'text-3xl'
              } leading-tight tracking-tight`}
            >
              Amaan Agro International
            </div>
          ) : (
            <>
              <div
                className={`font-extrabold ${
                  variant === 'dark' ? 'text-white' : 'text-primary-600'
                } ${textSizes[size]} leading-tight tracking-tight`}
              >
                Amaan Agro
              </div>
              <div
                className={`${
                  variant === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'} leading-tight font-medium`}
              >
                International
              </div>
            </>
          )}
        </div>
      )}
    </Link>
  )
}

