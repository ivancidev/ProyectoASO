import { useState } from "react";
import RadioButton from "../../components/Buttons/RadioButton.jsx";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine.jsx";

export default function Identity() {
  const [inputValue, setInputValue] = useState("WORKGROUP");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <section className="flex-col px-10 mt-28 ml-18">
      <HeaderLine text="Base Settings" />
      <div className="ml-6 mt-6">
        <div>
          <label className="mr-4">Workgroup or Domain Name:</label>
          <input
            onChange={handleOnChange}
            type="text"
            value={inputValue}
            className="border-2 border-zinc-500 rounded-lg p-1"
          />
        </div>
        <div className="flex items-center">
          <label className="mr-5">Domain Controller</label>
          <div className="flex-col mt-10">
            <RadioButton id= "option1" name= "option" label="Not a DC" />
            <RadioButton id= "option1" name= "option" label="Primary(PDC)" />
            <RadioButton id= "option3" name= "option" label="Backup(BDC)" />
          </div>
        </div>
      </div>
    </section>
  );
}
