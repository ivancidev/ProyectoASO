import close from "../assets/close.svg";
import { useState } from "react";

const EditInput = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [inputValue, setInputValue] = useState("/opt/dir/soft");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-400 bg-opacity-[0.4] z-50">
      <div className="bg-white pt-12 pb-8 pr-8 pl-8  border-customBlack border-[1px] rounded-lg shadow-lg relative w-80">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          <img src={close} alt="close" />
        </button>
        <div className="flex flex-row">
            <p className="font-secular text-base">Current Option:</p>
            <p className="font-roboto text-base ml-2">path</p>
        </div>
        <p>path</p>
        <input
            onChange={handleOnChange}
            type="text"
            value={inputValue}
            className="border-[1px] border-zinc-500 rounded-lg p-1 w-64 mt-1"
        />

        <div className="flex items-center justify-center space-x-6 mt-8">
            <button className="w-20 py-2 bg-customHover rounded-[20px] text-white">
               Ok 
            </button>
            <button onClick={onClose}  className="w-20 py-2 border-black border-[1px] text-customHover rounded-[20px]">
                Cancel
            </button>
        </div>
      </div>
    </div>
  );
};

export default EditInput;