const markets = [
  {
    region: 'Middle East',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain'],
    products: ['Eggs & Desi Eggs', 'Green Chilli', 'Onions', 'Potato', 'Basmati Rice', 'Kolam Rice', 'Grapes', 'Mango', 'Dragon Fruit', 'Soya Bean', 'Frozen Chicken & Mutton'],
  },
  {
    region: 'Europe',
    countries: ['UK', 'Germany', 'France', 'Spain', 'Italy', 'Netherlands'],
    products: ['Grapes', 'Mango', 'Dragon Fruit', 'Basmati Rice', 'Kolam Rice', 'Onions', 'Potato'],
  },
  {
    region: 'Asia Pacific',
    countries: ['Singapore', 'Malaysia', 'Japan', 'Australia', 'New Zealand'],
    products: ['Eggs & Desi Eggs', 'Basmati Rice', 'Kolam Rice', 'Grapes', 'Mango', 'Soya Bean'],
  },
  {
    region: 'North America',
    countries: ['USA', 'Canada'],
    products: ['Basmati Rice', 'Kolam Rice', 'Grapes', 'Mango', 'Frozen Chicken & Mutton'],
  },
]

export default function ExportMarkets() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Export Markets
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We export to 50+ countries across multiple continents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {markets.map((market, index) => (
            <div key={index} className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{market.region}</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Countries:</h4>
                <div className="flex flex-wrap gap-2">
                  {market.countries.map((country, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white border border-primary-200 text-primary-700 rounded-lg text-sm font-medium"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Products Exported:</h4>
                <div className="flex flex-wrap gap-2">
                  {market.products.map((product, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-lg text-sm"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

