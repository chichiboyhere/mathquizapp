import React, { useState } from 'react';

const MeasuresOfDispersionGrouped = () => {
  const [data, setData] = useState([{ lower: "" , upper: "", freq: ""}]);
  const [range, setRange] = useState(null);
  const [mean, setMean] = useState(null)
  const [meanDeviation, setMeanDeviation] = useState(null);
  const [variance, setVariance] = useState(null);
  const [standardDev, setStandardDev] = useState(null);


  const handleAddField = () => {
    setData([...data, { lower: "" , upper: "", freq: ""}]);
  };

  const handleRemoveField = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const calculateRange = () => {
    let nums = [];
    for (let i = 0; i < data.length; i++) {
        nums.push(parseFloat(data[i].lower));
        nums.push(parseFloat(data[i].upper));
    }
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    setRange(max - min)
  }

  const calculateMean = () => {
   if (data.length === 0) return;
    
    const totalFrequency = data.reduce((sum, item) => sum + parseInt(item.freq), 0);
    const weightedSum = data.reduce((sum, item) => sum + ((parseFloat(item.lower) + parseFloat(item.upper)) * 0.5 * parseInt(item.freq)), 0);
    const meanValue = weightedSum / totalFrequency;

    setMean(meanValue)
    calcMeanDeviation(meanValue, totalFrequency);
    calcVariance(meanValue, totalFrequency)
    calculateRange()
  };

  const calcMeanDeviation = (mean, sumFreq) => {
    const devFromMean = data.reduce((sum, item) => sum + (Math.abs((((parseFloat(item.lower) + parseFloat(item.upper)) * 0.5) - mean))* parseInt(item.freq)), 0)
    const meanDev = devFromMean / sumFreq
    setMeanDeviation(meanDev)
  }

  const calcVariance = (mean, sumFreq) => {
    const summationfxsquared = data.reduce((sum, item) => sum + (Math.pow((((parseFloat(item.lower) + parseFloat(item.upper)) * 0.5) - mean), 2)* parseInt(item.freq)), 0)
    const varian = summationfxsquared / sumFreq
    setVariance(varian)
    calcStandardDeviation(varian)
  }

  const calcStandardDeviation = (varian) => {
     const sd = Math.sqrt(varian)
     setStandardDev(sd)
  }

  const handleChange = (index, event) => {
    const values = [...data];
    values[index][event.target.name] = event.target.value;
    setData(values);
  };

  const reset = () => {
      setData([{ lower: "", upper: "", freq: "" }])
      setRange(null)
      setMean(null)
      setMeanDeviation(null)
      setVariance(null)
      setStandardDev(null)
  }

 
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Dynamic Form</h1>
      <form>
          <div className="flex gap-8 text-black px-2 mb-[10px]">
            <div className="h6 leading-[1.2rem]">Lower<br></br>Limit</div>
            <div className="h6 leading-[1.2rem]">Upper<br></br>Limit</div>
            <div className="h6 leading-[1.2rem]">Freq</div>
          </div>
        {data.map((field, index) => (
          
          <div key={index} className="mb-2 flex items-center gap-1">
            <input
              type="number"
              name="lower"
              value={field.lower}
              onChange={event => handleChange(index, event)}
              className="border border-gray-300 p-2 rounded-lg w-20 text-center"
              placeholder={`lower`}
            />
            <input
              type="number"
              name="upper"
              value={field.upper}
              onChange={event => handleChange(index, event)}
              className="border border-gray-300 p-2 rounded-lg w-20 text-center"
              placeholder={`upper`}
            />
            <input
              type="number"
              name="freq"
              value={field.freq}
              onChange={event => handleChange(index, event)}
              className="border border-gray-300 p-2 rounded-lg w-20 text-white text-center"
              placeholder={`freq`}
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
      {mean !== null && <div className="text-black font-semibold">Mean(Not a measure of dispersion): {mean}</div>}
      {range !== null && <div className="text-black font-semibold">Range: {range}</div>}
      {meanDeviation !== null && <div className="mt-2 text-black font-semibold">Mean Deviation: {meanDeviation}</div>}
      {variance !== null && <div className="mt-2 text-black font-semibold">Variance: {variance}</div>}
      {standardDev !== null && <div className="mt-2 text-black font-semibold">Standard Deviation: {standardDev}</div>}
    </div>
  );
};

export default MeasuresOfDispersionGrouped;
