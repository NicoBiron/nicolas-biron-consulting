import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Problems from './components/Problems';
import Methodology from './components/Methodology'; // 1. Nouvelle importation
import Services from './components/Services';
import Confidentiality from './components/Confidentiality'; // 2. Nouvelle importation
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-slate text-brand-ivory">
      {/* Navigation supérieure sticky */}
      <Navigation />

      {/* Sections du site */}
      <main>
        {/* 1. Section Accueil */}
        <Hero />
        
        {/* 2. Section À Propos / Approche */}
        <About />

        {/* 3. Section Problématiques Interactives */}
        <Problems />

        {/* 4. Section Méthodologie (Nouveau) */}
        <Methodology />

        {/* 5. Section Prestations & Outils */}
        <Services />

        {/* 6. Section Confidentialité (Nouveau) */}
        <Confidentiality />

        {/* 7. Section Contact & Pied de page */}
        <Contact />
      </main>
    </div>
  );
}