import styles from "./App.module.css";
import { Button } from "./Button";

import { ThemeProvider } from "./ThemeContext";

export default function AppWithTheme() {
  // focus(2:4)
  return (
    <ThemeProvider value={"dark"}>
      <App />
    </ThemeProvider>
  );
}

export function App() {
  // focus(5:7)
  return (
    <div className={styles.root}>
      <Button onClick={() => alert("alpha")}>Alpha</Button>
      <Button onClick={() => alert("beta")}>Beta</Button>
      <ThemeProvider value={"light"}>
        <Form />
      </ThemeProvider>
    </div>
  );
}

const Form = () => <Button onClick={() => alert("submit")}>Submit</Button>;
