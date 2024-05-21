import RadioButton from "../../components/Buttons/RadioButton.jsx";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine.jsx";
import React, { useState } from "react";
import FooterButtons from "../../components/Buttons/FooterButtons.jsx";
import { helpTextStartUp } from "../../utils/helpText.js";
export default function StartUp() {
  return (
    <>
      <section className="space-y-4 mt-14 py-14 px-10 justify-start items-start">
        <HeaderLine text="Service Configuration" />
        <div>Current status:</div>
        <div className="flex">
          <h3>After writing configuration:</h3>
          <div className="px-5">
            <RadioButton id="optrbt1" name="rebooting" label="Stop" />
            <RadioButton id="optrbt2" name="rebooting" label="Restart" />
            <RadioButton id="optrbt3" name="rebooting" label="Reload" />
            <RadioButton
              id="optrbt4"
              name="rebooting"
              label="Keep current State"
            />
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
