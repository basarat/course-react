import { createContext, useContext } from "react";

// focus(1:2)
/** In the absence of a ThemeProvider the value provided here is used */
const ThemeContext = createContext<"light" | "dark">("dark");

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ThemeContext.Provider;
