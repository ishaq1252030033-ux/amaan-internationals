import { FiHome, FiDroplet, FiCheckSquare, FiPackage } from 'react-icons/fi'

const facilities = [
  {
    icon: FiHome,
    title: 'Godown Facilities',
    description: 'State-of-the-art godown facilities with 50,000+ sq ft capacity, ensuring optimal storage conditions for all products.',
  },
  {
    icon: FiDroplet,
    title: 'Cold Storage',
    description: 'Temperature-controlled cold storage units maintaining optimal conditions for fresh produce preservation.',
  },
  {
    icon: FiCheckSquare,
    title: 'Quality Control Labs',
    description: 'Fully equipped laboratories for quality testing, food safety analysis, and certification compliance.',
  },
  {
    icon: FiPackage,
    title: 'Packaging Facilities',
    description: 'Modern packaging lines with custom packaging solutions for various product requirements and export standards.',
  },
]

export default function Infrastructure() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Infrastructure
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            World-class facilities ensuring quality and efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon
            return (
              <div key={index} className="bg-primary-50 p-6 rounded-xl hover:bg-primary-100 transition-colors">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
            alt="Godown facility"
            className="rounded-xl shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
            alt="Cold storage facility"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

