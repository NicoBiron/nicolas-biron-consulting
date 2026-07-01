import React from 'react';

export default function Logo({ className = "w-10 h-10" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* 1. Cercles concentriques de précision / technologie (effet cadran / boussole) */}
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.2" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.1" />
      
      {/* 2. Le Monogramme "N" et "B" fusionné */}
      {/* 
        Le tracé dessine la barre gauche du N, sa diagonale, 
        puis remonte pour former l'axe du B et ses deux boucles. 
      */}
      <path 
        d="M35 68 V32 L50 54 V36 C50 28 65 28 65 41 C65 48.5 50 48.5 50 48.5 C50 48.5 67 48.5 67 58.5 C67 68 50 68 50 68" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* 3. La Vrille de Vigne (Viticulture) */}
      {/* Elle s'échappe délicatement du sommet du "B" pour former une courbe organique */}
      <path 
        d="M50 36 C53 23 61 22 66 26 C68.5 28 66 31.5 61 30" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* 4. La Goutte de Vin (Œnologie & Précision) */}
      {/* Placée sous l'axe central comme un repère géométrique vertical */}
      <path 
        d="M50 74 C48.5 74 47.5 75 47.5 76.2 C47.5 77.4 50 79.8 50 79.8 C50 79.8 52.5 77.4 52.5 76.2 C52.5 75 51.5 74 50 74 Z" 
        fill="currentColor" 
        fillOpacity="0.8"
      />
    </svg>
  );
}