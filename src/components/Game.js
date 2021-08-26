import React, { useEffect, useState } from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import Board from "./Board";
import calculateWinner from "./Board";
import Endgame from "./Endgame";

const Game = () => {
  const [players, setPlayers] = useState([]);
  const [logged, setLogged] = useState(false);
  const [draw, setDraw] = useState(false);
  const [winner, setWinner] = useState(false);
  const [playerOneStatus, setPlayerOneStatus] = useState(0);
  const [playerTwoStatus, setPlayerTwoStatus] = useState(0);
  const [drawStatus, setDrawStatus] = useState(0);

  const startAgain = () => {
    setWinner(false);
    setDraw(false);
  };

  const gameRestart = () => {
    window.location.reload();
    localStorage.clear();
  };

  useEffect(() => {
    if (localStorage.getItem("Players")) {
      setPlayers(JSON.parse(localStorage.getItem("Players")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Players", JSON.stringify(players));
  }, [players]);

  //provjeriti sta ima u localStorage
  // treba cuvati imena player-a u localStorage:
  // to moze biti jedan objekat ili 2 razlicita key-a

  return (
    <div>
      {!logged && <Login setLogged={setLogged} logged={logged} />}
      {/* A u zasebnom divu da budu:
    <div>
    
      <Navbar />
      <h1 className="header">Tic Tac Toe</h1>
      <Board />
    </div> */}
      <div>
        {logged && (
          <Navbar
            players={players}
            gameRestart={gameRestart}
            playerOneStatus={playerOneStatus}
            playerTwoStatus={playerTwoStatus}
            drawStatus={drawStatus}
          />
        )}
        {logged && (
          <Board
            players={players}
            calculateWinner={calculateWinner}
            setWinner={setWinner}
            setDraw={setDraw}
            playerOneStatus={playerOneStatus}
            setPlayerOneStatus={setPlayerOneStatus}
            playerTwoStatus={playerTwoStatus}
            setPlayerTwoStatus={setPlayerTwoStatus}
            drawStatus={drawStatus}
            setDrawStatus={setDrawStatus}
          />
        )}
        {logged && winner && (
          <Endgame startAgain={startAgain} winner={winner} setDraw={setDraw} />
        )}
        {logged && draw && (
          <Endgame startAgain={startAgain} winner={winner} draw={draw} />
        )}
      </div>
    </div>
  );
};

export default Game;
