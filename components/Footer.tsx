import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import LogoEnhanced from '@/components/LogoEnhanced'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <LogoEnhanced showText={true} size="md" variant="dark" />
            </div>
            <p className="text-sm mb-4">
              Your trusted partner in global agricultural trade. Quality assured products with international standards.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/import-services" className="hover:text-primary-400 transition-colors">
                  Import Services
                </Link>
              </li>
              <li>
                <Link href="/export-services" className="hover:text-primary-400 transition-colors">
                  Export Services
                </Link>
              </li>
              <li>
                <Link href="/quality-assurance" className="hover:text-primary-400 transition-colors">
                  Quality Assurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products#eggs" className="hover:text-primary-400 transition-colors">
                  Eggs & Desi Eggs
                </Link>
              </li>
              <li>
                <Link href="/products#green-chilli" className="hover:text-primary-400 transition-colors">
                  Vegetables
                </Link>
              </li>
              <li>
                <Link href="/products#grapes" className="hover:text-primary-400 transition-colors">
                  Fruits
                </Link>
              </li>
              <li>
                <Link href="/products#basmati-rice" className="hover:text-primary-400 transition-colors">
                  Rice & Grains
                </Link>
              </li>
              <li>
                <Link href="/products#frozen-chicken-mutton" className="hover:text-primary-400 transition-colors">
                  Meat Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <FiMapPin className="mt-1 text-primary-400" />
                <span>123 Business Street, Industrial Area, City, Country</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-primary-400" />
                <a href="tel:+919049690000" className="hover:text-primary-400 transition-colors">
                  9049690000
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-primary-400" />
                <a href="mailto:contact@amaanagroint.com" className="hover:text-primary-400 transition-colors">
                  contact@amaanagroint.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="text-green-400" />
                <a href="https://wa.me/919049690000" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h3 className="text-white font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-gray-400">Get updates on new products and special offers</p>
            </div>
            <form className="flex space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 w-full md:w-64"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Amaan Agro International. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-conditions" className="hover:text-primary-400 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

