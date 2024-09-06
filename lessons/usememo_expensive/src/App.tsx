import { useState } from "react";
// focus(1:1)
import { useMemo } from "react";

// focus(1:3)
function fibonacci(index: number): number {
  if (index <= 1) return 1;
  return fibonacci(index - 1) + fibonacci(index - 2);
}

export default function App() {
  const [name, setName] = useState("");
  const [num, setNum] = useState(0);

  // focus(1:1)
  const result = useMemo(() => fibonacci(num), [num]);

  return (
    <>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <div>Result: {result}</div>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Name: {name}</div>
    </>
  );
}
