import { BoardStatus } from './AppState';

export type StatusProps = {
  boardStatus: BoardStatus,
};

export function Status({ boardStatus }: StatusProps) {
  return (
    <div>{
      boardStatus.type === 'winner' ? `Winner ${boardStatus.player}`
        : boardStatus.type === 'draw' ? 'Draw'
          : `Next Player ${boardStatus.player}`
    }</div>
  );
}