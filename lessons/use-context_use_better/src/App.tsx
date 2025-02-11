import styles from "./App.module.css";
import { useState } from "react";
import { Button } from "./Button";

import { ThemeProvider } from "./ThemeContext";

export default function AppWithTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () =>
    setTheme((theme) => (theme == "light" ? "dark" : "light"));

  const [isCustom, setIsCustom] = useState(false);
  const toggleIsCustom = () => setIsCustom((isCustom) => !isCustom);

  return (
    <ThemeProvider value={theme}>
      <button
        className={theme == "light" ? styles.light : styles.dark}
        onClick={toggleTheme}
      >
        {theme == "light" ? "🌞" : "🌑"}
      </button>

      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id="accept"
          checked={isCustom}
          onChange={toggleIsCustom}
        />
        <label htmlFor="accept">Use Custom Styles</label>
      </div>

      <div className={styles.root}>
        <Button isCustom={isCustom} onClick={() => alert("alpha")}>
          Alpha
        </Button>
        <Button isCustom={isCustom} onClick={() => alert("beta")}>
          Beta
        </Button>
      </div>
    </ThemeProvider>
  );
}
