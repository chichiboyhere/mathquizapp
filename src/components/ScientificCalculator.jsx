import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Section from './Section';

const ScientificCalculator = () => {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleCalculate = () => {
        try {
            setInput(evaluate(input).toString());
        } catch {
            setInput("Error");
        }
    };

    const handleScientificOperation = (operation) => {
        try {
            setInput(evaluate(`${operation}(${input})`).toString());
        } catch {
            setInput("Error");
        }
    };

    return (
        <Section id="calculators">
        <div className="flex flex-col items-center p-6">
            <div className="w-80 bg-gray-800 p-4 rounded-lg shadow-lg">
                <input
                    type="text"
                    value={input}
                    readOnly
                    className="w-full p-2 mb-4 text-right bg-gray-700 text-white rounded-md"
                />
                <div className="grid grid-cols-4 gap-2">
                    <button onClick={() => handleScientificOperation('sqrt')} className="btn">√</button>
                    <button onClick={() => handleScientificOperation('sin')} className="btn">sin</button>
                    <button onClick={() => handleScientificOperation('cos')} className="btn">cos</button>
                    <button onClick={() => handleScientificOperation('tan')} className="btn">tan</button>

                    <button onClick={() => handleClick('7')} className="btn">7</button>
                    <button onClick={() => handleClick('8')} className="btn">8</button>
                    <button onClick={() => handleClick('9')} className="btn">9</button>
                    <button onClick={() => handleClick('/')} className="btn">&divide;</button>

                    <button onClick={() => handleClick('4')} className="btn">4</button>
                    <button onClick={() => handleClick('5')} className="btn">5</button>
                    <button onClick={() => handleClick('6')} className="btn">6</button>
                    <button onClick={() => handleClick('*')} className="btn">&times;</button>

                    <button onClick={() => handleClick('1')} className="btn">1</button>
                    <button onClick={() => handleClick('2')} className="btn">2</button>
                    <button onClick={() => handleClick('3')} className="btn">3</button>
                    <button onClick={() => handleClick('-')} className="btn">-</button>

                    <button onClick={() => handleClick('0')} className="btn col-span">0</button>
                    <button onClick={() => handleClick('.')} className="btn">.</button>
                    <button onClick={() => handleClick('+')} className="btn">+</button>

                    <button onClick={handleClear} className="btn col-span">C</button>
                    <button onClick={handleCalculate} className="btn col-span bg-blue-500 text-white">=</button>
                    
                </div>
            </div>
        </div>
        </Section>
    );
};

export default ScientificCalculator;
