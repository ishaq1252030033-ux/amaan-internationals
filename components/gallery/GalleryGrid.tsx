'use client'

import { useState } from 'react'
import { FiX } from 'react-icons/fi'

const galleryCategories = [
  { name: 'All', id: 'all' },
  { name: 'Products', id: 'products' },
  { name: 'Facilities', id: 'facilities' },
  { name: 'Packaging', id: 'packaging' },
  { name: 'Quality Control', id: 'quality' },
  { name: 'Team', id: 'team' },
]

const galleryImages = [
  { src: '/images/eggs.jpeg', category: 'products', alt: 'Fresh Eggs' },
  { src: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&h=600&fit=crop', category: 'products', alt: 'Fresh Fruits' },
  { src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop', category: 'products', alt: 'Fresh Vegetables' },
  { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop', category: 'facilities', alt: 'Godown Facility' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop', category: 'facilities', alt: 'Cold Storage' },
  { src: 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&h=600&fit=crop', category: 'packaging', alt: 'Packaging Process' },
  { src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop', category: 'quality', alt: 'Quality Control' },
  { src: 'https://images.unsplash.com/photo-1605027990121-1c8e0e5b5b3a?w=800&h=600&fit=crop', category: 'products', alt: 'Mangoes' },
  { src: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&h=600&fit=crop', category: 'products', alt: 'Pomegranates' },
  { src: 'https://images.unsplash.com/photo-1546095668-93c5c4e4c983?w=800&h=600&fit=crop', category: 'products', alt: 'Tomatoes' },
  { src: 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&h=600&fit=crop', category: 'packaging', alt: 'Packaging Facility' },
  { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop', category: 'facilities', alt: 'Storage Facility' },
]

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="relative overflow-hidden rounded-xl cursor-pointer group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  Click to View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <FiX size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

