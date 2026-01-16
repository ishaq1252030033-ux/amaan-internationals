const standards = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System ensuring consistent quality processes',
  },
  {
    name: 'HACCP',
    description: 'Hazard Analysis Critical Control Points for food safety',
  },
  {
    name: 'GMP',
    description: 'Good Manufacturing Practices compliance',
  },
  {
    name: 'FSSAI',
    description: 'Food Safety and Standards Authority compliance',
  },
  {
    name: 'Export Standards',
    description: 'Compliance with destination country import regulations',
  },
]

export default function QualityStandards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quality Standards & Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We adhere to the highest international quality standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((standard, index) => (
            <div key={index} className="bg-primary-50 p-6 rounded-xl hover:bg-primary-100 transition-colors">
              <h3 className="text-xl font-semibold text-primary-700 mb-2">{standard.name}</h3>
              <p className="text-gray-600">{standard.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Quality Guarantee</h3>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto">
            We guarantee that all our products meet the highest quality standards. Our commitment 
            to quality is backed by rigorous testing, certifications, and a comprehensive quality 
            assurance system. If you're not satisfied with the quality, we'll make it right.
          </p>
        </div>
      </div>
    </section>
  )
}

