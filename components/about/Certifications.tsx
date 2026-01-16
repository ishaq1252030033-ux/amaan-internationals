import { FiAward } from 'react-icons/fi'

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System Certification',
  },
  {
    name: 'FSSAI License',
    description: 'Food Safety and Standards Authority of India',
  },
  {
    name: 'HACCP Certified',
    description: 'Hazard Analysis Critical Control Points',
  },
  {
    name: 'Export License',
    description: 'Authorized Export License for Agricultural Products',
  },
  {
    name: 'Organic Certification',
    description: 'Certified Organic Products Certification',
  },
  {
    name: 'GMP Compliance',
    description: 'Good Manufacturing Practices Compliance',
  },
]

export default function Certifications() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Compliance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Committed to the highest standards of quality and compliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 text-primary-600 p-3 rounded-lg">
                  <FiAward size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

