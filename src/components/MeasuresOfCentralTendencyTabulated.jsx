import React, { useState } from "react";

const MeasuresOfCentralTendencyTabulate = () => {
  const [data, setData] = useState([{ value: "", freq: 1 }]);
  const [median, setMedian] = useState(null);
  const [mean, setMean] = useState(null);
  const [mode, setMode] = useState(null);

  const handleAddField = () => {
    setData([...data, { value: "", freq: 1 }]);
  };

  const handleRemoveField = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const calculateMean = () => {
    if (data.length === 0) return;

    const totalFrequency = data.reduce(
      (sum, item) => sum + parseInt(item.freq),
      0
    );
    const weightedSum = data.reduce(
      (sum, item) => sum + parseFloat(item.value) * parseInt(item.freq),
      0
    );
    const meanValue = weightedSum / totalFrequency;
    setMean(meanValue);
    calculateMedian();
    calculateMode();
  };

  const calculateMedian = () => {
    // Create an array with all values repeated according to their frequency
    const expandedData = data.flatMap((entry) =>
      Array(Number(entry.freq)).fill(Number(entry.value))
    );
    expandedData.sort((a, b) => a - b);

    const n = expandedData.length;
    const mid = Math.floor(n / 2);
    const median =
      n % 2 === 0
        ? (expandedData[mid - 1] + expandedData[mid]) / 2
        : expandedData[mid];

    setMedian(median);
  };

  const calculateMode = () => {
    let modes = [];
    let allFreqs = [];
    let maxFreq;
    data.forEach((datum) => {
      allFreqs.push(parseInt(datum.freq));
      maxFreq = Math.max(...allFreqs);
    });

    for (let i = 0; i < data.length; i++) {
      if (parseInt(data[i].freq) === maxFreq) {
        modes.push(parseFloat(data[i].value));
      }
    }
    setMode(
      modes.length > 1 && maxFreq > 1
        ? `Multiple modes: ${modes.join(", ")}`
        : maxFreq === 1
        ? `Mode: No Modes`
        : `Mode: ${modes[0]}`
    );
  };

  const handleChange = (index, event) => {
    const values = [...data];
    values[index][event.target.name] = event.target.value;
    setData(values);
  };

  const reset = () => {
    setData([{ value: "", freq: 1 }]);
    setMean(null);
    setMode(null);
    setMedian(null);
  };

  return (
    <div className="container mx-auto p-4 md:w-1/2">
      <h1 className="text-2xl font-bold mb-4">
        Mean, Mode and Median Calculator(tabulated)
      </h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 text-black">Value</th>
            <th className="py-2 text-black">Frequency</th>
            <th className="py-2 text-black"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((field, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="border px-2 py-2">
                <input
                  type="number"
                  name="value"
                  required
                  value={field.value}
                  onChange={(event) => handleChange(index, event)}
                  className="w-full px-2 py-1 border rounded text-center"
                />
              </td>
              <td className="border px-2 py-2">
                <input
                  type="number"
                  name="freq"
                  value={field.freq}
                  onChange={(event) => handleChange(index, event)}
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
          onClick={handleAddField}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 shrink"
        >
          Add Row
        </button>
        <button
          onClick={calculateMean}
          className="mt-4 ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 md:grow"
        >
          Solve
        </button>
        <button
          onClick={reset}
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
          <h2 className="text-xl font-semibold text-black">{mode}</h2>
        </div>
      )}

      {median !== null && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
          <h2 className="text-xl font-semibold text-black">Median: {median}</h2>
        </div>
      )}
    </div>
  );
};

export default MeasuresOfCentralTendencyTabulate;
