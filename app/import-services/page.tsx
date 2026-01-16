import ImportOverview from '@/components/services/ImportOverview'
import ImportProcess from '@/components/services/ImportProcess'
import ImportCapabilities from '@/components/services/ImportCapabilities'

export const metadata = {
  title: 'Import Services - Amaan Agro International',
  description: 'Expert import services with customs clearance, quality inspection, and seamless logistics for agricultural products.',
}

export default function ImportServicesPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Import Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive import solutions for agricultural products
          </p>
        </div>
      </div>
      <ImportOverview />
      <ImportProcess />
      <ImportCapabilities />
    </>
  )
}

