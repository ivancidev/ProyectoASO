import { useEffect, useState } from "react";
import { fetchShares } from "../../utils/api";
import Rename from "../../modals/Rename";
import FooterButtons from "../Buttons/FooterButtons";
import { helpTextShares } from "../../utils/helpText";

const Table = ({ isModalRename, onCloseRename }) => {
  const [shares, setShares] = useState(null);
  const [selectedShareIndex, setSelectedShareIndex] = useState(null);
  const [oldName, setOldName] = useState("");
  const [newName, setNewName] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchShares();
        setShares(data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }
    fetchData();
  }, []);

  const updateShareName = (newNameResource) => {
    const updatedShares = [...shares];
    setOldName(updatedShares[selectedShareIndex].name);
    updatedShares[selectedShareIndex].name = newNameResource;
    setNewName(newNameResource);
    setShares(updatedShares);
  };

  return (
    <>
      {selectedShareIndex !== null ? (
        <Rename
          isOpen={isModalRename}
          name={shares[selectedShareIndex].name}
          onClose={onCloseRename}
          updateShareName={updateShareName}
        />
      ) : (
        ""
      )}
      <table className="w-full font-roboto mt-4">
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
            {shares !== null
              ? shares.map((share, index) => (
                  <tr
                    key={index}
                    onClick={() => setSelectedShareIndex(index)}
                    className={` text-[16px] text-custumBlack hover:bg-green-200 cursor-pointer ${
                      selectedShareIndex == index ? "bg-green-300" : ""
                    }`}
                  >
                    <td className="pl-1">{share.status}</td>
                    <td className="pl-8">{share.readOnly}</td>
                    <td className="pl-26">{share.name}</td>
                    <td className="pl-8">{share.path}</td>
                    <td className="pl-28">{share.guestAccess}</td>
                    <td className="pl-12">{share.comment}</td>
                  </tr>
                ))
              : "Cargando..."}
          </tbody>
        </table>
      </div>
      <FooterButtons
        title={helpTextShares.title}
        description={helpTextShares.description}
        oldName = {oldName}
        newName = {newName}
        setNewName = {setNewName}
      />
    </>
  );
};

export default Table;
