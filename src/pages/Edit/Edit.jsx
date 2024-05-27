import React, { useState } from "react";
import Button from "../../components/Buttons/Button";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine";
import edit from "../../assets/edit.svg";
import add from "../../assets/add.svg";
import remove from "../../assets/delete.svg";
import { helpTextEdit } from "../../utils/helpText";
import AddOption from "../../modals/AddOption.jsx";
import EditInput from "../../modals/EditInput.jsx";
import DeleteValue from "../../modals/DeleteValue.jsx";
import EditCheck from "../../modals/EditCheck.jsx";
import { fectchEdit, fetchAttribute } from "../../utils/api.js";
import Succesfully from "../../modals/Succesfully.jsx";
import FooterButtons from "../../components/Buttons/FooterButtons.jsx";

const Edit = ({ resource }) => {
  const [isOpenAddOp, setOpenAddOp] = useState(false);
  const [isEditInput, setEditInput] = useState(false);
  const [isEditCheck, setEditCheck] = useState(false);
  const [isDel, setDel] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);
  const [isModalSuccesfully, setIsModalSuccesfully] = useState(false);
  const [isButton, setIsButton] = useState(false);

  const handleEditClick = () => {
    if (selectedKey !== null) {
      const selectedValue = resource[selectedKey];
      if (selectedValue === "Yes" || selectedValue === "No") {
        setEditCheck(true);
      } else {
        setEditInput(true);
      }
    }
  };

  const handleValueChange = (newValue) => {
    setIsButton(true);
    resource[selectedKey] = newValue;
    setEditInput(false);
    // setSelectedKey(null);
  };

  const handleSendData = () => {
    setIsModalSuccesfully(true);
    const jsonData = JSON.stringify({ [selectedKey]: resource[selectedKey] });
    fectchEdit(resource.name, jsonData);
  };

  const renderDetails = () => {
    const filteredEntries = Object.entries(resource).filter(
      ([key, value]) =>
        key !== "name" &&
        key !== "status" &&
        value &&
        key !== "guestAccess" &&
        value
    );
    return filteredEntries.map(([key, value]) => (
      <tr
        key={key}
        className={`hover:bg-green-70 cursor-pointer ${
          selectedKey === key ? "bg-customHover" : ""
        }`}
        onClick={() => setSelectedKey(key)}
      >
        <td className="font-bold pr-4">{key}</td>
        <td className="pl-2">{value}</td>
      </tr>
    ));
  };
  const handleIsButton = () => {
    setIsButton(false);
    setIsModalSuccesfully(false);
  };

  const handleDelete = async () => {
    if (selectedKey !== null) {
      const deletedOption = selectedKey;
      const data = {
        resourceName: resource.name,
        attributeName: deletedOption,
      };
      console.log(data);
      try {
        await fetchAttribute(data);
        setIsModalSuccesfully(true);
        console.log("Deleted attribute successfully");
      } catch (error) {
        console.error("Error deleting attribute:", error);
      }
    }
  };

  return (
    <section className="fixed inset-0 flex flex-col pt-28 px-10 h-screen text-customBlack bg-white">
      <HeaderLine text={resource.name} />
      <div className="flex flex-col items-center justify-center mt-8 p-8 w-full max-w-screen-lg">
        {isOpenAddOp && (
          <AddOption
            isOpen={isOpenAddOp}
            onClose={() => setOpenAddOp(false)}
            resourceName={resource.name}
          />
        )}
        {isEditInput && (
          <EditInput
            isOpen={isEditInput}
            onClose={() => setEditInput(false)}
            name={resource[selectedKey]}
            updateShareName={handleValueChange}
            text={"Current Option:"}
            option={selectedKey}
          />
        )}
        {isEditCheck && (
          <EditCheck
            isOpen={isEditCheck}
            onClose={() => setEditCheck(false)}
            selectedValue={resource[selectedKey]}
            selectedKey={selectedKey}
            name={resource.name}
          />
        )}
        <DeleteValue
          isOpen={isDel}
          onClose={() => setDel(false)}
          onDelete={handleDelete}
          selectedKey={selectedKey}
        />
        {isModalSuccesfully ? (
          <Succesfully
            show={isModalSuccesfully}
            newName={isModalSuccesfully}
            onLoadingComplete={handleIsButton}
          />
        ) : (
          ""
        )}
        <div className="w-full max-w-screen-lg">
          <table
            className="w-full border border-black"
            style={{ margin: "0 auto" }}
          >
            <thead>
              <tr className="bg-customBlack text-white">
                <th className="font-bold pr-4 py-4">Options</th>
                <th className="font-bold pl-2 py-4">Values</th>
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
          handleSend={handleSendData}
          isButton={isButton}
        />
      </div>
    </section>
  );
};

export default Edit;
