import React, { useState } from "react";
import Button from "../Button";

const MeasuresOfDispersionUngrouped = ({menuShow}) => {
  const [data, setData] = useState([{ value: "", freq: 1 }]);
  const [range, setRange] = useState(null);
  const [meanDeviation, setMeanDeviation] = useState(null);
  const [variance, setVariance] = useState(null);
  const [standardDev, setStandardDev] = useState(null);

  const handleAddField = () => {
    setData([...data, { value: "", freq: 1 }]);
  };

  const handleRemoveField = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const calculateRange = () => {
    let nums = [];
    for (let i = 0; i < data.length; i++) {
      nums.push(parseFloat(data[i].value));
    }
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    setRange(max - min);
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
    calcMeanDeviation(meanValue, totalFrequency);
    calcVariance(meanValue, totalFrequency);
    calculateRange();
  };

  const calcMeanDeviation = (mean, sumFreq) => {
    const devFromMean = data.reduce(
      (sum, item) =>
        sum + Math.abs(parseFloat(item.value) - mean) * parseInt(item.freq),
      0
    );
    const meanDev = devFromMean / sumFreq;
    setMeanDeviation(meanDev);
  };

  const calcVariance = (mean, sumFreq) => {
    const summationfxsquared = data.reduce(
      (sum, item) =>
        sum + Math.pow(parseFloat(item.value) - mean, 2) * parseInt(item.freq),
      0
    );
    const varian = summationfxsquared / sumFreq;
    setVariance(varian);
    calcStandardDeviation(varian);
  };

  const calcStandardDeviation = (varian) => {
    const sd = Math.sqrt(varian);
    setStandardDev(sd);
  };

  const handleChange = (index, event) => {
    const values = [...data];
    values[index][event.target.name] = event.target.value;
    setData(values);
  };

  const reset = () => {
    setData([{ value: "", freq: 1 }]);
    setRange(null);
    setMeanDeviation(null);
    setStandardDev(null);
    setVariance(null);
  };

  return (
    <div className="container mx-auto p-4 md:w-1/2">
      <h1 className="text-2xl font-bold mb-4">
        Range, Mean Deviation, Variance, Standard Deviation (Ungrouped)Calculator
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

      {range !== null && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
          <h2 className="text-xl font-semibold text-black">Range: {range}</h2>
        </div>
      )}

      {meanDeviation !== null && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
          <h2 className="text-xl font-semibold text-black">
            Mean Deviation: {meanDeviation}
          </h2>
        </div>
      )}

      {variance !== null && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
          <h2 className="text-xl font-semibold text-black">
            Variance: {variance}
          </h2>
        </div>
      )}

      {standardDev !== null && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
          <h2 className="text-xl font-semibold text-black">
            Standard Deviation: {standardDev}
          </h2>
        </div>
      )}
      <div className="mt-4">
         <Button onClick={menuShow}>Back To Menu</Button>
      </div> 
    </div>
  );
};

export default MeasuresOfDispersionUngrouped;
