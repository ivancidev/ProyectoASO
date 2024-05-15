import { Outlet } from "react-router-dom";
import RadioButton from "../../components/RadioButton/RadioButton.jsx";

export default function StartUp() {
  return (
    <>
      <section className="space-y-4 mt-14 p-14 justify-start items-start">
        <div className="items-center flex">
          <h1 className="text-xl font-bold font-secular">New Share</h1>
          <hr className="bg-black border-none h-0.5 ml-5 rounded grow"/>
        </div>
        <section className="mx-60 px-56">
          <h3 className="">Identification</h3>
            <section className="">
                <label>Share Type</label>
                <div className="px-5">
                    <RadioButton id= "optprint" name = "shrtyp" label = "Printer"/>
                    <RadioButton id= "optdirec" name = "shrtyp" label = "Directory"/>
                </div>
        </section>
        </section>
      </section>
    </>
  );
}
