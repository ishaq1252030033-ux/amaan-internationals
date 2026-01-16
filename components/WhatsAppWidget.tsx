'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/919049690000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-40"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}

