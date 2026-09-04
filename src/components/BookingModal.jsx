import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, Send, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { resortDetails } from '../data/resortContent';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    roomType: 'Deluxe Room',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds on success
    }, 3000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-xl bg-resort-charcoal border border-resort-gold/30 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-resort-ivory my-8 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-resort-ivory/60 hover:text-resort-gold transition-colors p-2 rounded-full hover:bg-white/5"
            >
              <X size={24} />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-resort-gold/20 text-resort-gold mb-2">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-resort-gold font-semibold">
                  Reservation Request Received
                </h3>
                <p className="text-resort-ivory/80 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-resort-gold font-medium">{formData.name}</span>. Our hospitality team at Akash Lavish Resort will contact you shortly to confirm room availability and details.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full bg-resort-gold text-resort-warmBlack font-medium hover:bg-resort-goldDark transition-all"
                  >
                    Close Window
                  </button>
                  <a
                    href={`https://wa.me/${resortDetails.whatsapp}?text=Hi%20Akash%20Resort,%20I%20want%20to%20enquire%20about%20a%20booking.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full border border-resort-gold/50 text-resort-gold hover:bg-resort-gold/10 transition-all flex items-center gap-2"
                  >
                    <MessageSquare size={16} /> Instant WhatsApp Chat
                  </a>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6 border-b border-resort-gold/20 pb-4">
                  <span className="text-xs uppercase tracking-ultra text-resort-gold font-medium block mb-1">
                    AKASH LAVISH RESORT
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-resort-warmWhite">
                    Book Your Stay
                  </h3>
                  <p className="text-xs sm:text-sm text-resort-ivory/60 mt-1">
                    Channapatna · Near Kanva Dam
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-resort-ivory/70 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-resort-warmBlack/70 border border-resort-gold/30 rounded-lg px-3.5 py-2.5 text-sm text-resort-ivory placeholder-resort-ivory/30 focus:outline-none focus:border-resort-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-resort-ivory/70 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-resort-warmBlack/70 border border-resort-gold/30 rounded-lg px-3.5 py-2.5 text-sm text-resort-ivory placeholder-resort-ivory/30 focus:outline-none focus:border-resort-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-resort-ivory/70 mb-1">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className="w-full bg-resort-warmBlack/70 border border-resort-gold/30 rounded-lg px-3.5 py-2.5 text-sm text-resort-ivory focus:outline-none focus:border-resort-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-resort-ivory/70 mb-1">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        className="w-full bg-resort-warmBlack/70 border border-resort-gold/30 rounded-lg px-3.5 py-2.5 text-sm text-resort-ivory focus:outline-none focus:border-resort-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-resort-ivory/70 mb-1">
                        Accommodation Type
                      </label>
                      <select
                        value={formData.roomType}
                        onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                        className="w-full bg-resort-warmBlack/70 border border-resort-gold/30 rounded-lg px-3.5 py-2.5 text-sm text-resort-ivory focus:outline-none focus:border-resort-gold transition-colors"
                      >
                        <option value="Deluxe Room">Deluxe Room</option>
                        <option value="Family Suite">Family Suite</option>
                        <option value="Private Villa Retreat">Private Villa Retreat</option>
                        <option value="Entire Resort Event">Entire Resort Event</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-resort-ivory/70 mb-1">
                        Number of Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-resort-warmBlack/70 border border-resort-gold/30 rounded-lg px-3.5 py-2.5 text-sm text-resort-ivory focus:outline-none focus:border-resort-gold transition-colors"
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3-4 Guests">3 - 4 Guests</option>
                        <option value="5+ Family Group">5+ Family Group</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-resort-ivory/70 mb-1">
                      Special Requests / Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Share check-in time, food preferences, or event requirements..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-resort-warmBlack/70 border border-resort-gold/30 rounded-lg px-3.5 py-2 text-sm text-resort-ivory placeholder-resort-ivory/30 focus:outline-none focus:border-resort-gold transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-gradient-to-r from-resort-gold to-resort-goldDark text-resort-warmBlack font-medium tracking-wide shadow-gold-glow hover:brightness-110 transition-all flex items-center justify-center gap-2"
                    >
                      <Send size={16} /> SUBMIT RESERVATION REQUEST
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
