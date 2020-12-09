import React from 'react';

import { ThemeProvider } from 'styled-components';

import { light as defaultTheme } from '@/styles/themes';

const AppProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export default AppProvider;
