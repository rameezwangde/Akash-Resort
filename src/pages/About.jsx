import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { resortDetails } from '../data/resortContent';
import { MapPin, Compass, ShieldCheck, HeartHandshake, Trees } from 'lucide-react';

export default function About({ onOpenBooking }) {
  const timelineSteps = [
    {
      step: "01",
      title: "ARRIVE",
      desc: "Leave city traffic behind and step into quiet, breezy countryside surroundings in Channapatna.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: "02",
      title: "UNWIND",
      desc: "Settle into plush rooms, take a refreshing dip in our pool, and enjoy fresh local cuisine.",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: "03",
      title: "EXPLORE",
      desc: "Stroll along Kanva Dam reservoir, marvel at sunset hues, and take nature walks.",
      img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: "04",
      title: "CELEBRATE",
      desc: "Gather with family under star-lit skies for dinners, laughs, and unforgettable celebrations.",
      img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: "05",
      title: "REMEMBER",
      desc: "Return home refreshed, rejuvenated, and carrying fond memories to last a lifetime.",
      img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const valuesList = [
    { name: "Warm Hospitality", icon: <HeartHandshake size={28} className="text-resort-gold" />, desc: "Attentive, genuine care that makes every guest feel at home." },
    { name: "Comfort", icon: <ShieldCheck size={28} className="text-resort-gold" />, desc: "High quality bedding, pristine cleanliness, and calm room interiors." },
    { name: "Nature", icon: <Trees size={28} className="text-resort-gold" />, desc: "Preserving and highlighting the beautiful greenery surrounding Kanva Dam." },
    { name: "Togetherness", icon: <Compass size={28} className="text-resort-gold" />, desc: "Designing open spaces that bring friends and families closer." },
    { name: "Memorable Experiences", icon: <MapPin size={28} className="text-resort-gold" />, desc: "Crafting distinct moments that stay with you long after checkout." }
  ];

  return (
    <div className="bg-resort-warmBlack text-resort-ivory min-h-screen">
      {/* Page Hero */}
      <PageHero
        eyebrow="OUR STORY"
        title="WHERE NATURE MEETS HOSPITALITY."
        description="A peaceful retreat created for memorable stays, celebrations and moments away from the ordinary."
        image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80"
        scrollTarget="#story"
      />

      {/* 01. OUR STORY */}
      <section id="story" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs uppercase tracking-ultra text-resort-gold font-medium block">
              SANCTUARY NEAR KANVA DAM
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-resort-warmWhite leading-tight">
              MORE THAN
              <br />
              <span className="text-resort-gold">A PLACE TO STAY.</span>
            </h2>
            <div className="space-y-4 text-resort-ivory/80 text-sm sm:text-base font-sans leading-relaxed">
              <p>
                Akash Lavish Resort was envisioned as an oasis of quiet luxury in Channapatna. Located just a short drive from Bengaluru and Mysuru near the tranquil waters of Kanva Dam, our resort blends rustic charm with modern comfort.
              </p>
              <p>
                Whether you seek a quiet weekend away from busy schedules, a joyful family getaway, or a picture-perfect venue for special celebrations, Akash Lavish Resort provides an inviting backdrop.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl overflow-hidden border border-resort-gold/30 shadow-2xl">
              <img
                src="/images/IMG_6879.jpg"
                alt="Akash Resort Story Architecture"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02. PHILOSOPHY */}
      <section className="py-24 bg-resort-charcoal/60 border-t border-b border-resort-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
          <SectionHeading
            eyebrow="OUR GUIDING PRINCIPLES"
            title="OUR PHILOSOPHY"
            subtitle="Three foundational pillars guiding every aspect of our guest experience."
          />

          <div className="space-y-8">
            {[
              { title: "REST DEEPLY.", desc: "Creating restful sanctuaries with silent gardens, crisp bedding, and zero disturbance." },
              { title: "CONNECT NATURALLY.", desc: "Inspiring guests to step outdoor, feel the morning breeze, and reconnect with nature." },
              { title: "CELEBRATE FREELY.", desc: "Providing generous lawns and dining spaces to celebrate life's milestones with loved ones." }
            ].map((phil, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 rounded-2xl bg-resort-warmBlack border border-resort-gold/20 hover:border-resort-gold transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <h3 className="text-3xl sm:text-5xl font-serif font-bold text-resort-gold">
                  {phil.title}
                </h3>
                <p className="text-sm sm:text-base text-resort-ivory/80 max-w-md font-sans leading-relaxed">
                  {phil.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. LOCATION STORY */}
      <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="SCENIC SURROUNDINGS"
          title="CLOSE TO KANVA DAM"
          subtitle="Explore our peaceful geographical backdrop in Channapatna."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
          <div className="p-8 rounded-2xl bg-resort-charcoal border border-resort-gold/30 space-y-4">
            <span className="text-xs uppercase tracking-wider text-resort-gold font-bold">DESTINATION</span>
            <h4 className="text-2xl font-serif font-bold text-resort-warmWhite">Kanva Dam Reservoir</h4>
            <p className="text-xs sm:text-sm text-resort-ivory/70 leading-relaxed font-sans">
              Known for calm waters, sunset vistas, and tranquil breezes. A favorite spot for peaceful lake views and gentle photography.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-resort-charcoal border border-resort-gold/30 space-y-4">
            <span className="text-xs uppercase tracking-wider text-resort-gold font-bold">TOWN HERITAGE</span>
            <h4 className="text-2xl font-serif font-bold text-resort-warmWhite">Channapatna</h4>
            <p className="text-xs sm:text-sm text-resort-ivory/70 leading-relaxed font-sans">
              Famous for its traditional wooden toys and rich artisan culture, offering a unique local flavor during your resort getaway.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-resort-charcoal border border-resort-gold/30 space-y-4">
            <span className="text-xs uppercase tracking-wider text-resort-gold font-bold">RESORT SETTING</span>
            <h4 className="text-2xl font-serif font-bold text-resort-warmWhite">Akash Lavish Resort</h4>
            <p className="text-xs sm:text-sm text-resort-ivory/70 leading-relaxed font-sans">
              Strategically situated to offer complete quietude while remaining easily accessible for weekend travelers.
            </p>
          </div>
        </div>
      </section>

      {/* 04. EXPERIENCE TIMELINE */}
      <section className="py-24 bg-resort-charcoal/40 border-t border-b border-resort-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="YOUR RESORT JOURNEY"
            title="THE EXPERIENCE TIMELINE"
            subtitle="From arrival to fond memories, witness how your stay unfolds."
          />

          <div className="space-y-12 pt-8">
            {timelineSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 rounded-2xl bg-resort-warmBlack/70 border border-resort-gold/20"
              >
                <div className="lg:col-span-2 text-center lg:text-left">
                  <span className="text-4xl font-serif font-bold text-resort-gold">{item.step}</span>
                </div>
                <div className="lg:col-span-5 space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-resort-warmWhite">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-resort-ivory/80 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-xl border border-resort-gold/20"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. VALUES */}
      <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="CORE PRINCIPLES"
          title="OUR VALUES"
          subtitle="Minimal typography highlighting our commitment to quality hospitality."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {valuesList.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-resort-charcoal/50 border border-resort-gold/20 space-y-3"
            >
              <div className="p-2.5 rounded-xl bg-resort-warmBlack border border-resort-gold/30 w-fit">
                {val.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-resort-warmWhite">{val.name}</h3>
              <p className="text-xs sm:text-sm text-resort-ivory/70 font-sans leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 06. ABOUT CTA */}
      <CTASection
        title="COME EXPERIENCE AKASH FOR YOURSELF."
        subtitle="Reserve your stay near Kanva Dam and create memories to last a lifetime."
        onOpenBooking={onOpenBooking}
      />
    </div>
  );
}
