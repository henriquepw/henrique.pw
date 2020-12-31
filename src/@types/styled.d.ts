import 'styled-components';

import { ThemeData } from '../styles/themes';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeData {
    fonts: {
      family: {
        heading: string;
        paragraph: string;
      };
      sizes: Record<string, string>;
    };
  }
}
