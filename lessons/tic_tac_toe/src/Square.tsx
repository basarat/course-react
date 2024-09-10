import { SquareValue } from './AppState';

const squareStyle: React.CSSProperties = {
  width: '34px', height: '34px',
  background: '#fff', border: '1px solid #999',
  fontSize: '24px', fontWeight: 'bold',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};

export type SquareProps = {
  value: SquareValue,
  onClick: () => void,
};

export function Square({ value, onClick }: SquareProps) {
  return (
    <div style={squareStyle} onClick={onClick}>
      {value}
    </div>
  );
}
