import { useState } from "react";

export default function App() {
  // Start off with an empty value
  const [value, setValue] = useState("");

  return (
    <>
      <label htmlFor="pet">Choose a pet</label>
      <select id="pet" value={value} onChange={(e) => setValue(e.target.value)}>
        {/* Something to display for an empty value */}
        <option value="">None</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="parrot">Parrot</option>
        <option value="chicken">Chicken</option>
      </select>

      {{
        'dog': '🐕',
        'cat': '🐈',
        'parrot': '🦜',
        'chicken': '🐓'
      }[value]}
    </>
  );
}
