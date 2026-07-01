import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-slate">
      {/* Image de fond avec superposition (Overlay) sombre et dégradés */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=2000"
          alt="Vignoble de précision sous une lumière rasante"
          className="w-full h-full object-cover opacity-35 scale-105 filter saturate-[0.8] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-slate/40 via-brand-slate/80 to-brand-slate" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#121614_95%)]" />
      </div>

      {/* Contenu textuel principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Nom agrandi et plus présent */}
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-brand-accent font-sans text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.5em] uppercase mb-6"
        >
          Nicolas Biron
        </motion.span>

        {/* Titre principal corrigé pour les grands écrans (lg:text-8xl) */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-7xl text-brand-ivory font-semibold tracking-wide leading-tight max-w-4xl"
        >
          Consulting Vitivinicole
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-[1px] w-24 bg-brand-accent/60 my-6 md:my-8"
        />

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-sm md:text-base lg:text-lg text-brand-ivory/70 max-w-2xl font-light tracking-wide leading-relaxed"
        >
          L'alliance de l'agro-climatologie, de l'expertise oenologique et de l'optimisation financière au service de vos terroirs.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <a
            href="#approche"
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden border border-brand-accent/50 rounded transition-all duration-300 hover:border-brand-accent bg-transparent"
          >
            <span className="absolute inset-0 w-full h-full bg-brand-green/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <span className="relative font-sans text-xs tracking-[0.2em] uppercase text-brand-ivory group-hover:text-brand-accent transition-colors duration-300">
              Découvrir mon approche
            </span>
          </a>
        </motion.div>
      </div>

      {/* Flèche de défilement vers le bas animée */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center cursor-pointer"
        onClick={() => document.getElementById('approche')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] tracking-widest text-brand-ivory/40 uppercase mb-2">Défiler</span>
        <ChevronDown className="w-5 h-5 text-brand-accent/60" />
      </motion.div>
    </section>
  );
}