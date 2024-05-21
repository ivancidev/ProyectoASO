import filter from "./assets/filter.svg";
import search from "../../assets/search.svg";
import add from "../../assets/add.svg";
import plus from "./assets/plus.svg";
import edit from "../../assets/edit.svg";
import remove from "../../assets/delete.svg";
import minus from "./assets/minus.svg";
import RadioButton from "../../components/Buttons/RadioButton.jsx";
import { Link } from "react-router-dom";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine.jsx";
import DeleteConfirmation from "../../modals/DeleteConfirm.jsx";
import Table from "../../components/Table/Table.jsx";
import FooterButtons from "../../components/Buttons/FooterButtons.jsx";
import React, { useState } from "react";
import Help from "../../modals/Help.jsx";
export default function Shares() {
  const [contador, setContador] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalHelp, setModalHelp] = useState(false);
  const [isHelp, setHelp] = useState(false);
  
  return (
      <section className="flex-col pt-28 px-10 h-screen text-customBlack">
        <HeaderLine text="Available Shares" />
        {isModalOpen && (
          <DeleteConfirmation isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        )}
        {isHelp && (
          <Help isOpen={isHelp} onClose={() => setHelp(false)} 
          titulo="Share" 
          text= "This is a list of already configured shares, whether they are enabled or disabled, and some basic information about them.

          A share can be enabled or disabled. A disabled share is not accessible, but its configuration is still written into the configuration file. So the share can be later enabled again. 
          Some of the shares are special. For example, the share Homes is a special system share for accessing home directories of users. The system shares can be hidden from the table by selecting Do Not Show System Shares in the Filter menu.
          Use Add to add a new share, Edit to modify already existing share, and Delete to remove the information about a share.
          Allow Users to Share Their Directories enables members of the group in Permitted Group to share directories they own with other users. For example, users for a local scope or DOMAIN\Users for a domain scope. The user also must make sure that the file system permissions allow access.
          With Maximum Number of Shares, limit the total amount of shares that may be created.
          To permit access to user shares without authentication, enable Allow Guest Access."/>
        )}
        <div className="flex justify-end">
          <div className="flex items-center justify-between w-[360px] h-11 border rounded-[28px] px-4 border-[#787A7D]">
            <button>
              <img src={filter} alt="Filtro" className="w-6 h-6 opacity-none" />
            </button>
            <input
              type="text"
              placeholder="Text here"
              className="text-[#3D4144] w-60 focus:outline-none"
            />
            <button>
              <img src={search} alt="Filtro" className="w-6 h-6 opacity-none" />
            </button>
          </div>
        </div>
        <Table />
        <div className="flex items-center justify-between font-roboto text-sm mt-6">
          <button className="bg-customHover w-28 h-10 p-1 text-white rounded-[100px]">
            Rename
          </button>
          <div className="flex items-center justify-evenly w-96">
            <Link
              to={"/Navbar/Shares/Add"}
              className="bg-customHover w-28 h-10 p-1 text-white rounded-[100px] flex items-center justify-center"
            >
              <img src={add} alt="Agregar" className="pr-3" />
              <p>Add</p>
            </Link>
            <Link
              to={"/Navbar/Shares/Edit"}
              className="bg-customHover w-28 h-10 p-1 text-white rounded-[100px] flex items-center justify-center"
            >
              <img src={edit} alt="Editar" className="pr-3" />
              <p>Edit</p>
            </Link>
            <button onClick={() => setModalOpen(true)} className="bg-customHover w-28 h-10 p-1 text-white rounded-[100px] flex items-center justify-center">
              <img src={remove} alt="Eliminar" className="pr-2" />
              <p>Delete</p>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center w-full pt-6 pb-3">
          <p className="font-secular font-light">Sharing by Users</p>
        </div>
        <div className="font-roboto text-sm flex-col grid h-28 content-between">
          <RadioButton
            id="option1"
            name="option"
            label="Allow Users to Share Theirs Directories"
          />
          <RadioButton id="option2" name="option" label="Allow Guest Access" />
          <div className="flex ml-6 mt-2">
            <p className="mr-4 mt-1">Permitted group:</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="users"
              className="border-[1px] border-customBlack rounded-lg focus:outline-none p-1"
            />
          </div>
          <div className="flex ml-6 mt-2 items-center">
            <p className="mr-4">Maximum Number of Shares:</p>
            <div className="flex items-center justify-start border border-customBlack rounded-lg w-[90px] h-8">
              <button onClick={() => setContador(contador - 1)}>
                <img src={minus} alt="Menos" className="w-6 h-6" />
              </button>
              <div className="w-10 text-center">
                <p className="text-[#3D4144]">{contador}</p>
              </div>
              <button onClick={() => setContador(contador + 1)}>
                <img src={plus} alt="Mas" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <FooterButtons isOpen={isHelp} onClose={setHelp}/>
      </section>
  );
}
