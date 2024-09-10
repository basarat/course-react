import { useState } from "react";

export type Player = "X" | "O";

export type SquareValue = Player | null;

export type BoardValue = SquareValue[];

export type BoardHistory = BoardValue[];

export type BoardStatus =
  | {
      type: "winner";
      player: Player;
    }
  | {
      type: "draw";
    }
  | {
      type: "next";
      player: Player;
    };

const createBoardValue = () => Array(9).fill(null);

function calculateWinner(boardValue: BoardValue) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      boardValue[a] &&
      boardValue[a] === boardValue[b] &&
      boardValue[a] === boardValue[c]
    ) {
      return boardValue[a];
    }
  }

  return null;
}

function calculateIsFull(boardValue: BoardValue) {
  return boardValue.every((square) => square !== null);
}

function calculateNext(step: number): Player {
  return step % 2 === 0 ? "X" : "O";
}

export type GameState = {
  boardHistory: BoardHistory;
  step: number;
};

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>({
    boardHistory: [createBoardValue()],
    step: 0,
  });

  const boardValue = gameState.boardHistory[gameState.step];
  const nextPlayer = calculateNext(gameState.step);
  const winner = calculateWinner(boardValue);
  const isFull = calculateIsFull(boardValue);

  const boardStatus: BoardStatus = winner
    ? { type: "winner", player: winner }
    : isFull
    ? { type: "draw" }
    : { type: "next", player: nextPlayer };

  function handleSquareClick(square: number) {
    if (winner || isFull || boardValue[square]) return;

    const step = gameState.step;
    const newBoardHistory = gameState.boardHistory.slice(0, step + 1);
    const currentBoardValue = newBoardHistory[step];

    const updatedBoardValue = [...currentBoardValue];
    updatedBoardValue[square] = calculateNext(step);

    newBoardHistory.push(updatedBoardValue);

    setGameState({
      boardHistory: newBoardHistory,
      step: step + 1,
    });
  }

  function handleStepClick(step: number) {
    setGameState({
      boardHistory: gameState.boardHistory,
      step,
    });
  }

  return {
    boardValue,
    boardStatus,
    handleSquareClick,
    handleStepClick,
    boardHistory: gameState.boardHistory,
  };
}
