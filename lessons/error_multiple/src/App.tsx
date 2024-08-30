import { useState } from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { Counter } from "./Counter";

export default function App() {
  const [countOne, setCountOne] = useState(0);
  const incOne = () => setCountOne(count => count + 1);
  const [countTwo, setCountTwo] = useState(0);
  const incTwo = () => setCountTwo(count => count + 1);

  // focus(3:9)
  return (
    <div>
      <ErrorBoundary fallback={<div>Counter one crashed 😔</div>}>
        <Counter count={countOne} inc={incOne} />
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>Counter two crashed 😔</div>}>
        <Counter count={countTwo} inc={incTwo} />
      </ErrorBoundary>
    </div>
  );
}
