import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function AboutBrief() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Amaan Agro International
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              With over 15 years of experience in the global agricultural trade, Amaan Agro International 
              has established itself as a trusted name in importing and exporting premium quality fresh 
              produce and food products with consistent quality and reliable logistics.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our mission is to bridge the gap between quality agricultural producers and global markets, 
              ensuring freshness, quality, and reliability in every shipment. We are committed to 
              sustainable practices and maintaining the highest standards of food safety and quality assurance.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our key <span className="font-semibold">export products</span> include Eggs & Desi Eggs, Green Chilli, Onions, Potato,
              Basmati Rice, Kolam Rice, Grapes, Mango, Dragon Fruit, Soya Bean, and Frozen Chicken & Mutton. Our
              <span className="font-semibold"> import products</span> include Raw Dates, Olive Oil, Camel Milk, and Dry Fruits.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Learn More About Us
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop"
              alt="Agricultural trade"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

