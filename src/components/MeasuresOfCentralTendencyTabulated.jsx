import React, { useState } from 'react';

const MeasuresOfCentralTendencyTabulate = () => {
  const [data, setData] = useState([{ value: "", freq: 1}]);
  const [median, setMedian] = useState(null);
  const [mean, setMean] = useState(null);
  const [mode, setMode] = useState(null);


  const handleAddField = () => {
    setData([...data, { value: "", freq: 1}]);
  };

  const handleRemoveField = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };
  
  
  const calculateMean = () => {
   if (data.length === 0) return;
    
    const totalFrequency = data.reduce((sum, item) => sum + parseInt(item.freq), 0);
    const weightedSum = data.reduce((sum, item) => sum + ((parseFloat(item.value) ) *  parseInt(item.freq)), 0);
    const meanValue = weightedSum / totalFrequency;
    setMean(meanValue)
    calculateMedian();
    calculateMode()
    
  };

  const calculateMedian = () => {
    
     // Create an array with all values repeated according to their frequency
     const expandedData = data.flatMap(entry => Array(Number(entry.freq)).fill(Number(entry.value)));
     expandedData.sort((a, b) => a - b);
 
     const n = expandedData.length;
     const mid = Math.floor(n / 2);
     const median =
       n % 2 === 0
         ? (expandedData[mid - 1] + expandedData[mid]) / 2
         : expandedData[mid];

    setMedian(`Median: ${median}`); 
  }


  const calculateMode = () => {
    let modes = [];
    let allFreqs = [];
    let maxFreq;
    data.forEach(datum => {
      allFreqs.push(parseInt(datum.freq))
      maxFreq = Math.max(...allFreqs) 
    })
    
    for (let i = 0; i < data.length; i++) {
        if (parseInt(data[i].freq) === maxFreq) {
          modes.push(parseFloat(data[i].value))  
        }
    }
    setMode((modes.length > 1 && maxFreq > 1) ? `Multiple modes: ${modes.join(', ')}`: (maxFreq === 1)? ``: `Mode: ${modes[0]}`);
  }

  

  const handleChange = (index, event) => {
    const values = [...data];
    values[index][event.target.name] = event.target.value;
    setData(values);
  };

  const reset = () => {
    setData([{ value: "", freq: 1}])
    setMean(null)
    setMode(null)
    setMedian(null)
  }

 
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4 text-black">Mean, Mode and Median Calculator(tabulated)</h1>
      <form>
          <div className="flex gap-8 text-black px-2 mb-[10px]">
            <div className="h6 leading-[1.2rem]">Value</div>
            <div className="h6 leading-[1.2rem]">Freq</div>
          </div>
        {data.map((field, index) => (
          
          <div key={index} className="mb-2 flex items-center gap-1">
            <input
              type="number"
              name="value"
              required
              value={field.value}
              onChange={event => handleChange(index, event)}
              className="border border-gray-300 p-2 rounded-lg w-20 text-center"
              placeholder={`value`}
            />
            <input
              type="number"
              name="freq"
              value={field.freq}
              onChange={event => handleChange(index, event)}
              className="border border-gray-300 p-2 rounded-lg w-20 text-white text-center"
              placeholder={`freq`}
              min={1}
            />
            <button
              type="button"
              onClick={() => handleRemoveField(index)}
              className="ml-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
        <p className="flex gap-2 mb-2">
        <button
          type="button"
          onClick={handleAddField}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add row
        </button>
        <button
          type="button"
          onClick={calculateMean}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Solve
        </button>
        <button
          type="button"
          onClick={reset}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Reset
        </button>
        </p>
      </form>
     
      {mean !== null && <div className="mt-2 text-black font-semibold">Mean: {mean}</div>}
      {mode !== null && <div className="mt-2 text-black font-semibold">{mode}</div>}
      {median !== null && <div className="mt-2 text-black font-semibold">{median}</div>}
    </div>
  );
};

export default MeasuresOfCentralTendencyTabulate;
