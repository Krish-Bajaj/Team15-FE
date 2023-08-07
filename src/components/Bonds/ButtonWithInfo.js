import React from "react";

function buttonOnClick() {
  console.log("Button has been clicked ");
}
const ButtonWithInfo = ({ buttonText, infoText }) => {
  return (
    <div>
      <button onClick={buttonOnClick}>{buttonText}</button>
      <p>{infoText}</p>
    </div>
  );
};

export default ButtonWithInfo;
