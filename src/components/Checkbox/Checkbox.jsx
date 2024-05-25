import React, { useState, useEffect } from "react";

const Checkbox = ({
  label,
  name,
  checked = false,
  onChange,
  disabled = false,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = (event) => {
    const value = event.target.checked ? "Yes" : "No";
    setIsChecked(event.target.checked);
    onChange(name, value);
  };

  return (
    <div className="space-x-3 flex">
      <input
        className="w-4"
        type="checkbox"
        id={name}
        name={name}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
