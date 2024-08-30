import { useState, useEffect } from "react";

export default function App() {
  const [shown, setShown] = useState(true);
  return (
    <div>
      <button onClick={() => setShown((shown) => !shown)}>
        {shown ? "Hide" : "Show"}
      </button>
      {shown && <KitchenSink />}
    </div>
  );
}

const KitchenSink = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("rendered");
  });

  useEffect(() => {
    console.log({ newValue: value });
    return () => {
      console.log({ oldValue: value });
    };
  }, [value]);

  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  );
};
