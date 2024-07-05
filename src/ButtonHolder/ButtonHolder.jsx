import React from "react";
import Button from "../Button/Button";

const ButtonHolder = ({ handleClick }) => {
  const buttonConfigurations = [
    [7, 8, 9, "+"],
    [4, 5, 6, "-"],
    [1, 2, 3, "*"],
    ["C", 0, "=", "/"],
  ];

  return (
    <div className="holder">
      {buttonConfigurations.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((value, index) => (
            <Button key={index} value={value} handleClick={handleClick} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonHolder;
