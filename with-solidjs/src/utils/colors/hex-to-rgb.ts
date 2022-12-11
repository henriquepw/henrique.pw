export type RGB = {
  r: number;
  g: number;
  b: number;
};

export function hexToRgb(hex: string): RGB {
  const rgb = parseInt(hex, 16);

  const r = (rgb >> 16) & 255;
  const g = (rgb >> 8) & 255;
  const b = rgb & 255;

  return { r, g, b };
}
