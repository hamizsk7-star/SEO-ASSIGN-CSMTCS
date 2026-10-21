export interface Author {
  name: string;
  role: string;
  initials: string;
  bio: string;
  avatarUrl?: string;
}

export interface OlfactoryNotes {
  top: string[];
  heart: string[];
  base: string[];
  character: string;
}

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading2'; text: string }
  | { type: 'heading3'; text: string }
  | { type: 'pullquote'; quote: string; attribution?: string }
  | { type: 'aside'; title: string; text: string }
  | { type: 'figure'; caption: string; visualType: string }
  | { type: 'notesList'; title: string; items: string[] };

export interface Article {
  id: string;
  slug: string;
  title: string;
  deck: string;
  category: string;
  publishedDate: string;
  readTime: string;
  author: Author;
  visualType: 'ambergris' | 'petrichor' | 'rose' | 'oud' | 'pyramid' | 'frankincense' | 'skin' | 'orris' | 'minimalist' | 'tuberose';
  imageUrl: string;
  photoCredit: string;
  palette: {
    bg: string;
    accent: string;
    subtle: string;
  };
  notes: OlfactoryNotes;
  excerpt: string;
  content: ContentBlock[];
  tags: string[];
  initialClaps: number;
}

export interface Comment {
  id: string;
  articleId: string;
  author: string;
  text: string;
  date: string;
  role?: string;
}

export interface LexiconTerm {
  term: string;
  french?: string;
  category: 'Technique' | 'Raw Material' | 'Olfactory Family' | 'Science';
  pronunciation?: string;
  definition: string;
  etymology?: string;
  exampleInLiterature?: string;
}
