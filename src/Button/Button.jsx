import React from "react";

const Button = ({ value, handleClick }) => {
  return (
    <div>
      <button className="button" onClick={() => handleClick(value)}>
        {value}
      </button>
    </div>
  );
};

export default Button;
