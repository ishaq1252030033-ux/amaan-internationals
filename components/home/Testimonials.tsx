'use client'

import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'

const testimonials = [
  {
    name: 'John Smith',
    company: 'Global Foods Inc.',
    country: 'USA',
    rating: 5,
    text: 'Amaan Agro International has been our trusted partner for over 5 years. Their quality and reliability are unmatched.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Maria Garcia',
    company: 'European Fresh Markets',
    country: 'Spain',
    rating: 5,
    text: 'Excellent service and premium quality products. They always deliver on time and exceed our expectations.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Ahmed Hassan',
    company: 'Middle East Distributors',
    country: 'UAE',
    rating: 5,
    text: 'Professional team with deep industry knowledge. Their export services are comprehensive and efficient.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Sarah Johnson',
    company: 'Asia Pacific Trading',
    country: 'Singapore',
    rating: 5,
    text: 'Outstanding quality assurance and customer support. Highly recommended for international trade.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What our international clients say about us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex items-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FiStar key={i} className="text-yellow-400 fill-current" size={24} />
              ))}
            </div>
            <p className="text-lg text-gray-700 mb-6 italic">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonials[currentIndex].company}, {testimonials[currentIndex].country}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-primary-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={24} className="text-primary-600" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-primary-50 transition-colors"
            aria-label="Next testimonial"
          >
            <FiChevronRight size={24} className="text-primary-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

