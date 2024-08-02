import React, { useState } from 'react';

const DynamicForm = () => {
  const [fields, setFields] = useState([{ value: '' }]);

  const handleAddField = () => {
    setFields([...fields, { value: '' }]);
  };

  const handleRemoveField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  const handleChange = (index, event) => {
    const newFields = fields.map((field, i) =>
      i === index ? { value: event.target.value } : field
    );
    setFields(newFields);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Dynamic Form</h1>
      <form>
        {fields.map((field, index) => (
          <div key={index} className="mb-4 flex items-center">
            <input
              type="text"
              value={field.value}
              onChange={(e) => handleChange(index, e)}
              className="border border-gray-300 p-2 rounded-lg flex-1"
              placeholder={`Field ${index + 1}`}
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
        <button
          type="button"
          onClick={handleAddField}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Field
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
