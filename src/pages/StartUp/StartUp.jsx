import RadioButton from "../../components/Buttons/RadioButton.jsx";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine.jsx";
import React, { useState, useEffect } from "react";
import FooterButtons from "../../components/Buttons/FooterButtons.jsx";
import { helpTextStartUp } from "../../utils/helpText.js";
import { fetchStatus, fetchEnable } from "../../utils/api"

export default function StartUp() {
  const [status, setStatus] = useState('');
  const [enableBoot, setEnableBoot] = useState('');
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchStatus();
        setStatus(data.status);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData2() {
      try {
        const data = await fetchEnable();
        setEnableBoot(data.status);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }
    fetchData2();
  }, []);

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.id);
  };
  const [selectedValue, setSelectedValue] = useState('optrbt4');
  return (
    <>
      <section className="space-y-4 mt-14 py-14 px-10 bg-white h-screen">
        <HeaderLine text="Service Configuration" />
        <div>Current status: {status}</div>
        <div className="flex">
        <h3>After writing configuration:</h3>
        <div className="px-5">
            <RadioButton id="optrbt1" name="rebooting" label="Stop" checked={selectedValue=='optrbt1'} onChange={handleRadioChange}/>
            <RadioButton id="optrbt2" name="rebooting" label="Restart" checked={selectedValue=='optrbt2'} onChange={handleRadioChange}/>
            <RadioButton id="optrbt3" name="rebooting" label="Reload" checked={selectedValue=='optrbt3'} onChange={handleRadioChange}/>
            <RadioButton id="optrbt4" name="rebooting" label="Keep current State" checked={selectedValue=='optrbt4'} onChange={handleRadioChange}/>
          </div>
        </div>
        <section className="flex">
          <div>After reboot:</div>
          <div className="px-5">
            <RadioButton id="enabled" name="reboot" label="Start on boot" checked={enableBoot=='enabled'} onChange={handleRadioChange}/>
            <RadioButton id="disabled" name="reboot" label="Do not start"  checked={enableBoot=='disabled'} onChange={handleRadioChange}/>
          </div>
        </section>
      </section>
      <FooterButtons title={helpTextStartUp.title} description={helpTextStartUp.description} />
    </>
  );
}
