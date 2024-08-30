import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const inc = () => setCount((count) => count + 1);

  console.log("rendering");

  useEffect(() => {
    console.log("rendered");
  });

  return (
    <div>
      <div id="count">{count}</div>
      <button onClick={inc}>+</button>
    </div>
  );
}
