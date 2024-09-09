import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('dog');

  return (
    <>
      <label htmlFor="pet">Choose a pet</label>
      <select id="pet" value={value} onChange={(e) => setValue(e.target.value)}>
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