import styles from "./App.module.css";
import { Button } from "./Button";

// focus(1:3)
/**
 * Notice that no ThemeProvider is used
 */
export function App() {
  return (
    <div className={styles.root}>
      <Button onClick={() => alert("alpha")}>Alpha</Button>
      <Button onClick={() => alert("beta")}>Beta</Button>
      <Form />
    </div>
  );
}

const Form = () => <Button onClick={() => alert("submit")}>Submit</Button>;
