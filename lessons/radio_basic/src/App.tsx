import { useState } from "react";
import "./App.css";

export default function App() {
  const items: { value: string; label: string }[] = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  const [value, setValue] = useState<string | null>(null);

  return (
    <>
      {items.map((item) => (
        <div key={item.value}>
          <input
            name="gender"
            type="radio"
            value={item.value}
            id={item.value}
            checked={value === item.value}
            onChange={(e) => setValue(e.target.value)}
          />{" "}
          <label htmlFor={item.value}>{item.label}</label>
        </div>
      ))}
    </>
  );
}
