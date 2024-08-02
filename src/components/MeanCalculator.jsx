import React, { useState } from 'react';

const MeanCalculator = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const [frequency, setFrequency] = useState('');
  const [mean, setMean] = useState(null);

  const handleAddData = () => {
    if (value && frequency) {
      setData([...data, { value: parseFloat(value), frequency: parseInt(frequency) }]);
      setValue('');
      setFrequency('');
    }
  };

  const calculateMean = () => {
    if (data.length === 0) return;
    
    const totalFrequency = data.reduce((sum, item) => sum + item.frequency, 0);
    const weightedSum = data.reduce((sum, item) => sum + (item.value * item.frequency), 0);
    const meanValue = weightedSum / totalFrequency;
    
    setMean(meanValue);
  };

  return (
    <div>
      <h1>Grouped Data Mean Calculator</h1>
      <div>
        <input
          type="number"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          type="number"
          placeholder="Frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        />
        <button onClick={handleAddData}>Add Data</button>
      </div>
      <div>
        <button onClick={calculateMean}>Calculate Mean</button>
      </div>
      {mean !== null && <div>Mean: {mean}</div>}
      {data.length > 0 && (
        <div>
          <h2>Data</h2>
          <ul>
            {data.map((item, index) => (
              <li key={index}>Value: {item.value}, Frequency: {item.frequency}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MeanCalculator;
