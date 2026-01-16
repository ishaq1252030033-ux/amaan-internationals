import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import BackToTop from '@/components/BackToTop'
import InquiryPopup from '@/components/InquiryPopup'

export const metadata: Metadata = {
  title: 'Amaan Agro International - Your Trusted Partner in Global Agricultural Trade',
  description: 'Trusted import & export company specializing in eggs, desi eggs, vegetables (green chilli, onions, potato), fruits (grapes, mango, dragon fruit), rice (basmati, kolam), soya bean, and frozen chicken & mutton. We also import raw dates, olive oil, camel milk, and dry fruits.',
  keywords: 'Amaan Agro International, import export company, egg export, desi eggs export, green chilli export, onions export, potato export, basmati rice export, kolam rice export, grapes export, mango export, dragon fruit export, soya bean export, frozen chicken export, mutton export, raw dates import, olive oil import, camel milk import, dry fruits import',
  authors: [{ name: 'Amaan Agro International' }],
  openGraph: {
    title: 'Amaan Agro International - Global Agricultural Trade',
    description: 'Export: Eggs, vegetables, fruits, rice, soya bean, frozen chicken & mutton. Import: Raw dates, olive oil, camel milk, dry fruits.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
        <BackToTop />
        <InquiryPopup />
      </body>
    </html>
  )
}

