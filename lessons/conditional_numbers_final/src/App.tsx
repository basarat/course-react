import { useState } from "react";
import { db } from "./db";

export default function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const addMessage = () => {
    if (messages.length === db.length) return;
    setMessages([...messages, db[messages.length]]);
  }
  const removeMessage = () =>
    setMessages(messages.slice(0, messages.length - 1));

  return (
    <div className="App">
      <div>
        <button onClick={addMessage}>Add</button>
        <button onClick={removeMessage}>Remove</button>
      </div>
      {!!messages.length && (
        <ul>
          {messages.map((message) => (
            <li>{message}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
