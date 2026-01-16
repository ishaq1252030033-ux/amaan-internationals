const regions = [
  { name: 'North America', countries: ['USA', 'Canada', 'Mexico'] },
  { name: 'Europe', countries: ['UK', 'Germany', 'France', 'Spain', 'Italy', 'Netherlands'] },
  { name: 'Middle East', countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman'] },
  { name: 'Asia Pacific', countries: ['Singapore', 'Malaysia', 'Japan', 'Australia', 'New Zealand'] },
  { name: 'Africa', countries: ['South Africa', 'Kenya', 'Nigeria', 'Egypt'] },
  { name: 'South America', countries: ['Brazil', 'Argentina', 'Chile'] },
]

export default function GlobalReach() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Global Reach
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Serving clients across 50+ countries worldwide
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{region.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map((country, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            We're continuously expanding our network to serve more markets globally.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  )
}

