import React from "react";

const SelectMask = ({ label, value, onChange, options, disabled }) => {
  return (
    <div className="ml-12 mb-6">
      <label className="block">{label}</label>
      <select
        className="w-[200px] px-3 py-2 border rounded-md outline-none bg-slate-200"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-transparent hover:bg-green-500 hover:bg-transparent"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectMask;
