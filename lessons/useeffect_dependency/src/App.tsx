import { useState, useEffect } from 'react';
import { getWordCount } from './api';

export default function App() {
  const [value, setValue] = useState('');
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if (value == '') {
      setWordCount(0);
    } else {
      getWordCount(value)
        .then(result => setWordCount(result));
    }
  }, [value]);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {!!wordCount && <div>Word count: {wordCount}</div>}
    </div>
  );
}