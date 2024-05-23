import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
import search from "../../assets/search.svg";
import RadioButton from "../../components/Buttons/RadioButton.jsx";
import TextInput from "../../components/TextInput/TextInput.jsx";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine.jsx";
import FooterButtons from "../../components/Buttons/FooterButtons.jsx";
import Checkbox from "../../components/Checkbox/Checkbox.jsx";
import PermissionModal from "../../modals/Permissions.jsx";
export default function Add() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [options, setOptions] = useState([
    { label: 'Read only', name: 'read' },
    { label: 'Inherit ACLs', name: 'inherit' },
    { label: 'Utilize Btfrs', name: 'utilize' }
  ]);
  const handleCheckboxChange = (name, isChecked) => {
    // Update options array with the new checked state
    setOptions(options.map((option) =>
      option.name === name ? { ...option, checked: isChecked } : option
    ));
  };
  return (
    <>
      <section className="space-y-4 mt-14 p-14 justify-start items-start">
        <HeaderLine text="New Share" />
        {isModalOpen && (
        <PermissionModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
        <section className="mx-54 px-56 space-y-1">
          <h3 className="">Identification</h3>
            <TextInput label="Share Name" />
            <TextInput label="Share Description"/>
            <section className="flex">
              <div className="px-5">
              <label>Share Type</label>
                <RadioButton id= "optprint" name = "shrtyp" label = "Printer"/>
                <RadioButton id= "optdirec" name = "shrtyp" label = "Directory"/>
              </div>
            </section>
            <div className="flex space-x-2">
              <TextInput label="Share Path"/>
              <button className="bg-customHover items-center justify-center flex rounded w-8 h-8">
                <img src={search} alt="Filtro" className="w-6 h-6 opacity-none"/>
              </button>
            </div>
            <div>
            {options.map((option) => (
              <Checkbox
                key={option.name} // Important for performance with dynamic lists
                label={option.label}
                name={option.name}
                checked={option.checked}
                onChange={(isChecked) => handleCheckboxChange(option.name, isChecked)}
              />
            ))}
            </div>
            <button
              onClick={() => setModalOpen(true)}
                  className="bg-customHover w-28 h-10 p-1 text-white rounded-[100px] flex items-center justify-center"
            >
              Next
            </button>
        </section>
      </section>
      <FooterButtons/>
    </>
  );
}
