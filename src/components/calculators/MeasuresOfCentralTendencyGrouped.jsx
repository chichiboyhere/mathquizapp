import React, { useState } from 'react';
import Button from '../Button';

const MeasuresOfCentralTendencyGrouped = ({menuShow}) => {
  const [data, setData] = useState([{ lower: '', upper: '', frequency: '' }]);
  const [mean, setMean] = useState(null)
  const [mode, setMode] = useState(null)
  const [median, setMedian] = useState(null);

  const handleChange = (index, key, value) => {
    const newData = [...data];
    newData[index][key] = value;
    setData(newData);
  };

  const handleAddRow = () => {
    setData([...data, { lower: '', upper: '', frequency: '' }]);
  };

  const handleRemoveField = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleReset = () => {
    setData([{ lower: '', upper: '', frequency: '' }])
    setMean(null)
    setMode(null)
    setMedian(null)
  }

  const handleCalculateMean = () => {
    // if (data.length === 0) return;
     
     const totalFrequency = data.reduce((sum, item) => sum + parseInt(item.frequency), 0);
     const weightedSum = data.reduce((sum, item) => sum + ((parseFloat(item.lower) + parseFloat(item.upper)) * 0.5 * parseInt(item.frequency)), 0);
     const meanValue = weightedSum / totalFrequency;
     setMean(meanValue)
     handleCalculateMedian();
     handleCalculateMode();
   };

  const handleCalculateMedian = () => {
    let totalFrequency = 0;
    let cumulativeFrequency = [];
    data.forEach((row, index) => {
      totalFrequency += parseFloat(row.frequency);
      cumulativeFrequency[index] = totalFrequency;
     
    });

    const N = totalFrequency / 2;

    let medianClassIndex = cumulativeFrequency.findIndex((cf) => cf >= N);

    let x = parseFloat(data[medianClassIndex].lower) - parseFloat(data[medianClassIndex - 1].upper)
    let L;
    (x === 0)? L = parseFloat(data[medianClassIndex].lower) : L = parseFloat(data[medianClassIndex].lower) - (x * 0.5)
    //let L = parseFloat(data[medianClassIndex].lower);
    let F = parseFloat(data[medianClassIndex].frequency);
    let C = cumulativeFrequency[medianClassIndex - 1] || 0;
    let y = parseFloat(data[medianClassIndex].upper) - parseFloat(data[medianClassIndex].lower);
    let h;
    (x === 0) ? h = y : h = y + x

    let median = L + ((N - C) / F) * h;
    setMedian(median);
  };

  const handleCalculateMode = () => {
    let maxFrequency = 0;
    let modeClassIndex = 0;

    data.forEach((row, index) => {
      console.log(index)
      if (parseFloat(row.frequency) > maxFrequency) {
        maxFrequency = parseFloat(row.frequency);
        modeClassIndex = index;
      }
    });

    let x = parseFloat(data[modeClassIndex].lower) - parseFloat(data[modeClassIndex - 1].upper)
    let L;
    (x === 0)? L = parseFloat(data[modeClassIndex].lower) : L = parseFloat(data[modeClassIndex].lower) - (x * 0.5)

    let f1 = parseFloat(data[modeClassIndex].frequency);
    let f0 = parseFloat(data[modeClassIndex - 1]?.frequency || 0);
    let f2 = parseFloat(data[modeClassIndex + 1]?.frequency || 0);
    let y = parseFloat(data[modeClassIndex].upper) - parseFloat(data[modeClassIndex].lower);
    let h;
    (x === 0) ? h = y : h = y + x

    let mode = L + ((f1 - f0) / ((f1 - f0) + (f1 - f2))) * h;
    setMode(mode);
  };


  return (
    <div className="container mx-auto p-4 md:w-1/2">
      <h1 className="text-2xl font-bold mb-4">Mean, Mode, Median Calculator (Grouped Data)</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 text-black">Lower Class Limit</th>
            <th className="py-2 text-black">Upper Class Limit</th>
            <th className="py-2 text-black">Frequency</th>
            <th className="py-2 text-black"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="border px-2 py-2">
                <input
                  type="number"
                  value={row.lower}
                  onChange={(e) => handleChange(index, 'lower', e.target.value)}
                  className="w-full px-2 py-1 border rounded text-center"
                />
              </td>
              <td className="border px-2 py-2">
                <input
                  type="number"
                  value={row.upper}
                  onChange={(e) => handleChange(index, 'upper', e.target.value)}
                  className="w-full px-2 py-1 border rounded text-center"
                />
              </td>
              <td className="border px-2 py-2">
                <input
                  type="number"
                  value={row.frequency}
                  onChange={(e) => handleChange(index, 'frequency', e.target.value)}
                  className="w-full px-2 py-1 border rounded text-center"
                  min={1}
                />
              </td>
               <td>
               <button
                type="button"
                onClick={() => handleRemoveField(index)}
                className="ml-1 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 mr-1"
              >
                Remove
              </button>
               </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={handleAddRow}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 shrink"
        >
          Add
        </button>
        <button
          onClick={handleCalculateMean}
          className="mt-4 ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 md:grow"
        >
          Solve
        </button>
        <button
          onClick={handleReset}
          className="mt-4 ml-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 shrink"
        >
          Reset
        </button>
      </div>

      {mean !== null && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
          <h2 className="text-xl font-semibold text-black">Mean: {mean}</h2>
        </div>
      )}
      
      {mode !== null && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
          <h2 className="text-xl font-semibold text-black">Mode: {mode}</h2>
        </div>
      )}

      {median !== null && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
          <h2 className="text-xl font-semibold text-black">Median: {median}</h2>
        </div>
      )}
       <div className="mt-4">
         <Button onClick={menuShow}>Back To Menu</Button>
      </div> 
    </div>
  );
};

export default MeasuresOfCentralTendencyGrouped;
