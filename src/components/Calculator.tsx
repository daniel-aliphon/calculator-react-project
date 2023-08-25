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
    <>
      <div className="div flex mx-auto mt-5 rounded-3 p-3">
        <p className="rounded head">Calculator</p>
        <div className="screen w-full rounded  px-2 mb-3">
          <p className="p">
            <span className="output">({result})</span>
            <span className="input">{calc}</span>
          </p>
        </div>
        <div>
          <button
            onClick={() => updateCalc("7")}
            className=" rounded-1 "
          >
            7
          </button>
          <button
            onClick={() => updateCalc("8")}
            className=" rounded-1 "
          >
            8
          </button>
          <button
            onClick={() => updateCalc("9")}
            className=" rounded-1 "
          >
            9
          </button>
          <button
            onClick={() => updateCalc("/")}
            className="grey  rounded-1 "
          >
            /
          </button>
          <button
            onClick={() => updateCalc("4")}
            className=" rounded-1 "
          >
            4
          </button>
          <button
            onClick={() => updateCalc("5")}
            className=" rounded-1 "
          >
            5
          </button>
          <button
            onClick={() => updateCalc("6")}
            className=" rounded-1 "
          >
            6
          </button>
          <button
            onClick={() => updateCalc("*")}
            className="grey rounded-1 "
          >
            *
          </button>
          <button
            onClick={() => updateCalc("1")}
            className=" rounded-1 "
          >
            1
          </button>
          <button
            onClick={() => updateCalc("2")}
            className=" rounded-1 "
          >
            2
          </button>
          <button
            onClick={() => updateCalc("3")}
            className=" rounded-1 "
          >
            3
          </button>
          <button
            onClick={() => updateCalc("-")}
            className="grey  rounded-1 "
          >
            -
          </button>
          <button
            onClick={() => window.location.reload()}
            className="red  rounded-1 "
          >
            CE
          </button>
          <button
            onClick={() => updateCalc("0")}
            className=" rounded-1 "
          >
            0
          </button>
          <button
            onClick={() => updateCalc(".")}
            className="dot rounded-1 "
          >
            .
          </button>
          <button
            onClick={() => updateCalc("+")}
            className="grey  rounded-1 "
          >
            +
          </button>
          <button className="fake orange equal rounded-1 ">
            -Daniel Juan Aliphon
          </button>
          <button
            onClick={() => setCalc(result)}
            className="orange equal rounded-1 "
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
