import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { galleryImages } from '../data/resortContent';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Gallery({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['ALL', 'RESORT', 'ROOMS', 'POOL', 'NATURE', 'DINING', 'CELEBRATIONS'];

  const filteredImages = activeCategory === 'ALL'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  // Keyboard navigation support for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  return (
    <div className="bg-resort-warmBlack text-resort-ivory min-h-screen">
      {/* Page Hero */}
      <PageHero
        eyebrow="THE AKASH EXPERIENCE"
        title="SEE THE MOMENTS."
        description="A glimpse into peaceful mornings, golden evenings and memorable stays at Akash Lavish Resort."
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
        scrollTarget="#gallery-section"
      />

      {/* GALLERY MAIN SECTION */}
      <section id="gallery-section" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-12">
        <SectionHeading
          eyebrow="PHOTO COLLECTION"
          title="RESORT GALLERY"
          subtitle="Filter by category to explore different corners of Akash Lavish Resort."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 border-b border-resort-gold/20 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-resort-gold text-resort-warmBlack shadow-gold-glow'
                  : 'bg-resort-charcoal/60 text-resort-ivory/70 border border-resort-gold/20 hover:border-resort-gold hover:text-resort-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interstitial Editorial Typography Divider 1 */}
        <div className="text-center py-8">
          <span className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-resort-gold/30 tracking-widest uppercase">
            SLOW MORNINGS.
          </span>
        </div>

        {/* Masonry / Variable Aspect Ratio Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(idx)}
                className={`relative rounded-2xl overflow-hidden border border-resort-gold/20 hover:border-resort-gold cursor-pointer group shadow-xl ${
                  img.aspect === 'tall' ? 'h-[420px]' : img.aspect === 'wide' ? 'h-64 sm:h-72' : 'h-80'
                }`}
              >
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-resort-warmBlack via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 rounded-full bg-resort-gold/90 text-resort-warmBlack shadow-luxury">
                    <Maximize2 size={22} />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-resort-warmWhite">
                  <span className="font-serif text-lg font-medium">{img.title}</span>
                  <span className="text-[10px] uppercase tracking-wider text-resort-gold px-2.5 py-1 rounded-full bg-resort-warmBlack/80 border border-resort-gold/30">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interstitial Editorial Typography Divider 2 */}
        <div className="text-center py-12 border-t border-b border-resort-gold/10 my-12">
          <span className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-resort-gold/30 tracking-widest uppercase">
            GOLDEN EVENINGS.
          </span>
        </div>

        {/* Interstitial Editorial Typography Divider 3 */}
        <div className="text-center py-6">
          <span className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-resort-gold/30 tracking-widest uppercase">
            MEMORIES THAT STAY.
          </span>
        </div>
      </section>

      {/* ELEGANT LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-resort-charcoal border border-resort-gold/40 text-resort-ivory hover:text-resort-gold transition-colors z-20"
            >
              <X size={26} />
            </button>

            {/* Left Prev Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-resort-charcoal/80 border border-resort-gold/40 text-resort-gold hover:bg-resort-gold hover:text-resort-warmBlack transition-all z-20"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image Container */}
            <div className="max-w-5xl max-h-[85vh] relative flex flex-col items-center justify-center">
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={filteredImages[lightboxIndex].image}
                alt={filteredImages[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl border border-resort-gold/30 shadow-2xl"
              />
              <div className="mt-4 text-center space-y-1">
                <h4 className="font-serif text-2xl font-bold text-resort-gold">
                  {filteredImages[lightboxIndex].title}
                </h4>
                <p className="text-xs text-resort-ivory/70 tracking-widest uppercase">
                  {filteredImages[lightboxIndex].category} · Image {lightboxIndex + 1} of {filteredImages.length}
                </p>
              </div>
            </div>

            {/* Right Next Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-resort-charcoal/80 border border-resort-gold/40 text-resort-gold hover:bg-resort-gold hover:text-resort-warmBlack transition-all z-20"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GALLERY CTA */}
      <CTASection
        title="LIKE WHAT YOU SEE?"
        subtitle="Plan your getaway to Akash Lavish Resort and experience these moments in person."
        onOpenBooking={onOpenBooking}
      />
    </div>
  );
}
