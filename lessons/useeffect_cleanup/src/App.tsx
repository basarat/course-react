import { useState, useEffect } from 'react';
import { getWordCount } from './api';

export default function App() {
  const [value, setValue] = useState('');
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    if (value == '') {
      setWordCount(0);
    } else {
      getWordCount(value)
        .then(result => {
          if (!cancelled) setWordCount(result);
        })
        .then(() => console.log('Result for:', { value }))
    }
    return () => { cancelled = true }
  }, [value]);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {!!wordCount && <div>Word count: {wordCount}</div>}
    </div>
  );
}