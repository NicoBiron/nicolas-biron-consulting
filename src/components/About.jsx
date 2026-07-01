import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, TrendingUp, Wine } from 'lucide-react';

export default function About() {
  const expertises = [
    {
      icon: <Sprout className="w-6 h-6 text-brand-accent" />,
      title: "Agronomie de Précision",
      description: "Optimisation de la conduite du vignoble par l'analyse des sols, le suivi micro-climatique et l'intégration de technologies d'imagerie et de capteurs."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-accent" />,
      title: "Finance & Stratégie Viticole",
      description: "Analyse fine des coûts de revient, planification financière stratégique et pilotage de la rentabilité opérationnelle des structures vitivinicoles."
    },
    {
      icon: <Wine className="w-6 h-6 text-brand-accent" />,
      title: "Science Œnologique",
      description: "Valorisation maximale du potentiel de chaque parcelle pour guider les choix de vinification en parfaite adéquation avec les attentes des marchés haut de gamme."
    }
  ];

  return (
    <section id="approche" className="py-24 md:py-32 bg-brand-slate border-t border-white/5 relative overflow-hidden">
      {/* Fond texturé discret en arrière-plan */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full filter blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Titre de section */}
        <div className="mb-16 md:mb-24">
          <span className="text-brand-accent font-sans text-xs tracking-[0.25em] uppercase block mb-3">
            Expertise Transversale
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-ivory font-semibold max-w-2xl leading-tight">
            Une approche globale pour des terroirs d'exception.
          </h2>
        </div>

        {/* Grille de contenu */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Colonne Gauche : Philosophie / Manifeste */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="font-serif text-lg md:text-xl text-brand-ivory/90 leading-relaxed italic border-l-2 border-brand-accent/50 pl-6">
              "La viticulture moderne impose de briser les silos entre la terre, la cave et les équilibres financiers."
            </p>
            <p className="font-sans text-sm md:text-base text-brand-ivory/60 leading-relaxed space-y-4">
              En tant que consultant indépendant, j'accompagne les domaines et les investisseurs dans la transformation technique et économique de leurs exploitations. 
            </p>
            <p className="font-sans text-sm md:text-base text-brand-ivory/60 leading-relaxed">
              Mon travail consiste à unifier l'observation agronomique rigoureuse, l'utilisation de données de précision et la maîtrise des modèles financiers pour pérenniser et valoriser vos actifs viticoles face aux défis climatiques et économiques actuels.
            </p>
          </motion.div>

          {/* Colonne Droite : Les 3 Piliers d'Expertise */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-6">
            {expertises.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-brand-slatelight/40 border border-white/5 p-8 rounded hover:border-brand-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-5">
                  <div className="p-3 bg-brand-slate rounded border border-white/10 group-hover:border-brand-accent/20 group-hover:bg-brand-green/10 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg md:text-xl text-brand-ivory font-medium group-hover:text-brand-accent transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-brand-ivory/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}