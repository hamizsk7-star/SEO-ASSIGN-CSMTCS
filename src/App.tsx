import React, { useState, useEffect, useMemo } from 'react';
import { ARTICLES, CATEGORIES } from './data/articles';
import { Article } from './types/blog';
import { TopNav } from './components/TopNav';
import { ArticleCard } from './components/ArticleCard';
import { ArticleView } from './components/ArticleView';
import { LexiconModal } from './components/LexiconModal';
import { NewsletterModal } from './components/NewsletterModal';
import { MastheadModal } from './components/MastheadModal';
import { SavedDrawer } from './components/SavedDrawer';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Essays');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'date' | 'readTime' | 'title'>('date');

  // Modals and Drawers
  const [isLexiconOpen, setIsLexiconOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isMastheadOpen, setIsMastheadOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  // Saved articles in localStorage
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('sillage_saved_articles');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [notFoundSlug, setNotFoundSlug] = useState<string | null>(null);

  // URL hash and pathname routing
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').trim();
      const pathname = window.location.pathname.replace(/^\//, '').trim();
      const slug = hash || (pathname && pathname !== 'index.html' ? pathname : '');

      if (slug) {
        const found = ARTICLES.find((a) => a.slug === slug || a.id === slug);
        if (found) {
          setSelectedArticle(found);
          setNotFoundSlug(null);
          return;
        } else {
          // Unknown route / 404
          setSelectedArticle(null);
          setNotFoundSlug(slug);
          return;
        }
      }
      setSelectedArticle(null);
      setNotFoundSlug(null);
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const handleSelectArticle = (art: Article) => {
    window.location.hash = art.slug;
    setSelectedArticle(art);
    setNotFoundSlug(null);
  };

  const handleBackToHome = () => {
    window.location.hash = '';
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    setSelectedArticle(null);
    setNotFoundSlug(null);
  };

  const handleToggleSave = (e: React.MouseEvent, articleId: string) => {
    e.stopPropagation();
    let updated: string[];
    if (savedIds.includes(articleId)) {
      updated = savedIds.filter((id) => id !== articleId);
    } else {
      updated = [...savedIds, articleId];
    }
    setSavedIds(updated);
    localStorage.setItem('sillage_saved_articles', JSON.stringify(updated));
  };

  const handleRemoveSaved = (articleId: string) => {
    const updated = savedIds.filter((id) => id !== articleId);
    setSavedIds(updated);
    localStorage.setItem('sillage_saved_articles', JSON.stringify(updated));
  };

  const savedArticles = useMemo(() => {
    return ARTICLES.filter((a) => savedIds.includes(a.id));
  }, [savedIds]);

  // Filtered & sorted articles
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((art) => {
      const matchesCategory =
        selectedCategory === 'All Essays' || art.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        art.title.toLowerCase().includes(q) ||
        art.deck.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q) ||
        art.author.name.toLowerCase().includes(q) ||
        art.tags.some((t) => t.toLowerCase().includes(q)) ||
        art.notes.character.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'readTime') {
        const timeA = parseInt(a.readTime, 10) || 0;
        const timeB = parseInt(b.readTime, 10) || 0;
        return timeB - timeA;
      }
      // default: natural chronological order as authored
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  // If viewing an article, render full reading canvas
  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-[#FBF9F5]">
        <TopNav
          onHomeClick={handleBackToHome}
          onOpenLexicon={() => setIsLexiconOpen(true)}
          onOpenNewsletter={() => setIsNewsletterOpen(true)}
          onOpenMasthead={() => setIsMastheadOpen(true)}
          onOpenSaved={() => setIsSavedDrawerOpen(true)}
          savedCount={savedIds.length}
        />
        <ArticleView
          article={selectedArticle}
          onBack={handleBackToHome}
          onSelectArticle={handleSelectArticle}
          allArticles={ARTICLES}
          isSaved={savedIds.includes(selectedArticle.id)}
          onToggleSave={handleToggleSave}
        />
        <LexiconModal
          isOpen={isLexiconOpen}
          onClose={() => setIsLexiconOpen(false)}
        />
        <NewsletterModal
          isOpen={isNewsletterOpen}
          onClose={() => setIsNewsletterOpen(false)}
        />
        <MastheadModal
          isOpen={isMastheadOpen}
          onClose={() => setIsMastheadOpen(false)}
        />
        <SavedDrawer
          isOpen={isSavedDrawerOpen}
          onClose={() => setIsSavedDrawerOpen(false)}
          savedArticles={savedArticles}
          onSelectArticle={handleSelectArticle}
          onRemoveSaved={handleRemoveSaved}
        />
      </div>
    );
  }

  // If 404 Not Found route
  if (notFoundSlug) {
    return (
      <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col font-sans">
        <TopNav
          onHomeClick={handleBackToHome}
          onOpenLexicon={() => setIsLexiconOpen(true)}
          onOpenNewsletter={() => setIsNewsletterOpen(true)}
          onOpenMasthead={() => setIsMastheadOpen(true)}
          onOpenSaved={() => setIsSavedDrawerOpen(true)}
          savedCount={savedIds.length}
        />
        <main className="flex-1 max-w-3xl mx-auto px-6 py-20 text-center flex flex-col items-center justify-center">
          <div className="text-[11px] uppercase tracking-widest text-stone-500 font-sans mb-3">
            Error 404 · Archival Registry
          </div>
          <h1 className="text-4xl sm:text-5xl font-editorial-serif font-bold text-stone-900 mb-4">
            Essay Not Found in Archive
          </h1>
          <p className="text-sm text-stone-600 font-sans max-w-md leading-relaxed mb-8">
            The manuscript or extraction report for <code className="bg-stone-200/70 px-1.5 py-0.5 rounded text-stone-800 text-xs font-mono">"{notFoundSlug}"</code> could not be located in our catalog.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center mb-12">
            <button
              onClick={handleBackToHome}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors font-sans shadow-sm"
            >
              Return to Journal Homepage
            </button>
            <button
              onClick={() => setIsLexiconOpen(true)}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 rounded transition-colors font-sans"
            >
              Consult The Lexicon
            </button>
          </div>

          <div className="w-full text-left border-t border-stone-200 pt-8">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 font-sans block mb-4">
              Explore Available Essays
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ARTICLES.slice(0, 4).map((art) => (
                <div
                  key={art.id}
                  onClick={() => handleSelectArticle(art)}
                  className="p-3 border border-stone-200 bg-white rounded cursor-pointer hover:border-stone-400 transition-colors"
                >
                  <span className="text-[10px] uppercase text-stone-400 block">{art.category}</span>
                  <span className="text-xs font-editorial-serif font-bold text-stone-900 line-clamp-1">{art.title}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
        <LexiconModal isOpen={isLexiconOpen} onClose={() => setIsLexiconOpen(false)} />
        <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
        <MastheadModal isOpen={isMastheadOpen} onClose={() => setIsMastheadOpen(false)} />
        <SavedDrawer
          isOpen={isSavedDrawerOpen}
          onClose={() => setIsSavedDrawerOpen(false)}
          savedArticles={savedArticles}
          onSelectArticle={handleSelectArticle}
          onRemoveSaved={handleRemoveSaved}
        />
      </div>
    );
  }

  // Lead featured story
  const leadStory = ARTICLES[0];
  const secondaryStories = ARTICLES.slice(1, 4);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col font-sans">
      {/* Strict 3-zone Top Bar Contract */}
      <TopNav
        onHomeClick={() => {
          setSelectedCategory('All Essays');
          setSearchQuery('');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenLexicon={() => setIsLexiconOpen(true)}
        onOpenNewsletter={() => setIsNewsletterOpen(true)}
        onOpenMasthead={() => setIsMastheadOpen(true)}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        savedCount={savedIds.length}
      />

      {/* Main Journal Container */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-10 w-full space-y-16">
        {/* Institutional Issue Header */}
        <section className="border-b border-stone-300 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-stone-500 font-sans mb-1">
                Vol. VII · Autumn Monograph · Independent Olfactory Arts
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial-serif font-bold text-stone-900 tracking-tight leading-none">
                Sillage & Matière
              </h1>
            </div>

            <p className="text-xs text-stone-600 font-sans max-w-md leading-relaxed md:text-right">
              A peer-reviewed journal of niche fragrance architecture, rare botanical extractions, GC-MS molecular analysis, and non-commercial criticism.
            </p>
          </div>

          {/* Operational Utility Ribbon */}
          <div className="flex items-center flex-wrap gap-y-2 gap-x-6 text-xs text-stone-600 font-sans pt-4 border-t border-stone-200">
            <span>Archive: <strong className="text-stone-900 font-medium">10 Long-Form Essays</strong></span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span>Contributors: <strong className="text-stone-900 font-medium">5 Research Noses</strong></span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span>Lexicon: <button onClick={() => setIsLexiconOpen(true)} className="text-stone-900 underline font-medium hover:text-stone-600">12 Classical Concepts</button></span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span>Policy: <span className="text-stone-700">Zero Sponsored Placement</span></span>
          </div>
        </section>

        {/* Tier 1: Dominant Lead Story */}
        <section aria-labelledby="featured-essay">
          <div className="flex items-center justify-between mb-4">
            <span id="featured-essay" className="text-xs font-bold uppercase tracking-widest text-stone-500 font-sans">
              Lead Monograph
            </span>
            <span className="text-xs text-stone-400 font-sans">
              Issue VII Focal Essay
            </span>
          </div>

          <ArticleCard
            article={leadStory}
            featured={true}
            onSelect={handleSelectArticle}
            isSaved={savedIds.includes(leadStory.id)}
            onToggleSave={handleToggleSave}
          />
        </section>

        {/* Tier 2: Secondary Curated Features */}
        <section aria-labelledby="curated-features">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-200">
            <h2 id="curated-features" className="text-xs font-bold uppercase tracking-widest text-stone-500 font-sans">
              Curated Inquiries
            </h2>
            <span className="text-xs text-stone-500 font-sans">
              Selected Studies in Terroir & Materiality
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secondaryStories.map((art) => (
              <ArticleCard
                key={art.id}
                article={art}
                onSelect={handleSelectArticle}
                isSaved={savedIds.includes(art.id)}
                onToggleSave={handleToggleSave}
              />
            ))}
          </div>
        </section>

        {/* Editorial Pullquote Break */}
        <section className="my-16 py-12 px-8 border-y border-stone-300 bg-stone-100/50 rounded-sm text-center">
          <blockquote className="max-w-3xl mx-auto text-2xl lg:text-3xl font-editorial-serif italic text-stone-800 leading-snug">
            "To compose a fragrance is to sculpt wind. You do not paint on a canvas that remains static; you write upon living human warmth that breathes and fades with every passing hour."
          </blockquote>
          <figcaption className="text-xs uppercase tracking-widest text-stone-500 mt-4 font-sans">
            — Edmond Roudnitska, "L’Intimité du Nez", Grasse 1971
          </figcaption>
        </section>

        {/* Search, Filter & Complete Journal Archive */}
        <section id="archive" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-300">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-stone-500 font-sans block mb-1">
                The Complete Archive
              </span>
              <h2 className="text-3xl font-editorial-serif font-bold text-stone-900">
                Essays, Extractions & Olfactory Architecture
              </h2>
            </div>

            {/* Live Search & Sort Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Filter articles, notes, noses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 text-xs px-3.5 py-2 pl-9 rounded border border-stone-300 bg-white placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-500 font-sans"
                />
                <svg
                  className="w-3.5 h-3.5 absolute left-3 top-3 text-stone-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs px-3 py-2 rounded border border-stone-300 bg-white text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-500 font-sans"
              >
                <option value="date">Order: Curated Edition</option>
                <option value="readTime">Order: Reading Length</option>
                <option value="title">Order: Title (A–Z)</option>
              </select>
            </div>
          </div>

          {/* Interactive Category Filter Tabs (Compliant with buttons rule) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs rounded transition-colors whitespace-nowrap shrink-0 font-sans ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-white font-medium shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Archive Grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-stone-300 rounded p-8">
              <p className="text-stone-600 text-sm font-sans mb-3">
                No essays matched your filter query "{searchQuery}" in category "{selectedCategory}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Essays');
                }}
                className="text-xs font-semibold uppercase tracking-wider text-stone-900 underline font-sans"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((art) => (
                <ArticleCard
                  key={art.id}
                  article={art}
                  onSelect={handleSelectArticle}
                  isSaved={savedIds.includes(art.id)}
                  onToggleSave={handleToggleSave}
                />
              ))}
            </div>
          )}
        </section>

        {/* Olfactory Accord Spotlight Strip */}
        <section className="p-6 lg:p-8 rounded border border-stone-300 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-3">
              <div className="rounded overflow-hidden aspect-[4/3] border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80"
                  alt="Florentine Iris Pallida in Tuscan Light"
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="text-[11px] uppercase tracking-widest text-stone-500 font-sans block mb-1">
                Botanical Study of the Month
              </span>
              <h3 className="text-2xl font-editorial-serif font-bold text-stone-900 mb-2">
                The Slow Chemistry of Orris Butter: Five Years in the Dark
              </h3>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Freshly dug Tuscan Iris pallida rhizomes are completely odorless. Why does it take two full years of barnyard desiccation for irones to crystallize into perfumery's most valuable waxy butter?
              </p>
            </div>

            <div className="lg:col-span-3 flex justify-start lg:justify-end">
              <button
                onClick={() => {
                  const orrisArticle = ARTICLES.find((a) => a.slug === 'iris-pallida-and-the-five-year-patience');
                  if (orrisArticle) handleSelectArticle(orrisArticle);
                }}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors whitespace-nowrap font-sans"
              >
                Read Botanical Study →
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Inline Dispatch Card */}
        <section className="p-10 rounded border border-stone-300 bg-stone-100/70 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-4">
            <span className="text-[11px] uppercase tracking-widest text-stone-500 font-sans block">
              Bi-Weekly Scholarly Monograph
            </span>
            <h3 className="text-3xl font-editorial-serif font-bold text-stone-900">
              Receive The Sunday Sillage
            </h3>
            <p className="text-xs text-stone-600 font-sans leading-relaxed">
              Delivered straight to 14,000+ perfumers, botanical chemists, and discerning scent collectors across 42 countries. Pure technical rigor; zero commercial product endorsements.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsNewsletterOpen(true)}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors font-sans shadow-xs"
              >
                Join the Sillage Fellowship
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Curatorial Institutional Footer */}
      <footer className="mt-20 border-t border-stone-300 bg-[#F4F1EA] text-stone-600 text-xs font-sans">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2 space-y-3">
              <span className="text-base font-editorial-serif font-bold text-stone-900 block">
                SILLAGE & MATIÈRE
              </span>
              <p className="text-xs text-stone-600 leading-relaxed max-w-sm">
                An independent international journal devoted to the architecture of scent, raw botanical harvesting, GC-MS molecular synthesis, and historical perfume reconstruction.
              </p>
              <div className="text-[11px] text-stone-500">
                Editorial Bureaus: Paris · Grasse · Cambridge · Muscat
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-900 block mb-3">
                Publications & Tools
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => {
                      setSelectedCategory('All Essays');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-stone-900 transition-colors"
                  >
                    All 10 Essays
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsLexiconOpen(true)}
                    className="hover:text-stone-900 transition-colors"
                  >
                    The Olfactory Lexicon
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsSavedDrawerOpen(true)}
                    className="hover:text-stone-900 transition-colors"
                  >
                    Reading Portfolio ({savedIds.length})
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsNewsletterOpen(true)}
                    className="hover:text-stone-900 transition-colors"
                  >
                    The Sunday Sillage
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-900 block mb-3">
                Curatorial Governance
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => setIsMastheadOpen(true)}
                    className="hover:text-stone-900 transition-colors"
                  >
                    Editorial Board & Masthead
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsMastheadOpen(true)}
                    className="hover:text-stone-900 transition-colors"
                  >
                    Ethics & Non-Sponsorship Charter
                  </button>
                </li>
                <li>
                  <span className="text-stone-500">
                    ISSN 2841-9482 (Digital Archive)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
            <div>
              © 2026 Sillage & Matière. All rights reserved. Published for the cultivation of olfactory discernment.
            </div>
            <div className="flex items-center gap-4">
              <span>Formatted in Cormorant Garamond & Plus Jakarta Sans</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals & Drawers */}
      <LexiconModal
        isOpen={isLexiconOpen}
        onClose={() => setIsLexiconOpen(false)}
      />
      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />
      <MastheadModal
        isOpen={isMastheadOpen}
        onClose={() => setIsMastheadOpen(false)}
      />
      <SavedDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedArticles={savedArticles}
        onSelectArticle={handleSelectArticle}
        onRemoveSaved={handleRemoveSaved}
      />
    </div>
  );
}
