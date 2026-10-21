import React from 'react';
import { Article } from '../types/blog';
import { ArtVisual } from './ArtVisual';

interface ArticleCardProps {
  article: Article;
  onSelect: (article: Article) => void;
  isSaved: boolean;
  onToggleSave: (e: React.MouseEvent, articleId: string) => void;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onSelect,
  isSaved,
  onToggleSave,
  featured = false
}) => {
  if (featured) {
    return (
      <article
        onClick={() => onSelect(article)}
        className="group relative cursor-pointer border border-stone-200/90 bg-white hover:border-stone-400 transition-all duration-300 rounded overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 overflow-hidden">
            <ArtVisual
              type={article.visualType}
              imageUrl={article.imageUrl}
              photoCredit={article.photoCredit}
              variant="hero"
              title={article.title}
              className="w-full h-full min-h-[320px] lg:min-h-[420px]"
            />
          </div>

          <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between bg-stone-50/50">
            <div>
              {/* Zero-Pill unboxed clean metadata */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-500 mb-3 font-sans">
                <span className="font-semibold text-stone-700">{article.category}</span>
                <span aria-hidden="true">·</span>
                <span>{article.publishedDate}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{article.readTime}</span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-editorial-serif font-bold text-stone-900 group-hover:text-stone-700 transition-colors leading-tight mb-3">
                {article.title}
              </h2>

              <p className="text-stone-600 text-sm lg:text-base leading-relaxed line-clamp-3 mb-6 font-sans">
                {article.deck}
              </p>

              {/* Olfactory Accord Preview */}
              <div className="border-t border-stone-200 pt-4 mb-6">
                <span className="text-[11px] uppercase tracking-widest text-stone-600 font-sans block mb-1">
                  Olfactory Signature
                </span>
                <p className="text-xs italic text-stone-700 font-editorial-serif">
                  {article.notes.character}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-200/80">
              <div className="flex items-center gap-2.5">
                {article.author.avatarUrl ? (
                  <img
                    src={article.author.avatarUrl}
                    alt={article.author.name}
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    className="w-8 h-8 rounded-full object-cover border border-stone-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : null}
                <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-800 text-xs font-serif font-semibold flex items-center justify-center shrink-0">
                  {article.author.initials}
                </div>
                <div>
                  <span className="text-xs font-medium text-stone-900 block leading-tight font-sans">
                    {article.author.name}
                  </span>
                  <span className="text-[11px] text-stone-500 block leading-tight font-sans">
                    {article.author.role.split('&')[0]}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={(e) => onToggleSave(e, article.id)}
                  aria-label={isSaved ? 'Remove from saved' : 'Save article'}
                  className={`p-2 rounded hover:bg-stone-100 transition-colors ${
                    isSaved ? 'text-amber-800' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill={isSaved ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </button>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:underline">
                  Read Essay →
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={() => onSelect(article)}
      className="group relative cursor-pointer border border-stone-200/90 bg-white hover:border-stone-400 transition-all duration-200 rounded flex flex-col justify-between overflow-hidden"
    >
      <div>
        <div className="overflow-hidden">
          <ArtVisual
            type={article.visualType}
            imageUrl={article.imageUrl}
            photoCredit={article.photoCredit}
            variant="card"
            title={article.title}
            className="w-full aspect-[16/10]"
          />
        </div>

        <div className="p-6">
          {/* Zero-Pill unboxed clean metadata */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-500 mb-2 font-sans">
            <span className="font-semibold text-stone-700">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{article.readTime}</span>
          </div>

          <h3 className="text-xl font-editorial-serif font-bold text-stone-900 group-hover:text-stone-700 transition-colors leading-snug mb-2">
            {article.title}
          </h3>

          <p className="text-stone-600 text-sm leading-relaxed line-clamp-3 mb-4 font-sans">
            {article.deck}
          </p>

          <div className="text-xs italic text-stone-500 font-editorial-serif line-clamp-1 border-t border-stone-100 pt-3">
            {article.notes.character}
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-3 border-t border-stone-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {article.author.avatarUrl ? (
            <img
              src={article.author.avatarUrl}
              alt={article.author.name}
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              className="w-6 h-6 rounded-full object-cover border border-stone-200"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : null}
          <div className="w-6 h-6 rounded-full bg-stone-100 text-stone-700 text-[10px] font-serif font-semibold flex items-center justify-center shrink-0">
            {article.author.initials}
          </div>
          <span className="text-xs text-stone-600 font-sans truncate max-w-[140px]">
            {article.author.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => onToggleSave(e, article.id)}
            aria-label={isSaved ? 'Remove from saved' : 'Save article'}
            className={`p-1.5 rounded hover:bg-stone-100 transition-colors ${
              isSaved ? 'text-amber-800' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill={isSaved ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};
