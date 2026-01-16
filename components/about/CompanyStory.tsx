export default function CompanyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in 2008, Amaan Agro International began with a simple vision: to connect 
                quality agricultural producers with global markets. What started as a small export 
                operation has grown into a trusted international trading company serving clients 
                across 50+ countries.
              </p>
              <p>
                Our journey has been marked by a relentless commitment to quality, integrity, and 
                customer satisfaction. We've built lasting relationships with farmers, suppliers, 
                and buyers worldwide, creating a network that ensures fresh, premium products 
                reach markets efficiently and reliably.
              </p>
              <p>
                Today, we stand as a leader in agricultural import-export, handling thousands of 
                tons of fresh produce annually while maintaining the highest standards of quality 
                assurance and food safety.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop"
              alt="Agricultural trade"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-primary-50 rounded-xl">
            <h3 className="text-2xl font-bold text-primary-600 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the world's most trusted partner in agricultural trade, connecting quality 
              producers with global markets through excellence and innovation.
            </p>
          </div>
          <div className="text-center p-6 bg-primary-50 rounded-xl">
            <h3 className="text-2xl font-bold text-primary-600 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver premium quality agricultural products with uncompromising standards, 
              ensuring freshness, reliability, and customer satisfaction in every transaction.
            </p>
          </div>
          <div className="text-center p-6 bg-primary-50 rounded-xl">
            <h3 className="text-2xl font-bold text-primary-600 mb-2">Our Values</h3>
            <p className="text-gray-600">
              Integrity, Quality, Reliability, Innovation, and Sustainability guide everything 
              we do, from sourcing to delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

