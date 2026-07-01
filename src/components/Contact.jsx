import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-slate border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Colonne Gauche : Coordonnées */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-brand-accent font-sans text-xs tracking-[0.25em] uppercase block">
                Contact & Échanges
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-brand-ivory font-semibold leading-tight">
                Discutons de votre projet.
              </h2>
              <p className="font-sans text-sm md:text-base text-brand-ivory/60 leading-relaxed">
                N'hésitez pas à me contacter pour un premier échange, un audit rapide de vos besoins ou pour toute question sur mes méthodologies d'accompagnement.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-white/5">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-brand-slatelight rounded border border-white/5 text-brand-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-brand-ivory/40 font-sans">Email</span>
                  <a href="mailto:contact@bnv-consulting.com" className="font-sans text-sm text-brand-ivory hover:text-brand-accent transition-colors duration-200">
                    contact@bnv-consulting.com
                  </a>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-brand-slatelight rounded border border-white/5 text-brand-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-brand-ivory/40 font-sans">Téléphone</span>
                  <a href="tel:+33600000000" className="font-sans text-sm text-brand-ivory hover:text-brand-accent transition-colors duration-200">
                    +33 (0)6 00 00 00 00
                  </a>
                </div>
              </div>

              {/* Localisation */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-brand-slatelight rounded border border-white/5 text-brand-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-brand-ivory/40 font-sans">Localisation</span>
                  <span className="font-sans text-sm text-brand-ivory">
                    Bordeaux & Sud-Ouest, France
                  </span>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="pt-6 border-t border-white/5 space-y-3">
              <span className="block text-[10px] uppercase tracking-wider text-brand-ivory/40 font-sans">Réseaux professionnels</span>
              <a 
                href="https://linkedin.com"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-brand-accent hover:text-brand-ivory transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <span>Suivre sur LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Colonne Droite : Formulaire */}
          <div className="lg:col-span-7 bg-brand-slatelight/20 border border-white/5 p-8 md:p-12 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest text-brand-ivory/40 font-sans">
                  Votre nom complet
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Jean Dupont"
                  className="w-full bg-transparent border-b border-white/10 focus:border-brand-accent focus:outline-none py-3 text-sm transition-colors duration-300 placeholder:text-brand-ivory/20"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest text-brand-ivory/40 font-sans">
                  Votre adresse email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="jean.dupont@domaine.com"
                  className="w-full bg-transparent border-b border-white/10 focus:border-brand-accent focus:outline-none py-3 text-sm transition-colors duration-300 placeholder:text-brand-ivory/20"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest text-brand-ivory/40 font-sans">
                  Votre message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Décrivez brièvement vos enjeux..."
                  className="w-full bg-transparent border-b border-white/10 focus:border-brand-accent focus:outline-none py-3 text-sm transition-colors duration-300 placeholder:text-brand-ivory/20 resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full inline-flex items-center justify-center space-x-3 bg-brand-green hover:bg-brand-greenlight text-brand-ivory font-sans font-semibold text-xs tracking-widest uppercase px-6 py-4 rounded transition-all duration-300 focus:outline-none cursor-pointer"
                >
                  {isSubmitted ? (
                    <span className="text-brand-accent">Message envoyé avec succès</span>
                  ) : (
                    <>
                      <span>Envoyer la demande</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>

        {/* Pied de page textuel épuré */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-brand-ivory/40 font-sans font-light gap-6">
          <p>© {new Date().getFullYear()} Nicolas Biron. Tous droits réservés.</p>
          <div className="flex space-x-6">
            <span className="hover:text-brand-accent transition-colors cursor-pointer">Mentions Légales</span>
            <span className="hover:text-brand-accent transition-colors cursor-pointer">Politique de Confidentialité</span>
          </div>
        </div>

      </div>
    </section>
  );
}