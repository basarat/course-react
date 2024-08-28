import { Counter, useCounter } from "./Counter";

export default function App() {
  const first = useCounter();
  const second = useCounter();
  return (
    <>
      <Counter {...first} />
      <Counter {...second} />

      <div>Total: {first.count + second.count}</div>
    </>
  );
}
