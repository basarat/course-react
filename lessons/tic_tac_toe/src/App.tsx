import { useGameState } from './AppState';
import { Column, Row } from './Layout';
import { Status } from './Status';
import { Log } from './Log';
import { Board } from './Board';

export default function App() {
  const {
    boardValue,
    boardStatus,
    handleSquareClick,
    handleStepClick,
    boardHistory,
  } = useGameState();
  return (
    <Row gap={20}>
      <Column gap={20}>
        <Status boardStatus={boardStatus}/>
        <Board boardValue={boardValue} onSquareClick={handleSquareClick} />
      </Column>
      <Log boardHistory={boardHistory} onStepClick={handleStepClick} />
    </Row>
  );
}
