import { useEffect, useState } from "react";
import close from "../assets/close.svg";

const Rename = ({ isOpen, onClose, name, updateShareName }) => {
  const [newShareName, setNewShareName] = useState(name);

  useEffect(() => {
    if (!isOpen) {
      setNewShareName(name);
    }
  }, [isOpen, name]);

  const handleRename = () => {
    updateShareName(newShareName);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-400 bg-opacity-[0.4] z-50">
      <div className="bg-white pt-12 pb-8 pr-8 pl-8  border-customBlack border-[1px] rounded-lg shadow-lg relative w-96">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          <img src={close} alt="close" />
        </button>
        <h2 className="font-bold text-2xl text-center mb-2">Rename Share</h2>
        <p>New Share Name:</p>
        <input
          type="text"
          value={newShareName}
          onChange={(e) => setNewShareName(e.target.value)}
          className="border-2 border-black rounded-lg p-2 mt-2 w-full"
        />
        <div className="flex items-center justify-center space-x-6 mt-8">
          <button
            onClick={handleRename}
            className="px-8 py-2 bg-customHover rounded-[20px] text-white"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="px-8 py-2 border-black border-[1px] text-customHover rounded-[20px]"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rename;
