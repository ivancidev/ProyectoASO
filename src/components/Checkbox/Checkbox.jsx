import React, { useState } from 'react';

const Checkbox = ({ label, name, checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked); // Set default checked state

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    onChange(event.target.checked);
  };

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
