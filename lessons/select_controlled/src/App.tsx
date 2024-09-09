import { useState } from 'react';

export default function App() {
  // Create a state variable to store the selected value
  const [value, setValue] = useState('dog');

  return (
    <>
      <label htmlFor="pet">Choose a pet</label>
      {/* Wire the `value` and `onChange` props */}
      <select id="pet" value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="parrot">Parrot</option>
        <option value="chicken">Chicken</option>
      </select>
      {/* Display an icon based on the selected value */}
      {{
        'dog': '🐕',
        'cat': '🐈',
        'parrot': '🦜',
        'chicken': '🐓'
      }[value]}
    </>
  );
}