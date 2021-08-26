import React from "react";

const Navbar = ({
  gameRestart,
  playerOneStatus,
  playerTwoStatus,
  drawStatus,
}) => {
  let playerOne = localStorage.getItem("playerOne");
  let playerTwo = localStorage.getItem("playerTwo");

  return (
    <div>
      <div>
        <h2>Tic Tac Toe</h2>
        <div>
          <p>
            {playerOne} : {playerOneStatus}
          </p>
          <p>
            {playerTwo} : {playerTwoStatus}
          </p>
          <p>Ties: {drawStatus}</p>
        </div>
        <button onClick={gameRestart}>Reset the game</button>
      </div>
    </div>
  );
};

export default Navbar;
