import React, { useState } from 'react';
import { fetchDirectorys } from '../utils/api';

const DirectoryPopup = ({ onSelect, onClose }) => {
  const [user, setUser] = useState('');
  const [directories, setDirectories] = useState([]);

  const fetchDirectories = async () => {
    try {
      const response = await fetchDirectorys(user);
      setDirectories(response);
    } catch (error) {
      console.error("Error fetching directories:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded shadow-lg w-1/3">
        <h2 className="text-lg text-center mb-4">Enter the username</h2>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full p-2 border-2 border-customHover rounded mb-4 font-roboto"
          placeholder="Enter username"
        />
        {directories.length > 0 && (
          <ul className="mb-4">
            {directories.map((directory) => (
              <li
                key={directory}
                onClick={() => onSelect(directory)}
                className="cursor-pointer hover:bg-gray-200 p-2 rounded"
              >
                {directory}
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-center space-x-4">
          <button
            onClick={fetchDirectories}
            className="flex-1 bg-curtomButton text-white px-4 py-2 rounded-lg font-roboto"
          >
            Search Directory
          </button>
          <button
            onClick={onClose}
            className="flex-1 border-customHover border-2 text-black px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DirectoryPopup;
