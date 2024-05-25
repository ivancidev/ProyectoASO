import { useState,useEffect } from "react";
import RadioButton from "../../components/Buttons/RadioButton.jsx";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine.jsx";
import { helTextIdentity } from "../../utils/helpText.js";
import { fetchWorkgroup, updateWorkgroup } from "../../utils/api.js";
import FooterButtonsIdentity from "../../components/Buttons/FooterButtonsIdentity.jsx";
export default function Identity() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const getWorkgroup = async () => {
      try {
        const workgroup = await fetchWorkgroup();
        setInputValue(workgroup);
      } catch (error) {
        console.error("Error fetching workgroup:", error);
      }
    };
    
    getWorkgroup();
  }, []);

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
        <div className="flex items-center">
          <label className="mr-5">Domain Controller</label>
          <div className="flex-col mt-10">
            <RadioButton id= "option1" name= "option" label="Not a DC" />
            <RadioButton id= "option1" name= "option" label="Primary(PDC)" />
            <RadioButton id= "option3" name= "option" label="Backup(BDC)" />
          </div>
        </div>
      </div>
      <FooterButtonsIdentity
       title={helTextIdentity.title}
       description={helTextIdentity.description}
       inputValue={inputValue} 
       setInputValue={setInputValue}/>
    </section>
    </>
  );
}
