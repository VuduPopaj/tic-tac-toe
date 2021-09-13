import React from "react";

function Endgame({ winner, draw, setDraw, playerOne, playerTwo, setGameEnd }) {
  const setGameStartBtn = () => {
    setGameEnd(false);
    setDraw(false);
  };
  if (draw === true)
    return (
      <div>
        <h1 className="tic-text">Draw!</h1>
        <button className="btns" onClick={setGameStartBtn}>
          Start
        </button>
      </div>
    );
  else {
    return (
      <div>
        <h1 className="tic-text"> {winner} won!</h1>
        <h3 className="tic-text">
          {playerOne} vs. {playerTwo}
        </h3>
        <button className="btns" onClick={setGameStartBtn}>
          Start
        </button>
      </div>
    );
  }
}
export default Endgame;
