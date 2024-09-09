import { useState, memo, useMemo } from 'react';

/** Example pure component */
const List = memo((props: { items: string[] }) => {
  console.log('List rendered');
  return (
    <ul>
      {props.items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
});

const fruits = ['apple', 'banana', 'orange', 'pear', 'grape'];

export default function App() {
  const [name, setName] = useState('');

  const [count, setCount] = useState(0);
  const inc = () => setCount(count => Math.min(count + 1, fruits.length));
  const dec = () => setCount(count => Math.max(count - 1, 0));

  /** Preserve referential integrity with `useMemo` */
  const items = useMemo(() => fruits.slice(0, count), [count]);

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />

      <div>
        <button onClick={dec}>-</button>
        <span> {count} </span>
        <button onClick={inc}>+</button>
      </div>

      {/* Use the result of `useMemo` for the pure component */}
      <List items={items} />
    </>
  );
}