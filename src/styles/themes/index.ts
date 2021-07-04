import { DefaultTheme } from 'styled-components';

import darkTheme from './dark';
import lightTheme from './light';
import vaporwaveTheme from './vaporwave';

export interface ThemeData {
  name: string;
  colors: {
    active: string;
    background: string;
    secondaryBackground: string;
    text: string;
  };
}

function themeFactory({ name, colors }: ThemeData): DefaultTheme {
  return {
    name,
    colors,
    fonts: {
      family: {
        heading: 'Raleway, sans-serif',
        paragraph: "'Space Mono', monospace",
      },
      sizes: {
        h1: '4.209rem',
        h2: '3.157rem',
        h3: '2.369rem',
        h4: '1.777rem',
        h5: '1.333rem',
        p: '1rem',
      },
    },
    baseSpace: 0.25, // 0.24rem = 4px
  };
}

export const dark = themeFactory(darkTheme);
export const light = themeFactory(lightTheme);
export const vaporwave = themeFactory(vaporwaveTheme);
