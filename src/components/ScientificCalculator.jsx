// src/ScientificCalculator.js
import React, { useState } from "react";
import { create, all } from "mathjs";

const math = create(all);

const ScientificCalculator = () => {
  const [display, setDisplay] = useState("");
  const [radianMode, setRadianMode] = useState(true);

  const handleButtonClick = (value) => {
    if (value === "C") {
      setDisplay("");
    } else if (value === "←") {
      setDisplay(display.slice(0, -1));
    } else if (value === "=") {
      calculateResult();
    } else if (value === "x^2") {
      setDisplay(display + "^2");
    } else if (value === "x^y") {
      setDisplay(display + "^");
    } else if (value === "sin") {
      setDisplay(display + "sin(");
    } else if (value === "cos") {
      setDisplay(display + "cos(");
    } else if (value === "tan") {
      setDisplay(display + "tan(");
    } else if (value === "√") {
      setDisplay(display + "√(");
    } else if (value === "ln") {
      setDisplay(display + "ln(");
    } else if (value === "log") {
      setDisplay(display + "log(");
    } else {
      setDisplay(display + value);
    }
  };

  const calculateResult = () => {
    try {
      const expr = display
        .replace(/√/g, "sqrt")
        .replace(/ln/g, "log")
        .replace(/log/g, "log10")
        .replace(/π/g, "pi")
        .replace(/×/g, "*")
        .replace(/e/g, "exp(1)");

      const scope = {
        sin: radianMode ? math.sin : (x) => math.sin(math.unit(x, "deg")),
        cos: radianMode ? math.cos : (x) => math.cos(math.unit(x, "deg")),
        tan: radianMode ? math.tan : (x) => math.tan(math.unit(x, "deg")),
        factorial: math.factorial,
        sqrt: math.sqrt,
        log: math.log,
        log10: math.log10,
        pi: math.pi,
        exp: math.exp,
      };

      const result = math.evaluate(expr, scope);
      setDisplay(result);
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div className="container mx-auto p-4 md:w-1/2">
      <h1 className="text-2xl font-bold mb-4">Scientific Calculator</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={display}
          placeholder="Ensure inputs have matching brackets"
          readOnly
        />
      </div>
      <div className="mb-4 flex justify-end">
        <button
          onClick={() => setRadianMode(!radianMode)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {radianMode ? "Radian" : "Degree"}
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          "sin",
          "cos",
          "tan",
          "√",
          "x^2",
          "x^y",
          "ln",
          "log",
          "!",
          "π",
          "e",
        ].map((btn, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(btn)}
            className="bg-slate-500 text-white px-4 py-2 rounded"
          >
            {btn}
          </button>
        ))}
        {[
          "C",
          "←",
          "(",
          ")",
          "/",
          "7",
          "8",
          "9",
          "×",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          ".",
          "0",
          "+",
        ].map((btn, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(btn)}
            className="bg-gray-200 text-black px-4 py-2 rounded"
          >
            {btn}
          </button>
        ))}
        <button
          onClick={() => handleButtonClick("=")}
          className="bg-blue-500 text-white px-4 py-2 rounded col-span-2"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default ScientificCalculator;
