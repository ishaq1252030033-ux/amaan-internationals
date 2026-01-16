'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { FiArrowRight, FiCheck } from 'react-icons/fi'

const products = [
  // EXPORT PRODUCTS
  {
    id: 'eggs',
    name: 'Eggs',
    description: 'Premium quality fresh eggs, Grade A',
    specifications: ['Size: Medium to Large', 'Packaging: 30/12 tray or carton', 'Shelf Life: 30 days', 'MOQ: 1000 trays'],
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=600&h=400&fit=crop',
    category: 'Eggs',
    type: 'Export',
  },
  {
    id: 'desi-eggs',
    name: 'Desi Eggs',
    description: 'Farm-fresh desi eggs, premium quality',
    specifications: ['Size: Medium to Large', 'Packaging: 30/12 tray or carton', 'Shelf Life: 30 days', 'MOQ: 1000 trays'],
    image: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=400&fit=crop',
    category: 'Eggs',
    type: 'Export',
  },
  {
    id: 'green-chilli',
    name: 'Green Chilli',
    description: 'Fresh green chillies, export quality',
    specifications: ['Grade: Export Quality', 'Packaging: Custom crates', 'MOQ: 500 kg', 'Type: Conventional & Organic'],
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=600&h=400&fit=crop',
    category: 'Vegetables',
    type: 'Export',
  },
  {
    id: 'onions',
    name: 'Onions',
    description: 'Premium quality onions, various sizes',
    specifications: ['Grade: Export Quality', 'Packaging: Mesh bags', 'MOQ: 2 tons', 'Type: Conventional & Organic'],
    image: 'https://images.unsplash.com/photo-1618512496249-a07fe83aa8cb?w=600&h=400&fit=crop',
    category: 'Vegetables',
    type: 'Export',
  },
  {
    id: 'potato',
    name: 'Potato',
    description: 'Fresh potatoes, premium quality',
    specifications: ['Grade: Export Quality', 'Packaging: Custom bags', 'MOQ: 2 tons', 'Type: Conventional & Organic'],
    image: 'https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=600&h=400&fit=crop',
    category: 'Vegetables',
    type: 'Export',
  },
  {
    id: 'basmati-rice',
    name: 'Basmati Rice',
    description: 'Premium quality basmati rice for international markets',
    specifications: ['Varieties: Long Grain Basmati', 'Packaging: Custom bags', 'MOQ: 5 tons', 'Private Labeling Available'],
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop',
    category: 'Rice',
    type: 'Export',
  },
  {
    id: 'kolam-rice',
    name: 'Kolam Rice',
    description: 'High-quality kolam rice',
    specifications: ['Varieties: Medium Grain Kolam', 'Packaging: Custom bags', 'MOQ: 5 tons', 'Private Labeling Available'],
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop',
    category: 'Rice',
    type: 'Export',
  },
  {
    id: 'grapes',
    name: 'Grapes',
    description: 'Premium table grapes, seedless varieties',
    specifications: ['Varieties: Thompson, Red Globe', 'Grade: Export Quality', 'Packaging: Custom crates', 'MOQ: 500 kg'],
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143a8f?w=600&h=400&fit=crop',
    category: 'Fruits',
    type: 'Export',
  },
  {
    id: 'mango',
    name: 'Mango',
    description: 'Premium export-quality mangoes in various varieties',
    specifications: ['Varieties: Alphonso, Kesar, Dasheri', 'Grade: Export Quality', 'Packaging: Custom crates', 'MOQ: 1 ton'],
    image: 'https://images.unsplash.com/photo-1605027990121-1c8e0e5b5b3a?w=600&h=400&fit=crop',
    category: 'Fruits',
    type: 'Export',
  },
  {
    id: 'dragon-fruit',
    name: 'Dragon Fruit',
    description: 'Fresh dragon fruit, premium quality',
    specifications: ['Varieties: Red and White', 'Grade: Export Quality', 'Packaging: Custom boxes', 'MOQ: 500 kg'],
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&h=400&fit=crop',
    category: 'Fruits',
    type: 'Export',
  },
  {
    id: 'soya-bean',
    name: 'Soya Bean',
    description: 'Premium quality soya beans',
    specifications: ['Grade: Export Quality', 'Packaging: Custom bags', 'MOQ: 2 tons', 'Private Labeling Available'],
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=400&fit=crop',
    category: 'Pulses & Legumes',
    type: 'Export',
  },
  {
    id: 'frozen-chicken-mutton',
    name: 'Frozen Chicken & Mutton',
    description: 'Premium frozen chicken and mutton products',
    specifications: ['Grade: Export Quality', 'Packaging: Custom', 'MOQ: 1 ton', 'Cold Chain Maintained'],
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&h=400&fit=crop',
    category: 'Meat Products',
    type: 'Export',
  },
  // IMPORT PRODUCTS
  {
    id: 'raw-dates',
    name: 'Raw Dates',
    description: 'Premium quality raw dates imported from select regions',
    specifications: ['Varieties: Medjool, Deglet Noor, Khadrawy', 'Grade: Premium Quality', 'Packaging: Custom boxes', 'MOQ: 500 kg'],
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4bdcbc8c?w=600&h=400&fit=crop',
    category: 'Dry Fruits',
    type: 'Import',
  },
  {
    id: 'olive-oil',
    name: 'Olive Oil',
    description: 'Premium quality extra virgin olive oil',
    specifications: ['Type: Extra Virgin, Virgin, Pure', 'Packaging: Bottles/Cans', 'MOQ: 100 liters', 'Certified Quality'],
    image: 'https://images.unsplash.com/photo-1474979266404-7eaab5e4ab70?w=600&h=400&fit=crop',
    category: 'Oils',
    type: 'Import',
  },
  {
    id: 'camel-milk',
    name: 'Camel Milk',
    description: 'Fresh camel milk, premium quality',
    specifications: ['Type: Fresh, Pasteurized', 'Packaging: Aseptic packaging', 'MOQ: 200 liters', 'Cold Chain Maintained'],
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&h=400&fit=crop',
    category: 'Dairy Products',
    type: 'Import',
  },
  {
    id: 'dry-fruits',
    name: 'Dry Fruits',
    description: 'Premium quality assorted dry fruits',
    specifications: ['Varieties: Almonds, Cashews, Raisins, Pistachios', 'Packaging: Custom', 'MOQ: 100 kg', 'Private Labeling Available'],
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4bdcbc8c?w=600&h=400&fit=crop',
    category: 'Dry Fruits',
    type: 'Import',
  },
]

const categories = ['All', 'Eggs', 'Vegetables', 'Fruits', 'Rice', 'Pulses & Legumes', 'Meat Products', 'Dry Fruits', 'Oils', 'Dairy Products']
const productTypes = ['All', 'Export', 'Import']

export default function ProductList() {
  const searchParams = useSearchParams()
  const typeParam = searchParams.get('type')
  
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedType, setSelectedType] = useState(typeParam || 'All')

  useEffect(() => {
    if (typeParam) {
      setSelectedType(typeParam)
    }
  }, [typeParam])

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory
    const typeMatch = selectedType === 'All' || product.type === selectedType
    return categoryMatch && typeMatch
  })

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Type Filter (Export/Import) */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {productTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedType === type
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow scroll-mt-20"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <div className="flex flex-col gap-1 items-end">
                    <span className={`text-xs px-2 py-1 rounded font-semibold ${
                      product.type === 'Export' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {product.type}
                    </span>
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Key Details:</h4>
                  <ul className="space-y-1">
                    {product.specifications.map((spec, i) => (
                      <li key={i} className="flex items-start text-xs text-gray-600">
                        <FiCheck className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={14} />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors"
                >
                  Request Quote
                  <FiArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

