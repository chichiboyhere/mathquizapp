import React, { useState } from 'react';

const MeasuresOfCentralTendencyRaw = () => {
  const [input, setInput] = useState('');
  const [mean, setMean] = useState(null);
  const [mode, setMode] = useState(null);
  const [median, setMedian] = useState(null);
  const [invalidInput, setInvalidInput] = useState('')

  const handleDataProcessing = () => {
    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    if (numbers.length === 0) {
        setInvalidInput('Invalid input');
      return;
    }
    
    calculateMean(numbers)
    calculateMode(numbers)
    calculateMedian(numbers)
  }

  const calculateMean = (numbers) => {
    let sum = 0;
    for (let num of numbers) sum += num  // sum = sum + num
    let mean = sum/numbers.length;
    setMean(`Mean: ${mean}`);
  }

  const calculateMode = (numbers) => {
    const frequency = {};
    numbers.forEach(num => {
        // ascribe 1 to the frequency of any new number and increase the frequency of an existing number by one
      frequency[num] = (frequency[num] || 0) + 1;
    });

    console.log(frequency)
    const maxFrequency = Math.max(...Object.values(frequency)); // returns the maximum value of the frequency object
    const modes = Object.keys(frequency).filter(num => frequency[num] === maxFrequency); // get the mode(s) from the keys of the frequency object where the frequency match the maximum frequency

    setMode((modes.length > 1 && maxFrequency > 1) ? `Multiple modes: ${modes.join(', ')}`: (maxFrequency === 1)? ``: `Mode: ${modes[0]}`);
  }

  const calculateMedian = (numbers) => {
    let sortedNumbers = numbers.sort((a, b) => a - b);
    let N = sortedNumbers.length; 
    let x = ((N + 1)/2) - 1;
    let median; 
    if (Number.isInteger(x)){
        median = sortedNumbers[x]   
    }
    else{
        x = parseInt(x)
        median = (sortedNumbers[x] + sortedNumbers[x + 1])/2
    }
    setMedian(`Median: ${median}`);
  }

   const handleReset = () => {
    setInput('')
    setInvalidInput('')
    setMean(null)
    setMode(null)
    setMedian(null)
   }

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg mt-10 bg-white">
      <h1 className="text-2xl font-semibold mb-4 text-black">Mean, Mode, Median Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter numbers separated by commas"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <div className='flex gap-2' >
        <button
            onClick={handleDataProcessing}
            className="w-1/2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
            Calculate 
        </button>
        <button
            onClick={handleReset}
            className="w-1/2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-400"
        >
            Reset 
        </button>
      </div>
      {invalidInput && <p className="mt-4 text-lg text-[red]">{invalidInput}</p>}
      {mean && <p className="mt-4 text-lg text-black">{mean}</p>}
      {mode && <p className="mt-4 text-lg text-black">{mode}</p>}
      {median && <p className="mt-4 text-lg text-black">{median}</p>}
    </div>
  );
};

export default MeasuresOfCentralTendencyRaw;
