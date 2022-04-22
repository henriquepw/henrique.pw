import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import * as themes from '@/styles/themes';

interface ThemeData {
  nextTheme(): void;
  setActiveColor(color?: string): void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeData>({} as ThemeData);

const themeList = Object.values(themes);

const THEME_INDEX_KEY = '@henrique.pw/themeIndex';

function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window === 'undefined') return 0;

    const themeIndex = localStorage.getItem(THEME_INDEX_KEY);

    return parseInt(themeIndex || '0', 10) || 0;
  });

  const [theme, setTheme] = useState(themeList[currentTheme]);

  const nextTheme = useCallback(() => {
    setCurrentTheme(() => (currentTheme + 1) % themeList.length);
  }, [currentTheme]);

  const setActiveColor = useCallback(
    (color?: string) => {
      setTheme(state => ({
        ...state,
        colors: {
          ...state.colors,
          active: color || themeList[currentTheme].colors.active,
        },
      }));
    },
    [currentTheme],
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_INDEX_KEY, String(currentTheme));
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ nextTheme, setActiveColor }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

function useTheme(): ThemeData {
  const context = useContext(ThemeContext);
  return context;
}

export { ThemeProvider, useTheme };
