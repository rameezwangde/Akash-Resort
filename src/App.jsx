import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-resort-warmBlack text-resort-ivory selection:bg-resort-gold selection:text-resort-warmBlack font-sans">
        <Navbar onOpenBooking={handleOpenBooking} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<About onOpenBooking={handleOpenBooking} />} />
            <Route path="/rooms" element={<Rooms onOpenBooking={handleOpenBooking} />} />
            <Route path="/gallery" element={<Gallery onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<Contact onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>

        <Footer onOpenBooking={handleOpenBooking} />

        <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
      </div>
    </Router>
  );
}
