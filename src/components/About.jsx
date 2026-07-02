import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, TrendingUp, Wine } from 'lucide-react';

export default function About() {
  const expertises = [
    {
      icon: <Sprout className="w-6 h-6 text-brand-accent" />,
      title: "Agronomie de Précision",
      description: "Optimisation de la conduite du vignoble par la refonte complète de la carte des sols, le suivi micro-climatique (des sondes locales aux modèles à maille large) et l'intégration de technologies d'imagerie et capteurs pour alimenter une stratégie de pilotage pragmatisée."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-accent" />,
      title: "Finance & Stratégie Viticole",
      description: "A la recherche du levier opérationnel : étude approfondie des coûts de revient, modélisation de la rentabilité et accompagnement à la décision stratégique pour sécuriser vos équilibres."
    },
    {
      icon: <Wine className="w-6 h-6 text-brand-accent" />,
      title: "Science Œnologique & Consommation des vins",
      description: "Explorer les différentes pistes de solutions pour vendre la production dans un contexte défavorable. Valorisation maximale du potentiel de chaque parcelle pour guider les choix de vinification en parfaite adéquation avec les attentes des marchés."
    }
  ];

  return (
    <section id="approche" className="py-24 md:py-32 bg-brand-slate border-t border-white/5 relative overflow-hidden">
      
      {/* IMAGE DE FOND : Les grappes de raisin en filigrane sombre (15% d'opacité) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=2000"
          alt="Texture de grappes de raisin en fond"
          className="w-full h-full object-cover opacity-15 filter saturate-[0.8]"
        />
        {/* Dégradés sombres pour une lisibilité parfaite du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-slate/40 via-brand-slate/90 to-brand-slate" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#121614_95%)]" />
      </div>
      
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
          
          {/* Colonne Gauche : Philosophie & Biographie */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="font-serif text-lg md:text-xl text-brand-ivory/90 leading-relaxed italic border-l-2 border-brand-accent/50 pl-6">
                "Pour qu’un grand terroir traverse la crise, le domaine doit d'abord respirer financièrement. L'excellence commence au creux du cep, se révèle dans le secret du chai, et se sécurise dans la rigueur des comptes."
              </p>
              <p className="font-sans text-sm md:text-base text-brand-ivory/60 leading-relaxed">
                <strong>Ingénieur agronome et œnologue (DNO)</strong>, je conseille les propriétés et les investisseurs dans la transformation technique et économique de leurs exploitations. Fort de dix ans d'expérience de terrain sur des postes de direction technique et d’encadrement au sein de quatre structures aux terroirs et problématiques radicalement différents, j'allie l'agilité opérationnelle à la hauteur de vue du pilotage stratégique. 
              </p>
              <p className="font-sans text-sm md:text-base text-brand-ivory/60 leading-relaxed">
                Mon travail consiste à unifier l'observation agronomique méticuleuse, l'exigence de la vinification au chai et la rigueur des modèles financiers. C'est en croisant cette réalité de terrain et cette vision macro-économique que nous pérennisons et valorisons vos actifs viticoles face aux défis climatiques et financiers actuels. 
              </p>
            </motion.div>
          </div>

          {/* Colonne Droite : Les 3 Piliers d'Expertise */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-6">
            {expertises.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-brand-slatelight/40 backdrop-blur-sm border border-white/5 p-8 rounded hover:border-brand-accent/30 transition-all duration-300 group"
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