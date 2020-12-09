import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      active: string;
      background: string;
      secondaryBackground: string;
      text: string;
    };
    fonts: {
      sizes: Record<string, unknown>;
    };
  }
}
