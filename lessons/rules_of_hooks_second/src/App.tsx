import { useState } from "react";

/**
 * Rule 2:
 * There must always be the same number of hook calls in a fixed order
 */

export default function App() {
  // ✅ This is a valid hook call
  // ∵ they will always be called in the same order when the component renders
  const [first, setFirst] = useState("Jane");
  const [second, setSecond] = useState("John");

  let third: string | undefined;
  let setThird: (value: string) => void;
  if (first === second) {
    // ❌ This will fail because the hook may or may not be called
    // [third, setThird] = useState('Doe');
  }

  return (
    <div>
      <input value={first} onChange={(e) => setFirst(e.target.value)} />
      <input value={second} onChange={(e) => setSecond(e.target.value)} />
      {!!third && (
        <input value={third} onChange={(e) => setThird(e.target.value)} />
      )}
    </div>
  );
}
