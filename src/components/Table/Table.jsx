import { useEffect, useState } from "react";
import Rename from "../../modals/Rename";
import FooterButtons from "../Buttons/FooterButtons";
import { helpTextShares } from "../../utils/helpText";
import Edit from "../../pages/Edit/Edit";
import { fetchShares } from "../../utils/api";

const Table = ({  isModalRename, onCloseRename, isModalEdit }) => {
  const [shares, setShares] = useState(null);
  const [selectedShareIndex, setSelectedShareIndex] = useState(null);
  const [oldName, setOldName] = useState("");
  const [newName, setNewName] = useState(null);
  const [toggleGuestAccess, setToggleGuestAccess] = useState(false);
  const[toggleStatus, setToggleStatus] = useState(false)
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
  
  const handleToggleGuestAccess = () => {
    const updatedShares = [...shares];
    updatedShares[selectedShareIndex].guestAccess = toggleGuestAccess ? "No" : "Yes";
    setShares(updatedShares);
    setToggleGuestAccess(!toggleGuestAccess);
  };

  const handleToggleStatus = () => {
    const updatedShares = [...shares];
    updatedShares[selectedShareIndex].status = toggleStatus ? "Enable" : "Disable";
    setShares(updatedShares);
    setToggleStatus(!toggleStatus);
  };

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
          text={"Rename Share"}
        />
      ) : (
        ""
      )}
      {isModalEdit && selectedShareIndex !== null ? (<Edit
        resource={shares ? shares[selectedShareIndex] : {}}
      />
      ): ("")}
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
                    className={` text-[14px] text-custumBlack hover:bg-green-200 cursor-pointer ${
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
      <div className="flex  items-center justify-evenly w-96 font-roboto text-sm mt-6 " >
      <button
            onClick={handleToggleGuestAccess}
            className={`bg-customHover w-28 h-10 p-1 text-white rounded-[100px]
            }`}
          >
            Guest Access
          </button>
          <button
            onClick={handleToggleStatus}
            className="bg-customHover w-28 h-10 p-1 text-white rounded-[100px]"
          >
            Toggle Status
          </button>
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
