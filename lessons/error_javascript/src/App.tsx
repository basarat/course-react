import React, { useState } from "react";
import { Counter } from "./Counter";

export default function App() {
  const [count, setCount] = useState(0);
  const inc = () => setCount((count) => count + 1);

  return (
    <div>
      <Counter count={count} inc={inc} />
    </div>
  );
}
