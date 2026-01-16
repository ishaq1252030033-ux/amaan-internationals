'use client'

import { useEffect, useState, useRef } from 'react'

const stats = [
  { label: 'Years in Business', value: 15, suffix: '+' },
  { label: 'Countries Served', value: 50, suffix: '+' },
  { label: 'Happy Clients', value: 1000, suffix: '+' },
  { label: 'Tons Exported/Imported', value: 5000, suffix: '+' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [value, hasAnimated])

  return (
    <div ref={ref}>
      <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">
        {count}{suffix}
      </div>
    </div>
  )
}

export default function Statistics() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

