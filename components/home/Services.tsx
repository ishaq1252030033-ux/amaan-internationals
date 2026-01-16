import Link from 'next/link'
import { FiArrowRight, FiDownload, FiUpload, FiCheckCircle, FiTruck } from 'react-icons/fi'

const services = [
  {
    icon: FiUpload,
    title: 'Import Services',
    description: 'Expert import services with customs clearance, quality inspection, and seamless logistics.',
    href: '/import-services',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: FiDownload,
    title: 'Export Services',
    description: 'Comprehensive export solutions with documentation support and global market reach.',
    href: '/export-services',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: FiCheckCircle,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes ensuring international standards and certifications.',
    href: '/quality-assurance',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: FiTruck,
    title: 'Logistics Support',
    description: 'End-to-end logistics management with cold chain facilities and timely delivery.',
    href: '/contact',
    color: 'bg-orange-50 text-orange-600',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your agricultural import and export needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                href={service.href}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <FiArrowRight className="ml-2" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

