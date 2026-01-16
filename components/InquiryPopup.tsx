'use client'

import { useState, useEffect } from 'react'
import { FiX, FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

export default function InquiryPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasSeenPopup, setHasSeenPopup] = useState(false)

  const safeStorage = {
    get(key: string) {
      try {
        return typeof window !== 'undefined' ? window.localStorage.getItem(key) : null
      } catch {
        return null
      }
    },
    set(key: string, value: string) {
      try {
        if (typeof window !== 'undefined') window.localStorage.setItem(key, value)
      } catch {
        // ignore (some browsers/extensions block storage)
      }
    },
  }

  useEffect(() => {
    // Check if user has seen the popup before
    const seenPopup = safeStorage.get('inquiry-popup-seen')
    
    // Show popup after 500ms delay, and only if not seen before
    if (!seenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 500) // 500ms delay (0.5 seconds)

      return () => clearTimeout(timer)
    } else {
      setHasSeenPopup(true)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Remember that user has seen the popup
    safeStorage.set('inquiry-popup-seen', 'true')
    setHasSeenPopup(true)
  }

  if (!isOpen || hasSeenPopup) {
    return null
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full transform transition-all animate-slideUp relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            aria-label="Close popup"
          >
            <FiX size={24} />
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <FiMessageCircle className="text-primary-600" size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Get a Free Quote Today!
              </h2>
              <p className="text-gray-600">
                Interested in our agricultural products? Let's discuss your requirements.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3 mb-6">
              <Link
                href="/contact"
                onClick={handleClose}
                className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <FiMail size={20} />
                <span>Fill Inquiry Form</span>
              </Link>

              <a
                href="https://wa.me/919049690000"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <FaWhatsapp size={20} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+919049690000"
                onClick={handleClose}
                className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                <FiPhone size={20} />
                <span>Call Us Now</span>
              </a>
            </div>

            {/* Footer */}
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Or browse our{' '}
                <Link
                  href="/products"
                  onClick={handleClose}
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  product catalog
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

