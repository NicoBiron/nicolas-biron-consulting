import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HelpCircle, ArrowRight, Layers, Compass, BarChart3 } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Compass className="w-6 h-6 text-brand-accent" />,
      title: "Pilotage Agro-Technique & Précision",
      subtitle: "Sécuriser la vigne par la donnée",
      description: "Refonte de la stratégie viticole de précision : mise en place de capteurs connectés et outils de modélisation pour surveiller vos parcelles en temps réel. Aide à la décision opérationnelle pour faire face au gel, à la sécheresse et optimiser les temps passés/consommables.",
      deliverables: ["Carte pédologique et thermique intra-parcellaire", "Sondes capacitives & suivi hydrique", "Pragmatisation des itinéraires viti en intra-parcellaire"]
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-brand-accent" />,
      title: "Stratégie Financière de Crise",
      subtitle: "Restaurer la rentabilité",
      description: "Analyse chirurgicale des coûts de revient par bouteille et par parcelle pour identifier les leviers d'économies immédiats. Aide à la restructuration financière et audit stratégique d'investissement pour pérenniser l'exploitation et son retour sur investissement.",
      deliverables: ["Calcul des coûts de revient réels parcellaires", "Scénarios budgétaires à 3 et 5 ans", "Audit et dossier de restructuration"]
    },
    {
      icon: <Layers className="w-6 h-6 text-brand-accent" />,
      title: "Accompagnement Transition & Valeur",
      subtitle: "Valoriser l'impact environnemental",
      description: "Conseil en encépagement d'avenir face au réchauffement climatique. Structuration d'une démarche de décarbonation et d'intégration environnementale. Valorisation de vos engagements auprès des réseaux de distribution.",
      deliverables: ["Plan de restructuration du vignoble", "Elaboration de nouvelles cuvées", "Valorisation marketing du terroir"]
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-brand-slate relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-brand-accent font-sans text-xs tracking-[0.25em] uppercase block mb-3">
            Mes Prestations
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-ivory font-semibold leading-tight">
            Des solutions concrètes pour piloter votre domaine.
          </h2>
          <p className="font-sans text-sm md:text-base text-brand-ivory/60 mt-4 leading-relaxed">
            Chaque mission est construite sur mesure pour s'adapter à la taille de votre structure et à la réalité de votre terroir, avec une exigence de retour sur investissement rapide.
          </p>
        </div>

        {/* Grille des Prestations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-slatelight/30 border border-white/5 p-8 rounded-lg flex flex-col justify-between hover:border-brand-accent/20 transition-all duration-300 group"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-brand-slate rounded border border-white/10 flex items-center justify-center group-hover:border-brand-accent/30 group-hover:bg-brand-green/10 transition-all duration-300">
                  {service.icon}
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] tracking-widest text-brand-accent uppercase font-sans font-medium">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif text-xl text-brand-ivory font-medium">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-brand-ivory/60 leading-relaxed pt-2">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Livrables inclus */}
              <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                <span className="text-[10px] uppercase tracking-wider text-brand-ivory/40 font-sans block">
                  Exemples d'interventions :
                </span>
                <ul className="space-y-2">
                  {service.deliverables.map((item, dIndex) => (
                    <li key={dIndex} className="flex items-center space-x-2 text-xs text-brand-ivory/80 font-sans font-light">
                      <span className="w-1.5 h-1.5 bg-brand-accent/60 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bloc CTA de redirection externe */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-slatelight/20 border border-brand-accent/20 rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Ornement lumineux arrière plan */}
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-brand-green/10 rounded-full filter blur-[80px] pointer-events-none" />

          <span className="inline-flex items-center px-2.5 py-1 rounded bg-brand-accent/10 border border-brand-accent/30 text-[10px] tracking-widest text-brand-accent uppercase font-sans font-semibold mb-4">
            Plateforme  BNV Consulting
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-brand-ivory font-semibold mb-4 leading-tight">
            Accéder au descriptif des services de viticulture de précision, de mes outils & ressources partagés
          </h3>
          <p className="font-sans text-xs md:text-sm text-brand-ivory/60 max-w-2xl mx-auto mb-8 leading-relaxed">
            Pour mes clients partenaires, une plateforme dédiée est en cours de développement regroupant notre outil de pilotage financier, nos solutions de viticulture de précision et ma banque de prompts IA spécialisés.
          </p>
          
          <a
            href="https://bnv-consulting.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center space-x-3 bg-brand-accent text-brand-slate hover:bg-brand-ivory font-sans font-semibold text-xs tracking-widest uppercase px-8 py-4 rounded transition-all duration-300 shadow-md hover:shadow-brand-accent/10"
          >
            <span>Explorer la plateforme</span>
            <span className="text-[10px] font-sans font-bold bg-brand-slate/10 px-1 py-0.5 rounded tracking-normal">BETA</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}