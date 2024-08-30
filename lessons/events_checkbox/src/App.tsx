import { useState } from 'react';
import styles from './App.module.css';

export default function App() {
  const [checked, setChecked] = useState(false);
  const toggle = () => setChecked(checked => !checked);

  return (
    <div className={styles.checkbox}>
      <input
        type='checkbox'
        id='accept'
        checked={checked}
        onChange={toggle}
      />
      <label htmlFor='accept'>
        I accept the terms and conditions.
      </label>
    </div>
  );
}
