import GalleryGrid from '@/components/gallery/GalleryGrid'

export const metadata = {
  title: 'Gallery - Amaan Agro International',
  description: 'View our products, facilities, and operations in our photo gallery.',
}

export default function GalleryPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our products, facilities, and operations
          </p>
        </div>
      </div>
      <GalleryGrid />
    </>
  )
}

