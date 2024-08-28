import { useState } from "react";

export default function App() {
  // Notice the generic argument `<number>` in `useState<number>(0)`.
  const [count, setCount] = useState<number>(0);

  function inc() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={inc}>+</button>
    </>
  );
}
