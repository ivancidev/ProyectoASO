import Button from "../../components/Buttons/Button";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine";
import edit from "../../assets/edit.svg";
import add from "../../assets/add.svg";
import remove from "../../assets/delete.svg";
import FooterButtons from "../../components/Buttons/FooterButtons";
import { helpTextEdit } from "../../utils/helpText";
import React, { useState } from "react";
import AddOption from "../../modals/AddOption.jsx";
import EditCheck from "../../modals/EditCheck.jsx";
import EditInput from "../../modals/EditInput.jsx";
import DeleteValue from "../../modals/DeleteValue.jsx";

const Edit = () => {
  const [isOpenAddOp, setOpenAddOp] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [isEditInp, setEditInp] = useState(false);
  const [isDel, setDel] = useState(false);
  return (

    <section className="flex-col pt-28 px-10 h-screen text-customBlack">
      <HeaderLine text="Share print$" />
      {isOpenAddOp && (
        <AddOption
          isOpen={isOpenAddOp}
          onClose={() => setOpenAddOp(false)}
        />
      )}
      {isEdit && (
        <EditCheck
          isOpen={isEdit}
          onClose={() => setEdit(false)}
        />
      )}
      {isEditInp && (
        <EditInput
          isOpen={isEditInp}
          onClose={() => setEditInp(false)}
        />
      )}
      {isDel && (
        <DeleteValue
          isOpen={isDel}
          onClose={() => setDel(false)}
        />
      )}
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="border-[1px] border-black overflow-hidden w-1/2 h-1/2">
          <div className="flex bg-black text-white">
            <div className="w-1/2 p-2">Options</div>
            <div className="w-1/2 p-2">Values</div>
          </div>
          <div className="bg-white text-black">
            <div className="flex p-2 border-b border-gray-300">
              <div className="w-1/2">Comment</div>
              <div className="w-1/2"></div>
            </div>
            <div className="flex p-2 border-b border-gray-300">
              <div className="w-1/2">Path</div>
              <div className="w-1/2"></div>
            </div>
            <div className="flex p-2 border-b border-gray-300">
              <div className="w-1/2">Write list</div>
              <div className="w-1/2"></div>
            </div>
            <div className="flex p-2 border-b border-gray-300">
              <div className="w-1/2">Directory mask</div>
              <div className="w-1/2"></div>
            </div>
            <div className="flex p-2 border-b border-gray-300">
              <div className="w-1/2">Create mask</div>
              <div className="w-1/2"></div>
            </div>
            <div className="flex p-2">
              <div className="w-1/2">Force group</div>
              <div className="w-1/2"></div>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          
          <Button onClick={() => setOpenAddOp(true)} text={ "Add" } image={add} />
          <Button onClick={() => setEdit(true)} text={ "Edit" } image={edit} /> {/*onClick={() => setEditInp(true)}*/}
          <Button onClick={() => setDel(true)} text={ "Delete" } image={remove} />
        </div>
      </div>
      <FooterButtons title={helpTextEdit.title} description={helpTextEdit.description} />
    </section>
  );
};

export default Edit;
