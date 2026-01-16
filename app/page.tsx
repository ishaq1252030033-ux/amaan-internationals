"use client"

import Hero from '@/components/home/Hero'
import AboutBrief from '@/components/home/AboutBrief'
import Services from '@/components/home/Services'
import ProductCategories from '@/components/home/ProductCategories'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutBrief />
      <Services />
      <ProductCategories />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  )
}

