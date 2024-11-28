import React, { useEffect, useRef, useState } from "react";

import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const persistRef = useRef(0);
  const changeColorRef = useRef<HTMLHeadingElement | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    persistRef.current += 1;
  });

  console.log(persistRef.current);

  const handleClick = () => {
    if (changeColorRef.current) {
      changeColorRef.current.style.color = "blue";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <h1 ref={changeColorRef}>Hello from App</h1>
      <h2 onClick={handleClick}>Click here to change color</h2>
      <div className="flex flex-col">
        <input type="text" onChange={handleChange} ref={inputRef} />
        <button
          onClick={focusInput}
          className="p-3 bg-red-500 hover:bg-blue-500 text-blue-700 font-semibold text-white py-2 px-4 border border-white hover:border-transparent rounded"
        >
          Focus
        </button>
      </div>
      <h2>{text}</h2>
    </div>
  );
};

export default App;
