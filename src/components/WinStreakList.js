import React from "react";

const WinStreakList = ({game}) => {
  return (
    <div>
      <hr />
      {game.map((item) => (
        <div className="tic-text" key="w">
          {item.time} {item.nameOne} vs. {item.nameTwo} {item.result}
        </div>
      ))}
    </div>
  );
};

export default WinStreakList;
