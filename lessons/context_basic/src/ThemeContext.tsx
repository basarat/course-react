import { createContext, useContext } from "react";

const ThemeContext = createContext<"light" | "dark">("dark");

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
  return useContext(ThemeContext);
};
