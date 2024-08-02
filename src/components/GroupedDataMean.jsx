import React, { useState } from 'react';

const GroupedDataMean = () => {
  const [groups, setGroups] = useState([{ midpoint: '', frequency: '' }]);
  const [mean, setMean] = useState(null);

  const handleChange = (index, event) => {
    const values = [...groups];
    values[index][event.target.name] = event.target.value;
    setGroups(values);
  };

  const handleAddGroup = () => {
    setGroups([...groups, { midpoint: '', frequency: '' }]);
  };

  const handleCalculateMean = () => {
    let totalMidpointFrequency = 0;
    let totalFrequency = 0;

    groups.forEach(group => {
      const midpoint = parseFloat(group.midpoint) || 0;
      const frequency = parseFloat(group.frequency) || 0;
      totalMidpointFrequency += midpoint * frequency;
      totalFrequency += frequency;
    });

    const meanValue = totalFrequency === 0 ? 0 : totalMidpointFrequency / totalFrequency;
    setMean(meanValue);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Grouped Data Mean Calculator</h2>
      {groups.map((group, index) => (
        <div key={index} className="mb-4">
          <label className="block text-gray-700">Group {index + 1}</label>
          <div className="flex gap-4">
            <input
              type="number"
              name="midpoint"
              value={group.midpoint}
              onChange={event => handleChange(index, event)}
              placeholder="Midpoint"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="number"
              name="frequency"
              value={group.frequency}
              onChange={event => handleChange(index, event)}
              placeholder="Frequency"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        </div>
      ))}
     <div className="flex gap-2 items-center justify-center">
      <button
          onClick={handleAddGroup}
          className="bg-blue-500 text-white py-2 px-4 rounded-md "
        >
          Add Group
        </button>
        <button
          onClick={handleCalculateMean}
          className="bg-green-500 text-white py-2 px-4 rounded-md"
        >
          Calculate Mean
        </button>
     </div>
      {mean !== null && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-black">Mean: {mean.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default GroupedDataMean;
