const TextInput = ({ label }) => {
    return (
      <div className="space-x-6">
        <label >{label}</label>
          <input
            type="text"
            className="border-2 border-zinc-500 rounded-lg p-1"
          />
      </div>
    );
  };
  
  export default TextInput;