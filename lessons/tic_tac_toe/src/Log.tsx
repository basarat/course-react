import { BoardHistory } from './AppState';

export type LogProps = {
  boardHistory: BoardHistory;
  onStepClick: (step: number) => void;
};

export function Log({ boardHistory, onStepClick }: LogProps) {
  return (
    <ol>
      {boardHistory.map((_, index) => {
        return (
          <li key={index}>
            <button onClick={() => onStepClick(index)}>
              Go to {index === 0 ? 'start' : `move #${index}`}
            </button>
          </li>
        );
      })}
    </ol>
  );
}