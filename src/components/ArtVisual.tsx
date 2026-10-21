import React, { useState } from 'react';

interface ArtVisualProps {
  type: 'ambergris' | 'petrichor' | 'rose' | 'oud' | 'pyramid' | 'frankincense' | 'skin' | 'orris' | 'minimalist' | 'tuberose';
  imageUrl?: string;
  className?: string;
  variant?: 'hero' | 'card' | 'compact';
  title?: string;
  photoCredit?: string;
}

export const ArtVisual: React.FC<ArtVisualProps> = ({
  type,
  imageUrl,
  className = '',
  variant = 'card',
  title,
  photoCredit
}) => {
  const isHero = variant === 'hero';
  const isCompact = variant === 'compact';
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Return bespoke domain-authentic SVG botanical & architectural compositions as resilient zero-broken-image fallback
  const renderGraphicsFallback = () => {
    switch (type) {
      case 'ambergris':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5EFE6] via-[#EADBCE] to-[#D5C2AF] text-[#8C6239]">
            <svg className="w-full h-full absolute inset-0 opacity-40 mix-blend-multiply" viewBox="0 0 600 400" fill="none" preserveAspectRatio="xMidYMid slice">
              <path d="M-50 320 C 150 260, 300 380, 650 300 L 650 450 L -50 450 Z" fill="#9A6B3A" fillOpacity="0.25" />
              <path d="M-50 260 C 180 340, 360 220, 650 280 L 650 450 L -50 450 Z" fill="#8C6239" fillOpacity="0.2" />
              <circle cx="300" cy="200" r="160" stroke="#8C6239" strokeWidth="0.8" strokeDasharray="3 4" />
              <circle cx="300" cy="200" r="120" stroke="#8C6239" strokeWidth="1" />
              <circle cx="300" cy="200" r="80" stroke="#8C6239" strokeWidth="0.8" strokeDasharray="2 3" />
            </svg>
            <div className="relative z-10 flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full border border-[#9A6B3A]/40 flex items-center justify-center bg-white/40 backdrop-blur-sm shadow-sm mb-2">
                <svg className="w-8 h-8 text-[#7A4E24]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="font-editorial-serif italic text-sm text-stone-800">Crystallized Ambrein & Ocean Drift</span>
              <span className="text-[10px] uppercase tracking-widest text-stone-600 mt-0.5 font-sans">Plate I · Pelagic Metamorphosis</span>
            </div>
          </div>
        );

      case 'petrichor':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#EEF4F0] via-[#DCE8E0] to-[#C7D9CD] text-[#2D5A46]">
            <svg className="w-full h-full absolute inset-0 opacity-35 mix-blend-multiply" viewBox="0 0 600 400" fill="none" preserveAspectRatio="xMidYMid slice">
              <circle cx="220" cy="180" r="140" stroke="#2D5A46" strokeWidth="0.75" />
              <circle cx="220" cy="180" r="90" stroke="#2D5A46" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="420" cy="240" r="110" stroke="#2D5A46" strokeWidth="0.75" />
              <line x1="100" y1="20" x2="60" y2="120" stroke="#2D5A46" strokeWidth="0.75" strokeDasharray="3 6" />
              <line x1="280" y1="10" x2="240" y2="110" stroke="#2D5A46" strokeWidth="0.75" strokeDasharray="3 6" />
            </svg>
            <div className="relative z-10 flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full border border-[#2D5A46]/30 flex items-center justify-center bg-white/40 backdrop-blur-sm shadow-sm mb-2">
                <svg className="w-8 h-8 text-[#2D5A46]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <span className="font-editorial-serif italic text-sm text-stone-800">Geosmin & Actinobacteria</span>
              <span className="text-[10px] uppercase tracking-widest text-stone-600 mt-0.5 font-sans">Detection Threshold · 5 ppt</span>
            </div>
          </div>
        );

      case 'rose':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FDF2F4] via-[#F4DEE3] to-[#E3C5CD] text-[#9E3C56]">
            <svg className="w-full h-full absolute inset-0 opacity-30 mix-blend-multiply" viewBox="0 0 600 400" fill="none" preserveAspectRatio="xMidYMid slice">
              <g transform="translate(300, 200)">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                  <ellipse key={deg} rx="120" ry="45" transform={`rotate(${deg})`} stroke="#9E3C56" strokeWidth="0.8" />
                ))}
              </g>
            </svg>
            <div className="relative z-10 flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full border border-[#9E3C56]/30 flex items-center justify-center bg-white/40 backdrop-blur-sm shadow-sm mb-2">
                <svg className="w-8 h-8 text-[#8F304A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 4 C 14 8, 14 16, 12 20" />
                </svg>
              </div>
              <span className="font-editorial-serif italic text-sm text-stone-800">Rosa Centifolia de Grasse</span>
              <span className="text-[10px] uppercase tracking-widest text-stone-600 mt-0.5 font-sans">May Dawn · 4,000 kg / 1 kg Absolute</span>
            </div>
          </div>
        );

      case 'oud':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#241E19] via-[#382C24] to-[#1A1410] text-[#D8B48D]">
            <svg className="w-full h-full absolute inset-0 opacity-25" viewBox="0 0 600 400" fill="none" preserveAspectRatio="xMidYMid slice">
              <circle cx="300" cy="200" r="170" stroke="#D8B48D" strokeWidth="0.8" />
              <circle cx="300" cy="200" r="135" stroke="#D8B48D" strokeWidth="1.2" strokeDasharray="12 4 2 4" />
            </svg>
            <div className="relative z-10 flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full border border-[#D8B48D]/30 flex items-center justify-center bg-black/40 backdrop-blur-sm shadow-sm mb-2">
                <svg className="w-8 h-8 text-[#E4C29E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M8 2h8l4 9-8 11L4 11l4-9z" />
                </svg>
              </div>
              <span className="font-editorial-serif italic text-sm text-stone-200">Aquilaria Resin Heartwood</span>
              <span className="text-[10px] uppercase tracking-widest text-amber-200/80 mt-0.5 font-sans">Kyara Grade · Sinking Wood</span>
            </div>
          </div>
        );

      case 'pyramid':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F4F6FB] via-[#E2E6F2] to-[#CBD3E5] text-[#3E4968]">
            <svg className="w-full h-full absolute inset-0 opacity-30 mix-blend-multiply" viewBox="0 0 600 400" fill="none" preserveAspectRatio="xMidYMid slice">
              <circle cx="300" cy="200" r="130" stroke="#3E4968" strokeWidth="1" />
              <ellipse cx="300" cy="200" rx="130" ry="50" stroke="#3E4968" strokeWidth="0.8" />
            </svg>
            <div className="relative z-10 flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full border border-[#3E4968]/30 flex items-center justify-center bg-white/40 backdrop-blur-sm shadow-sm mb-2">
                <svg className="w-8 h-8 text-[#3E4968]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <span className="font-editorial-serif italic text-sm text-stone-800">Spherical Diffusion Architecture</span>
              <span className="text-[10px] uppercase tracking-widest text-stone-600 mt-0.5 font-sans">Non-Linear Kinetic Matrix</span>
            </div>
          </div>
        );

      case 'frankincense':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FBF7EE] via-[#EFE6CF] to-[#DECFA8] text-[#8C5E28]">
            <div className="relative z-10 flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full border border-[#8C5E28]/30 flex items-center justify-center bg-white/40 backdrop-blur-sm shadow-sm mb-2">
                <svg className="w-8 h-8 text-[#8C5E28]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M12 2C8 6 6 10 6 14a6 6 0 0 0 12 0c0-4-2-8-6-12z" />
                </svg>
              </div>
              <span className="font-editorial-serif italic text-sm text-stone-800">Boswellia Carterii Tears</span>
              <span className="text-[10px] uppercase tracking-widest text-stone-600 mt-0.5 font-sans">Puntland Escarpment</span>
            </div>
          </div>
        );

      case 'skin':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FBF5F1] via-[#EFE0D7] to-[#DEC6B8] text-[#8B4E38]">
            <div className="relative z-10 flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full border border-[#8B4E38]/30 flex items-center justify-center bg-white/40 backdrop-blur-sm shadow-sm mb-2">
                <svg className="w-8 h-8 text-[#8B4E38]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <span className="font-editorial-serif italic text-sm text-stone-800">The Epidermal Canvas</span>
              <span className="text-[10px] uppercase tracking-widest text-stone-600 mt-0.5 font-sans">Henry’s Law & Lipid Fixation</span>
            </div>
          </div>
        );

      case 'orris':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F2F9] via-[#E5DEF0] to-[#CFBFDF] text-[#5E4C7A]">
            <div className="relative z-10 flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full border border-[#5E4C7A]/30 flex items-center justify-center bg-white/40 backdrop-blur-sm shadow-sm mb-2">
                <svg className="w-8 h-8 text-[#5E4C7A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M12 2a4 4 0 0 0-4 4c0 3 4 8 4 8s4-5 4-8a4 4 0 0 0-4-4z" />
                </svg>
              </div>
              <span className="font-editorial-serif italic text-sm text-stone-800">Iris Pallida Rhizome Butter</span>
              <span className="text-[10px] uppercase tracking-widest text-stone-600 mt-0.5 font-sans">Tuscan Cure · 5 Years</span>
            </div>
          </div>
        );

      case 'minimalist':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F7F9F6] via-[#E6EDE4] to-[#CDDBD0] text-[#476355]">
            <div className="relative z-10 flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full border border-[#476355]/30 flex items-center justify-center bg-white/40 backdrop-blur-sm shadow-sm mb-2">
                <svg className="w-8 h-8 text-[#476355]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <line x1="4" y1="12" x2="20" y2="12" />
                </svg>
              </div>
              <span className="font-editorial-serif italic text-sm text-stone-800">The Minimalist Organ</span>
              <span className="text-[10px] uppercase tracking-widest text-stone-600 mt-0.5 font-sans">The Art of Subtraction</span>
            </div>
          </div>
        );

      case 'tuberose':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#201824] via-[#332238] to-[#160E1A] text-[#E0B8DA]">
            <div className="relative z-10 flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full border border-[#E0B8DA]/30 flex items-center justify-center bg-black/40 backdrop-blur-sm shadow-sm mb-2">
                <svg className="w-8 h-8 text-[#F0CEEB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </div>
              <span className="font-editorial-serif italic text-sm text-stone-200">Polianthes Tuberosa</span>
              <span className="text-[10px] uppercase tracking-widest text-fuchsia-200/70 mt-0.5 font-sans">Midnight Indoles</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-stone-100 flex items-center justify-center text-stone-400">
            <span className="text-xs tracking-widest font-sans uppercase">Sillage & Matière</span>
          </div>
        );
    }
  };

  return (
    <div
      className={`group relative overflow-hidden select-none bg-stone-100 transition-all duration-300 ${
        isHero ? 'aspect-[16/9] lg:aspect-[21/9]' : isCompact ? 'aspect-[4/3] w-24 h-24' : 'aspect-[16/10]'
      } ${className}`}
    >
      {/* Real High-Resolution Photography */}
      {imageUrl && !imageFailed ? (
        <div className="relative w-full h-full">
          <img
            src={imageUrl}
            alt={title || `Olfactory study for ${type}`}
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageFailed(true)}
            className={`w-full h-full object-cover transition-all duration-700 ease-out ${
              imageLoaded ? 'opacity-100 scale-100 group-hover:scale-105' : 'opacity-0 scale-98'
            }`}
          />

          {/* Elegant editorial scrim gradient for text legibility and rich tone */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-stone-950/15 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Subdued photo credit watermark for hero */}
          {isHero && photoCredit && (
            <div className="absolute bottom-3 right-4 z-10 text-[10px] font-sans tracking-wider text-white/70 bg-stone-950/40 backdrop-blur-xs px-2.5 py-1 rounded">
              {photoCredit}
            </div>
          )}

          {/* Preload fallback while image is loading */}
          {!imageLoaded && (
            <div className="absolute inset-0">
              {renderGraphicsFallback()}
            </div>
          )}
        </div>
      ) : (
        /* Resilient Zero-Broken-Image Fallback */
        renderGraphicsFallback()
      )}

      {title && <span className="sr-only">{title}</span>}
    </div>
  );
};
