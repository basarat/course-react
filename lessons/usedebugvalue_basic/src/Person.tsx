import { useState } from 'react';

export type PersonProps = {
  firstName: string, setFirstName: (value: string) => void,
  lastName: string, setLastName: (value: string) => void,
}

export const Person = ({ firstName, setFirstName, lastName, setLastName }: PersonProps) => {
  return (
    <>
      <label htmlFor='firstName'>First Name</label>
      <input id='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} />
      <label htmlFor='lastName'>Last Name</label>
      <input id='lastName' value={lastName} onChange={e => setLastName(e.target.value)} />
    </>
  );
}

export const usePersonProps = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return { firstName, setFirstName, lastName, setLastName };
}