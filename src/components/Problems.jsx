import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CloudLightning, Coins, Leaf, Brain, TrendingDown } from 'lucide-react';

export default function Problems() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 1,
      icon: <TrendingDown className="w-5 h-5 text-brand-accent" />,
      title: "Crise de la Demande & Stratégie Valeur",
      tagline: "Sortir de la guerre des volumes par le marketing d'impact.",
      reality: "La déconsommation structurelle (notamment sur le rouge) et la saturation des marchés exports traditionnels étranglent les exploitations de milieu de gamme. Bordeaux subit de plein fouet cette perte de vitesse.",
      solution: "J'accompagne les domaines dans le repositionnement stratégique : valorisation environnementale objective, transition vers des profils de vins plus agiles, et structuration d'une offre axée sur la rareté et l'impact carbone certifié pour capter de la valeur."
    },
    {
      id: 2,
      icon: <CloudLightning className="w-5 h-5 text-brand-accent" />,
      title: "Choc Climatique & Urgence Agronomique",
      tagline: "Sécuriser le rendement face à l'imprévisibilité du ciel.",
      reality: "En 2026, les gels tardifs, les grêles et le stress hydrique ne sont plus des exceptions. La gestion de l'eau et des contraintes réglementaires sur l'irrigation met en péril les vignobles les plus fragiles.",
      solution: "Déploiement d'outils d'aide à la décision (OAD) agrométéorologiques. Analyse thermique par capteurs, pose de sondes capacitives pour piloter le stress hydrique au plus juste et préconisations de tailles tardives pour esquiver les gels."
    },
    {
      id: 3,
      icon: <Coins className="w-5 h-5 text-brand-accent" />,
      title: "Pression Financière & Coûts de Revient",
      tagline: "Briser l'effet de ciseaux pour préserver les marges.",
      reality: "L'inflation des intrants (matières sèches, énergie, verre) cumulée à un foncier historiquement surévalué asphyxie les trésoreries. L'endettement bloque la transmission ou la restructuration.",
      solution: "Audits de rentabilité analytique fine. Je calcule vos coûts de revient réels par parcelle et par bouteille. Nous mettons en place des plans d'optimisation financière prédictifs et vous accompagnons dans la restructuration de dette."
    },
    {
      id: 4,
      icon: <Leaf className="w-5 h-5 text-brand-accent" />,
      title: "Transition Écologique & Matériel Végétal",
      tagline: "Anticiper l'encépagement et décarboner les process.",
      reality: "La réduction drastique des intrants chimiques et l'exigence d'allègement du bilan carbone (poids du verre, logistique) sont incontournables. Mais adapter son matériel végétal s'inscrit sur un temps long.",
      solution: "Planification stratégique de l'encépagement de demain (sélection massale, étude de cépages hybrides résistants ou de porte-greffes tardifs). Mesure et réduction de l'empreinte carbone globale pour répondre aux exigences des acheteurs internationaux."
    },
    {
      id: 5,
      icon: <Brain className="w-5 h-5 text-brand-accent" />,
      title: "IA, Transmission & Mutation Sociale",
      tagline: "Compenser le manque de main-d'œuvre par la tech.",
      reality: "La déprise agricole, l'arrachage de vignes en friche et les difficultés critiques de recrutement menacent la transmission des domaines familiaux. Les vignerons sont débordés par la charge administrative.",
      solution: "J'intègre la viticulture de précision et l'IA générative dans vos processus. Je mets à disposition ma banque de prompts dédiée aux vignerons pour automatiser l'administratif, le suivi réglementaire, et libérer du temps pour les choix de terrain."
    }
  ];

  return (
    <section id="problematiques" className="py-24 md:py-32 bg-brand-slatelight/20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Structure en Grille à 2 Colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Colonne Gauche : Le Constat Macro 2026 (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <span className="text-brand-accent font-sans text-xs tracking-[0.25em] uppercase block">
              Le Contexte 2026
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-ivory font-semibold leading-tight">
              Un vignoble en pleine mutation structurelle.
            </h2>
            <p className="font-sans text-sm md:text-base text-brand-ivory/60 leading-relaxed">
              La filière vitivinicole traverse une convergence de crises sans précédent. Si le segment du très grand luxe maintient ses positions, le cœur de production historique doit impérativement se réinventer.
            </p>
            <div className="p-6 bg-brand-slate/50 border border-brand-accent/20 rounded-md">
              <p className="font-sans text-xs md:text-sm text-brand-accent font-medium leading-relaxed">
                "La clé de l'adaptation en 2026 repose sur deux piliers : la rigueur de la donnée technique pour sécuriser la terre, et le pilotage analytique pour sécuriser la finance."
              </p>
              <span className="block text-[10px] uppercase tracking-wider text-brand-ivory/40 mt-3 font-sans">
                — Nicolas Biron
              </span>
            </div>
          </div>

          {/* Colonne Droite : L'accordéon interactif */}
          <div className="lg:col-span-7 space-y-4">
            {cards.map((card, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={card.id}
                  className={`border transition-all duration-300 rounded ${
                    isOpen 
                      ? 'bg-brand-slatelight border-brand-accent/40 shadow-lg shadow-brand-green/5' 
                      : 'bg-brand-slate/40 border-white/5 hover:border-white/10'
                  }`}
                >
                  {/* En-tête cliquable */}
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 md:py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center space-x-4 pr-4">
                      <div className={`p-2.5 rounded transition-colors duration-300 ${
                        isOpen ? 'bg-brand-green/20 border border-brand-accent/30' : 'bg-brand-slatelight/50 border border-white/5'
                      }`}>
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="font-serif text-base md:text-lg text-brand-ivory font-medium">
                          {card.title}
                        </h3>
                        <p className="font-sans text-xs text-brand-ivory/40 hidden md:block mt-0.5">
                          {card.tagline}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-brand-accent/60"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </button>

                  {/* Contenu expansible */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 md:pb-8 border-t border-white/5 pt-4 space-y-4">
                          {/* Le Constat de Crise */}
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-red-400/80 font-sans block mb-1">
                              Le Diagnostic Clinique 2026
                            </span>
                            <p className="font-sans text-xs md:text-sm text-brand-ivory/70 leading-relaxed">
                              {card.reality}
                            </p>
                          </div>

                          {/* La Solution Apportée */}
                          <div className="p-4 bg-brand-slate/40 border-l-2 border-brand-accent rounded-r">
                            <span className="text-[10px] uppercase tracking-widest text-brand-accent font-sans block mb-1">
                              Le Levier Nicolas Biron
                            </span>
                            <p className="font-sans text-xs md:text-sm text-brand-ivory/90 leading-relaxed font-light">
                              {card.solution}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}