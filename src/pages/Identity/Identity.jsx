import { useState } from "react";

export default function Identity() {
  const [inputValue, setInputValue] = useState("WORKGROUP");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <section className="mt-32 ml-20">
      <h2 className="font-secular text-[18px]">Base Settings</h2>
      <div className="ml-6">
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
            <div>
              <input
                type="radio"
                id="option1"
                name="option"
                className="mr-2 h-4 w-4 text-lg"
              />
              <label htmlFor="option1" className="mr-4">
                Not a DC
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="option2"
                name="option"
                className="mr-2 h-4 w-4 text-lg"
              />
              <label htmlFor="option2" className="mr-4">
                Primary(PDC)
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="option3"
                name="option"
                className="mr-2 h-4 w-4 text-lg"
              />
              <label htmlFor="option3">Backup(BDC)</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
