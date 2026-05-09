import Hero from '../component/Hero'
import Stats from '../component/Stats'
import AboutSection from '../component/AboutSection'
import ServicesSection from '../component/services'
import HowItWorks from '../component/HowItWorks'
import GalleryPreview from '../component/GalleryPreview'
import Testimonials from '../component/Testimonials'
import Pricing from '../component/Pricing'
import FAQ from '../component/FAQ'
import InstagramFeed from '../component/InstagramFeed'
import Newsletter from '../component/Newsletter'
import AffiliateShopSection from '../component/marketSect'
import LocationHours from '../component/LocationHours'
import CTASection from '../component/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <ServicesSection />
      <HowItWorks />
      <GalleryPreview />
      <Testimonials />
      <Pricing />
      <FAQ />
      <InstagramFeed />
      <Newsletter />
      <AffiliateShopSection serviceId="makeup" title="Shop Our Picks" />
      <LocationHours />
      <CTASection />
    </>
  )
}
