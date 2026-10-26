import type { Lang } from './content';

export const paths = {
  de: { home: '/', cv: '/cv' },
  en: { home: '/en/', cv: '/en/cv' },
} as const;

export const otherLang = (l: Lang): Lang => (l === 'de' ? 'en' : 'de');
