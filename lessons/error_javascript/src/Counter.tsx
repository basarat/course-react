type CounterProps = {
  count: number;
  inc: () => void;
};

const badCode = (count: number) => {
  if (count === 2) {
    throw new Error("You shall not pass!");
  }
};

export function Counter({ count, inc }: CounterProps) {
  const onClick = () => {
    inc();
    /**
     * For JavaScript errors not in the flow of React render
     * You should use try / catch
     */
    try {
      badCode(count);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={onClick}>+</button>
    </>
  );
}
