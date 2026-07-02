import React from 'react';

export default function Confidentiality() {
  return (
    <section className="py-16 md:py-24 bg-brand-slatelight/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        
        {/* Cadre de luxe minimaliste */}
        <div className="border border-brand-accent/20 rounded-xl p-8 md:p-12 bg-brand-slate/50 relative">
          
          {/* Micro-ornement géométrique en haut au centre */}
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-4 bg-[#121614]">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-accent/40">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M35 68 V32 L50 54 V36 C50 28 65 28 65 41 C65 48.5 50 48.5 50 48.5 C50 48.5 67 48.5 67 58.5 C67 68 50 68 50 68" stroke="currentColor" strokeWidth="4" />
            </svg>
          </div>

          {/* Sceau de confidentialité */}
          <span className="text-[10px] tracking-[0.3em] text-brand-accent uppercase font-sans block mb-5">
            Sceau de Confidentialité
          </span>

          <p className="font-serif text-lg md:text-2xl text-brand-ivory leading-relaxed italic max-w-2xl mx-auto">
            "Par respect pour l'excellence et la réputation de mes partenaires, l'identité des domaines, des châteaux et des investisseurs accompagnés est préservée sous le sceau d'une confidentialité absolue."
          </p>
          
          <div className="h-[1px] w-12 bg-brand-accent/30 mx-auto mt-6" />
        </div>

      </div>
    </section>
  );
}