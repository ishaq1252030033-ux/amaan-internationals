import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const categories = [
  {
    name: 'Export Products',
    description: 'Eggs, vegetables, fruits, rice, meat & more',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=600&h=400&fit=crop',
    href: '/products?type=Export',
    color: 'from-green-400 to-emerald-500',
    badge: 'Export',
  },
  {
    name: 'Import Products',
    description: 'Raw dates, olive oil, camel milk, dry fruits',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4bdcbc8c?w=600&h=400&fit=crop',
    href: '/products?type=Import',
    color: 'from-blue-400 to-indigo-500',
    badge: 'Import',
  },
]

export default function ProductCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Product Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of premium agricultural products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      category.badge === 'Export' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-blue-500 text-white'
                    }`}>
                      {category.badge}
                    </span>
                  </div>
                  <p className="text-sm mb-4 opacity-90">{category.description}</p>
                  <div className="flex items-center font-semibold group-hover:translate-x-2 transition-transform">
                    View Products
                    <FiArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
