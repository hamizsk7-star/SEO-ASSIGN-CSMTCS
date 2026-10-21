import React from 'react';

interface TopNavProps {
  onHomeClick: () => void;
  onOpenLexicon: () => void;
  onOpenNewsletter: () => void;
  onOpenMasthead: () => void;
  onOpenSaved: () => void;
  savedCount: number;
}

export const TopNav: React.FC<TopNavProps> = ({
  onHomeClick,
  onOpenLexicon,
  onOpenNewsletter,
  onOpenMasthead,
  onOpenSaved,
  savedCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={onHomeClick}
          className="text-xl lg:text-2xl font-editorial-serif font-bold tracking-tight text-stone-900 hover:text-stone-700 transition-colors whitespace-nowrap shrink-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
          aria-label="Sillage & Matière home"
        >
          SILLAGE & MATIÈRE
        </button>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <button
            onClick={onHomeClick}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-stone-400"
          >
            Essays
          </button>
          <button
            onClick={onOpenLexicon}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-stone-400"
          >
            Lexicon
          </button>
          <button
            onClick={onOpenMasthead}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-stone-400"
          >
            Masthead
          </button>
          <button
            onClick={onOpenSaved}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-stone-400 flex items-center gap-1.5"
          >
            <span>Saved</span>
            {savedCount > 0 && (
              <span className="text-xs text-stone-500 tabular-nums">({savedCount})</span>
            )}
          </button>
          <button
            onClick={onOpenNewsletter}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-stone-400"
          >
            Dispatch
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenNewsletter}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
          >
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
};
