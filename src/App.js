import React from "react";
import Board from "./components/Board";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Login />
      <Navbar />
      <h1 className="header">Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

export default App;
