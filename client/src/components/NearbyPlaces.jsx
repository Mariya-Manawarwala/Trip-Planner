import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Check, MapPin, Compass } from 'lucide-react';

export default function NearbyPlaces({ addedPlaces, onTogglePlace }) {
  const places = [
    {
      id: 'Omkareshwar',
      name: 'Omkareshwar',
      distance: '77 KM from Ujjain',
      cost: 1200,
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=400&q=80',
      tag: 'Sacred Island'
    },
    {
      id: 'Maheshwar',
      name: 'Maheshwar',
      distance: '91 KM from Ujjain',
      cost: 1500,
      image: 'https://images.unsplash.com/photo-1626595609123-b484a4b2a429?auto=format&fit=crop&w=400&q=80',
      tag: 'Royal Ghats'
    },
    {
      id: 'Indore',
      name: 'Indore',
      distance: '56 KM from Ujjain',
      cost: 800,
      image: 'https://images.unsplash.com/photo-1595818944075-59941a583e4c?auto=format&fit=crop&w=400&q=80',
      tag: 'Heritage Center'
    },
    {
      id: 'Mandu',
      name: 'Mandu',
      distance: '190 KM from Ujjain',
      cost: 2200,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
      tag: 'Ancient Fortress'
    }
  ];

  return (
    <section className="w-full py-6">
      {/* Clean compact Header */}
      <div className="flex items-end justify-between gap-4 mb-6">
        <div className="text-left">
          <h2 className="text-2xl font-bold tracking-tight text-brand-dark">
            Explore Nearby Places
          </h2>
          <p className="text-xs font-medium text-brand-gray mt-0.5">
            Add these places to make your trip even more memorable
          </p>
        </div>

        <button 
          onClick={() => {}}
          className="px-4 py-2 bg-white/80 hover:bg-white border border-brand-beige rounded-full text-xs font-bold text-brand-gray hover:text-brand-lavender hover:border-brand-lavender/30 transition-all flex items-center gap-1 cursor-pointer"
        >
          <span>View all</span>
          <Plus className="w-3 h-3" />
        </button>
      </div>

      {/* Grid Layout - 4 Columns side by side */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {places.map((place) => {
          const isAdded = addedPlaces.some(p => p.id === place.id);

          return (
            <motion.div
              key={place.id}
              whileHover={{ y: -5 }}
              className="relative aspect-[5/6] rounded-[24px] overflow-hidden group shadow-premium border border-white/50 cursor-pointer"
            >
              {/* Image */}
              <motion.img
                src={place.image}
                alt={place.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-85" />

              {/* Top chips */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center z-10">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-white/20 backdrop-blur-md text-white border border-white/10">
                  {place.tag}
                </span>
              </div>

              {/* Toggle CTA */}
              <div className="absolute bottom-3.5 right-3.5 z-20">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onTogglePlace(place);
                  }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer ${
                    isAdded 
                      ? 'bg-emerald-500 text-white shadow-emerald-500/25' 
                      : 'bg-white text-brand-dark hover:bg-brand-lavender hover:text-white shadow-brand-dark/5'
                  }`}
                >
                  {isAdded ? (
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  ) : (
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  )}
                </motion.button>
              </div>

              {/* Place details info text */}
              <div className="absolute bottom-3.5 left-3.5 right-12 text-left z-10">
                <span className="flex items-center gap-0.5 text-[9px] font-bold text-brand-blue mb-0.5">
                  <MapPin className="w-2.5 h-2.5" />
                  {place.distance.split(' from ')[0]}
                </span>
                <h3 className="text-sm font-bold text-white tracking-tight leading-tight">
                  {place.name}
                </h3>
                <span className="text-[10px] text-white/70 block mt-0.5">+{place.cost} km cost</span>
              </div>

              {/* Ambient tracking highlight */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
