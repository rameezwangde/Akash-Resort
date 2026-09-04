import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronUp, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { resortDetails } from '../data/resortContent';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-resort-warmBlack text-resort-ivory pt-16 pb-8 border-t border-resort-gold/20 overflow-hidden">
      {/* Background Subtle Watermark Text */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] whitespace-nowrap">
        <span className="font-cinzel text-[140px] sm:text-[220px] lg:text-[280px] font-extrabold tracking-widest text-resort-gold uppercase">
          AKASH
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Footer CTA Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs uppercase tracking-ultra text-resort-gold font-medium">
              UNWIND NEAR KANVA DAM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-resort-warmWhite">
              READY TO ESCAPE?
            </h2>
            <p className="text-resort-ivory/70 text-sm sm:text-base max-w-md">
              Plan your stay at Akash Lavish Resort and experience a quieter side of Channapatna.
            </p>
          </div>
          <div>
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-resort-gold to-resort-goldDark text-resort-warmBlack font-semibold text-sm tracking-wider shadow-gold-glow hover:brightness-110 transition-all flex items-center gap-3 group"
            >
              BOOK YOUR STAY
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Thin Gold Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-resort-gold/40 to-transparent my-4" />

        {/* 4 Column Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex flex-col items-start">
              <span className="font-cinzel text-2xl font-bold tracking-widest text-resort-gold">
                AKASH
              </span>
              <span className="text-xs font-serif tracking-[0.25em] text-resort-ivory border-t border-b border-resort-gold/40 py-0.5 my-1 uppercase">
                LAVISH RESORT
              </span>
              <span className="text-[10px] tracking-wider text-resort-ivory/60 uppercase">
                Channapatna – Near Kanva Dam
              </span>
            </div>
            <p className="text-xs sm:text-sm text-resort-ivory/70 leading-relaxed pt-2">
              A peaceful resort destination created for relaxing stays, memorable celebrations and beautiful moments close to nature.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-ultra uppercase text-resort-gold border-b border-resort-gold/20 pb-2">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-resort-ivory/80 hover:text-resort-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-resort-ivory/80 hover:text-resort-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-resort-ivory/80 hover:text-resort-gold transition-colors">
                  Rooms & Stays
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-resort-ivory/80 hover:text-resort-gold transition-colors">
                  Resort Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-resort-ivory/80 hover:text-resort-gold transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Experience */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-ultra uppercase text-resort-gold border-b border-resort-gold/20 pb-2">
              EXPERIENCE
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="text-resort-ivory/80 hover:text-resort-gold transition-colors cursor-pointer">
                Stay Luxury Rooms
              </li>
              <li className="text-resort-ivory/80 hover:text-resort-gold transition-colors cursor-pointer">
                Relax Beside Infinity Pool
              </li>
              <li className="text-resort-ivory/80 hover:text-resort-gold transition-colors cursor-pointer">
                Celebrate Events & Reunions
              </li>
              <li className="text-resort-ivory/80 hover:text-resort-gold transition-colors cursor-pointer">
                Explore Kanva Dam Surroundings
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-ultra uppercase text-resort-gold border-b border-resort-gold/20 pb-2">
              CONTACT
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-resort-ivory/80">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-resort-gold shrink-0 mt-0.5" />
                <span>Channapatna – Near Kanva Dam, Karnataka</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-resort-gold shrink-0" />
                <span>{resortDetails.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare size={16} className="text-resort-gold shrink-0" />
                <span>{resortDetails.whatsappDisplay}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-resort-gold shrink-0" />
                <span>{resortDetails.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-resort-gold/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-resort-ivory/50">
          <div>
            © 2026 Akash Lavish Resort. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-resort-gold transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-resort-gold transition-colors cursor-pointer">Terms & Conditions</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-resort-gold hover:text-resort-goldLight transition-colors font-medium"
          >
            Back to Top <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
