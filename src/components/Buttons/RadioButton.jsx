const RadioButton = ({ id, name, label, checked, onChange }) => {
  return (
    <div className="mt-1">
      <input
        type="radio"
        name={name}
        id={id}
        className="mr-2 h-4 w-4 text-lg"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
