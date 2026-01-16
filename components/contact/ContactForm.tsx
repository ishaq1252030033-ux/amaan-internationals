'use client'

import { useState } from 'react'
import { FiSend } from 'react-icons/fi'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    productInterest: '',
    otherProduct: '',
    quantity: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const {
        name,
        email,
        phone,
        company,
        country,
        productInterest,
        otherProduct,
        quantity,
        message,
      } = formData

      // Use FormSubmit to send email directly without opening user's mailbox
      const payload = {
        _subject: `New Inquiry from ${name} (${email}) - Amaan Agro International`,
        _replyto: email,
        _template: 'table',
        name,
        email,
        phone,
        company,
        country,
        product_interest: productInterest || 'Not specified',
        other_product: otherProduct || '',
        quantity: quantity || '',
        message,
      }

      const response = await fetch('https://formsubmit.co/ajax/contact@amaanagroint.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok) {
        alert('Your inquiry has been sent successfully. We will contact you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          productInterest: '',
          otherProduct: '',
          quantity: '',
          message: '',
        })
      } else {
        alert(data?.message || 'Failed to send inquiry. Please try again later.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('An error occurred while sending your inquiry. Please try again later.')
    }

    setIsSubmitting(false)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us an Inquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                  Country/Location
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Interest
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a product</option>
                  <optgroup label="Export Products">
                    <option value="eggs">Eggs & Desi Eggs</option>
                    <option value="green-chilli">Green Chilli</option>
                    <option value="onions">Onions</option>
                    <option value="potato">Potato</option>
                    <option value="basmati-rice">Basmati Rice</option>
                    <option value="kolam-rice">Kolam Rice</option>
                    <option value="grapes">Grapes</option>
                    <option value="mango">Mango</option>
                    <option value="dragon-fruit">Dragon Fruit</option>
                    <option value="soya-bean">Soya Bean</option>
                    <option value="frozen-chicken-mutton">Frozen Chicken & Mutton</option>
                  </optgroup>
                  <optgroup label="Import Products">
                    <option value="raw-dates">Raw Dates</option>
                    <option value="olive-oil">Olive Oil</option>
                    <option value="camel-milk">Camel Milk</option>
                    <option value="dry-fruits">Dry Fruits</option>
                  </optgroup>
                  <optgroup label="Services">
                    <option value="import-services">Import Services</option>
                    <option value="export-services">Export Services</option>
                  </optgroup>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Show text input when "Other" is selected */}
            {formData.productInterest === 'other' && (
              <div>
                <label htmlFor="otherProduct" className="block text-sm font-medium text-gray-700 mb-2">
                  Please specify the product you're interested in *
                </label>
                <input
                  type="text"
                  id="otherProduct"
                  name="otherProduct"
                  required={formData.productInterest === 'other'}
                  value={formData.otherProduct}
                  onChange={handleChange}
                  placeholder="Enter the product name or description"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            )}

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                Quantity Required
              </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g., 1000 trays, 5 tons"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message / Special Requirements *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <FiSend />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

