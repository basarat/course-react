import { useState, useEffect } from 'react';

/** Mimic a backend API */
const getWordCount = async (value: string) => {
  await new Promise(res => setTimeout(res, 1000));
  return value.split(' ').length;
}

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