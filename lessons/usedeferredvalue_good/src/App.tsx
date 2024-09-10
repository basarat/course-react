import { useState } from "react";
import { Products } from "./Products";
// focus(1:1)
import { useDeferredValue } from "react";

export default function App() {
  const [value, setValue] = useState("");

  // focus(1:1)
  const deferredValue = useDeferredValue(value);

  // focus(5:5)
  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />

      <Products searchTerm={deferredValue} />
    </>
  );
}
