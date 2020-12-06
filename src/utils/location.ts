const LOCATE_PATHS = {
  pt: 'pt-BR',
  en: 'en-US',
};

export function formatLocation(locate: string): string {
  return LOCATE_PATHS[locate] || locate;
}
