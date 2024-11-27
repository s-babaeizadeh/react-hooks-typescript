import React, { memo } from "react";

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number; // Ensure this matches the JSON structure
}

export interface TodoProps {
  todos: Todo[];
}

const Todos: React.FC<TodoProps> = ({ todos }) => {
  return (
    <div className="m-10 gap-3">
      <h2 className="font-extrabold p-3 text-2xl">Todo Items</h2>
      {todos.map((item) => (
        <div key={item.id} className="flex gap-5 p-2">
          {" "}
          {/* Use key for list items */}
          <p className="font-bold">{item.todo}</p>
          <p className={item.completed ? "text-green-500" : "text-red-500"}>
            {item.completed ? "Completed" : "Pending"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default memo(Todos);
