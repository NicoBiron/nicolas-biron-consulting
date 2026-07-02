import React from 'react';

export default function Methodology() {
  const steps = [
    {
      num: "01",
      title: "Diagnostic & Immersion",
      desc: "Audit physique de l'exploitation : analyse intra-parcellaire des terroirs et du matériel végétal, intégration des produits et analyse historique de la structure financière."
    },
    {
      num: "02",
      title: "Analyse Technique & Data",
      desc: "Etude des données existantes, modélisation des données micro-climatiques, cartographie de précision (vigueur/stress hydrique) et calcul chirurgical des coûts de revient réels."
    },
    {
      num: "03",
      title: "Stratégie globale & Arbitrage",
      desc: "Élaboration d'un plan d'action globale : adaptation du vignoble sur mesure, potentialisation des cuvées, restructuration budgétaire et projection de scénarios financiers de crise."
    },
    {
      num: "04",
      title: "Accompagnement Continu",
      desc: "Aide au pilotage opérationnel à la vigne et au chai (conseil viti, dégustation), arbitrages en temps réel lors des épisodes météorologiques extrêmes et accès personnalisé à la plateforme d'aide à la décision."
    }
  ];

  return (
    <section id="methode" className="py-24 md:py-32 bg-brand-slate border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Titre de section */}
        <div className="mb-16 md:mb-24">
          <span className="text-brand-accent font-sans text-xs tracking-[0.25em] uppercase block mb-3">
            Ma Méthodologie
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-ivory font-semibold max-w-2xl leading-tight">
            De la vigne au bilan comptable : quatre étapes vers la résilience.
          </h2>
        </div>

        {/* Grille des Étapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-brand-slatelight/20 border border-white/5 p-8 rounded-lg min-h-[260px] hover:border-brand-accent/20 transition-all duration-300 group"
            >
              {/* Grand Numéro aligné en haut */}
              <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-accent/20 group-hover:text-brand-accent/40 transition-colors duration-300 block mb-4">
                {step.num}
              </span>

              {/* Titre & Description stackés naturellement juste sous le numéro */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl text-brand-ivory font-medium group-hover:text-brand-accent transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-brand-ivory/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Ligne décorative en bas */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-accent/50 group-hover:w-full transition-all duration-300 rounded-b-lg" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}