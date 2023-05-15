import React from "react";

const RoundButton = (props) => {
  const btnFunction = () => {
    console.log("Hi");
  };

  return (
    <div>
      <button onClick={btnFunction}>{props.name}</button>
    </div>
  );
};

export default RoundButton;
