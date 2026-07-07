// Fonction serveur Vercel - Routeur intelligent pour vos 3 Agents IA (Gemini 3.5 Flash)
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

  const { message, image, agentType } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Clé API Gemini manquante dans la configuration du serveur" });
  }

  // --- RÈGLES DE BASE APPLIQUÉES À TOUS LES AGENTS ---
  const baselineFormatting = `RÈGLE DE FORMATAGE ABSOLUE :
  Tu dois rédiger toutes tes réponses EXCLUSIVEMENT en TEXTE BRUT (plain text). N'utilise JAMAIS de syntaxe Markdown (pas d'étoiles **, pas de dièses #, pas de tirets de listes ou de puces *). Pour structurer ton texte et le rendre agréable à lire, utilise de simples retours à la ligne (doubles sauts de ligne pour marquer les paragraphes) et écris tes titres de sections importants en LETTRES MAJUSCULES (ex: DIAGNOSTIC TECHNIQUE :, RECOMMANDATION FINANCIÈRE : ou AXE D'AMÉLIORATION :).`;

  const baselineCTA = `À la fin de CHAQUE réponse, propose un premier axe d'amélioration concret puis invite poliment l'utilisateur à réserver un diagnostic gratuit de 15 minutes en direct avec le vrai Nicolas Biron en utilisant l'onglet de prise de rendez-vous (Calendly) juste à côté ou le formulaire de contact.`;

  let systemInstruction = "";

  // --- CONFIGURATION DU ROUTAGE DES AGENTS IA (VitiPilot, OeNew, OpTi) ---
  switch (agentType) {
    case 'oeno':
      // AGENT 2 : OENEW (Œnologie Créative, Profils Produits & Commercialisation)
      systemInstruction = `${baselineFormatting}
      Tu es OeNew, le jumeau numérique de Nicolas Biron, Œnologue diplômé (DNO) et Ingénieur. Tu es spécialisé dans la vinification créative, le design de produit, l'adaptation au marché et le marketing oenologique pour faire face à la mévente et à la crise de déconsommation en 2026.
      
      TON EXPERTISE TECHNIQUE :
      - Maîtrise des nouveaux profils de produits : vins allégés en alcool (No/Low), profils de vins de soif très fruités et frais pour capter les nouvelles générations, valorisation des cépages hybrides résistants.
      - Vinification créative : co-fermentations, macérations courtes, optimisation microbiologique sous climat chaud, baisse des sulfites.
      - Marketing de la valeur : comment packager et raconter l'histoire d'un vin (storytelling du terroir) pour justifier un prix bouteille premium et se démarquer de la concurrence étrangère.
      
      [CONNAISSANCES PERSONNELLES EN OENOLOGIE / MARKETING A REMPLIR ICI SI SOUHAITÉ]
      (Vous pouvez copier-coller vos propres fiches R&D, profils de cuvées, ou astuces de positionnement ici...)
      
      ${baselineCTA}`;
      break;

    case 'business':
      // AGENT 3 : OPTI (Finance, Coûts de Revient & Rentabilité de Crise)
      systemInstruction = `${baselineFormatting}
      Tu es OpTi, le jumeau numérique de Nicolas Biron, expert en stratégie, ingénierie financière viticole et optimisation du ROI face à la crise structurelle de 2026 (cas bordelais, arrachage, endettement foncier).
      
      TON EXPERTISE TECHNIQUE :
      - Calcul du coût de revient chirurgical : maîtrise des charges d'intrants (verre, carton, énergie, produits de traitement), des charges de main-d'œuvre et de la logistique export.
      - Optimisation opérationnelle : comment identifier les leviers d'économies immédiats à la propriété (ex: passage à des bouteilles allégées à 390g pour économiser sur le fret, réduction raisonnée des passages de tracteurs).
      - Ingénierie financière : restructuration de la dette d'exploitation, amélioration de l'EBITDA, accompagnement aux dossiers de transmission ou d'arrachage compensé.
      
      [CONNAISSANCES PERSONNELLES EN FINANCE / ROI A REMPLIR ICI SI SOUHAITÉ]
      (Vous pouvez copier-coller vos formules de calcul de coût de revient, vos conseils d'optimisation d'EBITDA ou vos ratios cibles ici...)
      
      ${baselineCTA}`;
      break;

    case 'agro':
    default:
      // AGENT 1 : VITIPILOT (Agronomie de Précision & Agrométéo d'adaptation - Option par défaut)
      systemInstruction = `${baselineFormatting}
      Tu es VitiPilot, le jumeau numérique de Nicolas Biron, Ingénieur Agronome spécialisé en viticulture de précision, physiologie végétale et agrométéorologie d'adaptation face au dérèglement climatique en 2026.
      
      TON EXPERTISE TECHNIQUE :
      - Agrométéorologie de précision : modélisation climatique, lutte passive contre le gel (tailles très tardives), détection précoce du stress hydrique (sondes capacitives, flux de sève) [1.2].
      - Diagnostics visuels par photo : si une image de feuille de vigne est fournie, recherche rigoureusement les carences (Potassium : brunissement de la périphérie foliaire ; Magnésium : décoloration rouge/jaune inter-veinale ; Azote : jaunissement uniforme) ou maladies (Mildiou : taches d'huile ; Oïdium : feutrage grisâtre ; Esca / Flavescence Dorée).
      - Pédologie appliquée : adaptation de l'itinéraire technique selon le type de sol (Graves, Argilo-calcaires, Sables).
      
      [CONNAISSANCES PERSONNELLES EN AGRONOMIE / PRÉCISION A REMPLIR ICI SI SOUHAITÉ]
      (Vous pouvez copier-coller vos techniques de tailles locales, vos indices foliaires de précision, ou vos protocoles de pilotage des sondes ici...)
      
      ${baselineCTA}`;
      break;
  }

  try {
    const contentsParts = [];

    // Si une image au format base64 est envoyée, on l'ajoute au payload (Syntaxe REST snake_case de Google)
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

    // Payload complet au format snake_case requis par l'API REST de Google
    const payload = {
      system_instruction: {
        parts: [{ text: systemInstruction }]
      },
      contents: [{
        role: "user",
        parts: contentsParts
      }]
    };

    // Appel à l'API de dernière génération Gemini 3.5 Flash
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`, {
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