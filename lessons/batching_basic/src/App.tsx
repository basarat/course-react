import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      // focus(1:3)
      // Note that these two state changes only result in single re-render
      setCount((count) => count + 1);
      setToggle((toggle) => !toggle);
    }, 500);
  };

  // focus(1:1)
  console.log("Rendered", count, toggle);

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <div>Count: {count}</div>
      <div>Toggle: {toggle.toString()}</div>
    </div>
  );
}
