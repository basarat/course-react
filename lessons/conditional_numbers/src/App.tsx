import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const inc = () => setCount((clicks) => clicks + 1);
  const dec = () => setCount((clicks) => clicks - 1);

  return (
    <>
      <div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </div>
      <p>Count: {count}</p>
    </>
  );
}
