import { useReducer } from "react";
import stateReducer, { initialState } from "./stateReducer";

const ReducerApp = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div>
      <h1 className="font-bold">UseReducer Counter</h1>
      <p className="font-semibold mt-2">Count: {state.count}</p>
      <button
        onClick={addFive}
        className="bg-green-500 m-3 p-3 text-white rounded-lg"
      >
        Add 5
      </button>
      <button
        onClick={reset}
        className="bg-red-500 text-white m-3 p-3 rounded-lg"
      >
        Reset
      </button>
    </div>
  );
};

export default ReducerApp;
