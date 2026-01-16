'use client'

import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const faqs = [
  {
    question: 'What products do you export/import?',
    answer: 'We export Eggs & Desi Eggs, Green Chilli, Onions, Potato, Basmati Rice, Kolam Rice, Grapes, Mango, Dragon Fruit, Soya Bean, and Frozen Chicken & Mutton. We import Raw Dates, Olive Oil, Camel Milk, and Dry Fruits.',
  },
  {
    question: 'What are your minimum order quantities (MOQ)?',
    answer: 'Minimum order quantities vary by product and packaging. Please contact us with your required product and destination, and we’ll share the MOQ, packing, and shipment plan accordingly.',
  },
  {
    question: 'Which countries do you serve?',
    answer: 'We serve over 50 countries across North America, Europe, Middle East, Asia Pacific, Africa, and South America. Our main export markets include UAE, Saudi Arabia, UK, Germany, Singapore, USA, and many more.',
  },
  {
    question: 'How do you ensure product quality?',
    answer: 'We have rigorous quality control processes at every stage - from source inspection to final delivery. Our quality assurance includes laboratory testing, grading, certifications (ISO, HACCP, FSSAI), and cold chain management to ensure freshness and quality.',
  },
  {
    question: 'What are your payment terms?',
    answer: 'We offer flexible payment terms including T/T (Telegraphic Transfer), Letter of Credit (L/C), and other secure payment methods. Payment terms are typically negotiated based on order size and customer relationship. Contact us for specific payment arrangements.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Shipping time depends on the destination and shipping method. Air freight typically takes 3-7 days, while sea freight takes 15-30 days depending on the route. We provide detailed shipping timelines with each quote.',
  },
  {
    question: 'Do you provide samples?',
    answer: 'Yes, we can provide samples for most products. Sample availability and cost depend on the product type. Please contact us with your sample requirements, and we\'ll arrange it for you.',
  },
  {
    question: 'What certifications do you have?',
    answer: 'We follow strict quality and food safety practices and can support documentation/certifications as required by the destination market (e.g., ISO/HACCP/FSSAI and export documentation). Please contact us for the latest documents applicable to your shipment.',
  },
  {
    question: 'Can you handle custom orders?',
    answer: 'Yes, we specialize in custom orders including specific packaging requirements, private labeling, custom product specifications, and tailored logistics solutions. Contact us to discuss your custom requirements.',
  },
  {
    question: 'How do I track my shipment?',
    answer: 'Once your order is shipped, we provide tracking information including shipping documents, container numbers, and tracking links. Our logistics team keeps you updated throughout the shipping process.',
  },
  {
    question: 'Do you offer cold chain logistics?',
    answer: 'Yes, we have state-of-the-art cold storage facilities and work with specialized cold chain logistics partners to ensure temperature-controlled transportation for perishable products.',
  },
  {
    question: 'What packaging options are available?',
    answer: 'We offer various packaging options including custom crates, cartons, trays, mesh bags, and specialized export packaging. Packaging is designed to meet international standards and protect products during transit.',
  },
]

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <FiChevronUp className="text-primary-600 flex-shrink-0" />
                ) : (
                  <FiChevronDown className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please get in touch with our friendly team.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

