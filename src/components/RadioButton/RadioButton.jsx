const RadioButton = ({ id, name, label }) => {
  return (
    <div>
      <input
        type="radio"
        name={name}
        id={id}
        className="mr-2 h-4 w-4 text-lg"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
