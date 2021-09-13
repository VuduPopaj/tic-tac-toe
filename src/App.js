import React, { useState } from "react";
import Login from "./components/Login";
import Game from "./components/Game";
import Navbar from "./components/Navbar";
import Endgame from "./components/Endgame";
import WinStreakList from "./components/WinStreakList";

function App() {
  const [playerOne, setplayerOne] = useState("");
  const [playerTwo, setplayerTwo] = useState("");
  const [gameStart, setGameStart] = useState(true);
  const [gameEnd, setGameEnd] = useState(false);
  const [winner, setWinner] = useState("");
  const [draw, setDraw] = useState(false);
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [drawCount, setDrawCount] = useState(0);
  const [game, setGame] = useState([]);
  const handleEndGame = (value) => setGameEnd(value);

  if (gameStart === true) {
    return (
      <div>
        <Login
          setGameStart={setGameStart}
          playerOne={playerOne}
          playerTwo={playerTwo}
          setplayerOne={setplayerOne}
          setplayerTwo={setplayerTwo}
        />
      </div>
    );
  } else if (gameEnd === true) {
    return (
      <div>
        <Endgame
          playerOne={playerOne}
          playerTwo={playerTwo}
          setGameEnd={setGameEnd}
          winner={winner}
          draw={draw}
          setDraw={setDraw}
        />
        <WinStreakList
          winner={winner}
          gameEnd={gameEnd}
          playerOne={playerOne}
          playerTwo={playerTwo}
          game={game}
        />
      </div>
    );
  } else if (gameStart === false || gameEnd === true) {
    return (
      <div>
        <Game
          setGameStart={setGameStart}
          playerOne={playerOne}
          playerTwo={playerTwo}
          handleEndGame={handleEndGame}
          setWinner={setWinner}
          setDraw={setDraw}
          setCountOne={setCountOne}
          setCountTwo={setCountTwo}
          countOne={countOne}
          countTwo={countTwo}
          drawCount={drawCount}
          setDrawCount={setDrawCount}
          game={game}
          setGame={setGame}
          draw={draw}
        />
        <Navbar
          playerOne={playerOne}
          playerTwo={playerTwo}
          countOne={countOne}
          countTwo={countTwo}
          drawCount={drawCount}
        />
      </div>
    );
  }
}

export default App;
