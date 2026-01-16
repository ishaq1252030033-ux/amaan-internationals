import ExportOverview from '@/components/services/ExportOverview'
import ExportProcess from '@/components/services/ExportProcess'
import ExportMarkets from '@/components/services/ExportMarkets'

export const metadata = {
  title: 'Export Services - Amaan Agro International',
  description: 'Comprehensive export solutions with documentation support and global market reach for agricultural products.',
}

export default function ExportServicesPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Export Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive export solutions for global markets
          </p>
        </div>
      </div>
      <ExportOverview />
      <ExportProcess />
      <ExportMarkets />
    </>
  )
}

