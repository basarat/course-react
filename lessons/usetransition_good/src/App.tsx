// focus(1:1)
import { useTransition } from 'react';
import { useState } from 'react';
import { searchItems, randomChars, List } from './List';

export default function App() {
  const [value, setValue] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);
  // focus(1:1)
  const [isPending, startTransition] = useTransition();

  // focus(1:11)
  /** 
   * Note that 
   * - value is always updated immediately, 
   * - items are updated in a transition (low priority) callback 
   **/
  const handleChange = (value: string) => {
    setValue(value);
    startTransition(() => {
      setItems(searchItems(value));
    });
  };

  const handleRandom = () => {
    const value = randomChars();
    setValue(value);
    setItems(searchItems(value));
  };

  // focus(5:6)
  return (
    <>
      <input value={value} onChange={(e) => handleChange(e.target.value)} />
      <button onClick={handleRandom}>Random</button>
      {/* When there is a transition pending the `isPending` boolean is true */}
      <List items={items} style={{ opacity: isPending ? .5 : 1 }} />
    </>
  );
}