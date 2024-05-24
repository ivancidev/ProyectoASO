import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine";
import edit from "../../assets/edit.svg";
import add from "../../assets/add.svg";
import remove from "../../assets/delete.svg";
import FooterButtons from "../../components/Buttons/FooterButtons";
import { helpTextEdit } from "../../utils/helpText";
import AddOption from "../../modals/AddOption.jsx";
import EditInput from "../../modals/EditInput.jsx";
import DeleteValue from "../../modals/DeleteValue.jsx";
import EditCheck from "../../modals/EditCheck.jsx";

const Edit = ({ resource }) => {
  const [isOpenAddOp, setOpenAddOp] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [isEditInp, setEditInp] = useState(false);
  const [isDel, setDel] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);
  const navigate = useNavigate();

  const handleEditClick = () => {
    if (selectedKey !== null) {
      setEdit(true);
    }
  };

  const handleValueChange = (newValue) => {
    resource[selectedKey] = newValue;
    setEdit(false);
    setSelectedKey(null);
  };

  const renderDetails = () => {
    const filteredEntries = Object.entries(resource).filter(([key, value]) => key !== "name" && value);
    return filteredEntries.map(([key, value]) => (
      <tr
        key={key}
        className={`hover:bg-green-70 ${selectedKey === key ? "bg-customHover" : ""}`}
        onClick={() => setSelectedKey(key)}
      >
        <td className="font-bold pr-4">{key}</td>
        <td className="pl-2">{value}</td>
      </tr>
    ));
  };
  
  return (
    <section className="fixed inset-0 flex-col pt-28 px-10 h-screen text-customBlack bg-white">
      <HeaderLine text={resource.name} />
      <div className="flex flex-col items-center justify-center mt-8 p-8 w-full max-w-screen-lg">
        {isOpenAddOp && (
          <AddOption isOpen={isOpenAddOp} onClose={() => setOpenAddOp(false)} />
        )}
        {isEdit && (
          <EditCheck
            isOpen={isEdit}
            onClose={() => setEdit(false)}
            name={resource[selectedKey]}
            updateShareName={handleValueChange}
            text={"Current Option:"}
            option={selectedKey}
          />
        )}
        {isEditInp && (
          <EditInput isOpen={isEditInp} onClose={() => setEditInp(false)} />
        )}
        {isDel && <DeleteValue isOpen={isDel} onClose={() => setDel(false)} />}
        <div className="w-full">
          <table className="w-full border border-black">
            <thead>
              <tr className="bg-customBlack text-white">
                <th className="font-bold pr-4">Options</th>
                <th className="font-bold pl-2">Values</th>
              </tr>
            </thead>
            <tbody>{renderDetails()}</tbody>
          </table>
        </div>
        <div className="flex space-x-4 mt-4">
          <Button onClick={() => setOpenAddOp(true)} text="Add" image={add} />
          <Button onClick={handleEditClick} text="Edit" image={edit} />
          <Button onClick={() => setDel(true)} text="Delete" image={remove} />
        </div>
        <FooterButtons
          title={helpTextEdit.title}
          description={helpTextEdit.description}
        />
      </div>
    </section>
  );
};

export default Edit;
