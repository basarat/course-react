import { useState } from "react";

export default function App() {
  const [isShown, setIsShown] = useState(false);
  const toggle = () => setIsShown((isShown) => !isShown);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isShown && <p>Conditional Content</p>}
    </div>
  );
}
