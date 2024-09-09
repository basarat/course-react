import { useState } from "react";
import { Form } from "./Form";

export default function App() {
  const [username, setUsername] = useState("");

  return (
    <>
      <Form
        onSubmit={() => {
          alert("Submitted!");
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Ensure that buttons not intended for form submission have `type='button'` */}
        <div>
          <button type="button" onClick={() => setUsername("Alpha")}>Alpha</button>
          <button type="button" onClick={() => setUsername("Beta")}>Beta</button>
          {/* Without type="button" it submits the form as a side-effect 😱 */}
          <button onClick={() => setUsername("Gamma")}>Gamma</button>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </>
  );
}
