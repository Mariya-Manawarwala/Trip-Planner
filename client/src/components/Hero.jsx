import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star } from 'lucide-react';

export default function Hero({ onStartPlanning, onExploreVehicles }) {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-start rounded-b-[60px] md:rounded-b-[100px] lg:rounded-b-[160px] overflow-hidden shadow-2xl z-10">
      
      {/* 1. Full Screen Vibrant Mumbai Sea Link Image Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1600&q=95" 
          alt="Bandra-Worli Sea Link, Mumbai" 
          className="w-full h-full object-cover object-center"
        />
        {/* Deep, highly dramatic dark sunset vignettes and bottom-to-top overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-950/50 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/30 z-0" />
      </div>

      {/* 2. Full-Screen Hand-drawn Travel Doodles Overlay */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-80"
        viewBox="0 0 1000 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dotted Travel path 1 (curving across Mumbai sky) */}
        <path 
          d="M100 680 Q 280 420, 420 540 T 720 340 Q 880 240, 960 180" 
          fill="none" 
          stroke="#FED7AA" 
          strokeWidth="2.5" 
          strokeDasharray="6 8" 
          className="path-draw"
        />
        
        {/* Cute handdrawn paper plane looping at the end of the path */}
        <g transform="translate(952, 172) rotate(-18)">
          <path 
            d="M 0 0 L 18 6 L 10 10 Z" 
            fill="#FED7AA" 
          />
          <path 
            d="M 0 0 L 10 10 L 6 18 Z" 
            fill="#FFFFFF" 
          />
        </g>

        {/* Twinkling star accent 1 */}
        <g transform="translate(180, 220)" className="animate-float" style={{ animationDelay: '0.8s' }}>
          <path d="M0 -7 L1.8 -1.8 L7 0 L1.8 1.8 L0 7 L-1.8 1.8 L-7 0 L-1.8 -1.8 Z" fill="#7DD3FC" opacity="0.9" />
        </g>
        
        {/* Twinkling star accent 2 */}
        <g transform="translate(860, 360)" className="animate-float" style={{ animationDelay: '2.5s' }}>
          <path d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z" fill="#C084FC" opacity="0.85" />
        </g>

        {/* Handdrawn circle loop doodle */}
        <path 
          d="M 400 520 C 430 490, 460 510, 430 540 C 410 560, 380 540, 400 520" 
          fill="none" 
          stroke="#C084FC" 
          strokeWidth="1.5" 
          strokeDasharray="3 4" 
          opacity="0.6"
        />

        {/* Hand-drawn destination / route map pins */}
        <g transform="translate(425, 535)">
          <circle cx="0" cy="0" r="4.5" fill="#C084FC" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle cx="0" cy="0" r="3" fill="#C084FC" />
          <text x="12" y="3" fill="#FED7AA" fontSize="8.5" fontWeight="extrabold" fontFamily="system-ui" letterSpacing="1.5">ROUTE ACTIVE</text>
        </g>

        <g transform="translate(718, 342)">
          <circle cx="0" cy="0" r="4.5" fill="#7DD3FC" className="animate-ping" style={{ animationDuration: '4.5s' }} />
          <circle cx="0" cy="0" r="3" fill="#7DD3FC" />
          <text x="12" y="3" fill="#7DD3FC" fontSize="8.5" fontWeight="extrabold" fontFamily="system-ui" letterSpacing="1.5">MUMBAI SEA LINK</text>
        </g>
      </svg>

      {/* 3. Left Content Side - Aligned beautifully over overlay with top-padding to clear floating header */}
      <div className="w-full max-w-[1300px] mx-auto px-6 lg:px-12 z-20 flex justify-start items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="text-left max-w-2xl pt-32 pb-24 lg:pt-40 lg:pb-32"
        >
          {/* Floating badge top */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200 } }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-lavender/25 backdrop-blur-md border border-brand-lavender/35 shadow-sm rounded-full text-brand-blue text-xs font-bold tracking-wide mb-6"
          >
            <Star className="w-3.5 h-3.5 text-brand-blue fill-brand-blue" />
            <span>Comfortable Rides, Happy Journeys</span>
          </motion.div>

          {/* Large Typography heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white mb-6"
          >
            Plan. Explore.<br />
            Travel with{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#F472B6] to-[#FCD34D] font-handwritten text-7xl md:text-8xl px-2 rotate-[-1deg] drop-shadow-lg">
              ease
              {/* Double handwritten underline brush */}
              <svg 
                className="absolute left-0 bottom-[-15px] w-full h-[18px] text-[#FED7AA]" 
                viewBox="0 0 200 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
                  d="M5,12 C40,4 120,4 195,10" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                />
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.4, duration: 1.2, ease: 'easeInOut' }}
                  d="M15,16 C55,10 115,8 180,14" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtext description - Thicker font, higher readability, drop shadow */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-base md:text-lg text-white/95 font-semibold leading-relaxed max-w-lg mb-8 drop-shadow-md"
          >
            Custom luxury tours, verified premium drivers, and transparent pricing estimates — all designed around your personal itinerary goals.
          </motion.p>

          {/* CTA Buttons - Adjusted Spacing and pop styles */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex flex-wrap items-center gap-5 mt-4"
          >
            {/* Start Planning - primary glowing */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onStartPlanning}
              className="group relative px-8 py-4 bg-gradient-to-r from-brand-lavender to-indigo-600 text-white rounded-2xl text-base font-bold shadow-lg shadow-brand-lavender/30 hover:shadow-brand-lavender/45 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Start Planning</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 text-brand-blue" />
            </motion.button>

            {/* Explore Vehicles - clean white borders */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onExploreVehicles}
              className="px-8 py-4 bg-white/15 backdrop-blur-md border border-white/30 text-white rounded-2xl text-base font-bold transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Vehicles</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
