'use client'

import { FiDownload, FiFile, FiLock } from 'react-icons/fi'

const downloads = [
  {
    name: 'Company Brochure',
    description: 'Comprehensive overview of Amaan Agro International',
    type: 'PDF',
    size: '2.5 MB',
    category: 'Company',
    protected: false,
  },
  {
    name: 'Product Catalog - Fresh Eggs',
    description: 'Complete catalog of our fresh egg products',
    type: 'PDF',
    size: '1.8 MB',
    category: 'Products',
    protected: false,
  },
  {
    name: 'Product Catalog - Fresh Fruits',
    description: 'Detailed catalog of fresh fruits we export',
    type: 'PDF',
    size: '2.1 MB',
    category: 'Products',
    protected: false,
  },
  {
    name: 'Product Catalog - Fresh Vegetables',
    description: 'Complete catalog of fresh vegetables',
    type: 'PDF',
    size: '1.9 MB',
    category: 'Products',
    protected: false,
  },
  {
    name: 'ISO 9001:2015 Certificate',
    description: 'Quality Management System Certification',
    type: 'PDF',
    size: '0.5 MB',
    category: 'Certifications',
    protected: false,
  },
  {
    name: 'FSSAI License',
    description: 'Food Safety and Standards Authority License',
    type: 'PDF',
    size: '0.4 MB',
    category: 'Certifications',
    protected: false,
  },
  {
    name: 'HACCP Certificate',
    description: 'Hazard Analysis Critical Control Points Certification',
    type: 'PDF',
    size: '0.6 MB',
    category: 'Certifications',
    protected: false,
  },
  {
    name: 'Price List',
    description: 'Current pricing for all products',
    type: 'PDF',
    size: '0.8 MB',
    category: 'Business',
    protected: true,
  },
  {
    name: 'Terms and Conditions',
    description: 'Standard terms and conditions for trade',
    type: 'PDF',
    size: '0.3 MB',
    category: 'Legal',
    protected: false,
  },
  {
    name: 'Export Documentation Template',
    description: 'Template for export documentation',
    type: 'DOCX',
    size: '0.2 MB',
    category: 'Templates',
    protected: false,
  },
]

const categories = ['All', 'Company', 'Products', 'Certifications', 'Business', 'Legal', 'Templates']

export default function DownloadsList() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-gray-600 text-center">
            Download our company resources, product catalogs, certifications, and documentation templates. 
            Some documents may require password protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((download, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-lg">
                    <FiFile size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{download.name}</h3>
                    <p className="text-sm text-gray-500">{download.category}</p>
                  </div>
                </div>
                {download.protected && (
                  <FiLock className="text-yellow-500" size={20} />
                )}
              </div>
              <p className="text-sm text-gray-600 mb-4">{download.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {download.type} • {download.size}
                </span>
                <button
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                  onClick={() => {
                    if (download.protected) {
                      alert('This document is password protected. Please contact us for access.')
                    } else {
                      alert(`Downloading ${download.name}...\n\nNote: In a production environment, this would trigger an actual download.`)
                    }
                  }}
                >
                  <FiDownload size={16} />
                  <span>{download.protected ? 'Request Access' : 'Download'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Need Access to Protected Documents?</h3>
          <p className="text-gray-600 mb-4">
            Some documents require authentication. Contact us to request access.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

