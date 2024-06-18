
const TextInput = ({ label, value, onChange, disabled }) => {
  return (
    <div className="space-x-6 ml-6">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`border-[1px] border-zinc-500 rounded-lg p-1 focus:outline-none ${disabled ? "bg-gray-200" : ""}`}
      />
    </div>
  );
};

export default TextInput;
