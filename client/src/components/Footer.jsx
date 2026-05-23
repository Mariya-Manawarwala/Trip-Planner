import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, Compass } from 'lucide-react';

export default function Footer() {
  const socialIcons = [
    { icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ), href: '#', color: 'hover:text-pink-500 hover:bg-pink-50' },
    { icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ), href: '#', color: 'hover:text-blue-600 hover:bg-blue-50' },
    { icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" {...props}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
      </svg>
    ), href: '#', color: 'hover:text-red-500 hover:bg-red-50' },
    { icon: (props) => (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ), href: '#', color: 'hover:text-black hover:bg-neutral-100' }
  ];


  return (
    <footer className="relative w-full bg-brand-bg-3 border-t border-brand-beige/50 rounded-t-[40px] md:rounded-t-[60px] overflow-hidden pt-16 pb-8 px-6 md:px-12">
      {/* Background soft blurs */}
      <div className="absolute top-1/2 left-10 w-72 h-72 rounded-full bg-brand-peach/10 blur-[90px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-brand-lavender/10 blur-[100px] pointer-events-none" />

      {/* Main Grid Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10 mb-12">
        
        {/* Logo and Tagline (Left) */}
        <div className="md:col-span-4 text-left flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-lavender to-brand-blue flex items-center justify-center shadow-md">
              <Compass className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-brand-dark">
              TRAVEL<span className="text-brand-lavender">IO</span>
            </span>
          </div>
          <p className="text-xs text-brand-gray/95 font-medium leading-relaxed max-w-sm">
            Experience journeys crafted with absolute ease, transparent fair estimates, and high-fidelity passenger services tailored around your custom goals.
          </p>
        </div>

        {/* Contact Support details (Middle-left) */}
        <div className="md:col-span-4 text-left">
          <h4 className="text-sm font-bold text-brand-dark tracking-tight mb-4">We're here to help</h4>
          <div className="flex flex-col gap-3.5">
            <a href="tel:+917000012345" className="flex items-center gap-3 group text-xs font-semibold text-brand-gray hover:text-brand-lavender transition-all">
              <div className="w-8 h-8 rounded-xl bg-white border border-brand-beige/70 flex items-center justify-center shadow-sm group-hover:border-brand-lavender/40 group-hover:shadow-md transition-all">
                <Phone className="w-3.5 h-3.5 text-brand-lavender" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-brand-gray/60 font-medium uppercase tracking-wider">Call Expert</span>
                <span className="text-brand-dark">+91 70000 12345</span>
              </div>
            </a>

            <a href="mailto:hello@travelio.com" className="flex items-center gap-3 group text-xs font-semibold text-brand-gray hover:text-brand-lavender transition-all">
              <div className="w-8 h-8 rounded-xl bg-white border border-brand-beige/70 flex items-center justify-center shadow-sm group-hover:border-brand-lavender/40 group-hover:shadow-md transition-all">
                <Mail className="w-3.5 h-3.5 text-brand-lavender" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-brand-gray/60 font-medium uppercase tracking-wider">Email Inquiry</span>
                <span className="text-brand-dark">hello@travelio.com</span>
              </div>
            </a>

            <div className="flex items-center gap-3 text-xs font-semibold text-brand-gray">
              <div className="w-8 h-8 rounded-xl bg-white border border-brand-beige/70 flex items-center justify-center shadow-sm">
                <Clock className="w-3.5 h-3.5 text-brand-lavender" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-brand-gray/60 font-medium uppercase tracking-wider">Working Hours</span>
                <span className="text-brand-dark">Mon - Sun | 07:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Paper Plane Card widget (Middle-right) */}
        <div className="md:col-span-4 text-left">
          <h4 className="text-sm font-bold text-brand-dark tracking-tight mb-4">Follow us</h4>
          <p className="text-xs text-brand-gray/95 font-medium leading-relaxed mb-4">
            Join our visual journals for scenic route inspirations and custom pack updates.
          </p>

          <div className="flex gap-2">
            {socialIcons.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className={`w-9 h-9 rounded-xl bg-white border border-brand-beige/70 flex items-center justify-center text-brand-gray transition-all shadow-sm ${social.color}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

      </div>

      {/* Decorative Layered 3D mountains & driving SUV Landscape (At the bottom boundary) */}
      <div className="relative w-full h-24 border-t border-brand-beige/35 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-left">
        <span className="text-[10px] font-bold text-brand-gray/70 tracking-widest uppercase relative z-10 self-center md:self-end">
          © {new Date().getFullYear()} TRAVELIO. Designed with care for journeys.
        </span>

        {/* Dynamic driving visual bottom-right */}
        <div className="absolute right-0 bottom-[-8px] w-full md:w-96 h-20 overflow-hidden pointer-events-none hidden sm:block">
          <svg 
            className="w-full h-full object-cover" 
            viewBox="0 0 350 80" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Mountain 1 */}
            <path 
              d="M 120 80 L 170 30 L 230 80 Z" 
              fill="#E7DDD5" 
              className="opacity-70"
            />
            {/* Mountain 2 (overlaps) */}
            <path 
              d="M 190 80 L 250 15 L 310 80 Z" 
              fill="#D1C7BD" 
              className="opacity-90"
            />
            {/* Small SUV Driving Road path */}
            <line x1="0" y1="78" x2="350" y2="78" stroke="#6B7280" strokeWidth="4" className="opacity-40" />
            
            {/* Animated small car driving */}
            <g>
              <animateTransform 
                attributeName="transform" 
                type="translate" 
                from="-40, 60" 
                to="360, 60" 
                dur="15s" 
                repeatCount="indefinite" 
              />
              {/* Mini Vector Car */}
              <rect x="0" y="5" width="22" height="8" rx="2" fill="#A78BFA" />
              <path d="M 4 5 L 8 1 L 14 1 L 18 5 Z" fill="#FFF" />
              <circle cx="5" cy="13" r="2.5" fill="#111" />
              <circle cx="17" cy="13" r="2.5" fill="#111" />
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
}
