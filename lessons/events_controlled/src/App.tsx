import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("Hi Fam!");

  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          console.log(e.target.value);
        }}
      />
    </div>
  );
}
