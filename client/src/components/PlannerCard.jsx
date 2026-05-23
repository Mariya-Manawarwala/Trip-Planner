import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Car, Search, ArrowRightLeft, Sparkles, UserCheck, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function PlannerCard({ tripDetails, onTripDetailsChange, onSearch }) {
  const [activeTab, setActiveTab] = useState(tripDetails.tripType || 'One Way');
  const [passengerDropdownOpen, setPassengerDropdownOpen] = useState(false);

  // Popular locations list for ease of demo selection
  const locations = ['Bhopal, MP', 'Ujjain, MP', 'Indore, MP', 'Jabalpur, MP', 'Gwalior, MP'];
  const vehiclePreferences = ['Any Vehicle', 'Toyota Innova Crysta', 'Maruti Dzire', 'Tempo Traveller'];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    onTripDetailsChange({ ...tripDetails, tripType: tab });
  };

  const handleSwapLocations = () => {
    onTripDetailsChange({
      ...tripDetails,
      pickup: tripDetails.destination,
      destination: tripDetails.pickup,
    });
  };

  return (
    <motion.div
      id="planner"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 1, cubicBezier: [0.16, 1, 0.3, 1] }}
      className="relative z-20 max-w-[1300px] mx-auto px-6 lg:px-12 -mt-16 md:-mt-24 mb-16"
    >
      {/* Central Glass Card */}
      <div className="glass rounded-[28px] p-4 md:p-5 shadow-premium border border-white/60">
        
        {/* Planner Header Navigation Tabs */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-beige/30">
          <div className="flex items-center gap-1 p-0.5 bg-brand-bg-3/70 rounded-xl border border-white/40">
            {['One Way', 'Round Trip'].map((tab) => {
              const isSelected = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabChange(tab)}
                  className={`relative px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 ${
                    isSelected ? 'text-brand-dark' : 'text-brand-gray hover:text-brand-dark'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activePlannerTab"
                      className="absolute inset-0 bg-white shadow-sm border border-brand-beige/25 rounded-lg"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </div>

          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-brand-lavender">
            <Sparkles className="w-3 h-3" />
            Flexible Custom Planning
          </span>
        </div>

        {/* Inputs Layout Form Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 items-center">
          
          {/* Pickup location */}
          <div className="lg:col-span-3 text-left relative">
            <label className="block text-[10px] font-bold text-brand-gray tracking-wider uppercase mb-1 ml-0.5">
              From (Pickup)
            </label>
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-lavender">
                <MapPin className="w-4 h-4" />
              </div>
              <select
                value={tripDetails.pickup}
                onChange={(e) => onTripDetailsChange({ ...tripDetails, pickup: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 bg-brand-bg-2 hover:bg-white rounded-xl border border-brand-beige/50 group-hover:border-brand-lavender/40 focus:border-brand-lavender focus:outline-none transition-all text-xs font-bold text-brand-dark shadow-sm group-hover:shadow-md appearance-none"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Swap arrows button spacer */}
          <div className="hidden lg:flex lg:col-span-1 justify-center pt-4">
            <motion.button
              whileHover={{ rotate: 180, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSwapLocations}
              type="button"
              className="w-8 h-8 rounded-full bg-white shadow-md border border-brand-beige/55 flex items-center justify-center text-brand-gray hover:text-brand-lavender hover:border-brand-lavender/40 transition-all cursor-pointer"
            >
              <ArrowRightLeft className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Destination location */}
          <div className="lg:col-span-3 text-left relative">
            <label className="block text-[10px] font-bold text-brand-gray tracking-wider uppercase mb-1 ml-0.5">
              To (Destination)
            </label>
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-lavender">
                <MapPin className="w-4 h-4" />
              </div>
              <select
                value={tripDetails.destination}
                onChange={(e) => onTripDetailsChange({ ...tripDetails, destination: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 bg-brand-bg-2 hover:bg-white rounded-xl border border-brand-beige/50 group-hover:border-brand-lavender/40 focus:border-brand-lavender focus:outline-none transition-all text-xs font-bold text-brand-dark shadow-sm group-hover:shadow-md appearance-none"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Dates Picker */}
          <div className="lg:col-span-2 text-left relative">
            <label className="block text-[10px] font-bold text-brand-gray tracking-wider uppercase mb-1 ml-0.5">
              Dates
            </label>
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-lavender">
                <Calendar className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={activeTab === 'One Way' ? tripDetails.pickupDate : `${tripDetails.pickupDate} - ${tripDetails.returnDate}`}
                onChange={(e) => {
                  const val = e.target.value;
                  if (activeTab === 'One Way') {
                    onTripDetailsChange({ ...tripDetails, pickupDate: val });
                  } else {
                    const split = val.split(' - ');
                    onTripDetailsChange({
                      ...tripDetails,
                      pickupDate: split[0] || tripDetails.pickupDate,
                      returnDate: split[1] || tripDetails.returnDate,
                    });
                  }
                }}
                className="w-full pl-9 pr-3 py-2.5 bg-brand-bg-2 hover:bg-white rounded-xl border border-brand-beige/50 group-hover:border-brand-lavender/40 focus:border-brand-lavender focus:outline-none transition-all text-xs font-bold text-brand-dark shadow-sm group-hover:shadow-md"
              />
            </div>
          </div>

          {/* Passengers Selector */}
          <div className="lg:col-span-1 text-left relative">
            <label className="block text-[10px] font-bold text-brand-gray tracking-wider uppercase mb-1 ml-0.5">
              Passengers
            </label>
            <div className="relative group">
              <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-brand-lavender">
                <Users className="w-3.5 h-3.5" />
              </div>
              <input
                type="number"
                min="1"
                max="30"
                value={tripDetails.passengers}
                onChange={(e) => onTripDetailsChange({ ...tripDetails, passengers: parseInt(e.target.value) || 1 })}
                className="w-full pl-8 pr-1 py-2.5 bg-brand-bg-2 hover:bg-white rounded-xl border border-brand-beige/50 group-hover:border-brand-lavender/40 focus:border-brand-lavender focus:outline-none transition-all text-xs font-bold text-brand-dark shadow-sm group-hover:shadow-md text-center"
              />
            </div>
          </div>

          {/* Vehicle preference */}
          <div className="lg:col-span-2 text-left relative">
            <label className="block text-[10px] font-bold text-brand-gray tracking-wider uppercase mb-1 ml-0.5">
              Vehicle
            </label>
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-lavender">
                <Car className="w-4 h-4" />
              </div>
              <select
                value={tripDetails.vehiclePreference}
                onChange={(e) => onTripDetailsChange({ ...tripDetails, vehiclePreference: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 bg-brand-bg-2 hover:bg-white rounded-xl border border-brand-beige/50 group-hover:border-brand-lavender/40 focus:border-brand-lavender focus:outline-none transition-all text-xs font-bold text-brand-dark shadow-sm group-hover:shadow-md appearance-none"
              >
                {vehiclePreferences.map((veh) => (
                  <option key={veh} value={veh}>{veh}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Circular search button overlapping the right boundary */}
        <div className="flex justify-center lg:justify-end mt-4">
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={onSearch}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-brand-lavender to-indigo-600 text-white rounded-xl font-bold shadow-md shadow-brand-lavender/20 hover:shadow-brand-lavender/30 transition-all cursor-pointer text-xs"
          >
            <Search className="w-4 h-4" />
            <span>Search Journey</span>
          </motion.button>
        </div>

        {/* Highlight Benefit icons row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 pt-3.5 border-t border-brand-beige/35">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-brand-gray/95">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-lavender shrink-0" />
            <span>Transparent Pricing</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-brand-gray/95">
            <UserCheck className="w-3.5 h-3.5 text-brand-lavender shrink-0" />
            <span>Verified Drivers</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-brand-gray/95">
            <Car className="w-3.5 h-3.5 text-brand-lavender shrink-0" />
            <span>Clean & Safe Vehicles</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-brand-gray/95">
            <HeartHandshake className="w-3.5 h-3.5 text-brand-lavender shrink-0" />
            <span>24/7 Support</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
