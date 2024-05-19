import { useState } from "react";

const TextInput = ({ label }) => {
  const [inputValue, setInputValue] = useState(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="space-x-6">
      <label>{label}</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="border-2 border-zinc-500 rounded-lg p-1 focus:outline-none"
      />
    </div>
  );
};

export default TextInput;
