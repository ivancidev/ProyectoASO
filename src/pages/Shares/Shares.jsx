import filter from "./assets/filter.svg";
import search from "../../assets/search.svg";
import add from "../../assets/add.svg";
import plus from "./assets/plus.svg";
import edit from "../../assets/edit.svg";
import remove from "../../assets/delete.svg";
import minus from "./assets/minus.svg";
import RadioButton from "../../components/Buttons/RadioButton.jsx";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine.jsx";
import DeleteConfirmation from "../../modals/DeleteConfirm.jsx";
import Table from "../../components/Table/Table.jsx";
import React, { useState,useEffect } from "react";
import Button from "../../components/Buttons/Button.jsx";
import { fetchDelete } from "../../utils/api.js";
import { fetchShares } from "../../utils/api.js";
import { updateGuestAccess } from "../../utils/api.js";
export default function Shares() {
  const [shares, setShares] = useState(null);
  const [selectedShareIndex, setSelectedShareIndex] = useState(null);
  const [contador, setContador] = useState(0);
  const [isModalDelete, setModalDelete] = useState(false);
  const [isModalRename, setModalRename] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [selectedShare, setSelectedShare] = useState(null);
  const [toggleGuestAccess, setToggleGuestAccess] = useState(false);
  const[toggleStatus, setToggleStatus] = useState(false)
  const [filterSystemShares, setFilterSystemShares] = useState(false);


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

  const openDeleteModal = (share) => {
    setSelectedShare(share);
  };

  const closeDeleteModal = () => {
    setSelectedShare(null);
    setModalDelete(false);
  };

  const handleDeleteShare = async () => {
    try {
      await fetchDelete(selectedShare.name);
      closeDeleteModal();
      window.location.href = "/Shares";
    } catch (error) {
      console.error("Error deleting share:", error);
    }
  };

  const handleModalDelete = () => {
    selectedShare ? setModalDelete(true) : "";
  };

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

  const handleFilterChange = (e) => {
    setFilterSystemShares(e.target.id === "NSS");
  };

  return (
    <>
      <section className="flex-col mt-14 py-14 px-10 bg-white h-screen text-customBlack">
        <HeaderLine text="Available Shares" />
        <div className="flex flex-row justify-end mt-4">

          <div>
          <RadioButton id="SAS" name="filter" label="Show All Shares" onChange={handleFilterChange} checked={!filterSystemShares} />
            <RadioButton id="NSS" name="filter" label="Do not Show System Shares" onChange={handleFilterChange} checked={filterSystemShares} />
          </div>
        </div>
        <Table
          shares={shares}
          setShares={setShares}
          selectedShareIndex={selectedShareIndex}
          setSelectedShareIndex={setSelectedShareIndex}
          isModalRename={isModalRename}
          onCloseRename={() => setModalRename(false)}
          isModalEdit={isModalEdit}
          setIsModalEdit={setIsModalEdit}
          openDeleteModal={openDeleteModal}
          filterSystemShares={filterSystemShares}

        />
        <div className="flex items-center justify-between font-roboto text-sm mt-6">
          <div className="flex  items-center justify-evenly w-96">
            <button
              onClick={() => setModalRename(true)}
              className="bg-customHover w-28 h-10 p-1 text-white rounded-[100px]"
            >
              Rename
            </button>
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
          <div className="flex items-center justify-evenly w-96">
            <Button text={"Add"} image={add} route={"/Shares/Add"} />
            <Button
              text={"Edit"}
              image={edit}
              onClick={() => setIsModalEdit(true)}
            />
            <Button
              onClick={handleModalDelete}
              text={"Delete"}
              image={remove}
            />
          </div>
        </div>
        
  
      </section>
      {isModalDelete && (
        <DeleteConfirmation
          isOpen={isModalDelete}
          onClose={closeDeleteModal}
          onConfirm={handleDeleteShare}
          shareName={selectedShare?.name}
        />
      )}
    </>
  );
}