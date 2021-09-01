import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      {/* Game komponenta ovdje, a Login, Navbar, Endgame, Board unutar Game komponente */}
      <Game>
        <h1 className="header">Tic Tac Toe</h1>
      </Game>
    </div>
  );
}

export default App;
