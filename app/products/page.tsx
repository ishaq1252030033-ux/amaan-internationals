import { Suspense } from 'react'
import ProductList from '@/components/products/ProductList'

export const metadata = {
  title: 'Products - Amaan Agro International',
  description: 'Explore our premium range of export and import products including eggs, vegetables, fruits, rice, dates, olive oil, camel milk, and dry fruits.',
}

export default function ProductsPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium quality export and import products for global markets
          </p>
        </div>
      </div>
      <Suspense fallback={<div className="py-20 text-center">Loading products...</div>}>
        <ProductList />
      </Suspense>
    </>
  )
}
