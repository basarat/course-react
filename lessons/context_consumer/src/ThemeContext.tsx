import { createContext, useContext } from "react";

const ThemeContext = createContext<"light" | "dark">("dark");

export const useTheme = () => {
  return useContext(ThemeContext);
};

// focus(1:2)
/** Export the ThemeConsumer component */
export const ThemeConsumer = ThemeContext.Consumer;

export const ThemeProvider = ThemeContext.Provider;
