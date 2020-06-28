import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      active: string;
      background: string;
      primaryText: string;
      primaryBackground: string;
      secondaryText: string;
      secondaryBackground: string;
    };
  }
}
