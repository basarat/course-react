import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count + 1);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={inc}>+</button>
    </>
  );
}
