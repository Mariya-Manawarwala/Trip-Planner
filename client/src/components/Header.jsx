import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, X, Compass, Car, Package, HelpCircle, Info, Menu } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Plan Trip');

  const navItems = [
    { name: 'Plan Trip', href: '#planner', icon: Compass },
    { name: 'Vehicles', href: '#vehicles', icon: Car },
    { name: 'Packages', href: '#packages', icon: Package },
    { name: 'About Us', href: '#about', icon: Info },
    { name: 'Support', href: '#support', icon: HelpCircle },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-1.5rem)] sm:w-[92%] max-w-[1300px] px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between glass rounded-[18px] sm:rounded-[24px] border border-white/30 shadow-lg shadow-brand-lavender/5"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-brand-lavender to-brand-blue flex items-center justify-center shadow-md shadow-brand-lavender/25 group-hover:scale-105 transition-transform duration-300">
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-spin-slow" style={{ animationDuration: '20s' }} />
          </div>
          <span className="text-base sm:text-xl font-bold tracking-tight text-brand-dark">
            TRAVEL<span className="text-brand-lavender font-extrabold">IO</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 bg-brand-bg-3/50 rounded-full border border-white/40">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className="relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBubble"
                    className="absolute inset-0 bg-white shadow-sm border border-brand-beige/20 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? 'text-brand-dark font-semibold' : 'text-brand-gray hover:text-brand-dark'}`}>
                  {item.name}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Menu CTA Toggle */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 bg-brand-dark text-white rounded-full text-xs sm:text-sm font-medium shadow-md shadow-brand-dark/15 hover:shadow-brand-dark/30 transition-all duration-300 pointer-events-auto"
          >
            <span>Menu</span>
            <div className="w-4 h-4 flex items-center justify-center">
              <Grid className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90" />
            </div>
          </motion.button>
        </div>
      </motion.header>

      {/* Drawer Overlay Backdrop Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-brand-dark/20 backdrop-blur-md"
            />

            {/* Slide-in Menu Sheet */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm glass-dark px-8 py-10 shadow-2xl flex flex-col justify-between text-white"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-8 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-lavender to-brand-blue flex items-center justify-center">
                      <Compass className="w-4.5 h-4.5 text-white" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white">
                      TRAVEL<span className="text-brand-lavender">IO</span>
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                  >
                    <X className="w-5 h-5 text-white/90" />
                  </motion.button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-4 mt-10">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        onClick={() => {
                          setActiveTab(item.name);
                          setIsOpen(false);
                        }}
                        className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all text-white/80 hover:text-white"
                      >
                        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                          <Icon className="w-4.5 h-4.5 text-brand-blue" />
                        </div>
                        <span className="text-base font-semibold">{item.name}</span>
                      </motion.a>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Footer Contact details */}
              <div className="border-t border-white/10 pt-8 mt-auto flex flex-col gap-4 text-white/60 text-sm">
                <p className="text-white/80 font-medium">Ready to start planning?</p>
                <div>
                  <p>Support Helpline:</p>
                  <p className="text-white font-semibold mt-0.5">+91 70000 12345</p>
                </div>
                <div>
                  <p>Corporate Office:</p>
                  <p className="text-white font-semibold mt-0.5">Bhopal, MP, India</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
