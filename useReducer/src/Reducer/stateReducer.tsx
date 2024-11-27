export interface State {
  count: number;
}

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] };

export const initialState: State = { count: 0 };

const stateReducer = (state: State, action: CounterAction): State => {
  switch (action.type) {
    case "reset":
      return initialState;

    case "setCount":
      return { ...state, count: action.value };

    default:
      throw new Error("Unknown action");
  }
};

export default stateReducer;
