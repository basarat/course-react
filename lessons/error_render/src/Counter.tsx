type CounterProps = {
  count: number;
  inc: () => void;
};

const badCode = (count: number) => {
  if (count >= 2) {
    throw new Error("You shall not pass!");
  }
};

export function Counter({ count, inc }: CounterProps) {
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
