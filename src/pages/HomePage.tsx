import Hero from '../component/Hero'
import Stats from '../component/Stats'
import ServicesSection from '../component/services'
import Testimonials from '../component/Testimonials'
import Pricing from '../component/Pricing'
import CTASection from '../component/CTASection'
import AffiliateShopSection from '../component/marketSect'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesSection />
      <Testimonials />
      <Pricing />
      <AffiliateShopSection serviceId="makeup" title="Shop Our Picks" />
      <CTASection />
    </>
  )
}
