import close from "../assets/close.svg";
import { useState } from "react";
import { fectchEdit } from "../utils/api";

const EditCheck = ({ isOpen, onClose, selectedValue, selectedKey, name }) => {
  if (!isOpen) return null;
  const [isChecked, setIsChecked] = useState(selectedValue === 'Yes');

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleConfirm = () => {
    const jsonData = JSON.stringify({ [selectedKey]: isChecked? 'Yes':'No' });
    console.log('es el', jsonData)
    fectchEdit(name, jsonData);
    onClose();
    window.location.href = "/Shares";
  }

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
            <p className="font-roboto text-base ml-2">{selectedKey}</p>
        </div>
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleOnChange}
            className="mr-2"
          />
          <label htmlFor="isChecked" className="font-roboto text-base">
            {selectedKey}
          </label>
        </div>
        <div className="flex items-center justify-center mt-8 space-x-6">
            <button onClick={handleConfirm}
             className="w-20 py-2 bg-customHover rounded-[20px] text-white">
               Save 
            </button>
            <button onClick={onClose}  className="w-20 py-2 border-black border-[1px] text-customHover rounded-[20px]">
                Cancel
            </button>
        </div>
      </div>
    </div>
  );
};

export default EditCheck;