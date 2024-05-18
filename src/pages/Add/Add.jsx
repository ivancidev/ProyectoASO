import { Outlet } from "react-router-dom";
import search from "../../pages/Shares/assets/search.svg";
import RadioButton from "../../components/RadioButton/RadioButton.jsx";
import TextInput from "../../components/TextInput/TextInput.jsx";
import { useState } from "react";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine.jsx";
export default function StartUp() {
  const [inputValue, setInputValue] = useState(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <>
      <section className="space-y-4 mt-14 p-14 justify-start items-start">
        <HeaderLine text="New Share" />
        <section className="mx-54 px-56 space-y-1">
          <h3 className="">Identification</h3>
            <TextInput label="Share Name" value={inputValue} onchange={handleChange} />
            <TextInput label="Share Description"/>
            <section className="flex">
              <label>Share Type</label>
              <div className="px-5">
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
        </section>
      </section>
    </>
  );
}
