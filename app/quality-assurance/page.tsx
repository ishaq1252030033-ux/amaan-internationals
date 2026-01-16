import QualityOverview from '@/components/quality/QualityOverview'
import QualityProcess from '@/components/quality/QualityProcess'
import QualityStandards from '@/components/quality/QualityStandards'

export const metadata = {
  title: 'Quality Assurance - Amaan Agro International',
  description: 'Rigorous quality control processes ensuring international standards and certifications for agricultural products.',
}

export default function QualityAssurancePage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quality Assurance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uncompromising commitment to quality and food safety
          </p>
        </div>
      </div>
      <QualityOverview />
      <QualityProcess />
      <QualityStandards />
    </>
  )
}

