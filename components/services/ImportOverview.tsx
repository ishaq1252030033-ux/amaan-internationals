import Link from 'next/link'
import { FiCheckCircle } from 'react-icons/fi'

const features = [
  'Customs clearance assistance',
  'Quality inspection services',
  'Documentation support',
  'Godown and distribution',
  'Cold chain management',
  'Import license assistance',
]

export default function ImportOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expert Import Services
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Amaan Agro International offers comprehensive import services for agricultural products 
              from various countries. Our experienced team handles all aspects of the import process, 
              ensuring smooth and efficient operations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We work with trusted suppliers worldwide and maintain strict quality standards to ensure 
              that all imported products meet international requirements and your specifications.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <FiCheckCircle className="text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Get Import Quote
            </Link>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
              alt="Import services"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

