import { FiCheckCircle } from 'react-icons/fi'

const highlights = [
  'Rigorous quality control at every stage',
  'International standards compliance',
  'Food safety protocols',
  'Cold chain management',
  'Traceability systems',
  'Third-party audits',
]

export default function QualityOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quality First Approach
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Amaan Agro International, quality is not just a standard—it's our foundation. 
              We implement rigorous quality control processes at every stage, from sourcing to 
              delivery, ensuring that every product meets or exceeds international standards.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our quality assurance team works closely with suppliers, conducts regular inspections, 
              and maintains comprehensive documentation to ensure traceability and compliance with 
              all relevant regulations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <FiCheckCircle className="text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&h=600&fit=crop"
              alt="Quality assurance"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

