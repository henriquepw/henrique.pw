import React from 'react';

import { ThemeProvider } from '@/hooks/useTheme';

const AppProvider: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProvider;
