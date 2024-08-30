import React from "react";
import { useState } from "react";
import styles from "./App.module.css";
import { getLyrics } from "./lyrics";

export default function App() {
  const [count, setCount] = useState(0);
  const inc = () => setCount((count) => count + 1);
  const lyrics = getLyrics();

  return (
    <div>
      <button className={styles.button} onClick={inc}>
        + {count}
      </button>
      {lyrics.map((lyric) => (
        <Lyric key={lyric.id} lyric={lyric} />
      ))}
    </div>
  );
}

type LyricProps = {
  lyric: { id: string; value: string };
};

const Lyric = React.memo(
  (props: LyricProps) => {
    console.log("rendering");
    return <div className={styles.value}>🎵 {props.lyric.value}</div>;
  },
  /**
   * Custom comparison function.
   * Return `true` if props should be considered equal
   **/
  (prev, next) => {
    return prev.lyric.id === next.lyric.id;
  }
);
