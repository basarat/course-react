import { useState } from "react";

/**
 * Rule 1:
 * Hook calls must be made from the top-level of a function component
 */

// ❌ This will fail because the hook call is not from a function component
// const [invalid, setInvalid] = useState('Jane');

function useCustom() {
  // ✅ This is a valid hook call
  // ∵ useCustom is called from the top-level of a function component
  const [third, setThird] = useState("Jack");
  return [third, setThird] as const;
}

export default function App() {
  // ✅ This is a valid hook call
  // ∵ we are at the top-level of the App function component
  const [first, setFirst] = useState("Jane");
  const [second, setSecond] = useState("John");
  const [third, setThird] = useCustom();

  return (
    <div>
      <input value={first} onChange={(e) => setFirst(e.target.value)} />
      <input value={second} onChange={(e) => setSecond(e.target.value)} />
      <input value={third} onChange={(e) => setThird(e.target.value)} />
    </div>
  );
}
