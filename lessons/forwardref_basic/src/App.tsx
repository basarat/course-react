import { useRef, useState } from 'react';

const fullScreen = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  padding: '10px',
} as const;

import { FancyField } from './FancyField';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // focus(1:2)
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const focusFirstName = () => firstNameRef.current?.focus();
  const focusLastName = () => lastNameRef.current?.focus();

  // focus(4:4,9:9)
  return (
    <>
      <div style={fullScreen}>
        <FancyField id="firstName" label="First Name" ref={firstNameRef}
          value={firstName} onChange={setFirstName} />
      </div>

      <div style={fullScreen}>
        <FancyField id="lastName" label="Last Name" ref={lastNameRef}
          value={lastName} onChange={setLastName} />
      </div>

      <div style={fullScreen}>
        <button onClick={focusFirstName}>Focus First ({firstName})</button>
        <button onClick={focusLastName}>Focus Last ({lastName})</button>
      </div>
    </>
  );
}