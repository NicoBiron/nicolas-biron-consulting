import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Problems from './components/Problems';
import Methodology from './components/Methodology';
import Services from './components/Services';
import AIAgent from './components/AIAgent'; // 1. Nouvelle importation de l'Agent IA
import Confidentiality from './components/Confidentiality';
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

        {/* 4. Section Méthodologie */}
        <Methodology />

        {/* 5. Section Prestations & Outils */}
        <Services />

        {/* 6. Section Agent IA (Nouveau - Pile sous les services) */}
        <AIAgent />

        {/* 7. Section Confidentialité */}
        <Confidentiality />

        {/* 8. Section Contact & Pied de page */}
        <Contact />
      </main>
    </div>
  );
}