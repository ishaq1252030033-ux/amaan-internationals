import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiMail } from 'react-icons/fi'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Trading?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Get in touch with us today for competitive quotes and expert guidance on your import/export needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get a Quote
            </Link>
            <a
              href="https://wa.me/919049690000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FaWhatsapp className="mr-2" size={20} />
              WhatsApp Us
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-100">
            <a href="tel:+919049690000" className="flex items-center space-x-2 hover:text-white transition-colors">
              <FiPhone />
              <span>9049690000</span>
            </a>
            <a href="mailto:contact@amaanagroint.com" className="flex items-center space-x-2 hover:text-white transition-colors">
              <FiMail />
              <span>contact@amaanagroint.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

