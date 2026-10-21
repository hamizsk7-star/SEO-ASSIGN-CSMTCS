import React, { useState, useEffect } from 'react';
import { Article, Comment } from '../types/blog';
import { ArtVisual } from './ArtVisual';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  allArticles: Article[];
  isSaved: boolean;
  onToggleSave: (e: React.MouseEvent, articleId: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onBack,
  onSelectArticle,
  allArticles,
  isSaved,
  onToggleSave
}) => {
  // Reading preferences
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [readingTheme, setReadingTheme] = useState<'parchment' | 'alabaster' | 'dark'>('parchment');
  const [claps, setClaps] = useState<number>(() => {
    const saved = localStorage.getItem(`claps_${article.id}`);
    return saved ? parseInt(saved, 10) : article.initialClaps;
  });
  const [hasClapped, setHasClapped] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Audio narration
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isAudioSupported, setIsAudioSupported] = useState(false);

  // Comments
  const [comments, setComments] = useState<Comment[]>(() => {
    const saved = localStorage.getItem(`comments_${article.id}`);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // fallback
      }
    }
    // Default thoughtful initial comments
    return [
      {
        id: `c1-${article.id}`,
        articleId: article.id,
        author: 'Guillaume Bernard',
        role: 'Formulation Chemist, Grasse',
        text: 'The analysis of the volatility gradients in this piece mirrors exactly what we observe in our pilot fractionating columns. Truly exceptional depth.',
        date: '3 days ago'
      },
      {
        id: `c2-${article.id}`,
        articleId: article.id,
        author: 'Ananya Rao',
        role: 'Botanical Conservator',
        text: 'Appreciate the historical context regarding artisanal distillation versus industrialized bulk processing. The difference in trace sesquiterpenes is night and day.',
        date: '1 week ago'
      }
    ];
  });
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentRole, setNewCommentRole] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);

  // Toast for link copied
  const [showCopyToast, setShowCopyToast] = useState(false);

  // Scroll tracking for reading progress
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.id]);

  // Audio setup
  useEffect(() => {
    setIsAudioSupported(typeof window !== 'undefined' && 'speechSynthesis' in window);
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleToggleAudio = () => {
    if (!isAudioSupported) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const narrativeText = `${article.title}. By ${article.author.name}. ${article.deck}. ${article.excerpt}`;
      const utterance = new SpeechSynthesisUtterance(narrativeText);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const handleClap = () => {
    const updated = claps + 1;
    setClaps(updated);
    setHasClapped(true);
    localStorage.setItem(`claps_${article.id}`, updated.toString());
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;

    const newComment: Comment = {
      id: `comm_${Date.now()}`,
      articleId: article.id,
      author: newCommentName.trim(),
      role: newCommentRole.trim() || 'Reader & Olfactory Enthusiast',
      text: newCommentText.trim(),
      date: 'Just now'
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(`comments_${article.id}`, JSON.stringify(updated));
    setNewCommentName('');
    setNewCommentRole('');
    setNewCommentText('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 3500);
  };

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShowCopyToast(true);
      setTimeout(() => setShowCopyToast(false), 2500);
    }
  };

  // Theme styles
  const themeClasses = {
    parchment: 'bg-[#FBF9F5] text-stone-900',
    alabaster: 'bg-white text-stone-900',
    dark: 'bg-[#181512] text-[#E8E4DF] tracking-wide'
  }[readingTheme];

  const proseSizeClasses = {
    sm: 'text-[15px] leading-[1.8]',
    base: 'text-[17px] leading-[1.85]',
    lg: 'text-[19px] leading-[1.9]'
  }[fontSize];

  // Related articles (exclude current)
  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className={`min-h-screen transition-colors duration-200 ${themeClasses}`}>
      {/* Fixed top reading depth bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-stone-900 dark:bg-amber-400 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Reading utility bar */}
      <div className="sticky top-0 z-30 border-b border-stone-200/80 dark:border-stone-800 bg-inherit/95 backdrop-blur-md transition-colors">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>All Essays</span>
          </button>

          {/* Reading tools: Audio, Font size, Theme, Save, Share */}
          <div className="flex items-center gap-2 lg:gap-4 text-xs font-medium">
            {isAudioSupported && (
              <button
                onClick={handleToggleAudio}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded border transition-colors ${
                  isPlayingAudio
                    ? 'border-stone-900 bg-stone-900 text-white dark:bg-white dark:text-stone-900'
                    : 'border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:text-stone-900'
                }`}
                title={isPlayingAudio ? 'Stop narration' : 'Listen to essay excerpt'}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {isPlayingAudio ? (
                    <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                  ) : (
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  )}
                </svg>
                <span className="hidden sm:inline">{isPlayingAudio ? 'Pause Narration' : 'Listen'}</span>
              </button>
            )}

            {/* Font size segmented buttons */}
            <div className="hidden sm:flex items-center border border-stone-200 dark:border-stone-700 rounded p-0.5">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-0.5 text-xs rounded ${fontSize === 'sm' ? 'bg-stone-200 dark:bg-stone-700 font-bold' : 'text-stone-500'}`}
                title="Small text"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`px-2 py-0.5 text-xs rounded ${fontSize === 'base' ? 'bg-stone-200 dark:bg-stone-700 font-bold' : 'text-stone-500'}`}
                title="Standard text"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-0.5 text-xs rounded ${fontSize === 'lg' ? 'bg-stone-200 dark:bg-stone-700 font-bold' : 'text-stone-500'}`}
                title="Large text"
              >
                A+
              </button>
            </div>

            {/* Reading Mode theme */}
            <div className="flex items-center border border-stone-200 dark:border-stone-700 rounded p-0.5">
              <button
                onClick={() => setReadingTheme('parchment')}
                className={`px-2 py-0.5 rounded text-[11px] ${readingTheme === 'parchment' ? 'bg-[#ECE5D8] text-stone-900 font-semibold' : 'text-stone-500'}`}
                title="Parchment mode"
              >
                Sepia
              </button>
              <button
                onClick={() => setReadingTheme('alabaster')}
                className={`px-2 py-0.5 rounded text-[11px] ${readingTheme === 'alabaster' ? 'bg-stone-200 text-stone-900 font-semibold' : 'text-stone-500'}`}
                title="Alabaster mode"
              >
                Light
              </button>
              <button
                onClick={() => setReadingTheme('dark')}
                className={`px-2 py-0.5 rounded text-[11px] ${readingTheme === 'dark' ? 'bg-stone-700 text-white font-semibold' : 'text-stone-500'}`}
                title="Dark Atelier mode"
              >
                Dark
              </button>
            </div>

            <button
              onClick={(e) => onToggleSave(e, article.id)}
              className={`p-1.5 rounded border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors ${
                isSaved ? 'text-amber-800 dark:text-amber-300' : 'text-stone-500'
              }`}
              title={isSaved ? 'Saved to reading list' : 'Save for later'}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill={isSaved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </button>

            <button
              onClick={handleCopyLink}
              className="p-1.5 rounded border border-stone-200 dark:border-stone-700 text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
              title="Copy essay link"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Copy link toast */}
      {showCopyToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white text-xs px-4 py-2.5 rounded shadow-lg border border-stone-700 animate-fade-in font-sans">
          Permanent link copied to clipboard
        </div>
      )}

      {/* Article Header & Canvas */}
      <article className="max-w-3xl mx-auto px-6 py-12 lg:py-16">
        {/* Zero-Pill metadata header */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-4 font-sans">
          <span className="font-semibold text-stone-700 dark:text-stone-300">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.publishedDate}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">{article.readTime}</span>
        </div>

        {/* Title & Deck with text-wrap: balance */}
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-bold text-stone-900 dark:text-stone-50 leading-[1.15] mb-6 tracking-tight"
          style={{ textWrap: 'balance' }}
        >
          {article.title}
        </h1>

        <p
          className="text-lg lg:text-xl font-editorial-serif italic text-stone-600 dark:text-stone-300 leading-relaxed mb-8 border-b border-stone-200 dark:border-stone-800 pb-8"
          style={{ textWrap: 'balance' }}
        >
          {article.deck}
        </p>

        {/* Author Byline */}
        <div className="flex items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            {article.author.avatarUrl ? (
              <img
                src={article.author.avatarUrl}
                alt={article.author.name}
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
                className="w-11 h-11 rounded-full object-cover border border-stone-300 dark:border-stone-700 shadow-xs"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : null}
            <div className="w-11 h-11 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-serif font-semibold text-sm flex items-center justify-center border border-stone-300 dark:border-stone-700 shrink-0">
              {article.author.initials}
            </div>
            <div>
              <span className="text-sm font-semibold text-stone-900 dark:text-stone-100 font-sans block">
                {article.author.name}
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400 font-sans block">
                {article.author.role}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 font-sans">
            <button
              onClick={handleClap}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all ${
                hasClapped
                  ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200'
                  : 'border-stone-200 dark:border-stone-800 hover:border-stone-400'
              }`}
            >
              <span>👏</span>
              <span className="tabular-nums font-semibold">{claps}</span>
            </button>
          </div>
        </div>

        {/* Hero Photographic & Artwork presentation */}
        <div className="rounded border border-stone-200 dark:border-stone-800 overflow-hidden mb-10 shadow-sm">
          <ArtVisual
            type={article.visualType}
            imageUrl={article.imageUrl}
            photoCredit={article.photoCredit}
            variant="hero"
            title={article.title}
            className="w-full"
          />
          <div className="p-3 bg-stone-100/70 dark:bg-stone-900/60 border-t border-stone-200 dark:border-stone-800 text-xs italic font-editorial-serif text-stone-600 dark:text-stone-400 flex items-center justify-between flex-wrap gap-2">
            <span>Figure I: Archival study and olfactory geometry for {article.title}.</span>
            {article.photoCredit && (
              <span className="not-italic text-[11px] font-sans text-stone-500 dark:text-stone-400">
                {article.photoCredit}
              </span>
            )}
          </div>
        </div>

        {/* Olfactory Pyramid / Accords Structure Ribbon */}
        <div className="my-10 p-6 rounded border border-stone-200/90 dark:border-stone-800 bg-stone-50/60 dark:bg-stone-900/40">
          <span className="text-[11px] uppercase tracking-widest font-sans font-bold text-stone-500 dark:text-stone-400 block mb-3">
            Olfactory Architecture & Accords
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans pb-4 border-b border-stone-200 dark:border-stone-800">
            <div>
              <span className="text-stone-400 dark:text-stone-500 uppercase tracking-wider text-[10px] block mb-1">
                Head / Volatile Top
              </span>
              <ul className="text-stone-800 dark:text-stone-200 space-y-0.5">
                {article.notes.top.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-stone-400 dark:text-stone-500 uppercase tracking-wider text-[10px] block mb-1">
                Heart / Modulating Core
              </span>
              <ul className="text-stone-800 dark:text-stone-200 space-y-0.5">
                {article.notes.heart.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-stone-400 dark:text-stone-500 uppercase tracking-wider text-[10px] block mb-1">
                Base / Fixed Drydown
              </span>
              <ul className="text-stone-800 dark:text-stone-200 space-y-0.5">
                {article.notes.base.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-3 flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs italic font-editorial-serif text-stone-600 dark:text-stone-300">
              Character: {article.notes.character}
            </span>
            <span className="text-[11px] text-stone-600 dark:text-stone-400 font-sans uppercase tracking-widest">
              Analytical Spectrum
            </span>
          </div>
        </div>

        {/* Long-Form Reading Content */}
        <div className={`space-y-6 text-stone-800 dark:text-stone-200 font-editorial-sans ${proseSizeClasses}`}>
          {article.content.map((block, idx) => {
            if (block.type === 'paragraph') {
              // Apply drop cap to first paragraph
              if (idx === 0) {
                return (
                  <p
                    key={idx}
                    className="first-letter:text-5xl first-letter:font-editorial-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900 dark:first-letter:text-stone-100"
                  >
                    {block.text}
                  </p>
                );
              }
              return <p key={idx}>{block.text}</p>;
            }

            if (block.type === 'heading2') {
              return (
                <h2
                  key={idx}
                  className="text-2xl font-editorial-serif font-bold text-stone-900 dark:text-stone-100 pt-6 pb-1 tracking-tight"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === 'heading3') {
              return (
                <h3
                  key={idx}
                  className="text-lg font-editorial-serif font-semibold text-stone-900 dark:text-stone-100 pt-4"
                >
                  {block.text}
                </h3>
              );
            }

            if (block.type === 'pullquote') {
              return (
                <figure
                  key={idx}
                  className="my-10 py-6 border-y border-stone-300 dark:border-stone-700 text-center px-4"
                >
                  <blockquote className="text-xl sm:text-2xl font-editorial-serif italic text-stone-800 dark:text-stone-200 leading-snug">
                    "{block.quote}"
                  </blockquote>
                  {block.attribution && (
                    <figcaption className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mt-3 font-sans">
                      — {block.attribution}
                    </figcaption>
                  )}
                </figure>
              );
            }

            if (block.type === 'aside') {
              return (
                <div
                  key={idx}
                  className="my-8 p-5 rounded border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 text-xs font-sans text-stone-700 dark:text-stone-300"
                >
                  <span className="font-semibold text-stone-900 dark:text-stone-100 uppercase tracking-wider block mb-1">
                    {block.title}
                  </span>
                  <p className="leading-relaxed">{block.text}</p>
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* Article Tags (Zero-Pill: clean text with dividers) */}
        <div className="mt-12 pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center flex-wrap gap-2 text-xs text-stone-500 font-sans">
          <span className="font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300">
            Archival Index:
          </span>
          {article.tags.map((tag, i) => (
            <React.Fragment key={tag}>
              <span className="hover:text-stone-900 dark:hover:text-white transition-colors">
                #{tag}
              </span>
              {i < article.tags.length - 1 && <span aria-hidden="true">·</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="mt-10 p-6 rounded border border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-900/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {article.author.avatarUrl ? (
            <img
              src={article.author.avatarUrl}
              alt={article.author.name}
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              className="w-14 h-14 rounded-full object-cover border border-stone-300 dark:border-stone-700 shadow-xs"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : null}
          <div className="w-14 h-14 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-serif font-bold text-lg flex items-center justify-center shrink-0">
            {article.author.initials}
          </div>
          <div>
            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 font-sans">
              About {article.author.name}
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 leading-relaxed font-sans">
              {article.author.bio}
            </p>
          </div>
        </div>

        {/* Reader Resonance & Claps */}
        <div className="mt-12 py-8 border-y border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-base font-editorial-serif font-bold text-stone-900 dark:text-stone-100 block">
              Did this essay resonate with you?
            </span>
            <span className="text-xs text-stone-500 dark:text-stone-400 font-sans">
              Support independent, peer-reviewed olfactory scholarship.
            </span>
          </div>
          <button
            onClick={handleClap}
            className="flex items-center gap-2 px-5 py-2.5 rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-700 text-stone-900 dark:text-stone-100 text-sm font-medium transition-all shadow-sm active:scale-95"
          >
            <span>👏 Applaud Essay</span>
            <span className="tabular-nums font-bold text-amber-700 dark:text-amber-400">
              {claps}
            </span>
          </button>
        </div>

        {/* Reader Discussion / Comments Section */}
        <section className="mt-14 pt-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-editorial-serif font-bold text-stone-900 dark:text-stone-100">
              Reader Discourse ({comments.length})
            </h3>
            <span className="text-xs text-stone-500 dark:text-stone-400 font-sans">
              Moderated Botanical Forum
            </span>
          </div>

          {/* New comment form */}
          <form
            onSubmit={handleAddComment}
            className="mb-10 p-5 rounded border border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-900/40"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-3 font-sans">
              Join the Conversation
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                placeholder="Your Name (e.g. Jean Dupont)"
                value={newCommentName}
                onChange={(e) => setNewCommentName(e.target.value)}
                required
                className="w-full text-xs px-3 py-2 rounded border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400"
              />
              <input
                type="text"
                placeholder="Role / Atelier (e.g. Independent Perfumer)"
                value={newCommentRole}
                onChange={(e) => setNewCommentRole(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400"
              />
            </div>
            <textarea
              rows={3}
              placeholder="Share your perspective or experience with this extraction/technique..."
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              required
              className="w-full text-xs px-3 py-2 rounded border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400 mb-3"
            />
            <div className="flex items-center justify-between">
              {commentSuccess ? (
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-sans">
                  Comment published to journal.
                </span>
              ) : (
                <span className="text-[11px] text-stone-400 font-sans">
                  Published immediately under our ethical guidelines.
                </span>
              )}
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white rounded transition-colors whitespace-nowrap"
              >
                Post Contribution
              </button>
            </div>
          </form>

          {/* Comment list */}
          <div className="space-y-4">
            {comments.map((comm) => (
              <div
                key={comm.id}
                className="p-5 rounded border border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-900/30 font-sans"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-stone-900 dark:text-stone-100">
                      {comm.author}
                    </span>
                    {comm.role && (
                      <span className="text-[11px] text-stone-500 dark:text-stone-400">
                        · {comm.role}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-stone-400 tabular-nums">
                    {comm.date}
                  </span>
                </div>
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  {comm.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Articles Footer */}
        <section className="mt-16 pt-10 border-t border-stone-200 dark:border-stone-800">
          <span className="text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 block mb-6 font-sans">
            Related Essays in the Archive
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectArticle(rel)}
                className="group cursor-pointer border border-stone-200 dark:border-stone-800 rounded overflow-hidden hover:border-stone-400 dark:hover:border-stone-600 transition-colors bg-white dark:bg-stone-900/40 flex flex-col justify-between"
              >
                <div className="overflow-hidden">
                  <ArtVisual
                    type={rel.visualType}
                    imageUrl={rel.imageUrl}
                    photoCredit={rel.photoCredit}
                    variant="card"
                    title={rel.title}
                    className="w-full aspect-[16/10]"
                  />
                </div>
                <div className="p-4">
                  <div className="text-[10px] uppercase tracking-wider text-stone-500 mb-1 font-sans">
                    {rel.category}
                  </div>
                  <h4 className="text-sm font-editorial-serif font-bold text-stone-900 dark:text-stone-100 group-hover:text-stone-700 dark:group-hover:text-stone-300 transition-colors line-clamp-2 mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2 font-sans">
                    {rel.deck}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};
