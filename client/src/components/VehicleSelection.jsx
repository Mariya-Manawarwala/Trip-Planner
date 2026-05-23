import React from 'react';
import { motion } from 'framer-motion';
import { Users, Fuel, ArrowRight } from 'lucide-react';

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
      tagColor: 'bg-brand-lavender/15 text-indigo-700 text-[10px] font-bold',
      image: 'https://images.unsplash.com/photo-1631248055158-edec7a3c072b?auto=format&fit=crop&w=500&q=80'
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
      tagColor: 'bg-emerald-50 text-emerald-700 text-[10px] font-bold',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=500&q=80'
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
      tagColor: 'bg-sky-50 text-sky-700 text-[10px] font-bold',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section id="vehicles" className="w-full py-6">
      {/* Title Header */}
      <div className="text-left mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-brand-dark">
          Recommended Vehicles
        </h2>
        <p className="text-xs font-medium text-brand-gray mt-0.5">
          Best options for your journey
        </p>
      </div>

      {/* Grid Layout - 3 Cards side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {vehicles.map((car) => {
          const isSelected = selectedVehicle === car.id;
          return (
            <motion.div
              key={car.id}
              whileHover={{ y: -4 }}
              className={`rounded-[24px] p-5 glass shadow-premium border-2 transition-all duration-300 shine-sweep flex flex-col justify-between ${
                isSelected ? 'border-brand-lavender bg-brand-bg-2/80 shadow-brand-lavender/5' : 'border-white/60'
              }`}
            >
              <div>
                {/* Tag and select status */}
                <div className="flex justify-between items-center mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full ${car.tagColor}`}>
                    {car.tag}
                  </span>
                  {isSelected && (
                    <span className="text-[9px] font-extrabold text-brand-lavender tracking-wider bg-white px-2 py-0.5 rounded-md border border-brand-lavender/25">
                      Selected
                    </span>
                  )}
                </div>

                {/* Real Car Image Cover */}
                <div className="my-4 aspect-[16/10] w-full rounded-2xl overflow-hidden bg-brand-bg-3/20 flex items-center justify-center shadow-sm">
                  <motion.img 
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  />
                </div>

                {/* Info and Specifications */}
                <div className="text-left mb-4">
                  <h3 className="text-base font-bold text-brand-dark tracking-tight leading-tight">{car.name}</h3>
                  
                  {/* Meta items */}
                  <div className="flex gap-3 mt-2 mb-2">
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
              <div className="flex items-center justify-between pt-3.5 border-t border-brand-beige/35 mt-auto">
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
