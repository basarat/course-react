import { useEffect, useRef, useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');

  const countRef = useRef<number>(1);
  useEffect(() => {
    // focus(1:1)
    countRef.current = countRef.current + 1;
  });

  // focus(4:4)
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div>Rendered: {countRef.current}</div>
    </div>
  );
}