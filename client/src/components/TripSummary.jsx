import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Car, MapPin, MessageCircle, Phone, Mail, Compass, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TripSummary({ tripDetails, addedPlaces, totalFare, isMobile, isOpen, onClose }) {
  
  // Create structured pre-filled text for WhatsApp conversion
  const generateWhatsAppLink = () => {
    const phoneNum = '917000012345'; // target lead number
    const placesText = addedPlaces.length > 0 
      ? ` with excursions to: ${addedPlaces.map(p => p.name).join(', ')}` 
      : '';
    const message = `Hi Travelio! I would like to plan a beautiful journey:\n\n` + 
      `• Route: ${tripDetails.pickup} → ${tripDetails.destination}\n` +
      `• Type: ${tripDetails.tripType}\n` +
      `• Date: ${tripDetails.pickupDate}\n` +
      `• Passengers: ${tripDetails.passengers} pax\n` +
      `• Selected Vehicle: ${tripDetails.vehiclePreference}\n` +
      `${placesText}\n\n` +
      `Estimated Fare: ₹ ${totalFare.toLocaleString('en-IN')}\n\n` +
      `Could you please verify the drivers and provide a final customized quote?`;

    return `https://wa.me/${phoneNum}?text=${encodeURIComponent(message)}`;
  };

  const handleConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#A78BFA', '#7DD3FC', '#FFD8BE', '#E7DDD5']
    });
  };

  const PanelContent = () => (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Header Title */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-brand-beige/40">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-brand-lavender/25 flex items-center justify-center text-brand-lavender">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-brand-dark tracking-tight">Trip Summary</h3>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-lavender bg-brand-lavender/10 px-2 py-0.5 rounded-md">
            Live Estimate
          </span>
        </div>

        {/* Vertical Route Timeline */}
        <div className="relative pl-6 border-l border-dashed border-brand-beige/80 ml-2.5 mb-6 text-left flex flex-col gap-5">
          {/* Pickup point */}
          <div className="relative">
            <div className="absolute -left-[30px] top-1 w-3.5 h-3.5 rounded-full bg-brand-lavender border-4 border-white shadow-md shadow-brand-lavender/30" />
            <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest block">Pickup</span>
            <span className="text-sm font-bold text-brand-dark">{tripDetails.pickup}</span>
            <span className="text-[10px] text-brand-gray font-medium block mt-0.5">{tripDetails.pickupDate}, 09:00 AM</span>
          </div>

          {/* Destination point */}
          <div className="relative">
            <div className="absolute -left-[30px] top-1 w-3.5 h-3.5 rounded-full bg-brand-blue border-4 border-white shadow-md shadow-brand-blue/30" />
            <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest block">Destination</span>
            <span className="text-sm font-bold text-brand-dark">{tripDetails.destination}</span>
            <span className="text-[10px] text-brand-gray font-medium block mt-0.5">
              {tripDetails.tripType === 'One Way' ? tripDetails.pickupDate : tripDetails.returnDate}, 06:00 PM
            </span>
          </div>
        </div>

        {/* Selected parameters */}
        <div className="flex flex-col gap-3 py-4 border-y border-brand-beige/35 mb-5 text-left text-xs font-semibold text-brand-dark/90">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-brand-gray">
              <Users className="w-4 h-4 text-brand-lavender" />
              Passengers
            </span>
            <span>{tripDetails.passengers} Passengers</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-brand-gray">
              <Car className="w-4 h-4 text-brand-lavender" />
              Vehicle Class
            </span>
            <span className="max-w-[150px] truncate text-right font-bold text-brand-lavender">
              {tripDetails.vehiclePreference}
            </span>
          </div>

          {/* Added Places Excursion chips */}
          {addedPlaces.length > 0 && (
            <div className="flex flex-col gap-1.5 pt-2">
              <span className="text-brand-gray">Added Excursions:</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {addedPlaces.map((place) => (
                  <span
                    key={place.id}
                    className="px-2.5 py-1 bg-brand-peach/20 text-orange-800 text-[10px] font-bold rounded-lg border border-brand-peach/30"
                  >
                    {place.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Pricing and Action buttons */}
      <div>
        {/* Estimated Fare Gradient Card */}
        <div className="relative overflow-hidden bg-gradient-to-br from-brand-lavender via-indigo-500 to-indigo-600 rounded-3xl p-5 text-white text-left shadow-lg shadow-indigo-600/10 mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue block">Estimated Total Fare</span>
          
          <div className="flex items-baseline gap-1 mt-1.5 mb-2">
            <span className="text-2xl font-extrabold">₹ {totalFare.toLocaleString('en-IN')}</span>
            <span className="text-[10px] font-medium opacity-80">({tripDetails.tripType})</span>
          </div>

          <p className="text-[9px] font-medium text-indigo-100 leading-snug max-w-[150px]">
            Inclusive of driver allowances, fuel charges & toll taxes.
          </p>

          {/* Layered custom CSS mountains decoration */}
          <div className="absolute right-4 bottom-0 w-28 h-20 pointer-events-none overflow-visible flex items-end">
            {/* Back Mountain */}
            <div 
              className="w-16 h-16 bg-gradient-to-t from-brand-peach to-brand-lavender/30 opacity-70 transform translate-x-4 translate-y-1 shadow-sm"
              style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            />
            {/* Front Mountain */}
            <div 
              className="w-14 h-12 bg-gradient-to-tr from-white to-brand-blue/80 shadow-md relative z-10"
              style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            />
          </div>
        </div>

        {/* Lead conversion CTAs row */}
        <div className="flex flex-col gap-3">
          {/* WhatsApp Button */}
          <motion.a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleConfetti}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all text-sm cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
            <span>Confirm via WhatsApp</span>
          </motion.a>

          {/* Phone / Email glass rows */}
          <div className="grid grid-cols-2 gap-3">
            <motion.a
              href="tel:+917000012345"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 py-3 bg-white border border-brand-beige text-brand-dark rounded-xl font-bold text-xs hover:border-brand-lavender hover:bg-brand-bg-2 transition-all cursor-pointer shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-brand-lavender" />
              <span>Call Expert</span>
            </motion.a>

            <motion.a
              href="mailto:hello@travelio.com?subject=Custom%20Trip%20Quotation%20Request"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 py-3 bg-white border border-brand-beige text-brand-dark rounded-xl font-bold text-xs hover:border-brand-lavender hover:bg-brand-bg-2 transition-all cursor-pointer shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 text-brand-lavender" />
              <span>Email Plan</span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Sheet backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-50 bg-brand-dark/30 backdrop-blur-sm"
            />
            {/* Mobile Sheet drawer */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed inset-x-0 bottom-0 z-50 rounded-t-[32px] glass p-6 shadow-2xl border-t border-white/60 max-h-[85vh] overflow-y-auto"
            >
              {/* Drag Handle */}
              <div className="w-12 h-1.5 bg-brand-beige rounded-full mx-auto mb-6 cursor-pointer" onClick={onClose} />
              
              <PanelContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  // Desktop Floating Panel (Sticky on right hand side)
  return (
    <div className="sticky top-28 glass rounded-[32px] p-6 shadow-premium border border-white/65 h-[fit-content] min-w-[340px] max-w-[360px] self-start">
      <PanelContent />
    </div>
  );
}
