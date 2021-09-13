import React from "react";

function Square({ value, onClick }) {
  const takenField = (e) => {
    if (e.target.value === "false") {
      return alert("Please choose unoccupied cell!");
    } else if (e.target.value === "true") {
      e.target.value = "false";
      onClick();
    }
  };
  return (
    <button className="squares" onClick={takenField} value="true">
      {value}
    </button>
  );
}

export default Square;
