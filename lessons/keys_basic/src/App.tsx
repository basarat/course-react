import { useState } from "react";
import styles from "./App.module.css";
import { lyrics } from "./lyrics";

export default function App() {
  const [messages, setMessages] = useState(lyrics);

  const removeMessage = (index: number) =>
    setMessages((messages) => messages.filter((_, i) => i !== index));

  return (
    <div>
      {messages.map((message, i) => {
        return (
          <div className={styles.message}>
            <input className={styles.value} defaultValue={message.value} />
            <button className={styles.button} onClick={() => removeMessage(i)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
