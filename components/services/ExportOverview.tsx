import Link from 'next/link'
import { FiCheckCircle } from 'react-icons/fi'

const features = [
  'Export documentation support',
  'Packaging and labeling services',
  'Logistics partnerships',
  'Market research assistance',
  'Compliance and regulations guidance',
  'Quality certification support',
]

export default function ExportOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
              alt="Export services"
              className="rounded-xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Export Services
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience in international trade, Amaan Agro International 
              provides end-to-end export services for agricultural products. We help you navigate 
              complex export regulations and reach global markets efficiently.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our export services cover everything from product preparation and packaging to 
              documentation, shipping, and market entry support. We ensure your products meet 
              international standards and reach customers in optimal condition.
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
              Get Export Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

