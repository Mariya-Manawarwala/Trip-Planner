import React from 'react';
import { motion } from 'framer-motion';
import { Users, Fuel, ArrowRight } from 'lucide-react';

// Real car images — specific to each model
const VEHICLE_IMAGES = {
  'Toyota Innova Crysta': 'https://images.unsplash.com/photo-1631248055158-edec7a3c072b?auto=format&fit=crop&w=600&q=85',
  'Maruti Dzire': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=85',
  'Tempo Traveller': 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=85',
};

export default function VehicleSelection({ selectedVehicle, onSelectVehicle }) {
  const vehicles = [
    {
      id: 'Toyota Innova Crysta',
      name: 'Toyota Innova Crysta',
      type: 'Premium SUV',
      seats: '6 + 1 Seats',
      fuel: 'Diesel',
      desc: 'Comfortable for long highway journeys.',
      fare: 9800,
      tag: 'Best Match',
      tagColor: 'bg-brand-lavender/15 text-indigo-700',
    },
    {
      id: 'Maruti Dzire',
      name: 'Maruti Dzire',
      type: 'Comfort Sedan',
      seats: '4 + 1 Seats',
      fuel: 'Petrol',
      desc: 'Sleek, efficient for small family transfers.',
      fare: 6300,
      tag: 'Budget Friendly',
      tagColor: 'bg-emerald-50 text-emerald-700',
    },
    {
      id: 'Tempo Traveller',
      name: 'Tempo Traveller',
      type: 'Executive Mini-Bus',
      seats: '12 + 1 Seats',
      fuel: 'Diesel',
      desc: 'Perfect for large groups and active events.',
      fare: 14500,
      tag: 'Large Group',
      tagColor: 'bg-sky-50 text-sky-700',
    }
  ];

  return (
    <section id="vehicles" className="w-full py-6">
      {/* Title Header */}
      <div className="text-left mb-5">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-brand-dark">
          Recommended Vehicles
        </h2>
        <p className="text-xs font-medium text-brand-gray mt-0.5">
          Best options for your journey
        </p>
      </div>

      {/* Responsive Layout - scrollable row on mobile, 3-col grid on larger screens */}
      <div
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory select-none"
        style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {vehicles.map((car) => {
          const isSelected = selectedVehicle === car.id;
          const imgSrc = VEHICLE_IMAGES[car.id];

          return (
            <motion.div
              key={car.id}
              whileHover={{ y: -4 }}
              className={`snap-center shrink-0 w-[78vw] sm:w-[45vw] md:w-[30%] lg:flex-1 min-w-0 rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 glass shadow-premium border-2 transition-all duration-300 shine-sweep flex flex-col justify-between ${
                isSelected ? 'border-brand-lavender bg-brand-bg-2/80 shadow-brand-lavender/5' : 'border-white/60'
              }`}
            >
              <div>
                {/* Tag and select status */}
                <div className="flex justify-between items-center mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${car.tagColor}`}>
                    {car.tag}
                  </span>
                  {isSelected && (
                    <span className="text-[9px] font-extrabold text-brand-lavender tracking-wider bg-white px-2 py-0.5 rounded-md border border-brand-lavender/25">
                      Selected
                    </span>
                  )}
                </div>

                {/* Car Image */}
                <div className="my-3 aspect-[16/10] w-full rounded-xl overflow-hidden bg-brand-bg-3/20 shadow-sm">
                  <motion.img
                    src={imgSrc}
                    alt={car.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  />
                </div>

                {/* Info and Specifications */}
                <div className="text-left mb-3">
                  <h3 className="text-sm font-bold text-brand-dark tracking-tight leading-tight">{car.name}</h3>
                  <div className="flex gap-3 mt-1.5 mb-1.5">
                    <span className="flex items-center gap-1 text-[10px] font-bold text-brand-gray">
                      <Users className="w-3 h-3 text-brand-lavender" />
                      {car.seats}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-brand-gray">
                      <Fuel className="w-3 h-3 text-brand-lavender" />
                      {car.fuel}
                    </span>
                  </div>
                  <p className="text-[11px] text-brand-gray/90 leading-relaxed font-medium">
                    {car.desc}
                  </p>
                </div>
              </div>

              {/* Cost & action triggers */}
              <div className="flex items-center justify-between pt-3 border-t border-brand-beige/35 mt-auto">
                <div className="text-left">
                  <span className="text-[9px] font-bold text-brand-gray uppercase tracking-widest block">Est. Fare</span>
                  <span className="text-base font-extrabold text-brand-dark">₹ {car.fare.toLocaleString('en-IN')}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSelectVehicle(car.id, car.fare)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm ${
                    isSelected
                      ? 'bg-gradient-to-r from-brand-lavender to-indigo-600 text-white shadow-brand-lavender/25'
                      : 'bg-white hover:bg-brand-lavender hover:text-white border border-brand-beige text-brand-dark'
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
