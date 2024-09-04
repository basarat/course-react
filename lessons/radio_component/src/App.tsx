import { useState } from "react";
import "./App.css";
import { RadioGroup } from "./RadioGroup";

export default function App() {
  const items: { value: string; label: string }[] = [
    { value: "unknown", label: "Prefer not to say" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  const [value, setValue] = useState<string | null>(null);

  return (
    <>
      <RadioGroup
        name="gender"
        items={items}
        value={value}
        onChange={setValue}
      />
    </>
  );
}
