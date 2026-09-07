import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Leaf,
  BedDouble,
  Waves,
  Heart,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Users,
  Sparkles,
  Utensils,
  Car,
  Trees,
  Coffee,
  Mountain,
  Star
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import {
  resortDetails,
  heroFeatures,
  resortExperiences,
  roomCategories,
  amenitiesList,
  whyAkashItems,
  testimonials,
  galleryImages
} from '../data/resortContent';

export default function Home({ onOpenBooking }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const iconMap = {
    Leaf: <Leaf size={24} className="text-resort-gold stroke-[1.5]" />,
    BedDouble: <BedDouble size={24} className="text-resort-gold stroke-[1.5]" />,
    Waves: <Waves size={24} className="text-resort-gold stroke-[1.5]" />,
    Heart: <Heart size={24} className="text-resort-gold stroke-[1.5]" />,
    Utensils: <Utensils size={24} className="text-resort-gold stroke-[1.5]" />,
    Users: <Users size={24} className="text-resort-gold stroke-[1.5]" />,
    Trees: <Trees size={24} className="text-resort-gold stroke-[1.5]" />,
    Car: <Car size={24} className="text-resort-gold stroke-[1.5]" />,
    Sparkles: <Sparkles size={24} className="text-resort-gold stroke-[1.5]" />,
    Mountain: <Mountain size={24} className="text-resort-gold stroke-[1.5]" />,
    Coffee: <Coffee size={24} className="text-resort-gold stroke-[1.5]" />,
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-resort-warmBlack text-resort-ivory min-h-screen">
      {/* ============================================================ */}
      {/* 01. HERO SECTION (EXACT REFERENCE REPLICA)                    */}
      {/* ============================================================ */}
      <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-32 pb-10 px-4 sm:px-8 lg:px-12 overflow-hidden">
        {/* Background Sunset Resort Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt="Akash Lavish Resort Sunset Pool View near Kanva Dam"
            className="w-full h-full object-cover object-center filter brightness-95"
          />
          {/* Subtle Dark Left-to-Right Overlay for High Contrast */}
          <div className="absolute inset-0 bg-hero-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-resort-warmBlack via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* Upper-Right Lifestyle Tagline (Reference Detail) */}
        <div className="relative z-10 hidden md:flex items-center justify-end space-x-3 text-[11px] font-sans font-medium tracking-[0.25em] text-resort-ivory/80 pt-2">
          <span>NATURE</span>
          <span className="text-resort-gold">|</span>
          <span>LUXURY</span>
          <span className="text-resort-gold">|</span>
          <span>UNFORGETTABLE STAYS</span>
          <div className="w-12 h-[1px] bg-resort-gold/60 ml-2" />
        </div>

        {/* Main Left-Aligned Hero Content */}
        <div className="relative z-10 max-w-2xl my-auto space-y-6 sm:space-y-8 pt-6">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="text-xs uppercase tracking-ultra text-resort-gold font-medium border-b border-resort-gold/40 pb-1">
              ESCAPE TO SERENITY
            </span>
          </motion.div>

          {/* Large Headline Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-1"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-resort-gold leading-none">
              AKASH
            </h1>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-resort-warmWhite leading-none">
              LAVISH RESORT
            </h2>
          </motion.div>

          {/* Subheading Location */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <span className="text-xs sm:text-sm font-sans tracking-[0.3em] uppercase text-resort-ivory/90 font-medium">
              CHANNAPATNA · NEAR KANVA DAM
            </span>
          </motion.div>

          {/* Short Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-base lg:text-lg text-resort-ivory/85 leading-relaxed max-w-lg font-sans"
          >
            Where nature's beauty meets modern luxury.
            <br />
            Relax, reconnect and create unforgettable memories.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={onOpenBooking}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-resort-gold to-resort-goldDark text-resort-warmBlack font-semibold text-xs sm:text-sm tracking-wider shadow-gold-glow hover:brightness-110 transition-all flex items-center gap-2 group"
            >
              BOOK YOUR STAY
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#welcome"
              className="px-7 py-3.5 rounded-full border border-resort-gold/50 text-resort-warmWhite hover:bg-resort-gold/10 font-semibold text-xs sm:text-sm tracking-wider transition-all"
            >
              EXPLORE MORE
            </a>
          </motion.div>
        </div>

        {/* Hero Bottom Strip: Feature Icons & Scroll Indicator */}
        <div className="relative z-10 pt-8 border-t border-resort-gold/20 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          {/* 4 Bottom Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-2xl"
          >
            {heroFeatures.map((feat) => (
              <div key={feat.id} className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-resort-charcoal/60 border border-resort-gold/30 backdrop-blur-sm">
                  {iconMap[feat.icon]}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-widest text-resort-gold font-sans uppercase">
                    {feat.label}
                  </span>
                  <span className="text-[11px] text-resort-ivory/70 font-sans">
                    {feat.sub}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator Bottom Left */}
          <motion.a
            href="#welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex items-center gap-3 text-[11px] uppercase tracking-ultra text-resort-ivory/70 hover:text-resort-gold transition-colors group cursor-pointer"
          >
            <span>SCROLL TO EXPLORE</span>
            <div className="p-2 rounded-full border border-resort-gold/30 group-hover:border-resort-gold transition-colors animate-bounce">
              <ChevronDown size={14} className="text-resort-gold" />
            </div>
          </motion.a>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 02. INTRODUCTION / WELCOME                                   */}
      {/* ============================================================ */}
      <section id="welcome" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Typography Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs uppercase tracking-ultra text-resort-gold font-medium block">
              WELCOME TO AKASH
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-bold text-resort-warmWhite leading-tight">
              A Peaceful Escape,
              <br />
              <span className="text-resort-gold italic">Close to Nature.</span>
            </h2>
            <p className="text-base sm:text-lg text-resort-ivory/80 leading-relaxed font-sans font-light">
              Discover a retreat where tranquil surroundings, warm hospitality and relaxing stays come together near the scenic beauty of Kanva Dam.
            </p>
            <p className="text-sm text-resort-ivory/70 leading-relaxed font-sans">
              Tucked away in Channapatna's rolling landscapes, Akash Lavish Resort offers quiet luxury for weekend getaways, family reunions, and unhurried retreats.
            </p>
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra text-resort-gold hover:text-resort-goldLight transition-colors font-medium border-b border-resort-gold/50 pb-1 group"
              >
                DISCOVER OUR STORY
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Layered Organic Resort Imagery Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-resort-gold/30 shadow-2xl group">
              <img
                src="/images/IMG_6881.jpg"
                alt="Panoramic View from Balcony"
                className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-resort-warmBlack via-transparent to-transparent opacity-60" />
            </div>

            {/* Overlapping Floating Small Image Card */}
            <div className="absolute -bottom-8 -left-6 sm:-left-8 w-48 sm:w-64 rounded-xl overflow-hidden border-2 border-resort-gold shadow-2xl hidden sm:block">
              <img
                src="/images/IMG_6882.jpg"
                alt="A-Frame Luxury Wooden Cabin"
                className="w-full h-36 sm:h-44 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 03. THE RESORT EXPERIENCE                                    */}
      {/* ============================================================ */}
      <section className="py-24 bg-resort-charcoal/60 border-t border-b border-resort-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="CURATED MOMENTS"
            title="THE RESORT EXPERIENCE"
            subtitle="Explore how Akash Lavish Resort elevates every moment of your getaway."
          />

          {/* Horizontal Storytelling Composition */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resortExperiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative h-[420px] rounded-2xl overflow-hidden border border-resort-gold/20 hover:border-resort-gold transition-colors shadow-xl flex flex-col justify-end p-6"
              >
                {/* Background Panel Image */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-resort-warmBlack via-resort-warmBlack/60 to-transparent opacity-90" />

                {/* Overlapping Text */}
                <div className="relative z-10 space-y-2">
                  <span className="text-xs uppercase tracking-ultra text-resort-gold font-bold">
                    0{idx + 1}
                  </span>
                  <h3 className="text-3xl font-serif font-bold text-resort-warmWhite group-hover:text-resort-gold transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-resort-ivory/80 font-sans leading-relaxed">
                    {exp.subtitle}
                  </p>
                  <p className="text-xs text-resort-ivory/60 font-sans pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 04. FEATURED ROOMS / STAYS                                  */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="YOUR PRIVATE ESCAPE"
          title="STAY YOUR WAY"
          subtitle="Thoughtfully appointed rooms and private suites designed for rest and privacy."
        />

        <div className="space-y-16">
          {roomCategories.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Showcase */}
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-2xl overflow-hidden border border-resort-gold/30 shadow-2xl group">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-[350px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-resort-warmBlack/80 border border-resort-gold/40 text-[11px] font-sans tracking-wider text-resort-gold">
                    {room.category}
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className={`lg:col-span-5 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <span className="text-xs uppercase tracking-ultra text-resort-gold font-medium">
                  {room.capacity} · {room.view}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-resort-warmWhite">
                  {room.title}
                </h3>
                <p className="text-sm text-resort-ivory/80 leading-relaxed font-sans">
                  {room.description}
                </p>

                {/* Key Amenities */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {room.amenities.slice(0, 4).map((amen, aIdx) => (
                    <span
                      key={aIdx}
                      className="px-3 py-1 rounded-md bg-resort-charcoal border border-resort-gold/20 text-xs text-resort-ivory/80"
                    >
                      {amen}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-2.5 rounded-full bg-resort-gold text-resort-warmBlack font-semibold text-xs tracking-wider hover:bg-resort-goldDark transition-all"
                  >
                    BOOK THIS ROOM
                  </button>
                  <Link
                    to="/rooms"
                    className="text-xs uppercase tracking-ultra text-resort-gold hover:text-resort-goldLight transition-colors font-medium border-b border-resort-gold/40 pb-0.5"
                  >
                    VIEW DETAILS →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 05. KANVA DAM EXPERIENCE                                     */}
      {/* ============================================================ */}
      <section className="relative py-28 sm:py-36 overflow-hidden border-t border-b border-resort-gold/20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
            alt="Kanva Dam Water View"
            className="w-full h-full object-cover filter brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-resort-warmBlack via-resort-warmBlack/70 to-resort-warmBlack/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-ultra text-resort-gold font-medium">
            SCENIC WATERFRONT DESTINATION
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-resort-warmWhite tracking-tight uppercase leading-tight">
            WAKE UP
            <br />
            <span className="text-resort-gold">CLOSE TO</span>
            <br />
            KANVA DAM
          </h2>

          <p className="text-base sm:text-xl text-resort-ivory/80 max-w-2xl mx-auto font-sans leading-relaxed font-light">
            Surrounded by calm landscapes and peaceful views, Akash Lavish Resort offers an escape from the rush of everyday life.
          </p>

          <div className="pt-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-resort-gold text-resort-gold hover:bg-resort-gold hover:text-resort-warmBlack font-semibold text-xs tracking-wider transition-all"
            >
              EXPLORE THE LOCATION →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 06. RESORT AMENITIES                                         */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="COMFORT & CONVENIENCE"
          title="EVERYTHING YOU NEED TO SLOW DOWN."
          subtitle="Curated facilities designed to make your getaway effortless and refreshing."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {amenitiesList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-resort-charcoal/50 border border-resort-gold/20 hover:border-resort-gold transition-all duration-300 space-y-3 group hover:-translate-y-1"
            >
              <div className="p-3 w-fit rounded-xl bg-resort-warmBlack border border-resort-gold/30 group-hover:scale-110 transition-transform">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-xl font-serif font-semibold text-resort-warmWhite group-hover:text-resort-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-resort-ivory/70 font-sans leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 07. EXPERIENCE / GALLERY PREVIEW                            */}
      {/* ============================================================ */}
      <section className="py-24 bg-resort-charcoal/40 border-t border-b border-resort-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-ultra text-resort-gold font-medium">
                VISUAL STORYTELLING
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-resort-warmWhite uppercase">
                A GLIMPSE OF AKASH
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra text-resort-gold hover:text-resort-goldLight transition-colors font-medium border-b border-resort-gold/50 pb-1"
            >
              VIEW FULL GALLERY →
            </Link>
          </div>

          {/* Asymmetrical Image Grid Collage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.slice(0, 6).map((imgItem, idx) => (
              <motion.div
                key={imgItem.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative rounded-2xl overflow-hidden border border-resort-gold/20 group h-72 sm:h-80 w-full"
              >
                <img
                  src={imgItem.image}
                  alt={imgItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-resort-warmBlack via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-resort-warmWhite">
                  <span className="font-serif text-lg font-medium">{imgItem.title}</span>
                  <span className="text-[10px] uppercase tracking-wider text-resort-gold px-2.5 py-1 rounded-full bg-resort-warmBlack/80 border border-resort-gold/30">
                    {imgItem.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 08. WHY AKASH                                                */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="DISTINCTIVE HOSPITALITY"
          title="WHY CHOOSE AKASH"
          subtitle="Spacious negative space design with clear pillars of luxury."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyAkashItems.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="space-y-4 p-6 rounded-2xl border border-resort-gold/10 hover:border-resort-gold/40 transition-colors bg-resort-charcoal/20"
            >
              <span className="text-4xl sm:text-5xl font-serif font-bold text-resort-gold/40 block">
                {item.number}
              </span>
              <h3 className="text-xl font-serif font-bold text-resort-warmWhite tracking-wider">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-resort-ivory/70 font-sans leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 09. TESTIMONIALS                                             */}
      {/* ============================================================ */}
      <section className="py-24 bg-resort-charcoal/60 border-t border-b border-resort-gold/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <span className="text-xs uppercase tracking-ultra text-resort-gold font-medium">
            GUEST STORIES
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-resort-warmWhite">
            WHAT OUR VISITORS SAY
          </h2>

          <div className="relative min-h-[200px] flex items-center justify-center pt-4">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex justify-center gap-1 text-resort-gold">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#D4AF63" stroke="none" />
                ))}
              </div>

              <p className="text-lg sm:text-2xl font-serif italic text-resort-warmWhite leading-relaxed max-w-2xl mx-auto">
                "{testimonials[activeTestimonial].quote}"
              </p>

              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-resort-gold font-sans">
                  {testimonials[activeTestimonial].author}
                </h4>
                <p className="text-xs text-resort-ivory/60">
                  {testimonials[activeTestimonial].location} · {testimonials[activeTestimonial].tag}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Testimonial Slider Controls */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-full border border-resort-gold/30 hover:border-resort-gold text-resort-gold transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-xs text-resort-ivory/50">
              0{activeTestimonial + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-full border border-resort-gold/30 hover:border-resort-gold text-resort-gold transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. HOME CTA                                                 */}
      {/* ============================================================ */}
      <CTASection onOpenBooking={onOpenBooking} />
    </div>
  );
}
