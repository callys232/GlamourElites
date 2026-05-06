import MosaicGallery from '../component/gallery/gallery'
import GalleryHero from '../component/gallery/galleryHero'
import CTASection from '../component/CTASection'

export default function GalleryPage() {
  return (
    <>
      <div className="bg-[#0c0000] text-white pt-10 pb-4 text-center">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#d4af37] mb-2">Beauty in Every Frame</p>
        <h1 className="text-3xl md:text-5xl font-extrabold font-serif px-4">Gallery</h1>
      </div>
      <GalleryHero />
      <MosaicGallery />
      <CTASection />
    </>
  )
}
