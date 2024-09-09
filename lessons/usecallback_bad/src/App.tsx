import { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);

  return (
    <>
      <div>Count: {count}</div>
      <PrimaryButton onClick={increment}>+</PrimaryButton>
    </>
  );
}
