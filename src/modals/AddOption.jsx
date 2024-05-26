import React, { useState } from "react";
import close from "../assets/close.svg";
import { fetchAddAttribute } from "../utils/api";

const AddOption = ({ isOpen, onClose, resourceName }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [attributeValue, setAttributeValue] = useState("");

  const handleOptionChange = (e) => {
    const option = e.target.value;
    setSelectedOption(option);
    if (option === "writeList") {
      setAttributeValue("@ntadmin root");
    } else {
      setAttributeValue("Yes");
    }
  };

  const handleAddAttribute = async () => {
    if (selectedOption) {
      const data = {
        resourceName: resourceName,
        attributeName: selectedOption,
        attributeValue: attributeValue,
      };
      try {
        await fetchAddAttribute(data);
        onClose();
        setSelectedOption("");
        setAttributeValue("");
        window.location.href = "/Shares";
      } catch (error) {
        console.error("Error adding attribute:", error);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-400 bg-opacity-[0.4] z-50">
      <div className="bg-white pt-12 pb-8 pr-8 pl-8 border-customBlack border-[1px] rounded-lg shadow-lg relative w-80">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          <img src={close} alt="close" />
        </button>
        <p className="font-secular text-base">Select Option</p>
        
        <select 
          value={selectedOption}
          onChange={handleOptionChange}
          className="h-8 w-64 rounded-lg border-[1px] border-[#3D4144] mt-5 font-roboto"
        >
          <option value="" disabled>Select an option</option>
          <option value="readOnly">Read Only</option>
          <option value="inheritAcls">Inherit Acls</option>
          <option value="forceGroup">Force Group</option>
          <option value="guestAccess">Guest Access</option>
          <option value="writeList">Write List</option>
        </select>
        
        <div className="flex items-center justify-center space-x-6 mt-8">
          <button 
            onClick={handleAddAttribute}
            className="w-20 py-2 bg-customHover rounded-[20px] text-white"
          >
            Ok 
          </button>
          <button 
            onClick={onClose}
            className="w-20 py-2 border-black border-[1px] text-customHover rounded-[20px]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOption;
