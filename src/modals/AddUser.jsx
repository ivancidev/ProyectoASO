import { useEffect, useState } from "react";
import close from "../assets/close.svg";
import { fetchUser } from "../utils/api";
const AddUser = ({ isOpen, onClose}) => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    if (!isOpen) return null;
    const handleCreate = () => {
        fetchUser(name, pass);
        onClose();
      };
    
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-400 bg-opacity-[0.4] z-50">
      <div className="bg-white pt-12 pb-8 pr-8 pl-8  border-customBlack border-[1px] rounded-lg shadow-lg relative w-96">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          <img src={close} alt="close" />
        </button>
        <div className="space-y-2">
            <p>Existing linux username:</p>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-black rounded-lg p-2 mt-2 w-full"
            />
            <p>Samba User Password:</p>
            <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="border-2 border-black rounded-lg p-2 mt-2 w-full"
            />
        </div>

        <div className="flex items-center justify-center space-x-6 mt-8">
          <button
            onClick={handleCreate}
            className="px-8 py-2 bg-customHover rounded-[20px] text-white"
          >
            Create
          </button>
          <button
            onClick={onClose}
            className="px-8 py-2 border-black border-[1px] text-customHover rounded-[20px]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;