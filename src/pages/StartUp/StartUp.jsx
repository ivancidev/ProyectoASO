import { Outlet } from "react-router-dom";
import RadioButton from "../../components/Buttons/RadioButton.jsx";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine.jsx";
import Help from "../../modals/Help.jsx";
import React, { useState } from "react";
export default function StartUp() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <section className="space-y-4 mt-14 py-14 px-10 justify-start items-start">
        <HeaderLine text="Service Configuration" />
        {isModalOpen && (
          <Help isOpen={isModalOpen} onClose={() => setModalOpen(false)} 
          titulo="Service Configuration" 
          text= "Current status
          Displays the current status of the service.
          After writing configuration
          Allow to change the service status immediately after accepting the changes. Available options depend on the current state. The Keep current state special action leaves the service state untouched.
          After reboot
          Let choose if service should be started automatically on boot. Some services could be configured on demand, which means that the associated socket will be running and start the service if needed. 
          "/>
        )}
        <div>
          Current status:
        </div>
        <section className="flex">
          <h3>After writing configuration:</h3>
          <div className="px-5">
            <RadioButton id= "optrbt1" name = "rebooting" label = "Stop"/>
            <RadioButton id= "optrbt2" name = "rebooting" label = "Restart"/>
            <RadioButton id= "optrbt3" name = "rebooting" label = "Reload"/>
            <RadioButton id= "optrbt4" name = "rebooting" label = "Keep current State"/>
          </div>
        </section>
        <section className="flex">
          <div>
            After reboot:
          </div>
          <div className="px-5">
            <RadioButton id= "optrb1" name = "reboot" label = "Start on boot"/>
            <RadioButton id= "optrb2" name = "reboot" label = "Do not start"/>
          </div>
        </section>
        <div className="flex items-center justify-between font-roboto text-sm fixed bottom-0 left-0 right-0 p-6">
          <button onClick={() => setModalOpen(true)} className="hover:bg-curtomButton bg-customHover w-10 h-10 p-1 text-white rounded-[100px]">
            ?
          </button>
          <div className="flex items-center justify-between w-64">
            <button className="hover:border-curtomButton w-28 h-10 p-1 text-customHover rounded-[100px] flex items-center justify-center border-[1px] border-customBlack">
              <p>Cancel</p>
            </button>
            <button className="hover:bg-curtomButton bg-customHover w-28 h-10 p-1 text-white rounded-[100px] flex items-center justify-center">
              <p>Ok</p>
            </button>
          </div>
        </div>
      </section>
      
    </>
  );
}
