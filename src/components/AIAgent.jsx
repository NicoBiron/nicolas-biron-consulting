import React, { useState, useRef } from 'react';

export default function AIAgent() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Bonjour, je suis l'assistant numérique de Nicolas Biron. Vous pouvez m'envoyer une question agronomique, me parler de vos coûts de revient pour un audit financier, ou même me téléverser la photo d'une feuille de vigne pour diagnostiquer une carence." }
  ]);
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
    e.preventDefault();
    if (!inputText.trim() && !imageFile) return;

    const userMessage = { 
      role: 'user', 
      text: inputText, 
      image: imagePreview 
    };

    setMessages((prev) => [...prev, userMessage]);
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
          image: userMessage.image // Envoi au format Base64
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages((prev) => [...prev, { role: 'assistant', text: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { role: 'assistant', text: "Désolé, je rencontre une petite difficulté à analyser votre demande. Veuillez vérifier la connexion." }]);
      }
    } catch (error) {
      console.error("Erreur de chat :", error);
      setMessages((prev) => [...prev, { role: 'assistant', text: "Erreur réseau : impossible de joindre mon serveur d'analyse." }]);
    }
    setLoading(false);
  };

  return (
    <section id="assistant-ia" className="py-24 md:py-32 bg-brand-slate border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* En-tête de l'Agent */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] tracking-widest text-brand-accent uppercase font-sans font-semibold mb-4">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Agent IA Décisionnel Gratuit
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-ivory font-semibold mb-4 leading-tight">
            Interrogez mon jumeau numérique.
          </h2>
          <p className="font-sans text-xs md:text-sm text-brand-ivory/60 max-w-xl mx-auto leading-relaxed">
            Un outil de pré-diagnostic agronomique et financier immédiat, entraîné sur mes méthodologies et le contexte de crise de la filière en 2026.
          </p>
        </div>

        {/* Fenêtre de Chat principale */}
        <div className="bg-brand-slatelight/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[550px] relative">
          
          {/* Liste des Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className={`max-w-[85%] rounded-lg p-4 font-sans text-xs md:text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-accent text-brand-slate font-medium rounded-br-none' 
                    : 'bg-brand-slate/80 border border-white/5 text-brand-ivory/90 rounded-bl-none'
                }`}>
                  {/* Si le message contient une image téléversée */}
                  {msg.image && (
                    <img 
                      src={msg.image} 
                      alt="Téléversement utilisateur" 
                      className="max-h-48 rounded mb-3 border border-white/10 object-contain"
                    />
                  )}
                  {/* Texte du message */}
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
                <span className="text-[9px] uppercase tracking-wider text-brand-ivory/30 mt-1.5 font-sans px-1">
                  {msg.role === 'user' ? 'Vous' : 'Assistant Nicolas Biron'}
                </span>
              </div>
            ))}
            
            {/* Indicateur de chargement */}
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

          {/* Zone de saisie + boutons */}
          <form onSubmit={handleSend} className="p-4 bg-brand-slate/50 border-t border-white/5 space-y-3 relative z-10">
            
            {/* Aperçu de l'image sélectionnée avant envoi */}
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

              {/* Champ d'écriture */}
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Posez votre question ou parlez de vos coûts de revient..."
                className="flex-1 bg-brand-slate border border-white/10 rounded-lg px-4 py-3 text-xs md:text-sm focus:border-brand-accent focus:outline-none placeholder:text-brand-ivory/20"
              />

              {/* Bouton Envoi */}
              <button
                type="submit"
                className="p-3 bg-brand-green hover:bg-brand-greenlight text-brand-ivory rounded-lg transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
}