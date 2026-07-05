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

        {/* Titre principal corrigé pour les grands écrans (lg:text-7xl) */}
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
          L'alliance de l'agro-météorologie, de l'expertise oenologique et de l'optimisation financière au service de vos terroirs.
        </motion.p>

        {/* Double boutons d'actions empilés verticalement et espacés */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col items-center space-y-6"
        >
          {/* Bouton Principal : Découvrir mon approche */}
          <a
            href="#approche"
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden border border-brand-accent/50 rounded transition-all duration-300 hover:border-brand-accent bg-transparent"
          >
            <span className="absolute inset-0 w-full h-full bg-brand-green/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <span className="relative font-sans text-xs tracking-[0.2em] uppercase text-brand-ivory group-hover:text-brand-accent transition-colors duration-300">
              Découvrir mon approche
            </span>
          </a>

          {/* Bouton Secondaire : Appel à l'Agent IA (Nouveau) */}
          <a
            href="#assistant-ia"
            className="group flex items-center space-x-2 text-[10px] tracking-[0.25em] uppercase text-brand-accent hover:text-brand-ivory transition-colors duration-300 py-1"
          >
            {/* Petite icône d'étincelles/innovation */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12">
              <path d="M12 2a10 10 0 0 1 7.54 16.59c-.44.5-.63 1.15-.54 1.81l.3 2.14a1 1 0 0 1-1.45 1.05l-1.92-1c-.59-.3-1.28-.31-1.87-.03A10 10 0 0 1 12 22 10 10 0 0 1 12 2Z"/>
            </svg>
            <span className="border-b border-brand-accent/30 group-hover:border-brand-ivory transition-colors pb-0.5">
              Tester mon jumeau numérique IA
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