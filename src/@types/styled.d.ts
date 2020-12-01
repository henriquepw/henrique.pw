import 'styled-components';

import { light } from '~/styles/themes';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: typeof light.primary;
    secondary: typeof light.secondary;
  }
}
