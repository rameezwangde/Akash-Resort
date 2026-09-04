import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { resortDetails, faqList } from '../data/resortContent';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, ChevronDown, Calendar, Users } from 'lucide-react';

export default function Contact({ onOpenBooking }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    purpose: 'Stay',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-resort-warmBlack text-resort-ivory min-h-screen">
      {/* Page Hero */}
      <PageHero
        eyebrow="GET IN TOUCH"
        title="YOUR ESCAPE STARTS HERE."
        description="Planning a stay, family getaway or celebration? We’d love to hear from you."
        image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80"
        scrollTarget="#contact-info"
      />

      {/* 01. CONTACT INFO & FORM */}
      <section id="contact-info" className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Column 1: Editable Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-ultra text-resort-gold font-semibold">
                DIRECT CONTACT
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-resort-warmWhite">
                REACH OUT TO US
              </h2>
              <p className="text-sm text-resort-ivory/80 font-sans leading-relaxed">
                Have questions about accommodations, venue bookings for events, or travel directions? Contact our resort team below.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-resort-charcoal/60 border border-resort-gold/20">
                <div className="p-3 rounded-xl bg-resort-warmBlack border border-resort-gold/30 shrink-0 text-resort-gold">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-resort-gold font-semibold">RESORT ADDRESS</h4>
                  <p className="text-sm font-medium text-resort-warmWhite mt-1">{resortDetails.name} {resortDetails.tagline}</p>
                  <p className="text-xs text-resort-ivory/70 mt-0.5">{resortDetails.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-resort-charcoal/60 border border-resort-gold/20">
                <div className="p-3 rounded-xl bg-resort-warmBlack border border-resort-gold/30 shrink-0 text-resort-gold">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-resort-gold font-semibold">PHONE ENQUIRIES</h4>
                  <p className="text-sm font-medium text-resort-warmWhite mt-1">{resortDetails.phone}</p>
                  <span className="text-[11px] text-resort-ivory/50">Available 9:00 AM – 8:00 PM IST</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-resort-charcoal/60 border border-resort-gold/20">
                <div className="p-3 rounded-xl bg-resort-warmBlack border border-resort-gold/30 shrink-0 text-resort-gold">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-resort-gold font-semibold">WHATSAPP CHAT</h4>
                  <p className="text-sm font-medium text-resort-warmWhite mt-1">{resortDetails.whatsappDisplay}</p>
                  <a
                    href={`https://wa.me/${resortDetails.whatsapp}?text=Hi%20Akash%20Resort,%20I%20have%20an%20enquiry.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-resort-gold hover:underline inline-block mt-1"
                  >
                    Click to chat directly →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-resort-charcoal/60 border border-resort-gold/20">
                <div className="p-3 rounded-xl bg-resort-warmBlack border border-resort-gold/30 shrink-0 text-resort-gold">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-resort-gold font-semibold">EMAIL US</h4>
                  <p className="text-sm font-medium text-resort-warmWhite mt-1">{resortDetails.email}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Controlled Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-resort-charcoal border border-resort-gold/30 shadow-2xl"
          >
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-resort-gold/20 text-resort-gold mb-2">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-serif text-resort-gold font-bold">
                  Enquiry Submitted Successfully
                </h3>
                <p className="text-resort-ivory/80 text-sm max-w-md mx-auto leading-relaxed font-sans">
                  Thank you, <span className="text-resort-gold font-medium">{formData.fullName}</span>. Your details have been received. We will respond promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 rounded-full bg-resort-gold text-resort-warmBlack font-semibold text-xs tracking-wider hover:bg-resort-goldDark transition-all"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-resort-gold/20 pb-3">
                  <h3 className="text-2xl font-serif font-bold text-resort-warmWhite">
                    SEND AN ENQUIRY
                  </h3>
                  <p className="text-xs text-resort-ivory/60 mt-1">
                    Fill out the details below and our team will revert within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-resort-ivory/70 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-resort-warmBlack/80 border border-resort-gold/30 rounded-xl px-4 py-3 text-sm text-resort-ivory placeholder-resort-ivory/30 focus:outline-none focus:border-resort-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-resort-ivory/70 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Your Mobile Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-resort-warmBlack/80 border border-resort-gold/30 rounded-xl px-4 py-3 text-sm text-resort-ivory placeholder-resort-ivory/30 focus:outline-none focus:border-resort-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-resort-ivory/70 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-resort-warmBlack/80 border border-resort-gold/30 rounded-xl px-4 py-3 text-sm text-resort-ivory placeholder-resort-ivory/30 focus:outline-none focus:border-resort-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-resort-ivory/70 mb-1">
                      Purpose of Visit
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full bg-resort-warmBlack/80 border border-resort-gold/30 rounded-xl px-4 py-3 text-sm text-resort-ivory focus:outline-none focus:border-resort-gold transition-colors"
                    >
                      <option value="Stay">Resort Stay</option>
                      <option value="Family Getaway">Family Getaway</option>
                      <option value="Celebration">Celebration / Birthday</option>
                      <option value="Event">Corporate / Wedding Event</option>
                      <option value="Other">Other Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-resort-ivory/70 mb-1">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full bg-resort-warmBlack/80 border border-resort-gold/30 rounded-xl px-3 py-3 text-sm text-resort-ivory focus:outline-none focus:border-resort-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-resort-ivory/70 mb-1">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full bg-resort-warmBlack/80 border border-resort-gold/30 rounded-xl px-3 py-3 text-sm text-resort-ivory focus:outline-none focus:border-resort-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-resort-ivory/70 mb-1">
                      Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-resort-warmBlack/80 border border-resort-gold/30 rounded-xl px-3 py-3 text-sm text-resort-ivory focus:outline-none focus:border-resort-gold transition-colors"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="3-4 Guests">3-4 Guests</option>
                      <option value="5+ Guests">5+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-resort-ivory/70 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us more about your stay plans, special requests, or event dates..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-resort-warmBlack/80 border border-resort-gold/30 rounded-xl px-4 py-3 text-sm text-resort-ivory placeholder-resort-ivory/30 focus:outline-none focus:border-resort-gold transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-resort-gold to-resort-goldDark text-resort-warmBlack font-semibold text-xs tracking-wider shadow-gold-glow hover:brightness-110 transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={16} /> SEND ENQUIRY
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* 03. WHATSAPP DIRECT BANNER */}
      <section className="py-12 bg-resort-charcoal/40 border-t border-b border-resort-gold/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs uppercase tracking-ultra text-resort-gold font-medium">
            INSTANT MESSAGING
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-resort-warmWhite">
            CHAT WITH US ON WHATSAPP
          </h3>
          <p className="text-xs sm:text-sm text-resort-ivory/70 max-w-lg mx-auto">
            Need quick answers about room availability or directions? Message our team directly.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${resortDetails.whatsapp}?text=Hi%20Akash%20Resort,%20I%20want%20to%20know%20more.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold text-xs tracking-wider transition-all shadow-lg"
            >
              <MessageSquare size={18} /> OPEN WHATSAPP CHAT
            </a>
          </div>
        </div>
      </section>

      {/* 04. LOCATION MAP CONTAINER */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-8">
        <SectionHeading
          eyebrow="LOCATION & MAP"
          title="FIND US IN CHANNAPATNA"
          subtitle="Situated near Kanva Dam Reservoir, Karnataka."
        />

        <div className="relative rounded-3xl overflow-hidden border border-resort-gold/30 shadow-2xl h-[400px] sm:h-[480px]">
          <iframe
            title="Akash Resort Location Map"
            src={resortDetails.googleMapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.6) contrast(1.2) invert(0.85)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* 05. FAQ ACCORDION */}
      <section className="py-24 bg-resort-charcoal/50 border-t border-b border-resort-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="HAVE QUESTIONS?"
            subtitle="Editable responses to common guest inquiries."
          />

          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-resort-warmBlack border border-resort-gold/20 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl font-semibold text-resort-warmWhite hover:text-resort-gold transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-resort-gold shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 text-xs sm:text-sm text-resort-ivory/70 font-sans leading-relaxed border-t border-resort-gold/10 pt-4"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. FINAL CTA */}
      <CTASection
        title="SEE YOU AT AKASH."
        subtitle="Plan your getaway to Akash Lavish Resort and experience a quieter side of Channapatna."
        onOpenBooking={onOpenBooking}
      />
    </div>
  );
}
