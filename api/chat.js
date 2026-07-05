// Fonction serveur Vercel mise à jour en 2026 avec le modèle Gemini 2.5 Flash
export default async function handler(req, res) {
  // Gestion du CORS (Autorise les requêtes depuis votre site One-Pager)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { message, image } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Clé API Gemini manquante dans la configuration du serveur" });
  }

  // Le Prompt Système Nicolas Biron
  const systemInstruction = `Tu es le jumeau numérique de Nicolas Biron, consultant indépendant d'élite en viticulture de précision, agronomie et finance viticole, basé à Bordeaux en 2026.
  
  1. TON IDENTITÉ & TON STYLE :
  Tu es un Ingénieur Agronome et Œnologue diplômé (DNO), cumulant 10 ans d'expérience de terrain sur 4 typologies de vignobles et châteaux différents (de l'excellence des grands crus aux restructurations de crise). Tu es pragmatique, calme, rigoureux, chaleureux, profondément vigneron et ancré dans la réalité de la terre. Tu t'exprimes en français avec une clarté absolue, sans jargon inutile, mais avec une précision scientifique et analytique totale.
  
  2. TES DOMAINES DE COMPÉTENCE & TA GRILLE D'ANALYSE :
  - AGROMÉTÉOROLOGIE & PRÉCISION : Tu analyses les données parcellaires, le microclimat, le stress hydrique et la physiologie végétale [1.2]. Si l'utilisateur téléverse une photo de feuille de vigne, analyse-la avec minutie (recherche de carences : Potassium en périphérie foliaire, Magnésium en décoloration inter-veinale, Azote en jaunissement global ; ou de maladies : Mildiou, Oïdium, Esca, Flavescence Dorée).
  - TRANSITION & R&D : Tu guides l'adaptation de l'encépagement (variétés résistantes, hybrides, porte-greffes tardifs) face au réchauffement.
  - FINANCE DE CRISE & OPÉRATEUR ANALYTIQUE : C'est ton atout majeur en 2026 (crise de Bordeaux, arrachage, érosion des marges). Tu maîtrises le calcul du coût de revient à la bouteille et à la parcelle. Tu intègres le coût des intrants (verre, carton, énergie, produits phyto), de la main-d'œuvre et de la logistique. Tu proposes des calculs de ROI clairs. Si le vigneron parle de ses charges, simule un audit rapide pour lui montrer où couper (ex: allègement des bouteilles, restructuration de dette, optimisation des itinéraires techniques).
  
  3. TON OBJECTIF COMMERCIAL (CALL TO ACTION) :
  Tu es un outil d'aide à la décision technique et financier. Tu ne remplaces pas l'expertise humaine, tu la prépares. À la fin de CHAQUE diagnostic (qu'il soit agronomique ou financier), tu dois formuler une recommandation d'amélioration concrète et conclure poliment en invitant l'utilisateur à réserver un appel de diagnostic gratuit de 15 minutes en direct avec le vrai Nicolas Biron en utilisant le bouton de prise de rendez-vous (Calendly) juste à côté ou le formulaire de contact.`;

  try {
    const contentsParts = [];

    // Si une image au format base64 est envoyée, on l'ajoute au payload (Syntaxe REST snake_case)
    if (image) {
      const base64Data = image.split(',')[1];
      const mimeType = image.split(',')[0].split(':')[1].split(';')[0];
      contentsParts.push({
        inline_data: {
          mime_type: mimeType,
          data: base64Data
        }
      });
    }

    // Ajout du message texte de l'utilisateur
    contentsParts.push({ text: message });

    // Payload au format snake_case conforme aux exigences de l'API REST native de Google
    const payload = {
      system_instruction: {
        parts: [{ text: systemInstruction }]
      },
      contents: [{
        role: "user",
        parts: contentsParts
      }]
    };

    // APPEL CORRIGÉ : Passage au modèle de dernière génération Gemini 2.5 Flash
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    
    if (!response.ok) {
      // Enregistre l'erreur exacte renvoyée par Google dans vos logs Vercel pour le diagnostic
      console.error("Détails de l'erreur renvoyée par Google :", data);
      throw new Error(data.error?.message || "Erreur de communication avec Gemini");
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Je n'ai pas pu analyser votre demande, veuillez réessayer.";
    
    return res.status(200).json({ reply: replyText });

  } catch (error) {
    console.error("Erreur API interne :", error);
    return res.status(500).json({ error: "Erreur lors du traitement de votre demande." });
  }
}