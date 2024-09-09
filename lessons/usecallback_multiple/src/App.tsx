import { useState, useCallback } from "react";
import { PrimaryButton } from "./PrimaryButton";

export default function App() {
  const [counter, setCounter] = useState({ count: 0, stepSize: 1 });

  const increment = useCallback(
    () => setCounter(counter => ({ ...counter, count: counter.count + counter.stepSize })),
    [setCounter]
  );

  const setStepSize = (stepSize: number) => setCounter(counter => ({ ...counter, stepSize }));

  return (
    <>
      <div>Count: {counter.count}</div>
      <PrimaryButton onClick={increment}>+</PrimaryButton>
      <input type="number" value={counter.stepSize} onChange={e => setStepSize(+e.target.value)} />
    </>
  );
}
