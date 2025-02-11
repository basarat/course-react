import styles from "./App.module.css";
import { useState } from "react";
import { Button } from "./Button";

// focus(1:1)
import { ThemeContext } from "./ThemeContext";

export default function AppWithTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () =>
    setTheme((theme) => (theme == "light" ? "dark" : "light"));

  return (
    // focus(1:1)
    <ThemeContext.Provider value={theme}>
      <button
        className={theme == "light" ? styles.light : styles.dark}
        onClick={toggleTheme}
      >
        {theme == "light" ? "🌞" : "🌑"}
      </button>
      <App />
    </ThemeContext.Provider>
  );
}

export function App() {
  return (
    <div className={styles.root}>
      <Button onClick={() => alert("alpha")}>Alpha</Button>
      <Button onClick={() => alert("beta")}>Beta</Button>
    </div>
  );
}
