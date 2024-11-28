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
      <input type="text" onChange={handleChange} ref={inputRef} />
      <button onClick={focusInput} className="p-3 border-spacing-2">
        Focus
      </button>
      <h2>{text}</h2>
    </div>
  );
};

export default App;
