import CompanyStory from '@/components/about/CompanyStory'
import Team from '@/components/about/Team'
import Infrastructure from '@/components/about/Infrastructure'
import Certifications from '@/components/about/Certifications'
import GlobalReach from '@/components/about/GlobalReach'

export const metadata = {
  title: 'About Us - Amaan Agro International',
  description: 'Learn about Amaan Agro International - our history, mission, team, infrastructure, and global reach in agricultural trade.',
}

export default function AboutPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Amaan Agro International
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building bridges in global agricultural trade with quality, integrity, and excellence
          </p>
        </div>
      </div>
      <CompanyStory />
      <Team />
      <Infrastructure />
      <Certifications />
      <GlobalReach />
    </>
  )
}

