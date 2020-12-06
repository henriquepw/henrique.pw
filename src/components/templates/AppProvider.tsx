import React from 'react';

import { ThemeProvider } from 'styled-components';

import darkTheme from '@/styles/themes/dark';

const AppProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default AppProvider;
