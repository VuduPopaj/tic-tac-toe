import React, { useState } from "react";

const Login = () => {
  const [valid, setValid] = useState(false);
  const [values, setValues] = useState({
    playerOne: "",
    playerTwo: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const inputPlayerOneChange = (e) => {
    setValues((values) => ({
      ...values,
      playerOne: e.target.value,
    }));
  };

  const inputPlayerTwoChange = (e) => {
    setValues((values) => ({
      ...values,
      playerTwo: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.playerOne && values.playerTwo) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">Success!</div>
        ) : null}
        <input
          onChange={inputPlayerOneChange}
          id="player-one"
          className="form-field"
          type="text"
          // disabled={showSuccess}
          placeholder="Player One"
          name="playerOne"
          value={values.playerOne}
        ></input>
        {submitted && !values.playerOne ? (
          <span id="first-name-error">Please enter a player one name</span>
        ) : null}
        <input
          onChange={inputPlayerTwoChange}
          id="player-two"
          className="form-field"
          type="text"
          placeholder="Player Two"
          name="playerTwo"
          value={values.playerTwo}
        ></input>
        {submitted && !values.playerTwo ? (
          <span id="first-name-error">Please enter a player two name</span>
        ) : null}
        <button className="form-field" type="submit">
          Submit
        </button>
      </form>
      {/* {submitted && valid ? <div className="success-message">Success!</div>} */}
    </div>
  );
};
export default Login;
