import { useState, memo } from "react";
import styles from "./App.module.css";
import { lyrics } from "./lyrics";

export default function App() {
  const [messages, setMessages] = useState(lyrics);

  const removeMessage = (index: number) =>
    setMessages((messages) => messages.filter((_, i) => i !== index));

  return (
    <div>
      {messages.map((message, index) => {
        return (
          <div key={message.id} className={styles.message}>
            <Lyric value={message.value} />
            <button className={styles.button} onClick={() => removeMessage(index)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

const Lyric = memo((props: { value: string }) => {
  console.log('Rendering');
  return (
    <div className={styles.value}>🎵 {props.value}</div>
  );
});