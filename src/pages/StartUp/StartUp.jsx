import RadioButton from "../../components/Buttons/RadioButton.jsx";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine.jsx";
import React, { useState, useEffect } from "react";
import FooterButtons from "../../components/Buttons/FooterButtons.jsx";
import { helpTextStartUp } from "../../utils/helpText.js";
import { fetchStatus } from "../../utils/api"

export default function StartUp() {
  const [status, setStatus] = useState('');
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
  
  return (
    <>
      <section className="space-y-4 mt-14 py-14 px-10">
        <HeaderLine text="Service Configuration" />
        <div>Current status: {status}</div>
        <div className="flex">
        <h3>After writing configuration:</h3>
        <div className="px-5">
            <RadioButton id="optrbt1" name="rebooting" label="Stop" />
            <RadioButton id="optrbt2" name="rebooting" label="Restart" />
            <RadioButton id="optrbt3" name="rebooting" label="Reload" />
            <RadioButton id="optrbt4" name="rebooting" label="Keep current State"/>
          </div>
        </div>
        <section className="flex">
          <div>After reboot:</div>
          <div className="px-5">
            <RadioButton id="optrb1" name="reboot" label="Start on boot" />
            <RadioButton id="optrb2" name="reboot" label="Do not start" />
          </div>
        </section>
      </section>
      <FooterButtons title={helpTextStartUp.title} description={helpTextStartUp.description} />
    </>
  );
}
