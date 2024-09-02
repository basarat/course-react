import styles from "./App.module.css";

export default function App() {
  // focus(4:6)
  return (
    <div className={styles.root}>
      <input
        ref={(element: HTMLInputElement) => {
          console.log(element);
        }}
      />
    </div>
  );
}
