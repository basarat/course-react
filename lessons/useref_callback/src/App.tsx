import styles from "./App.module.css";

// focus(1:5)
const logger = {
  set current(value: HTMLInputElement) {
    console.log("Setting", value);
  },
};

export default function App() {
  // focus(3:3)
  return (
    <div className={styles.root}>
      <input ref={logger} />
    </div>
  );
}
