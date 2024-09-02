import { createContext, useContext } from "react";

const ThemeContext = createContext<"light" | "dark">("dark");

export const ThemeProvider = ThemeContext.Provider;

// focus(1:3)
/** Prefer useTheme for function components */
export const useTheme = () => {
  return useContext(ThemeContext);
};

// focus(1:2)
/** Export the ThemeConsumer component for class components */
export const ThemeConsumer = ThemeContext.Consumer;
