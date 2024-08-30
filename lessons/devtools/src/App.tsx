import React, { useState } from 'react';
import styles from './App.module.css';

export default function App() {
  const [name, setName] = useState('');
  const [accepted, setAccepted] = useState(false);
  return (
    <div className={styles.root}>
      <TextInput
        id='name' label='Name'
        value={name} onChange={setName}
      />
      <CheckboxInput
        id='accept' label='Accept the terms and conditions'
        checked={accepted} onChange={setAccepted}
      />
    </div>
  );
}

const CheckboxInput = React.memo((props: {
  id: string, label: string,
  checked: boolean, onChange: (newChecked: boolean) => void,
}) => (
  <div className={styles.checkbox}>
    <input type='checkbox' id={props.id}
      checked={props.checked} onChange={(e) => props.onChange(e.target.checked)}
    />
    <label htmlFor={props.id}> {props.label}</label>
  </div>
));

const TextInput = React.memo((props: {
  id: string, label: string,
  value: string, onChange: (newValue: string) => void,
}) => (
  <div className={styles.input}>
    <label htmlFor={props.id}>{props.label}</label>
    <input type='text' id={props.id}
      value={props.value} onChange={e => props.onChange(e.target.value)}
    />
  </div>
));
