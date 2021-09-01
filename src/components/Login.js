import React, { useState } from "react";

const Login = ({ logged, setLogged }) => {
  // const [valid, setValid] = useState(false);
  // const [values, setValues] = useState({
  //   playerOne: "",
  //   playerTwo: "",
  // });
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const gameInit = () => {
    if (playerOne && playerTwo) {
      // localStorage.setItem("playerOne", playerOne);
      // localStorage.setItem("playerTwo", playerTwo);
      setLogged(true);
    } else if (!playerOne || !playerTwo) {
      setErrorMessage("Please enter the names of the players");
    }
    setPlayerOne(playerOne);
    setPlayerTwo(playerTwo);
  };

  // const inputPlayerOneChange = (e) => {
  //   setValues((values) => ({
  //     ...values,
  //     playerOne: e.target.value,
  //   }));
  // };

  // const inputPlayerTwoChange = (e) => {
  //   setValues((values) => ({
  //     ...values,
  //     playerTwo: e.target.value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (values.playerOne && values.playerTwo) {
  //     setValid(true);
  //   }
  //   setSubmitted(true);
  // };

  return (
    <div>
      {!logged && (
        <div>
          <div>
            <form>
              <div>
                <label>Player one</label>
                <input
                  type="name"
                  value={playerOne}
                  onChange={(e) => {
                    setPlayerOne(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Player two</label>
                <input
                  type="name"
                  value={playerTwo}
                  onChange={(e) => {
                    setPlayerTwo(e.target.value);
                  }}
                />
              </div>
              <button type="button" onClick={gameInit}>
                Start the game
              </button>
            </form>
            <div>
              <p>{errorMessage}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Login;
