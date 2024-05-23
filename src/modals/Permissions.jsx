import close from "../assets/close.svg";
import React, { useState } from 'react';

const PermissionModal = ({ isOpen, onClose }) => {
  const [permissions, setPermissions] = useState({
    user: { read: false, write: false, execute: false },
    group: { read: false, write: false, execute: false },
    others: { read: false, write: false, execute: false },
  });
  const handlePermissionChange = (entity, permission) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [entity]: {
        ...prevPermissions[entity],
        [permission]: !prevPermissions[entity][permission],
      },
    }));
  };

  const handleSubmit = () => {
    // Here you can handle the submission of the selected permissions
    console.log('Selected Permissions:', permissions);
    // Close the modal or perform other actions
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
        <h2>Permissions</h2>
        <table className="table-fixed">
          <thead >
            <tr>
              <th></th>
              <th>Read</th>
              <th>Write</th>
              <th>Execute</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(permissions).map(([entity, perms]) => (
              <tr key={entity}>
                <td>{entity.charAt(0).toUpperCase() + entity.slice(1)}</td>
                {Object.entries(perms).map(([permission, value]) => (
                  <td key={permission}>
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={() => handlePermissionChange(entity, permission)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-center space-x-6 mt-8">
            <button onClick={handleSubmit} className="px-8 py-2 bg-customHover rounded-[20px] text-white">
               Yes 
            </button>
            <button onClick={onClose}  className="px-8 py-2 border-black border-[1px] text-customHover rounded-[20px]">
                No
            </button>
        </div>
      </div>
    </div>
  );
};
export default PermissionModal;