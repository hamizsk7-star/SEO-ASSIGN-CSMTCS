import React, { useState } from 'react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState<'all' | 'formulation' | 'botanicals' | 'history'>('all');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3s
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FBF9F5] w-full max-w-lg rounded border border-stone-300 shadow-2xl p-8 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-800 rounded transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full border border-stone-400 mx-auto flex items-center justify-center mb-4 text-stone-800">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className="text-2xl font-editorial-serif font-bold text-stone-900 mb-2">
              Subscription Registered
            </h3>
            <p className="text-xs text-stone-600 font-sans leading-relaxed max-w-sm mx-auto">
              You will receive the next edition of <em>The Sunday Sillage</em> dispatch directly at <strong className="text-stone-900">{email}</strong>. No advertisements. Only rigorous olfactory inquiry.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 rounded hover:bg-stone-800 font-sans"
            >
              Return to Journal
            </button>
          </div>
        ) : (
          <div>
            <div className="text-[11px] uppercase tracking-widest text-stone-500 font-sans mb-1">
              Independent Dispatch
            </div>
            <h3 className="text-3xl font-editorial-serif font-bold text-stone-900 mb-2">
              The Sunday Sillage
            </h3>
            <p className="text-xs text-stone-600 font-sans leading-relaxed mb-6">
              A bi-weekly long-form letter delivered to master noses, botanical historians, and thoughtful collectors. Detailed GC-MS breakdowns, raw material provenance, and unfiltered critical essays.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-700 block mb-1 font-sans">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="nose@atelier.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded border border-stone-300 bg-white placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-500 font-sans"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-700 block mb-1 font-sans">
                  Primary Area of Inquiry
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value as any)}
                  className="w-full text-xs px-3 py-2.5 rounded border border-stone-300 bg-white text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-500 font-sans"
                >
                  <option value="all">Complete Curated Dispatch (All Essays)</option>
                  <option value="formulation">Formulation Architecture & Synthetics</option>
                  <option value="botanicals">Rare Botanicals, Terroir & Distillations</option>
                  <option value="history">Historical Archives & Extinct Formulations</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors font-sans"
                >
                  Request Dispatch Access
                </button>
              </div>

              <p className="text-[10px] text-stone-400 text-center font-sans">
                Zero sponsored product placement. Unsubscribe with one click anytime.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
