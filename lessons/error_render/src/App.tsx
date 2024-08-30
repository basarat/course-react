import { useState } from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { Counter } from "./Counter";

export default function App() {
  const [count, setCount] = useState(0);
  const inc = () => setCount((count) => count + 1);

  // focus(3:5)
  return (
    <div>
      <ErrorBoundary>
        <Counter count={count} inc={inc} />
      </ErrorBoundary>
    </div>
  );
}
