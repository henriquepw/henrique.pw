export interface Section {
  name: string;
  slug: string;
  id: string;
}

export const SECTIONS_IDS = {
  home: '2wkBThk2SvuvNLP8wxgjo0',
  about: '3VFICVTXkWdWm4o575D70f',
  contact: '3MKf7Xj6N9I5hNjrOsi05i',
  works: '2f5AFb2RXWqMbP3SHolZ1U',
};

export const SECTIONS_PT: Section[] = [
  { name: 'home', slug: '/', id: SECTIONS_IDS.home },
  { name: 'projetos', slug: '/works', id: 'works' },
  { name: 'sobre', slug: '/about', id: SECTIONS_IDS.about },
  { name: 'contato', slug: '/contact', id: SECTIONS_IDS.contact },
];

export const SECTIONS_EN: Section[] = [
  { name: 'Home', slug: '/', id: SECTIONS_IDS.home },
  { name: 'Works', slug: '/works', id: 'works' },
  { name: 'About', slug: '/about', id: SECTIONS_IDS.about },
  { name: 'contact', slug: '/contact', id: SECTIONS_IDS.contact },
];

export const SECTIONS = {
  pt: SECTIONS_PT,
  en: SECTIONS_EN,
};
