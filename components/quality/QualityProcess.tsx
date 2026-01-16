import { FiSearch, FiActivity, FiCheckSquare, FiShield } from 'react-icons/fi'

const processes = [
  {
    icon: FiSearch,
    title: 'Source Inspection',
    description: 'Thorough inspection at source to ensure quality standards before procurement.',
  },
  {
    icon: FiActivity,
    title: 'Laboratory Testing',
    description: 'Comprehensive testing in our quality control labs for safety and quality parameters.',
  },
  {
    icon: FiCheckSquare,
    title: 'Quality Grading',
    description: 'Professional grading and sorting according to international quality standards.',
  },
  {
    icon: FiShield,
    title: 'Final Inspection',
    description: 'Final quality check before packaging and shipping to ensure product integrity.',
  },
]

export default function QualityProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quality Control Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Multi-stage quality control ensuring excellence at every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((process, index) => {
            const Icon = process.icon
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

