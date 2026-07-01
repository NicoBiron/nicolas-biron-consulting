import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Problems from './components/Problems';
import Services from './components/Services';
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

        {/* 4. Section Prestations & Outils */}
        <Services />

        {/* 5. Section Contact & Pied de page */}
        <Contact />
      </main>
    </div>
  );
}