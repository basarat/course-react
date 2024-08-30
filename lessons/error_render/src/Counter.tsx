type CounterProps = {
  count: number;
  inc: () => void;
};

// focus(1:5)
const badCode = (count: number) => {
  if (count >= 2) {
    throw new Error("You shall not pass!");
  }
};

export function Counter({ count, inc }: CounterProps) {
  // focus(1:1)
  badCode(count);

  const onClick = () => {
    inc();
  };

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={onClick}>+</button>
    </>
  );
}
