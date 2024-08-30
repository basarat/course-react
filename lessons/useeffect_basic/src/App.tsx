import { useState } from "react";
import { useEffect } from "react";

const countDom = () => document.getElementById('count')?.innerText;

export default function App() {
  const [count, setCount] = useState(0);
  const inc = () => setCount((count) => count + 1);

  console.log("rendering", countDom());

  useEffect(() => {
    console.log("rendered", countDom());
  });

  return (
    <div>
      <div id="count">{count}</div>
      <button onClick={inc}>+</button>
    </div>
  );
}
