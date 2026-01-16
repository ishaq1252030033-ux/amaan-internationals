import { FiFileText, FiPackage, FiTruck, FiGlobe, FiCheckCircle } from 'react-icons/fi'

const steps = [
  {
    icon: FiCheckCircle,
    title: 'Quality Preparation',
    description: 'Product quality checks, grading, and preparation according to destination requirements.',
  },
  {
    icon: FiPackage,
    title: 'Packaging & Labeling',
    description: 'Custom packaging solutions and compliant labeling for international markets.',
  },
  {
    icon: FiFileText,
    title: 'Documentation',
    description: 'Complete export documentation including certificates, permits, and customs paperwork.',
  },
  {
    icon: FiTruck,
    title: 'Logistics & Shipping',
    description: 'Coordinated shipping with reliable logistics partners for timely delivery.',
  },
  {
    icon: FiGlobe,
    title: 'Market Entry',
    description: 'Support with market entry, compliance, and distribution in target countries.',
  },
]

export default function ExportProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Export Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive export process ensures successful market entry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={32} />
                </div>
                <div className="text-primary-600 font-bold text-lg mb-2">Step {index + 1}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

