import { useState } from "react";

let Square = () => {
  const [value, setValue] = useState(null);
  let handleClick = () => {
    setValue("X");
  };
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

export const Board = () => {
  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};
