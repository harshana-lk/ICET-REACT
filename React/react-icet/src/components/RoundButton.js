import React from "react";
import "./style.css";

const RoundButton = (props) => {
  const btnFunction = () => {
    console.log("Hi");
  };

  return (
    <div>
      <button onClick={btnFunction} className="btn-click">
        {props.name}
      </button>
    </div>
  );
};

export default RoundButton;
