import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { galleryImages, resortVideos } from '../data/resortContent';
import { X, ChevronLeft, ChevronRight, Maximize2, Play, Film, Image as ImageIcon } from 'lucide-react';

export default function Gallery({ onOpenBooking }) {
  const [activeMediaTab, setActiveMediaTab] = useState('ALL'); // 'ALL' | 'PHOTOS' | 'VIDEOS'
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ['ALL', 'RESORT', 'ROOMS', 'CAMPING', 'NATURE', 'ACTIVITIES', 'DINING'];

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
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
      if (selectedVideo !== null && e.key === 'Escape') {
        setSelectedVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, selectedVideo, filteredImages]);

  return (
    <div className="bg-resort-warmBlack text-resort-ivory min-h-screen">
      {/* Page Hero */}
      <PageHero
        eyebrow="THE AKASH EXPERIENCE"
        title="SEE THE MOMENTS."
        description="A glimpse into peaceful mornings, golden evenings, video reels and memorable stays at Akash Lavish Resort."
        image="/images/IMG_6881.jpg"
        scrollTarget="#gallery-section"
      />

      {/* GALLERY MAIN SECTION */}
      <section id="gallery-section" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
        
        {/* Top Media Type Switcher (All / Photos / Videos) */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setActiveMediaTab('ALL')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-all ${
              activeMediaTab === 'ALL'
                ? 'bg-resort-gold text-resort-warmBlack shadow-gold-glow'
                : 'bg-resort-charcoal/80 text-resort-ivory/80 border border-resort-gold/30 hover:border-resort-gold hover:text-resort-gold'
            }`}
          >
            ALL MEDIA ({galleryImages.length + resortVideos.length})
          </button>
          <button
            onClick={() => setActiveMediaTab('PHOTOS')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-all ${
              activeMediaTab === 'PHOTOS'
                ? 'bg-resort-gold text-resort-warmBlack shadow-gold-glow'
                : 'bg-resort-charcoal/80 text-resort-ivory/80 border border-resort-gold/30 hover:border-resort-gold hover:text-resort-gold'
            }`}
          >
            <ImageIcon size={15} />
            PHOTOS ({galleryImages.length})
          </button>
          <button
            onClick={() => setActiveMediaTab('VIDEOS')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-all ${
              activeMediaTab === 'VIDEOS'
                ? 'bg-resort-gold text-resort-warmBlack shadow-gold-glow'
                : 'bg-resort-charcoal/80 text-resort-ivory/80 border border-resort-gold/30 hover:border-resort-gold hover:text-resort-gold'
            }`}
          >
            <Film size={15} />
            VIDEO REELS ({resortVideos.length})
          </button>
        </div>

        {/* 01. VIDEO REELS SECTION */}
        {(activeMediaTab === 'ALL' || activeMediaTab === 'VIDEOS') && (
          <div className="space-y-8">
            <SectionHeading
              eyebrow="CINEMATIC REELS"
              title="EXPERIENCE IN MOTION"
              subtitle="Watch authentic video tours and reels capturing the true essence and vibe of Akash Lavish Resort."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {resortVideos.map((vid, idx) => (
                <motion.div
                  key={vid.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setSelectedVideo(vid)}
                  className="group relative rounded-2xl overflow-hidden border border-resort-gold/30 hover:border-resort-gold transition-all duration-300 shadow-xl cursor-pointer bg-resort-charcoal/40 flex flex-col h-[380px]"
                >
                  {/* Video Thumbnail / Preview */}
                  <div className="relative flex-1 overflow-hidden">
                    <img
                      src={vid.poster}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-resort-warmBlack via-resort-warmBlack/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-resort-gold/90 group-hover:bg-resort-gold text-resort-warmBlack flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform duration-300">
                        <Play size={24} className="fill-resort-warmBlack ml-1" />
                      </div>
                    </div>

                    {/* Tag badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-resort-warmBlack/80 border border-resort-gold/40 text-[10px] uppercase font-bold tracking-widest text-resort-gold flex items-center gap-1.5">
                      <Film size={11} />
                      {vid.duration}
                    </div>
                  </div>

                  {/* Title and info */}
                  <div className="p-4 bg-resort-charcoal/90 border-t border-resort-gold/20 space-y-1">
                    <h4 className="font-serif text-base font-bold text-resort-warmWhite group-hover:text-resort-gold transition-colors line-clamp-1">
                      {vid.title}
                    </h4>
                    <p className="text-xs text-resort-ivory/70 line-clamp-2 leading-relaxed">
                      {vid.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Interstitial Editorial Divider */}
        {activeMediaTab === 'ALL' && (
          <div className="text-center py-6 border-t border-b border-resort-gold/15">
            <span className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-resort-gold/30 tracking-widest uppercase">
              SLOW MORNINGS · GOLDEN MEMORIES
            </span>
          </div>
        )}

        {/* 02. PHOTO GALLERY SECTION */}
        {(activeMediaTab === 'ALL' || activeMediaTab === 'PHOTOS') && (
          <div className="space-y-10">
            <SectionHeading
              eyebrow="PHOTO COLLECTION"
              title="RESORT PHOTO GALLERY"
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

            {/* Uniform Sized Gallery Grid */}
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
                    className="relative rounded-2xl overflow-hidden border border-resort-gold/20 hover:border-resort-gold cursor-pointer group shadow-xl h-72 sm:h-80 w-full"
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
                      <span className="font-serif text-lg font-medium line-clamp-1">{img.title}</span>
                      <span className="text-[10px] uppercase tracking-wider text-resort-gold px-2.5 py-1 rounded-full bg-resort-warmBlack/80 border border-resort-gold/30 flex-shrink-0 ml-2">
                        {img.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </section>

      {/* VIDEO PLAYER MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-resort-charcoal border border-resort-gold/40 text-resort-ivory hover:text-resort-gold transition-colors z-20"
            >
              <X size={26} />
            </button>

            <div className="max-w-4xl w-full flex flex-col items-center justify-center space-y-4">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="w-full rounded-2xl overflow-hidden border border-resort-gold/40 shadow-2xl bg-black"
              >
                <video
                  src={selectedVideo.video}
                  controls
                  autoPlay
                  playsInline
                  className="w-full max-h-[75vh] object-contain mx-auto"
                />
              </motion.div>

              <div className="text-center space-y-1">
                <h3 className="font-serif text-2xl font-bold text-resort-gold">
                  {selectedVideo.title}
                </h3>
                <p className="text-xs text-resort-ivory/80 max-w-lg mx-auto">
                  {selectedVideo.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ELEGANT PHOTO LIGHTBOX MODAL */}
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
