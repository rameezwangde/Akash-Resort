import React from 'react';
import { motion } from 'framer-motion';

export default function PageHero({ eyebrow, title, description, image, scrollTarget }) {
  const scrollToContent = () => {
    if (scrollTarget) {
      const el = document.querySelector(scrollTarget);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image || "/images/hero-bg.png"}
          alt={title}
          className="w-full h-full object-cover object-center scale-105 filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-resort-warmBlack via-resort-warmBlack/60 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-ultra text-resort-gold font-medium inline-block border-b border-resort-gold/30 pb-1"
          >
            {eyebrow}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-resort-warmWhite tracking-tight uppercase"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-resort-ivory/80 text-sm sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-6"
        >
          <button
            onClick={scrollToContent}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra text-resort-gold hover:text-resort-goldLight transition-colors font-medium cursor-pointer"
          >
            EXPLORE THE RESORT ↓
          </button>
        </motion.div>
      </div>
    </section>
  );
}
