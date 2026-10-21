import React, { useState } from 'react';
import { LEXICON_TERMS } from '../data/lexicon';

interface LexiconModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LexiconModal: React.FC<LexiconModalProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'Technique', 'Raw Material', 'Olfactory Family', 'Science'];

  const filteredTerms = LEXICON_TERMS.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(search.toLowerCase()) ||
      term.definition.toLowerCase().includes(search.toLowerCase()) ||
      (term.french && term.french.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'All' || term.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FBF9F5] w-full max-w-3xl rounded border border-stone-300 shadow-2xl max-h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-editorial-serif font-bold text-stone-900">
              The Olfactory Lexicon
            </h3>
            <p className="text-xs text-stone-500 font-sans mt-0.5">
              An authoritative glossary of perfumery terminology, techniques, and molecular concepts.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-800 rounded transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Filter bar */}
        <div className="p-6 pb-4 border-b border-stone-200 bg-stone-50/50 space-y-3">
          <input
            type="search"
            placeholder="Search terms, extractions, molecular concepts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-xs px-3.5 py-2.5 rounded border border-stone-300 bg-white placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-500 font-sans"
          />

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs rounded transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-white font-medium'
                    : 'text-stone-600 hover:bg-stone-200/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Term list */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 divide-y divide-stone-200/80">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12 text-stone-500 text-xs font-sans">
              No matching olfactory terms found for "{search}".
            </div>
          ) : (
            filteredTerms.map((item, idx) => (
              <div key={item.term} className={idx === 0 ? '' : 'pt-6'}>
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <div className="flex items-baseline gap-2">
                    <h4 className="text-xl font-editorial-serif font-bold text-stone-900">
                      {item.term}
                    </h4>
                    {item.french && (
                      <span className="text-xs italic text-stone-500 font-editorial-serif">
                        {item.french}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-sans">
                    {item.category}
                  </span>
                </div>

                {item.pronunciation && (
                  <div className="text-[11px] text-stone-500 font-sans mb-2">
                    Pronunciation: <span className="font-mono text-stone-700">{item.pronunciation}</span>
                  </div>
                )}

                <p className="text-xs leading-relaxed text-stone-700 font-sans mb-2">
                  {item.definition}
                </p>

                {item.exampleInLiterature && (
                  <div className="text-xs italic font-editorial-serif text-stone-600 border-l border-stone-300 pl-3 py-0.5 mt-2">
                    "{item.exampleInLiterature}"
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-700 hover:text-stone-900 font-sans"
          >
            Close Lexicon
          </button>
        </div>
      </div>
    </div>
  );
};
