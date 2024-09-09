import { useState } from "react";
import { Form } from "./Form";

export default function App() {
  const [message, setMessage] = useState("");
  const error = !message.trim() ? "Message is required" : null;

  return (
    <>
      <Form
        onSubmit={() => {
          alert("Submitted! " + message);
        }}
      >
        <label htmlFor="message">Message</label>
        <input
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {error && <div style={{ color: "purple" }}>{error}</div>}

        {/* You can disable a form submission by disabling the submit button */}
        <button type="submit" disabled={!!error}>
          Submit
        </button>
      </Form>
    </>
  );
}
