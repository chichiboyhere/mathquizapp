// src/ModeCalculator.js
import React, { useState } from 'react';

const ModeCalculator = () => {
  const [groups, setGroups] = useState([]);
  const [groupInput, setGroupInput] = useState('');
  const [mode, setMode] = useState(null);

  const addGroup = () => {
    if (groupInput) {
      const newGroup = groupInput.split(',').map(Number);
      setGroups([...groups, newGroup]);
      setGroupInput('');
    }
  };

  const calculateMode = () => {
    const allValues = groups.flat();
    const frequency = {};

    // Count frequencies
    allValues.forEach(value => {
      frequency[value] = (frequency[value] || 0) + 1;
    });

    // Find the mode
    const maxFreq = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency).filter(value => frequency[value] === maxFreq);

    setMode(modes.map(Number));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4 text-black">Mode Calculator</h1>
      <div className="mb-4">
        <input
          type="text"
          value={groupInput}
          onChange={(e) => setGroupInput(e.target.value)}
          placeholder="Enter numbers separated by commas"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addGroup}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Group
        </button>
      </div>
      <div className="mb-4">
        <button
          onClick={calculateMode}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Calculate Mode
        </button>
      </div>
      {mode !== null && (
        <div className="mt-4 p-2 bg-gray-100 rounded">
          <h2 className="text-lg font-semibold text-black">Mode:</h2>
          <p className="text-xl text-black">{mode.join(', ')}</p>
        </div>
      )}
      {groups.length > 0 && (
        <div className="mt-4 p-2 bg-gray-100 rounded">
          <h2 className="text-lg font-semibold text-black">Groups:</h2>
          <ul>
            {groups.map((group, index) => (
              <li key={index} className="text-sm text-black">
                {group.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ModeCalculator;
