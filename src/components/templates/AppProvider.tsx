import React from 'react';

import { ScrollbarProvider } from '@/hooks/useScrollBar';
import { ThemeProvider } from '@/hooks/useTheme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <ScrollbarProvider>{children}</ScrollbarProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
