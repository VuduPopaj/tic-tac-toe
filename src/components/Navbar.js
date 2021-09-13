import React from "react";

function Navbar({ playerOne, playerTwo, countOne, countTwo, drawCount }) {
  return (
    <div className="Navbar">
      <h3 className="tic-text">
        {playerOne}: {countOne} {playerTwo}: {countTwo} Draw: {drawCount}
      </h3>
    </div>
  );
}

export default Navbar;
