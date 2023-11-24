import { useState } from "react";
import "./Calculator.css";
function Calculator() {
  //
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("0");
  //
  const ops = ["/", "*", "-", ".", "+"];
  //
  const updateCalc = (value: string) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="screen">
          <p>
            <span className="output">({result})</span>
            <span className="input">{calc}</span>
          </p>
        </div>
        <div className="buttons-grid">
          <button
            className="digit-btn"
            onClick={() => updateCalc("7")}>
            7
          </button>
          <button
            className="digit-btn"
            onClick={() => updateCalc("8")}>
            8
          </button>
          <button
            className="digit-btn"
            onClick={() => updateCalc("9")}>
            9
          </button>
          <button
            onClick={() => updateCalc("/")}
            className="function-btn ">
            ÷
          </button>
          <button
            className="digit-btn"
            onClick={() => updateCalc("4")}>
            4
          </button>
          <button
            className="digit-btn"
            onClick={() => updateCalc("5")}>
            5
          </button>
          <button
            className="digit-btn"
            onClick={() => updateCalc("6")}>
            6
          </button>
          <button
            onClick={() => updateCalc("*")}
            className="function-btn">
            x
          </button>
          <button
            className="digit-btn"
            onClick={() => updateCalc("1")}>
            1
          </button>
          <button
            className="digit-btn"
            onClick={() => updateCalc("2")}>
            2
          </button>
          <button
            className="digit-btn"
            onClick={() => updateCalc("3")}>
            3
          </button>
          <button
            onClick={() => updateCalc("-")}
            className="function-btn ">
            -
          </button>
          <button
            onClick={() => window.location.reload()}
            className="clear-btn">
            CE
          </button>
          <button onClick={() => updateCalc("0")}>0</button>
          <button
            onClick={() => updateCalc(".")}
            className="dec-btn">
            •
          </button>
          <button
            onClick={() => updateCalc("+")}
            className="function-btn">
            +
          </button>
          <button className="brand">© 2023 Daniel Juan Aliphon</button>
          <button
            onClick={() => setCalc(result)}
            className="equate-btn">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
