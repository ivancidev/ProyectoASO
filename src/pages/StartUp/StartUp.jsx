import { Outlet } from "react-router-dom";
import { RadioSelect } from "../../components/Radio Selection/RadioSelect"
export default function StartUp() {
  const after = [
    {value: 'stop', label: 'Stop'},
    {value: 'restart', label: 'Restart'},
    {value: 'reload', label: 'Reload'},
    {value: 'keep', label: 'Keep current state'}
  ];
  return (
    <>
      <section className="inline-block space-y-4 mt-16 p-14 justify-center items-center ">
        <h1>Service Configuration</h1>
        <div>
          Current status:
        </div>
        <section className="flex">
          <div>
            After writing configuration:
          </div>
          <RadioSelect name = "rebooting" options = {after}/>
          {/* <div className="inline-block">
            <input type="radio" id="stop" name="after" value="stop"/>
            <label for="stop">Stop</label>
            <input type="radio" id="restart" name="after" value="restart"/>
            <label for="restart">Restart</label>
            <input type="radio" id="reload" name="after" value="reload"/>
            <label for="reload">Reload</label>
            <input type="radio" id="keep" name="after" value="keep"/>
            <label for="keep">Keep current state</label>
          </div> */}
        </section>
        <section className="flex">
          <div>
            After reboot:
          </div>
          <div className="space-x-2">

            <input type="radio" id="start" name="reboot" value="start"/>
            <label for="start">Start on boot</label>
            <input type="radio" id="dont" name="reboot" value="dont"/>
            <label for="dont">Do not start</label>
          </div>
        </section>
      </section>
    </>
  );
}
