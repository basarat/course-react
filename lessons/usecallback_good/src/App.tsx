// focus(1:1)
import { useCallback } from "react";
import { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";

export default function App() {
  const [count, setCount] = useState(0);
  // focus(1:4)
  const increment = useCallback(
    () => setCount((count) => count + 1),
    [setCount]
  );

  // focus(4:4)
  return (
    <>
      <div>Count: {count}</div>
      <PrimaryButton onClick={increment}>+</PrimaryButton>
    </>
  );
}
