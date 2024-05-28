import { useState, useEffect } from "react";
import Rename from "../../modals/Rename";
import FooterButtons from "../Buttons/FooterButtons";
import { helpTextShares } from "../../utils/helpText";
import Edit from "../../pages/Edit/Edit";

const Table = ({
  shares,
  setShares,
  setSelectedShareIndex,
  isModalRename,
  onCloseRename,
  isModalEdit,
  openDeleteModal,
  filterSystemShares,
  handleSendG,
}) => {
  const [oldName, setOldName] = useState("");
  const [newName, setNewName] = useState(null);
  const [filteredShares, setFilteredShares] = useState([]);
  const [filteredSelectedShareIndex, setFilteredSelectedShareIndex] =
    useState(null);

  useEffect(() => {
    if (shares) {
      const filtered = shares.filter((share) => {
        return (
          !filterSystemShares ||
          !(
            share.path.startsWith("/var") ||
            share.path.includes("%") ||
            share.name === "homes"
          )
        );
      });
      setFilteredShares(filtered);
      setFilteredSelectedShareIndex(null);
    }
  }, [shares, filterSystemShares]);

  const updateShareName = (newNameResource) => {
    const updatedShares = [...shares];
    const actualIndex = shares.indexOf(
      filteredShares[filteredSelectedShareIndex]
    );
    setOldName(updatedShares[actualIndex].name);
    updatedShares[actualIndex].name = newNameResource;
    setNewName(newNameResource);
    setShares(updatedShares);
  };

  const handleRowClick = (index) => {
    setFilteredSelectedShareIndex(index);
    setSelectedShareIndex(shares.indexOf(filteredShares[index]));
    openDeleteModal(filteredShares[index]);
  };

  return (
    <>
      {filteredSelectedShareIndex !== null ? (
        <Rename
          isOpen={isModalRename}
          name={filteredShares[filteredSelectedShareIndex].name}
          onClose={onCloseRename}
          updateShareName={updateShareName}
          text={"Rename Share"}
        />
      ) : (
        ""
      )}
      {isModalEdit && filteredSelectedShareIndex !== null ? (
        <Edit
          resource={
            filteredShares ? filteredShares[filteredSelectedShareIndex] : {}
          }
        />
      ) : (
        ""
      )}
      <table className="w-full font-roboto mt-6">
        <thead className="h-9">
          <tr className="bg-customBlack text-sm text-white border border-customBlack">
            <th className="text-left pl-1">Status</th>
            <th className="text-left">Read-Only</th>
            <th className="text-left pl-3">Name</th>
            <th className="text-left pl-28">Path</th>
            <th className="text-left pl-16">Guest Access</th>
            <th className="text-left pr-4">Comment</th>
          </tr>
        </thead>
      </table>
      <div className="border-[1px] border-customBlack max-h-32 overflow-y-auto">
        <table className="w-full my-2 font-roboto border-collapse">
          <tbody>
            {filteredShares.length > 0
              ? filteredShares.map((share, index) => (
                  <tr
                    key={index}
                    onClick={() => handleRowClick(index)}
                    className={`text-[14px] text-customBlack hover:bg-green-200 cursor-pointer ${
                      filteredSelectedShareIndex === index ? "bg-green-300" : ""
                    }`}
                  >
                    <td className="pl-1">{share.status}</td>
                    <td className="pl-8">
                      {share.readOnly ? share.readOnly : "Yes"}
                    </td>
                    <td className="pl-26">{share.name}</td>
                    <td className="pl-8">{share.path}</td>
                    <td className="pl-28">{share.guestAccess}</td>
                    <td className="pl-12">{share.comment}</td>
                  </tr>
                ))
              : "Loading..."}
          </tbody>
        </table>
      </div>
      {!isModalEdit && (
        <FooterButtons
          title={helpTextShares.title}
          description={helpTextShares.description}
          oldName={oldName}
          newName={newName}
          setNewName={setNewName}
          handleSendG={handleSendG}
        />
      )}
    </>
  );
};

export default Table;
