import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { roomCategories } from '../data/resortContent';
import { CheckCircle2, BedDouble, Users, Maximize2, ShieldCheck, Sparkles, Wifi, Car, Tv, Coffee } from 'lucide-react';

export default function Rooms({ onOpenBooking }) {
  const [selectedGallery, setSelectedGallery] = useState(null);

  const includedAmenities = [
    { title: "Comfortable Bedding", desc: "Premium mattresses and crisp linens for deep sleep.", icon: <BedDouble size={20} className="text-resort-gold" /> },
    { title: "Ensuite Private Bathroom", desc: "Clean luxury fittings with fresh towels & hot water.", icon: <Sparkles size={20} className="text-resort-gold" /> },
    { title: "Air Conditioning", desc: "Individual climate control for optimal room temperature.", icon: <ShieldCheck size={20} className="text-resort-gold" /> },
    { title: "High-Speed Wi-Fi", desc: "Seamless internet connectivity throughout your stay.", icon: <Wifi size={20} className="text-resort-gold" /> },
    { title: "Resort Access", desc: "Full access to infinity pool, lawns & dining areas.", icon: <Coffee size={20} className="text-resort-gold" /> },
    { title: "Spacious Parking", desc: "Secure on-site parking for cars and bikes.", icon: <Car size={20} className="text-resort-gold" /> }
  ];

  return (
    <div className="bg-resort-warmBlack text-resort-ivory min-h-screen">
      {/* Page Hero */}
      <PageHero
        eyebrow="STAY WITH US"
        title="ROOM TO SLOW DOWN."
        description="Comfortable spaces designed for peaceful nights and relaxing mornings."
        image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80"
        scrollTarget="#rooms-intro"
      />

      {/* 01. INTRO */}
      <section id="rooms-intro" className="py-20 px-4 sm:px-8 max-w-5xl mx-auto text-center space-y-4">
        <span className="text-xs uppercase tracking-ultra text-resort-gold font-medium">
          ACCOMMODATION OVERVIEW
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-resort-warmWhite">
          FIND YOUR PERFECT STAY.
        </h2>
        <p className="text-sm sm:text-base text-resort-ivory/80 max-w-2xl mx-auto font-sans leading-relaxed">
          From intimate deluxe rooms to spacious family suites and secluded private villa retreats, our stays cater to all travel styles near Kanva Dam.
        </p>
      </section>

      {/* 02. ROOM TYPES (Alternating Full-Width Showcases) */}
      <section className="py-12 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-24">
        {roomCategories.map((room, idx) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-6 sm:p-10 rounded-3xl bg-resort-charcoal/80 border border-resort-gold/30 shadow-2xl space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Main Image + Gallery Thumbnails */}
              <div className="lg:col-span-7 space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-resort-gold/30 group">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-[350px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-resort-warmBlack/80 border border-resort-gold/40 text-xs font-sans text-resort-gold">
                    {room.category}
                  </div>
                </div>

                {/* Mini Image Preview Strip */}
                <div className="grid grid-cols-3 gap-3">
                  {room.gallery.map((gImg, gIdx) => (
                    <div
                      key={gIdx}
                      onClick={() => setSelectedGallery(gImg)}
                      className="rounded-lg overflow-hidden border border-resort-gold/20 hover:border-resort-gold cursor-pointer h-20 sm:h-24"
                    >
                      <img src={gImg} alt="Preview" className="w-full h-full object-cover hover:scale-110 transition-transform" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Content */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-ultra text-resort-gold font-semibold block mb-1">
                    {room.subtitle}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-resort-warmWhite">
                    {room.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-resort-ivory/80 leading-relaxed font-sans">
                  {room.description}
                </p>

                {/* Capacity & Bed Info Cards */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-resort-warmBlack/70 border border-resort-gold/20 space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-resort-gold block">Guest Capacity</span>
                    <span className="text-xs font-semibold text-resort-ivory">{room.capacity}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-resort-warmBlack/70 border border-resort-gold/20 space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-resort-gold block">Bed Layout</span>
                    <span className="text-xs font-semibold text-resort-ivory">{room.bed}</span>
                  </div>
                </div>

                {/* Included Amenities List */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs uppercase tracking-wider text-resort-gold font-medium block">Room Highlights</span>
                  <div className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amen, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2 text-xs text-resort-ivory/80">
                        <CheckCircle2 size={14} className="text-resort-gold shrink-0" />
                        <span>{amen}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Button */}
                <div className="pt-4">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-resort-gold to-resort-goldDark text-resort-warmBlack font-semibold text-xs tracking-wider hover:brightness-110 transition-all shadow-gold-glow"
                  >
                    BOOK THIS ROOM NOW
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 03. INCLUDED IN YOUR STAY */}
      <section className="py-24 bg-resort-charcoal/50 border-t border-b border-resort-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="STANDARD AMENITIES"
            title="INCLUDED IN YOUR STAY"
            subtitle="Essential resort comforts supplied with every reservation."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {includedAmenities.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-resort-warmBlack border border-resort-gold/20 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-resort-charcoal border border-resort-gold/30 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-serif font-semibold text-resort-warmWhite">{item.title}</h4>
                  <p className="text-xs text-resort-ivory/70 font-sans mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. RESORT EXPERIENCE */}
      <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="BEYOND ACCOMMODATION"
          title="MORE THAN JUST A ROOM."
          subtitle="Immerse yourself in our infinity pool, open lawns, and outdoor relaxation areas."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {[
            { title: "Infinity Pool", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80" },
            { title: "Landscape Lawns", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80" },
            { title: "Resort Dining", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" },
            { title: "Relaxation Spots", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80" }
          ].map((exp, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden border border-resort-gold/30 group h-64">
              <img src={exp.img} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-resort-warmBlack via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-4 left-4 font-serif text-xl font-bold text-resort-gold">
                {exp.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 05. BOOKING CTA */}
      <CTASection
        title="READY FOR A CHANGE OF SCENERY?"
        subtitle="Reserve your private getaway at Akash Lavish Resort near Kanva Dam today."
        primaryBtnText="CHECK AVAILABILITY"
        secondaryBtnText="CONTACT RESORT"
        onOpenBooking={onOpenBooking}
      />
    </div>
  );
}
