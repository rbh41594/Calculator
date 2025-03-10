import React, { useState } from "react";
import ButtonHolder from "./ButtonHolder/ButtonHolder.jsx";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      if (expression) {
        try {
          const evaluatedResult = eval(expression);
          setResult(evaluatedResult);
        } catch (error) {
          setResult("Error");
        }
      } else {
        setResult("Error");
      }
    } else if (value === "C") {
      setExpression("");
      setResult("");
    } else {
      setExpression(expression + value);
      setResult(""); 
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>React Calculator</h1>
        <input type="text" name="expression" value={expression} readOnly />
        <div className="result">{result}</div>
        <div className="button-holder">
          <ButtonHolder handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
