import styles from './App.module.css';
import { useReducer } from 'react';
import { reducer, initialState } from './App.reducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.root}>
      <div>Change Count: {state.changeCount}</div>
      <div>Value: {state.value}</div>

      <input value={state.value} onChange={(e) => {
        dispatch({ type: 'update', value: e.target.value });
      }} />
      <button onClick={() => {
        dispatch({ type: 'reset' });
      }}>Reset</button>
    </div>
  );
}