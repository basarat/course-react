import { useState } from 'react';
/** Bring in our custom Select component */
import { Select } from './Select';

export default function App() {
  const [value, setValue] = useState('');

  return (
    <>
      {/* Use our custom Select component */}
      <Select
        label='Choose a pet'
        value={value}
        onChange={setValue}
        options={[
          { value: '', label: 'None' },
          { value: 'dog', label: 'Dog' },
          { value: 'cat', label: 'Cat' },
          { value: 'parrot', label: 'Parrot' },
          { value: 'chicken', label: 'Chicken' }
        ]}
      />
      
      {{
        'dog': '🐕',
        'cat': '🐈',
        'parrot': '🦜',
        'chicken': '🐓'
      }[value]}
    </>
  );
}