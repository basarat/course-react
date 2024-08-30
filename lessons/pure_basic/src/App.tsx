import React from "react";
import { useState } from "react";
import styles from "./App.module.css";
import { lyrics } from "./lyrics";

export default function App() {
  const [count, setCount] = useState(0);
  const inc = () => setCount((count) => count + 1);

  return (
    <div>
      <button className={styles.button} onClick={inc}>
        + {count}
      </button>

      {lyrics.map((lyric) => (
        <Lyric key={lyric.id} value={lyric.value} />
      ))}
    </div>
  );
}

// `React.memo` => Lyric will only render if `value` changes
const Lyric = React.memo((props: { value: string }) => {
  console.log("rendering");
  return <div className={styles.value}>🎵 {props.value}</div>;
});
