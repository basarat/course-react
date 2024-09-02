import { createContext, useContext } from 'react';

const ThemeContext = createContext<'light' | 'dark'>('dark');

export const useTheme = () => {
  return useContext(ThemeContext);
}

export const ThemeProvider = ThemeContext.Provider;