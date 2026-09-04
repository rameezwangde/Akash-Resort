import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection({
  title = "YOUR ESCAPE IS CLOSER THAN YOU THINK.",
  subtitle = "Plan your stay at Akash Lavish Resort and experience a quieter side of Channapatna.",
  primaryBtnText = "BOOK YOUR STAY",
  secondaryBtnText = "CONTACT US",
  onOpenBooking,
  bgImage = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80"
}) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-resort-warmBlack text-resort-ivory border-t border-b border-resort-gold/20">
      {/* Background Cinematic Image with Parallax Feel */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity scale-105">
        <img
          src={bgImage}
          alt="Akash Resort Sunset"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-resort-warmBlack via-resort-warmBlack/80 to-resort-warmBlack" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
        {/* Subtle Gold Line */}
        <div className="w-16 h-[2px] bg-resort-gold mx-auto" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-resort-warmWhite tracking-tight uppercase leading-[1.1]"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base sm:text-xl text-resort-ivory/80 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-resort-gold to-resort-goldDark text-resort-warmBlack font-semibold text-sm tracking-wider shadow-gold-glow hover:brightness-110 transition-all flex items-center justify-center gap-3 group"
          >
            {primaryBtnText}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-resort-gold/50 text-resort-warmWhite hover:bg-resort-gold/10 font-semibold text-sm tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall size={16} className="text-resort-gold" />
            {secondaryBtnText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
