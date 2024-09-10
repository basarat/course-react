import { useState } from "react";
import { Products } from "./Products";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />

      <Products searchTerm={value} />
    </>
  );
}
