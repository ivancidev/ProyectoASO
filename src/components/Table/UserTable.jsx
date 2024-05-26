import React, { useState } from "react";

const UserTable = ({ users, onDelete }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleDeleteUser = () => {
    if (selectedUser) {
      onDelete(selectedUser);
      setSelectedUser(null);
    }
  };

  return (
    <div>
      <table class="table-auto font-roboto w-60 mt-5">
        <thead className="h-9">
          <tr className="bg-customBlack text-sm text-white border border-customBlack">
            <th className="text-left pl-3">Samba Users</th>
          </tr>
        </thead>
        <tbody className="border-[1px] border-customBlack max-h-40 overflow-y-auto font-roboto">
          {users.map((user, index) => (
            <tr
              key={index}
              onClick={() => handleSelectUser(user)}
              style={{
                backgroundColor: selectedUser === user ? "#f0f0f0" : "white",
                cursor: "pointer"
              }}
            >
              <td>{user}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div>
          <h2>Selected User: {selectedUser}</h2>
          <button onClick={handleDeleteUser}>Delete User</button>
        </div>
      )}
    </div>
  );
};

export default UserTable;
