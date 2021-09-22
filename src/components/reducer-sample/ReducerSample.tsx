import { useReducer } from 'react'

type ReducerCompState = {
  count: number;
}

type CountUpdateAction = {
  type: 'increment' | 'decrement';
  payload: number;
}

type CountResetAction = {
  type: 'reset';
}

type CountAction = CountUpdateAction | CountResetAction;

const initialState: ReducerCompState = {
  count: 0
}

const reducer = (state: ReducerCompState, action: CountAction): ReducerCompState => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export const ReducerSample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Counter: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  )
}
