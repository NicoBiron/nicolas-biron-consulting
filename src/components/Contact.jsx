import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // État pour basculer entre le Formulaire et Calendly
  const [activeTab, setActiveTab] = useState('form'); // 'form' ou 'calendly'

  // États pour contrôler l'affichage des deux modales de pied de page
  const [showLegal, setShowLegal] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Clé Web3Forms officielle configurée pour nicolas.biron.pro@gmail.com
    const accessKey = "c8a57edc-d6d4-4d6b-8557-ac01482ae1d0"; 

    // Envoi réel vers l'API Web3Forms
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: "Nouveau message - Nicolas Biron Consulting"
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur de soumission :", error);
      alert("Une erreur réseau est survenue. Veuillez vérifier votre connexion.");
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-slate border-t border-white/5 relative overflow-hidden">
      
      {/* IMAGE DE FOND PERSONNALISÉE (contact.jpg - Opacité 15%) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/Images/contact.jpg"
          alt="Atmosphère de chai ou de vignoble en arrière-plan"
          className="w-full h-full object-cover opacity-15"
        />
        {/* Dégradés d'ambiance sombres */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-slate/40 via-brand-slate/90 to-brand-slate" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#121614_95%)]" />
      </div>

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
                    nicolas.biron.pro@gmail.com
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
                href="https://www.linkedin.com/in/nicolas-biron-ba15b612b"
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

          {/* Colonne Droite : Sélecteur d'Onglets + Formulaire / Calendly */}
          <div className="lg:col-span-7 bg-brand-slatelight/20 backdrop-blur-sm border border-white/5 p-8 md:p-12 rounded-xl">
            
            {/* Boutons de sélection d'onglets épurés */}
            <div className="flex border border-white/10 rounded-lg p-1 bg-brand-slate/50 mb-8 max-w-xs mx-auto">
              <button 
                type="button"
                onClick={() => setActiveTab('form')}
                className={`flex-1 text-center py-2 text-[10px] tracking-widest uppercase rounded-md font-sans transition-all duration-300 ${
                  activeTab === 'form' 
                    ? 'bg-brand-accent text-brand-slate font-semibold' 
                    : 'text-brand-ivory/60 hover:text-brand-ivory'
                }`}
              >
                Formulaire
              </button>
              <button 
                type="button"
                onClick={() => setActiveTab('calendly')}
                className={`flex-1 text-center py-2 text-[10px] tracking-widest uppercase rounded-md font-sans transition-all duration-300 ${
                  activeTab === 'calendly' 
                    ? 'bg-brand-accent text-brand-slate font-semibold' 
                    : 'text-brand-ivory/60 hover:text-brand-ivory'
                }`}
              >
                Prendre RDV
              </button>
            </div>

            {/* Affichage conditionnel selon l'onglet actif */}
            {activeTab === 'form' ? (
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
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center space-x-3 bg-brand-green hover:bg-brand-greenlight text-brand-ivory font-sans font-semibold text-xs tracking-widest uppercase px-6 py-4 rounded transition-all duration-300 focus:outline-none cursor-pointer"
                  >
                    {isSubmitted ? (
                      <span className="text-brand-accent font-semibold tracking-widest">Message envoyé avec succès</span>
                    ) : (
                      <span className="flex items-center space-x-2">
                        <span>{isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2">
                          <line x1="22" y1="2" x2="11" y2="13"/>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Widget Calendly Intégré (Iframe épurée) */
              <div className="w-full h-[450px] rounded-lg overflow-hidden border border-white/10 bg-brand-slate/40 relative">
                <iframe 
                  src="https://calendly.com/nicolas-biron-pro?embed_domain=nicolas-biron-consulting.vercel.app&embed_type=Inline"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Calendly Nicolas Biron"
                  className="w-full h-full"
                />
              </div>
            )}

          </div>

        </div>

        {/* Pied de page textuel avec Logo SVG direct et complet */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-brand-ivory/40 font-sans font-light gap-6">
          <div className="flex items-center space-x-3">
            
            {/* Logo SVG complet de signature (laiton tamisé) */}
            <svg 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-8 h-8 text-brand-accent/30"
            >
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.2" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.1" />
              <path d="M35 68 V32 L50 54 V36 C50 28 65 28 65 41 C65 48.5 50 48.5 50 48.5 C50 48.5 67 48.5 67 58.5 C67 68 50 68 50 68" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M50 36 C53 23 61 22 66 26 C68.5 28 66 31.5 61 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M50 74 C48.5 74 47.5 75 47.5 76.2 C47.5 77.4 50 79.8 50 79.8 C50 79.8 52.5 77.4 52.5 76.2 C52.5 75 51.5 74 50 74 Z" fill="currentColor" fillOpacity="0.8" />
            </svg>

            <p>© {new Date().getFullYear()} Nicolas Biron. Tous droits réservés. Codé par un vigneron, pour les vignerons. </p>
          </div>
          <div className="flex space-x-6">
            <button onClick={() => setShowLegal(true)} className="hover:text-brand-accent transition-colors cursor-pointer bg-transparent border-none p-0 text-xs font-light text-brand-ivory/40">
              Mentions Légales
            </button>
            <button onClick={() => setShowPrivacy(true)} className="hover:text-brand-accent transition-colors cursor-pointer bg-transparent border-none p-0 text-xs font-light text-brand-ivory/40">
              Politique de Confidentialité
            </button>
          </div>
        </div>

      </div>

      {/* ================= MODALE MENTIONS LÉGALES ================= */}
      {showLegal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-slate/80 backdrop-blur-md">
          <div className="bg-[#1b211d] border border-white/10 p-6 md:p-8 rounded-xl max-w-2xl max-h-[80vh] overflow-y-auto relative shadow-2xl space-y-4">
            <button 
              onClick={() => setShowLegal(false)} 
              className="absolute top-4 right-4 text-brand-ivory/40 hover:text-brand-accent transition-colors p-2 text-lg font-bold"
            >
              ✕
            </button>
            <h3 className="font-serif text-2xl text-brand-accent font-semibold mb-2">Mentions Légales</h3>
            <div className="font-sans text-xs md:text-sm text-brand-ivory/70 leading-relaxed space-y-4">
              <p><strong>Éditeur du site :</strong><br />Nicolas Biron, Consultant indépendant.<br />Contact direct : <a href="mailto:nicolas.biron.pro@gmail.com" className="text-brand-accent underline">nicolas.biron.pro@gmail.com</a></p>
              <p><strong>Hébergeur :</strong><br />Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.<br />Site officiel : vercel.com</p>
              <p><strong>Propriété intellectuelle :</strong><br />L'ensemble des contenus présents sur ce site (textes, graphismes, logos, codes sources) is la propriété exclusive de Nicolas Biron, sauf mention contraire explicite. Toute reproduction partielle ou totale sans autorisation écrite préalable est strictement interdite.</p>
              <p><strong>Responsabilité :</strong><br />Les informations diffusées sur ce site sont fournies à titre indicatif. Nicolas Biron s'efforce de maintenir des données fiables mais ne saurait garantir l'exactitude absolue des conseils ou modélisations présentés, chaque domaine viticole ayant ses spécificités propres.</p>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODALE POLITIQUE DE CONFIDENTIALITÉ ================= */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-slate/80 backdrop-blur-md">
          <div className="bg-[#1b211d] border border-white/10 p-6 md:p-8 rounded-xl max-w-2xl max-h-[80vh] overflow-y-auto relative shadow-2xl space-y-4">
            <button 
              onClick={() => setShowPrivacy(false)} 
              className="absolute top-4 right-4 text-brand-ivory/40 hover:text-brand-accent transition-colors p-2 text-lg font-bold"
            >
              ✕
            </button>
            <h3 className="font-serif text-2xl text-brand-accent font-semibold mb-2">Politique de Confidentialité</h3>
            <div className="font-sans text-xs md:text-sm text-brand-ivory/70 leading-relaxed space-y-4">
              <p><strong>Responsable du traitement :</strong><br />Nicolas Biron est le seul responsable de la collecte et du traitement des données fournies sur ce site.</p>
              <p><strong>Données collectées :</strong><br />Nous collectons uniquement les données d'identification que vous nous transmettez volontairement via le formulaire de contact, à savoir : votre nom complet, votre adresse e-mail, et le contenu de votre message.</p>
              <p><strong>Finalité de la collecte :</strong><br />Ces données sont exclusivement traitées pour répondre à vos demandes d'informations, établir un premier contact commercial, ou élaborer des propositions de prestations d'accompagnement sur mesure.</p>
              <p><strong>Destinataires et partage :</strong><br />Vos informations personnelles ne sont **jamais** vendues, louées, cédées ou partagées avec des tiers à des fins de prospection ou de marketing commercial.</p>
              <p><strong>Durée de conservation :</strong><br />Les données issues des formulaires de contact sont conservées pour une durée maximale de 3 ans à compter du dernier échange.</p>
              <p><strong>Vos droits :</strong><br />Conformément au RGPD, vous disposez d'un droit d'accès, de modification, de portabilité ou de suppression de vos données personnelles. Pour exercer ce droit, écrivez simplement à l’adresse : <a href="mailto:nicolas.biron.pro@gmail.com" className="text-brand-accent underline">nicolas.biron.pro@gmail.com</a>.</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}