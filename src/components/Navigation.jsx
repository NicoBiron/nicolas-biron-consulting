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
        {/* Logo / Monogramme */}
        <a href="#" className="flex items-center space-x-2">
          <span className="font-serif text-lg md:text-xl tracking-wider text-brand-ivory font-semibold">
            NICOLAS BIRON
          </span>
          <span className="h-4 w-[1px] bg-brand-accent/50 hidden md:block" />
          <span className="text-xs tracking-widest text-brand-accent uppercase font-sans hidden md:block">
            Consulting Vitivinicole
          </span>
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