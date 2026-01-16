import { FiAward, FiGlobe, FiClock, FiDollarSign, FiPackage, FiHeadphones } from 'react-icons/fi'

const features = [
  {
    icon: FiAward,
    title: 'Quality Assured Products',
    description: 'Rigorous quality control and international certifications',
  },
  {
    icon: FiGlobe,
    title: 'Global Network',
    description: 'Established partnerships across 50+ countries',
  },
  {
    icon: FiClock,
    title: 'Timely Delivery',
    description: 'Reliable logistics ensuring on-time shipments',
  },
  {
    icon: FiDollarSign,
    title: 'Competitive Pricing',
    description: 'Best market rates with transparent pricing',
  },
  {
    icon: FiPackage,
    title: 'Custom Packaging',
    description: 'Tailored packaging solutions for your needs',
  },
  {
    icon: FiHeadphones,
    title: '24/7 Customer Support',
    description: 'Round-the-clock assistance for all inquiries',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-primary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            What sets us apart in the global agricultural trade industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-primary-100">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

