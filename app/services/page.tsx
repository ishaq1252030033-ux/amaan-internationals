import Link from 'next/link'
import { FiUpload, FiDownload, FiCheckCircle, FiArrowRight } from 'react-icons/fi'

const services = [
  {
    icon: FiUpload,
    title: 'Import Services',
    description: 'Expert import services with customs clearance, quality inspection, and seamless logistics.',
    href: '/import-services',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FiDownload,
    title: 'Export Services',
    description: 'Comprehensive export solutions with documentation support and global market reach.',
    href: '/export-services',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FiCheckCircle,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes ensuring international standards and certifications.',
    href: '/quality-assurance',
    color: 'from-purple-500 to-purple-600',
  },
]

export const metadata = {
  title: 'Services - Amaan Agro International',
  description: 'Comprehensive import, export, and quality assurance services for agricultural products.',
}

export default function ServicesPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your agricultural import and export needs
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link
                  key={index}
                  href={service.href}
                  className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="relative p-8">
                    <div className={`bg-gradient-to-br ${service.color} w-20 h-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon size={40} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More
                      <FiArrowRight className="ml-2" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

