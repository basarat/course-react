import styles from "./App.module.css";
import { useState } from "react";
import { Button } from "./Button";

// focus(1:1)
import { ThemeProvider } from "./ThemeContext";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () =>
    setTheme((theme) => (theme == "light" ? "dark" : "light"));

  // focus(2:2)
  return (
    <ThemeProvider value={theme}>
      <button
        className={theme == "light" ? styles.light : styles.dark}
        onClick={toggleTheme}
      >
        {theme == "light" ? "🌞" : "🌑"}
      </button>
      <App />
    </ThemeProvider>
  );
}

export function AppWithTheme() {
  return (
    <div className={styles.root}>
      <Button onClick={() => alert("alpha")}>Alpha</Button>
      <Button onClick={() => alert("beta")}>Beta</Button>
      <Form />
    </div>
  );
}

const Form = () => <Button onClick={() => alert("submit")}>Submit</Button>;
