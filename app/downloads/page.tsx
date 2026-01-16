import DownloadsList from '@/components/downloads/DownloadsList'

export const metadata = {
  title: 'Downloads - Amaan Agro International',
  description: 'Download company brochures, product catalogs, certifications, and documentation templates.',
}

export default function DownloadsPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Downloads
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our company resources, catalogs, and documentation
          </p>
        </div>
      </div>
      <DownloadsList />
    </>
  )
}

