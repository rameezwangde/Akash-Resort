import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  dark = true
}) {
  return (
    <div className={`space-y-3 mb-12 sm:mb-16 ${center ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-ultra text-resort-gold font-medium block"
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight uppercase ${
          dark ? 'text-resort-warmWhite' : 'text-resort-charcoalDark'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-sm sm:text-lg max-w-2xl font-sans ${center ? 'mx-auto' : ''} ${
            dark ? 'text-resort-ivory/70' : 'text-resort-charcoal/80'
          }`}
        >
          {subtitle}
        </motion.p>
      )}

      <div className={`w-12 h-[2px] bg-resort-gold/60 mt-4 ${center ? 'mx-auto' : ''}`} />
    </div>
  );
}
