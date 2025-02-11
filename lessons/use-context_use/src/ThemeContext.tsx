import { createContext } from "react";

export const ThemeContext = createContext<"light" | "dark">("dark");

export const ThemeProvider = ThemeContext.Provider;
