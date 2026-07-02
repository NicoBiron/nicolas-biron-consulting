import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Approche', href: '#approche' },
    { name: 'Problématiques', href: '#problematiques' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brand-slate/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
    }`}>
      {/* Barre de défilement de lecture */}
      <div 
        className="absolute top-0 left-0 h-[2px] bg-brand-accent transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Nom + Logo intégré en SVG direct */}
        <a href="#" className="flex items-center space-x-3 group">
          {/* Logo SVG complet, doré, réactif au survol */}
          <svg 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-10 h-10 text-brand-accent group-hover:scale-105 transition-transform duration-300"
          >
            {/* 1. Cercles concentriques (Précision) */}
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.2" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.1" />
            
            {/* 2. Le Monogramme "N" et "B" */}
            <path 
              d="M35 68 V32 L50 54 V36 C50 28 65 28 65 41 C65 48.5 50 48.5 50 48.5 C50 48.5 67 48.5 67 58.5 C67 68 50 68 50 68" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            
            {/* 3. La Vrille de Vigne (Viticulture) */}
            <path 
              d="M50 36 C53 23 61 22 66 26 C68.5 28 66 31.5 61 30" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            
            {/* 4. La Goutte de Vin (Œnologie) */}
            <path 
              d="M50 74 C48.5 74 47.5 75 47.5 76.2 C47.5 77.4 50 79.8 50 79.8 C50 79.8 52.5 77.4 52.5 76.2 C52.5 75 51.5 74 50 74 Z" 
              fill="currentColor" 
              fillOpacity="0.8"
            />
          </svg>

          <div className="flex flex-col justify-center">
            <span className="font-serif text-base md:text-lg tracking-wider text-brand-ivory font-semibold leading-none">
              NICOLAS BIRON
            </span>
            <span className="text-[9px] tracking-[0.2em] text-brand-accent uppercase font-sans mt-1">
              Consulting Vitivinicole
            </span>
          </div>
        </a>

        {/* Liens Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-xs tracking-widest text-brand-ivory/80 hover:text-brand-accent uppercase transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://bnv-consulting.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border border-brand-accent/40 hover:border-brand-accent px-4 py-1.5 rounded text-xs tracking-widest uppercase transition-all duration-300 text-brand-accent hover:bg-brand-accent/10"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="flex items-center">
              BNV Consulting
              <span className="text-[9px] font-sans font-bold text-brand-accent bg-brand-accent/15 px-1 py-0.5 rounded ml-1.5 tracking-normal">BETA</span>
            </span>
          </a>
        </div>

        {/* Bouton Menu Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-brand-ivory hover:text-brand-accent focus:outline-none"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile Déroulant */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-slate/95 backdrop-blur-lg border-b border-white/5 px-6 py-8 flex flex-col space-y-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-sans text-sm tracking-widest text-brand-ivory/90 hover:text-brand-accent uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://bnv-consulting.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 border border-brand-accent py-2.5 rounded text-xs tracking-widest uppercase text-brand-accent"
          >
            <Globe className="w-4 h-4" />
            <span className="flex items-center">
              BNV Consulting
              <span className="text-[9px] font-sans font-bold text-brand-accent bg-brand-accent/15 px-1 py-0.5 rounded ml-1.5 tracking-normal">BETA</span>
            </span>
          </a>
        </div>
      )}
    </nav>
  );
}