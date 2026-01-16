import FAQList from '@/components/faq/FAQList'

export const metadata = {
  title: 'FAQ - Amaan Agro International',
  description: 'Frequently asked questions about our products, services, and import/export processes.',
}

export default function FAQPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>
      </div>
      <FAQList />
    </>
  )
}

