import { useState } from "react";
import RadioButton from "../../components/Buttons/RadioButton.jsx";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine.jsx";
import FooterButtons from "../../components/Buttons/FooterButtons.jsx";
import { helTextIdentity } from "../../utils/helpText.js";

export default function Identity() {
  const [inputValue, setInputValue] = useState("WORKGROUP");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
    <section className="flex-col mt-14 py-14 px-10 bg-white h-screen">
      <HeaderLine text="Base Settings" />
      <div className="ml-6 mt-6">
        <div>
          <label className="mr-4">Workgroup or Domain Name:</label>
          <input
            onChange={handleOnChange}
            type="text"
            value={inputValue}
            className="border-[1px] border-zinc-500 rounded-lg p-1"
          />
        </div>
        
      </div>
      <FooterButtons title={helTextIdentity.title} description={helTextIdentity.description}/>
    </section>
    </>
  );
}
