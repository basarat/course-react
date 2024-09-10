const COUNT = 10000;

export function searchItems(searchTerm: string): string[] {
  return !searchTerm ? [] : [...Array(COUNT)].map(() => searchTerm + ' ' + Math.floor(Math.random() * COUNT));
}

export function randomChars() {
  return Math.random().toString(36).slice(2, 7);
}

export function List({ items, style }: { items: string[], style?: React.CSSProperties }) {
  return (
    <div style={{...style, transition: 'all .2s'}}>
      {items.map((product, i) => (
        <div key={i + product} style={{
          margin: '1rem 0',
          padding: '10px',
          backgroundColor: 'lightskyblue',
          borderRadius: '4px',
          boxShadow: '0 1px 4px rgba(0, 0, 0, 0.25)',
        }}>{product}</div>
      ))}
    </div>
  );
}