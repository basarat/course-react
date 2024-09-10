import { useMemo } from 'react';

const COUNT = 10000; // Tweak based on your machine performance to get some lag

const itemStyle = {
  margin: '1rem 0',
  backgroundColor: 'lightskyblue',
  borderRadius: '4px',
  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.25)',
  padding: '10px',
};

export function Products({ searchTerm }: { searchTerm: string }) {

  const items = useMemo(() => {
    return [...Array(COUNT)].map(() => (searchTerm ? (searchTerm + ' ') : '') + Math.floor(Math.random() * COUNT));
  }, [searchTerm]);

  return (
    <div>
      {items.map((product, i) => (
        <div key={i + product} style={itemStyle}>{product}</div>
      ))}
    </div>
  );
}