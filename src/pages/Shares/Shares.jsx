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
import React, { useState } from "react";
import Button from "../../components/Buttons/Button.jsx";
import { fetchDelete } from "../../utils/api.js";

export default function Shares() {
  const [contador, setContador] = useState(0);
  const [isModalDelete, setModalDelete] = useState(false);
  const [isModalRename, setModalRename] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [selectedShare, setSelectedShare] = useState(null);

  const openDeleteModal = (share) => {
    setSelectedShare(share);
  };

  const closeDeleteModal = () => {
    setSelectedShare(null);
    setModalDelete(false);
  };

  const handleDeleteShare = () => {
    fetchDelete(selectedShare.name);
    closeDeleteModal();
    window.location.href = "/Shares";
  };

  const handleModalDelete = () => {
    selectedShare ? setModalDelete(true) : "";
  };

  return (
    <>
      <section className="flex-col mt-14 py-14 px-10 bg-white h-screen text-customBlack">
        <HeaderLine text="Available Shares" />
    <Table
          isModalRename={isModalRename}
          onCloseRename={() => setModalRename(false)}
          isModalEdit={isModalEdit}
          setIsModalEdit={setIsModalEdit}
          openDeleteModal={openDeleteModal}
        />
        <div className="flex items-center justify-between font-roboto text-sm mt-6">
          <div className="flex  items-center justify-evenly w-96">
            <button
              onClick={() => setModalRename(true)}
              className="bg-customHover w-28 h-10 p-1 text-white rounded-[100px]"
            >
              Rename
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
