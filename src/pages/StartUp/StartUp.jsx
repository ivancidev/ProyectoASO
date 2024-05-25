import RadioButton from "../../components/Buttons/RadioButton.jsx";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine.jsx";
import React, { useState, useEffect } from "react";
import FooterButtonStart from "../../components/Buttons/FooterButtonStart.jsx";
import { helpTextStartUp } from "../../utils/helpText.js";
import { fetchStatus, fetchEnable } from "../../utils/api"

export default function StartUp() {
  const [enableBoot, setEnableBoot] = useState('');
  const [status, setStatus] = useState('');
  const [selectedValue, setSelectedValue] = useState('optrbt4');

  useEffect(() => {
    const fetchInitialStatus = async () => {
      try {
        const data = await fetchEnable();
        setEnableBoot(data.status); // Suponiendo que el objeto tiene una propiedad 'status'
      } catch (error) {
        console.error('Error fetching initial status:', error);
        // Aquí podrías manejar el error, por ejemplo, mostrar un mensaje al usuario
      }
    };
    fetchInitialStatus();
  }, []);


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
  

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.id);
  };
  const handleRadioChange2 = (e) => {
    setEnableBoot(e.target.id);
  };
  
  return (
    <>
      <section className="space-y-4 mt-14 py-14 px-10 bg-white h-screen">
        <HeaderLine text="Service Configuration" />
        <div className="flex space-x-4">
          <div>
            Current status: 
          </div>
          <div className="text-customHover">
            {status}
          </div>
        </div>
        <div className="flex">
        <h3>After writing configuration:</h3>
        <div className="px-5">
            <RadioButton id="stop" name="rebooting" label="Stop" checked={selectedValue=='stop'} onChange={handleRadioChange}/>
            <RadioButton id="restart" name="rebooting" label="Restart" checked={selectedValue=='restart'} onChange={handleRadioChange}/>
            <RadioButton id="reload" name="rebooting" label="Reload" checked={selectedValue=='reload'} onChange={handleRadioChange}/>
            <RadioButton id="optrbt4" name="rebooting" label="Keep current State" checked={selectedValue=='optrbt4'} onChange={handleRadioChange}/>
          </div>
        </div>
        <section className="flex">
          <div>After reboot:</div>
          <div className="px-5">
            <RadioButton id="enabled" name="reboot" label="Start on boot" checked={enableBoot=='enabled'} onChange={handleRadioChange2}/>
            <RadioButton id="disabled" name="reboot" label="Do not start"  checked={enableBoot=='disabled'} onChange={handleRadioChange2}/>
          </div>
        </section>
      </section>
      <FooterButtonStart title={helpTextStartUp.title} description={helpTextStartUp.description} actual={selectedValue} onReboot={enableBoot} />
    </>
  );
}