import React, { useState } from 'react';

function RadioSelect({ name, options }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>{name}</label>
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            id={option.value}
            name={name}
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}