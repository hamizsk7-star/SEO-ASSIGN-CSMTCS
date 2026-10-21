import React from 'react';

interface MastheadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MastheadModal: React.FC<MastheadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const editors = [
    {
      name: 'Elena Rostova',
      role: 'Editor-in-Chief & Marine Chemical Fellow',
      bio: 'Former research chemist at the European Institute of Olfaction. Specializes in historical ambergris, marine fixatives, and GC-MS reconstruction.',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      initials: 'ER'
    },
    {
      name: 'Dr. Julian Vane',
      role: 'Scientific Director & Sensory Neurobiologist',
      bio: 'Investigator at the Cambridge Chemoreception Laboratory studying mammalian geosmin receptors and human pheromonal folklore.',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      initials: 'JV'
    },
    {
      name: 'Camille de Montparnasse',
      role: 'Terroir & Field Agricultural Editor',
      bio: 'Author of "L’Alchimie Provençale". Documents heirloom centifolia growers across the Grasse basin, Calabria, and Isparta.',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      initials: 'CM'
    },
    {
      name: 'Tariq Al-Mansoor',
      role: 'Artisanal Distillation & Wood Chemistry Fellow',
      bio: 'Proprietor of an independent artisanal copper still atelier in Muscat. Sourcing sustainable Aquilaria and Boswellia across the Indian Ocean rim.',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      initials: 'TA'
    },
    {
      name: 'Severine Laurent',
      role: 'Criticism & Formulation Architecture',
      bio: 'Independent fragrance evaluator, formerly at Givaudan and Mane. Explores post-pyramid non-linear scent kinetics.',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      initials: 'SL'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FBF9F5] w-full max-w-2xl rounded border border-stone-300 shadow-2xl p-8 max-h-[85vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-800 rounded transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="text-[11px] uppercase tracking-widest text-stone-500 font-sans mb-1">
          Editorial Governance
        </div>
        <h3 className="text-3xl font-editorial-serif font-bold text-stone-900 mb-4">
          The Masthead & Curatorial Manifesto
        </h3>

        <div className="space-y-4 text-xs font-sans text-stone-700 leading-relaxed border-b border-stone-200 pb-6 mb-6">
          <p>
            <em>Sillage & Matière</em> was founded to fill a profound intellectual void in modern fragrance criticism. While commercial marketing reduces scent to celebrity ambassadors and synthetic pyramid cliches, genuine perfumery remains one of humanity's deepest intersections of chemistry, botany, memory, and poetry.
          </p>
          <p>
            <strong>Our Editorial Standard:</strong> We accept no gifts, no sponsored product placement, and no commercial press junkets. Every review, chemical decomposition, and sourcing investigation is conducted with rigorous laboratory independence.
          </p>
        </div>

        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-sans mb-4">
          Editorial Board & Fellows
        </h4>

        <div className="space-y-4 divide-y divide-stone-200/80">
          {editors.map((ed, idx) => (
            <div key={ed.name} className={`flex items-start gap-4 ${idx === 0 ? '' : 'pt-4'}`}>
              <div className="relative shrink-0">
                {ed.avatarUrl ? (
                  <img
                    src={ed.avatarUrl}
                    alt={ed.name}
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    className="w-12 h-12 rounded-full object-cover border border-stone-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : null}
                <div className="w-12 h-12 rounded-full bg-stone-200 text-stone-800 font-serif font-bold text-sm flex items-center justify-center border border-stone-300">
                  {ed.initials}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between mb-1 flex-wrap gap-1">
                  <span className="text-sm font-bold text-stone-900 font-editorial-serif">
                    {ed.name}
                  </span>
                  <span className="text-[11px] text-stone-500 font-sans">
                    {ed.role}
                  </span>
                </div>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  {ed.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-stone-200 flex items-center justify-between text-xs font-sans text-stone-500">
          <span>Paris · Grasse · Cambridge · Muscat</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold uppercase tracking-wider text-stone-900 hover:text-stone-700"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
