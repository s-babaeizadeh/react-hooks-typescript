import React, { useState } from "react";
import data from "./components/data.json"; // Importing JSON data
import Todos from "./components/Todos"; // Importing Todos component

// Define the Todo interface based on your JSON structure
export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number; // Ensure this matches the JSON structure
}

const App = () => {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState<Todo[]>(data.todos);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex">
      <Todos todos={todos} />
      <div className="m-10 text-xl flex flex-col">
        Count: {count}
        <button
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
