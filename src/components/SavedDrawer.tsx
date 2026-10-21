import React from 'react';
import { Article } from '../types/blog';
import { ArtVisual } from './ArtVisual';

interface SavedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveSaved: (articleId: string) => void;
}

export const SavedDrawer: React.FC<SavedDrawerProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  onRemoveSaved
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-stone-900/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FBF9F5] w-full max-w-md h-full shadow-2xl border-l border-stone-300 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-editorial-serif font-bold text-stone-900">
              Personal Reading Portfolio
            </h3>
            <span className="text-xs text-stone-500 font-sans">
              {savedArticles.length} {savedArticles.length === 1 ? 'essay' : 'essays'} saved
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-800 rounded transition-colors"
            aria-label="Close drawer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {savedArticles.length === 0 ? (
            <div className="text-center py-16 text-stone-500 font-sans">
              <div className="w-10 h-10 mx-auto mb-3 border border-stone-300 rounded-full flex items-center justify-center text-stone-400">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <p className="text-xs">Your reading portfolio is currently empty.</p>
              <p className="text-[11px] text-stone-400 mt-1">
                Click the bookmark icon on any essay to save it here for offline contemplation.
              </p>
            </div>
          ) : (
            savedArticles.map((art) => (
              <div
                key={art.id}
                className="group border border-stone-200 bg-white rounded p-3 flex gap-3 items-center justify-between hover:border-stone-400 transition-colors"
              >
                <div className="w-16 h-16 rounded overflow-hidden shrink-0 border border-stone-200">
                  <ArtVisual
                    type={art.visualType}
                    imageUrl={art.imageUrl}
                    photoCredit={art.photoCredit}
                    variant="compact"
                    title={art.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  onClick={() => {
                    onSelectArticle(art);
                    onClose();
                  }}
                  className="cursor-pointer flex-1 min-w-0"
                >
                  <div className="text-[10px] uppercase tracking-wider text-stone-500 mb-0.5 font-sans">
                    {art.category} · {art.readTime}
                  </div>
                  <h4 className="text-xs font-editorial-serif font-bold text-stone-900 group-hover:text-stone-700 transition-colors leading-snug line-clamp-2">
                    {art.title}
                  </h4>
                  <span className="text-[10px] text-stone-500 font-sans block mt-0.5">
                    {art.author.name}
                  </span>
                </div>

                <div className="flex flex-col items-end gap-2 ml-2">
                  <button
                    onClick={() => onRemoveSaved(art.id)}
                    className="p-1 text-stone-400 hover:text-stone-700 transition-colors"
                    title="Remove from saved"
                    aria-label="Remove from saved"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      onSelectArticle(art);
                      onClose();
                    }}
                    className="text-[11px] font-semibold text-stone-900 hover:underline font-sans"
                  >
                    Read →
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedArticles.length > 0 && (
          <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs font-sans">
            <span className="text-stone-500">Stored locally in your browser</span>
            <button
              onClick={() => {
                savedArticles.forEach((a) => onRemoveSaved(a.id));
              }}
              className="text-stone-500 hover:text-stone-800 transition-colors"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
