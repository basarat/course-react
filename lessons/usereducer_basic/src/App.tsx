import styles from "./App.module.css";
// focus(1:1)
import { useReducer } from "react";

// focus(1:3)
export type State = {
  changeCount: number;
  value: string;
};

// focus(1:2)
export type Action =
  | { type: "update"; value: string };

// focus(1:10)
export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "update": {
      return { changeCount: state.changeCount + 1, value: action.value };
    }
    default: {
      throw Error("Unknown action.");
    }
  }
}

// focus(1:1)
export const initialState: State = { changeCount: 0, value: "" };

export default function App() {
  // focus(1:1)
  const [state, dispatch] = useReducer(reducer, initialState);

  // focus(9:9)
  return (
    <div className={styles.root}>
      <div>Change Count: {state.changeCount}</div>
      <div>Value: {state.value}</div>

      <input
        value={state.value}
        onChange={(e) => {
          dispatch({ type: "update", value: e.target.value });
        }}
      />
    </div>
  );
}
