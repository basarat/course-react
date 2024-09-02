export type State = {
  changeCount: number,
  value: string,
}

export type Action =
  | { type: 'update', value: string }
  | { type: 'reset' }

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'update': {
      return { changeCount: state.changeCount + 1, value: action.value };
    }
    case 'reset': {
      return initialState;
    }
    default: {
      const _ensure: never = action;
      throw Error('Unknown action.');
    }
  }
}

export const initialState: State = { changeCount: 0, value: '' };