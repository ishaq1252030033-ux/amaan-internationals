import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const contactMethods = [
  {
    icon: FiPhone,
    title: 'Phone',
    details: ['9049690000'],
    link: 'tel:+919049690000',
  },
  {
    icon: FiMail,
    title: 'Email',
    details: ['contact@amaanagroint.com'],
    link: 'mailto:contact@amaanagroint.com',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    details: ['9049690000'],
    link: 'https://wa.me/919049690000',
    isExternal: true,
  },
  {
    icon: FiMapPin,
    title: 'Address',
    details: ['123 Business Street', 'Industrial Area', 'City, Country 12345'],
    link: '#',
  },
]

export default function ContactInfo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Multiple ways to reach us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            const isWhatsApp = method.title === 'WhatsApp'
            return (
              <a
                key={index}
                href={method.link}
                target={method.isExternal ? '_blank' : undefined}
                rel={method.isExternal ? 'noopener noreferrer' : undefined}
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all ${
                  isWhatsApp ? 'bg-green-50 hover:bg-green-100' : ''
                }`}
              >
                <div className={`${isWhatsApp ? 'text-green-600' : 'text-primary-600'} mb-4`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                {method.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </a>
            )
          })}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <FiClock className="text-primary-600" size={24} />
            <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <div>
              <p className="font-medium">Monday - Friday</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>
            <div>
              <p className="font-medium">Saturday</p>
              <p>9:00 AM - 2:00 PM</p>
            </div>
            <div>
              <p className="font-medium">Sunday</p>
              <p>Closed</p>
            </div>
            <div>
              <p className="font-medium">Emergency Support</p>
              <p>24/7 Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

