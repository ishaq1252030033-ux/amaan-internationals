const countries = [
  'Thailand', 'Vietnam', 'China', 'Malaysia', 'Indonesia',
  'Philippines', 'Brazil', 'Argentina', 'Chile', 'Peru',
  'South Africa', 'Kenya', 'Egypt', 'Morocco', 'Turkey',
]

export default function ImportCapabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Import Capabilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We import from multiple countries with established supplier networks
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-12">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Countries We Import From:</h3>
            <div className="flex flex-wrap gap-3">
              {countries.map((country, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white border border-primary-200 text-primary-700 rounded-lg font-medium hover:bg-primary-100 transition-colors"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Products We Import:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Raw Dates</li>
                <li>• Olive Oil</li>
                <li>• Camel Milk</li>
                <li>• Dry Fruits</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Advantages:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Established supplier relationships</li>
                <li>• Quality assurance at source</li>
                <li>• Competitive pricing</li>
                <li>• Flexible payment terms</li>
                <li>• Custom import solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

