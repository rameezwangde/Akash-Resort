import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, CalendarCheck } from 'lucide-react';
import { resortDetails } from '../data/resortContent';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'ROOMS', path: '/rooms' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-resort-charcoal/90 backdrop-blur-md border-b border-resort-gold/20 py-3 shadow-luxury'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Left Stack */}
          <Link to="/" className="group flex flex-col items-start focus:outline-none">
            <div className="flex items-center gap-1.5">
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-resort-gold group-hover:text-resort-goldLight transition-colors">
                AKASH
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-resort-gold/80 inline-block"></span>
            </div>
            <span className="text-[10px] sm:text-xs font-serif tracking-[0.25em] text-resort-ivory/90 border-t border-b border-resort-gold/40 py-0.5 my-0.5 uppercase">
              LAVISH RESORT
            </span>
            <span className="text-[9px] sm:text-[10px] font-sans tracking-wider text-resort-ivory/60 uppercase">
              Channapatna – Near Kanva Dam
            </span>
          </Link>

          {/* Desktop Navigation Center/Right */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-xs font-medium tracking-[0.2em] transition-colors py-1 ${
                    isActive ? 'text-resort-gold' : 'text-resort-ivory/90 hover:text-resort-gold'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-resort-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Far Right Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-resort-gold to-resort-goldDark text-resort-warmBlack text-xs font-semibold tracking-wider hover:brightness-110 transition-all shadow-gold-glow flex items-center gap-2 group"
            >
              <CalendarCheck size={14} className="group-hover:scale-110 transition-transform" />
              BOOK NOW
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 rounded-full bg-resort-gold text-resort-warmBlack text-[11px] font-semibold tracking-wider flex items-center gap-1.5"
            >
              BOOK NOW
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-resort-ivory hover:text-resort-gold transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-resort-warmBlack/95 backdrop-blur-xl pt-24 px-6 pb-12 flex flex-col justify-between lg:hidden text-resort-ivory border-b border-resort-gold/30"
          >
            <div className="flex flex-col space-y-6 text-center">
              <span className="text-xs uppercase tracking-ultra text-resort-gold font-medium">
                AKASH LAVISH RESORT
              </span>
              <div className="w-12 h-[1px] bg-resort-gold/40 mx-auto" />
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xl font-serif tracking-widest ${
                    location.pathname === link.path
                      ? 'text-resort-gold font-bold'
                      : 'text-resort-ivory/80 hover:text-resort-gold'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="space-y-4 text-center border-t border-resort-gold/20 pt-6">
              <p className="text-xs text-resort-ivory/60 tracking-wider">
                Channapatna · Near Kanva Dam
              </p>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-resort-gold text-resort-warmBlack font-semibold text-sm tracking-wider shadow-gold-glow"
              >
                BOOK YOUR STAY NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
