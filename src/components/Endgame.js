import React from "react";

const Endgame = ({ winner, startAgain, draw }) => {
  return (
    <div>
      {winner && (
        <div>
          <h2>You win {winner}</h2>
          <button onClick={startAgain}>Try again?</button>
        </div>
      )}
      {draw && !winner && (
        <div>
          <h2>Draw!</h2>
          <button onClick={startAgain}>Try again?</button>
        </div>
      )}
    </div>
  );
};

export default Endgame;
