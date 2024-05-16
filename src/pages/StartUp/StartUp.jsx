import { Outlet } from "react-router-dom";
import RadioButton from "../../components/RadioButton/RadioButton.jsx";

export default function StartUp() {
  return (
    <>
      <section className="space-y-4 mt-14 p-14 justify-start items-start">
        <div className="items-center flex">
          <h1 className="text-xl font-bold font-secular">Service Configuration</h1>
          <hr className="bg-black border-none h-0.5 ml-5 rounded grow"/>
        </div>
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
      </section>
    </>
  );
}