import React, { useState, useRef } from 'react';

export default function AIAgent() {
  // Configuration esthétique et textuelle de chaque agent (Nouveaux noms)
  const agentsConfig = {
    agro: {
      name: "VitiPilot",
      emoji: "🌿",
      colorClass: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
      dotColor: "bg-emerald-500",
      pingColor: "bg-emerald-400",
      placeholder: "Décrivez un trouble physiologique, un comportement anormal ou posez une question d'agronomie...",
      welcomeMessage: "Bonjour, je suis VitiPilot, votre assistant en agronomie générale, viticulture de précision, climatologie et pédologie. Vous pouvez me poser une question ou me téléverser la photo d'une feuille de vigne pour réaliser un pré-diagnostic agronomique."
    },
    oeno: {
      name: "OeNew",
      emoji: "🍷",
      colorClass: "text-red-400 border-red-500/20 bg-red-500/10",
      dotColor: "bg-red-500",
      pingColor: "bg-red-400",
      placeholder: "Parlez-moi de profils produits, d'assemblages innovants ou de positionnement marketing...",
      welcomeMessage: "Bonjour, je suis OeNew, votre copilote en création de nouveaux produits/cuvées et marketing innovant du vin. Je suis là pour vous aider à façonner des styles de vins différenciants et à valoriser votre production face aux nouvelles tendances de consommation."
    },
    business: {
      name: "OpTi",
      emoji: "💼",
      colorClass: "text-amber-400 border-amber-500/20 bg-amber-500/10",
      dotColor: "bg-amber-500",
      pingColor: "bg-amber-400",
      placeholder: "Saisissez vos charges, vos coûts de revient ou demandez des pistes d'optimisation financière...",
      welcomeMessage: "Bonjour, je suis OpTi, votre conseiller en modélisation financière et ROI de crise. Parlez-moi de vos coûts, investissements, de vos rendements ou de vos débouchés pour concevoir un plan d'action d'optimisation de vos marges."
    }
  };

  // État de l'onglet actif ('agro', 'oeno', ou 'business')
  const [activeAgent, setActiveAgent] = useState('agro');

  // Historique de discussion isolé pour chaque agent
  const [chatHistories, setChatHistories] = useState({
    agro: [{ role: 'assistant', text: agentsConfig.agro.welcomeMessage }],
    oeno: [{ role: 'assistant', text: agentsConfig.oeno.welcomeMessage }],
    business: [{ role: 'assistant', text: agentsConfig.business.welcomeMessage }]
  });

  const [inputText, setInputText] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSend = async (e) => {
    if (e) e.preventDefault();
    if (!inputText.trim() && !imageFile) return;

    const userMessage = { 
      role: 'user', 
      text: inputText, 
      image: imagePreview 
    };

    setChatHistories((prev) => ({
      ...prev,
      [activeAgent]: [...prev[activeAgent], userMessage]
    }));

    setInputText('');
    handleRemoveImage();
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.text,
          image: userMessage.image, // Envoi Base64
          agentType: activeAgent   // Indique au serveur quel prompt charger
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setChatHistories((prev) => ({
          ...prev,
          [activeAgent]: [...prev[activeAgent], { role: 'assistant', text: data.reply }]
        }));
      } else {
        setChatHistories((prev) => ({
          ...prev,
          [activeAgent]: [...prev[activeAgent], { role: 'assistant', text: "Désolé, je rencontre une petite difficulté à analyser votre demande. Veuillez vérifier la connexion." }]
        }));
      }
    } catch (error) {
      console.error("Erreur de chat :", error);
      setChatHistories((prev) => ({
        ...prev,
        [activeAgent]: [...prev[activeAgent], { role: 'assistant', text: "Erreur réseau : impossible de joindre le serveur d'analyse." }]
      }));
    }
    setLoading(false);
  };

  const currentAgent = agentsConfig[activeAgent];
  const currentMessages = chatHistories[activeAgent];

  // Déclenche la fonction d'impression
  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="assistant-ia-wrapper">
      
      {/* 
        ================ INJECTION DES STYLES D'IMPRESSION CORRIGÉS ================
        Lors de l'impression, on masque physiquement tous les éléments de structure (nav, section, footer)
        pour réduire l'espace et on affiche uniquement la div de rapport #print-report
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          /* Masque physiquement tout le reste du site pour éviter les pages vides */
          nav, section, footer, header {
            display: none !important;
            height: 0 !important;
            overflow: hidden !important;
          }
          
          /* Réinitialise la page pour l'impression A4 */
          html, body {
            background-color: #ffffff !important;
            color: #121614 !important;
            overflow: visible !important;
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
          }
          
          /* Affiche le rapport sur une seule page propre */
          #print-report {
            display: block !important;
            position: relative !important;
            visibility: visible !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 30px !important;
            background: #ffffff !important;
            color: #121614 !important;
          }
          
          #print-report * {
            visibility: visible !important;
            color: #121614 !important;
          }
        }
      `}} />

      {/* 
        SECTION VISUELLE (Masquée complètement à l'impression)
      */}
      <section id="assistant-ia" className="py-24 md:py-32 bg-brand-slate border-t border-white/5 relative overflow-hidden print:hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          {/* En-tête explicatif de la section */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-2.5 py-1 rounded bg-brand-accent/15 border border-brand-accent/30 text-[10px] tracking-widest text-brand-accent uppercase font-sans font-semibold mb-4">
              Suite Décisionnelle IA
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-ivory font-semibold mb-4 leading-tight">
              Interrogez mes jumeaux numériques.
            </h2>
            <p className="font-sans text-xs md:text-sm text-brand-ivory/60 max-w-2xl mx-auto leading-relaxed">
              Chacun de ces agents a été entraîné sur mes fiches de R&D, mes modèles de restructuration financière de crise et mes méthodologies d'ingénieur œnologue (DNO) pour vous apporter un premier niveau d'analyse instantané et adapté à vos enjeux.
            </p>
          </div>

          {/* Fenêtre de Chat principale */}
          <div className="bg-brand-slatelight/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[580px] relative">
            
            {/* SÉLECTEUR D'ONGLETS IA (VitiPilot, OeNew, OpTi) */}
            <div className="grid grid-cols-3 border-b border-white/10 bg-brand-slate/40 p-1">
              <button
                onClick={() => setActiveAgent('agro')}
                className={`py-3.5 text-center text-[10px] md:text-xs tracking-widest uppercase font-sans font-medium transition-all duration-300 cursor-pointer ${
                  activeAgent === 'agro' 
                    ? 'bg-brand-slatelight border border-white/10 rounded text-brand-accent font-semibold shadow-inner' 
                    : 'text-brand-ivory/50 hover:text-brand-ivory'
                }`}
              >
                🌿 VitiPilot
              </button>
              <button
                onClick={() => setActiveAgent('oeno')}
                className={`py-3.5 text-center text-[10px] md:text-xs tracking-widest uppercase font-sans font-medium transition-all duration-300 cursor-pointer ${
                  activeAgent === 'oeno' 
                    ? 'bg-brand-slatelight border border-white/10 rounded text-brand-accent font-semibold shadow-inner' 
                    : 'text-brand-ivory/50 hover:text-brand-ivory'
                }`}
              >
                🍷 OeNew
              </button>
              <button
                onClick={() => setActiveAgent('business')}
                className={`py-3.5 text-center text-[10px] md:text-xs tracking-widest uppercase font-sans font-medium transition-all duration-300 cursor-pointer ${
                  activeAgent === 'business' 
                    ? 'bg-brand-slatelight border border-white/10 rounded text-brand-accent font-semibold shadow-inner' 
                    : 'text-brand-ivory/50 hover:text-brand-ivory'
                }`}
              >
                💼 OpTi
              </button>
            </div>

            {/* En-tête de l'agent actif */}
            <div className="px-6 py-3 border-b border-white/5 bg-brand-slate/20 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${currentAgent.pingColor}`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${currentAgent.dotColor}`}></span>
                </span>
                <span className="font-sans text-[10px] md:text-xs uppercase tracking-wider text-brand-ivory/70">
                  {currentAgent.name} est en ligne (Juillet 2026)
                </span>
              </div>
              
              {/* BOUTON EXPORTER LE DIAGNOSTIC (PDF) */}
              <button
                onClick={handlePrint}
                className="flex items-center space-x-1.5 px-3 py-1 bg-brand-slate/40 border border-brand-accent/30 hover:border-brand-accent rounded text-[10px] uppercase tracking-wider text-brand-accent hover:text-brand-ivory transition-all duration-300 cursor-pointer"
                title="Exporter cette conversation au format PDF"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>Exporter PDF</span>
              </button>
            </div>
            
            {/* Liste des Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {currentMessages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className={`max-w-[85%] rounded-lg p-4 font-sans text-xs md:text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-accent text-brand-slate font-medium rounded-br-none' 
                      : 'bg-brand-slate/80 border border-white/5 text-brand-ivory/90 rounded-bl-none'
                  }`}>
                    {msg.image && (
                      <img 
                        src={msg.image} 
                        alt="Téléversement utilisateur" 
                        className="max-h-48 rounded mb-3 border border-white/10 object-contain"
                      />
                    )}
                    <p className="whitespace-pre-line">{msg.text}</p>
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-brand-ivory/30 mt-1.5 font-sans px-1">
                    {msg.role === 'user' ? 'Vous' : currentAgent.name}
                  </span>
                </div>
              ))}
              
              {loading && (
                <div className="flex flex-col items-start">
                  <div className="bg-brand-slate/80 border border-white/5 rounded-lg rounded-bl-none p-4 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce" />
                  </div>
                </div>
              )}
            </div>

            {/* Bandeau de limitation d'utilisation */}
            <div className="px-6 py-2.5 bg-brand-accent/5 border-t border-b border-white/5 text-[9px] md:text-[11px] text-brand-accent/90 font-sans flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 font-light">
                <span className="font-bold uppercase tracking-wider text-[8px] bg-brand-accent/15 px-1 py-0.5 rounded">Version gratuite</span>
                Pour coupler l'IA avec vos propres données du NDVI jusqu'au bilan comptable en passant par toutes les données parcellaires de votre vignoble, contactez-moi pour avoir des résultats haute-couture.
              </span>
              <a href="#contact" className="underline font-semibold hover:text-brand-ivory transition-colors whitespace-nowrap self-end md:self-auto">Collaborer →</a>
            </div>

            {/* Zone de saisie + boutons */}
            <div className="p-4 bg-brand-slate/50 space-y-3 relative z-10">
              
              {imagePreview && (
                <div className="relative inline-block">
                  <img src={imagePreview} alt="Aperçu avant envoi" className="h-16 w-16 object-cover rounded border border-brand-accent/40" />
                  <button 
                    type="button" 
                    onClick={handleRemoveImage}
                    className="absolute -top-1.5 -right-1.5 bg-red-500 text-white rounded-full w-4.5 h-4.5 flex items-center justify-center text-[10px] font-bold"
                  >
                    ✕
                  </button>
                </div>
              )}

              <div className="flex items-center space-x-3">
                {/* Bouton d'upload d'image */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="p-3 bg-brand-slate rounded-lg border border-white/10 hover:border-brand-accent/50 text-brand-accent hover:text-brand-ivory transition-colors cursor-pointer"
                  title="Ajouter une photo de vigne ou de document"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                    <circle cx="12" cy="13" r="3"/>
                  </svg>
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageChange} 
                  accept="image/*" 
                  className="hidden" 
                />

                {/* Champ d'écriture de type TEXTAREA responsif au retour à la ligne */}
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend(e);
                    }
                  }}
                  placeholder={currentAgent.placeholder}
                  rows={1}
                  className="flex-1 bg-brand-slate border border-white/10 rounded-lg px-4 py-3 text-xs md:text-sm focus:border-brand-accent focus:outline-none placeholder:text-brand-ivory/20 resize-none max-h-24 overflow-y-auto align-middle"
                />

                {/* Bouton Envoi */}
                <button
                  type="button"
                  onClick={handleSend}
                  className="p-3 bg-brand-green hover:bg-brand-greenlight text-brand-ivory rounded-lg transition-colors cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ================ BLOC DE RAPPORT ÉPURÉ POUR L'IMPRESSION (SÉPARÉ ET HORS <section>) ================
        Ce bloc est un div frère placé hors de la section et des structures sémantiques.
        Il s'affiche exclusivement à l'impression ('print:block') et tient sur une seule page A4 !
      */}
      <div id="print-report" className="hidden print:block p-12 bg-white text-[#121614] font-serif">
        {/* En-tête de la lettre officielle */}
        <div className="flex justify-between items-start border-b-2 border-[#121614] pb-6 mb-8">
          <div>
            <h1 className="text-2xl font-bold uppercase tracking-wider text-[#121614] mb-1">
              Nicolas Biron
            </h1>
            <p className="text-xs uppercase tracking-widest text-emerald-800 font-sans font-medium">
              Consulting Vitivinicole, Agronomie de Précision & Finance
            </p>
          </div>
          <div className="text-right font-sans text-xs text-gray-500">
            <p>Bordeaux, le {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <p className="text-[10px] uppercase tracking-widest mt-1 text-emerald-800 font-semibold">
              Rapport d'évaluation IA
            </p>
          </div>
        </div>

        {/* Détails techniques du rapport */}
        <div className="mb-8 font-sans text-xs bg-gray-50 border border-gray-100 rounded-lg p-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-400 uppercase tracking-widest text-[9px] mb-0.5">Agent Consulté :</p>
            <p className="font-semibold text-[#121614] font-serif text-sm">
              {currentAgent.emoji} {currentAgent.name}
            </p>
          </div>
          <div>
            <p className="text-gray-400 uppercase tracking-widest text-[9px] mb-0.5">Statut du diagnostic :</p>
            <p className="font-semibold text-emerald-800 uppercase tracking-wider text-[10px]">
              Pré-diagnostic préliminaire (Version d'évaluation)
            </p>
          </div>
        </div>

        {/* Corps du rapport (La discussion formatée proprement) */}
        <div className="space-y-6 mb-12">
          {currentMessages.map((msg, index) => (
            <div key={index} className="space-y-2 border-b border-gray-50 pb-4">
              <p className="font-sans text-[10px] uppercase tracking-widest font-bold text-gray-400">
                {msg.role === 'user' ? '► Votre question d\'analyse :' : `▼ Réponse de l'expert ${currentAgent.name} :`}
              </p>
              <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-line pl-4 border-l border-gray-200">
                {msg.text}
              </p>
            </div>
          ))}
        </div>

        {/* Pied de page officiel du rapport avec clause de responsabilité */}
        <div className="border-t border-gray-200 pt-6 mt-16 font-sans text-[10px] text-gray-400 leading-relaxed space-y-3">
          <p className="italic text-center">
            "Ce document constitue un pré-diagnostic automatisé généré par la suite décisionnelle Nicolas Biron. Pour valider scientifiquement ces pistes agronomiques, oenologiques ou financières, et concevoir un plan d'action d'excellence adapté à votre domaine viticole, veuillez me contacter directement : nicolas.biron.pro@gmail.com."
          </p>
          <p className="text-center font-semibold uppercase tracking-widest text-gray-500">
            Nicolas Biron • Bordeaux & Sud-Ouest, France • nicolas.biron.pro@gmail.com
          </p>
        </div>
      </div>

    </div>
  );
}