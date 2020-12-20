import React, { createContext, useContext, useEffect, useState } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import * as themes from '@/styles/themes';

interface ThemeData {
  nextTheme(): void;
}

const ThemeContext = createContext<ThemeData>({} as ThemeData);

const themeList = Object.values(themes);

const ThemeProvider: React.FC = ({ children }) => {
  const [currrentTheme, setCurrentTheme] = useState(() => {
    if (typeof window === 'undefined') return 0;

    const themeIndex = localStorage.getItem('@thehenry.dev/themeIndex');

    return parseInt(themeIndex, 10) || 0;
  });

  const theme = themeList[currrentTheme];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('@thehenry.dev/themeIndex', String(currrentTheme));
    }
  }, [currrentTheme]);

  function nextTheme(): void {
    setCurrentTheme(() => (currrentTheme + 1) % themeList.length);
  }

  return (
    <ThemeContext.Provider value={{ nextTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeData {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };
