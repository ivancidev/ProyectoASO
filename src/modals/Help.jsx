import close from "../assets/close.svg";
const Help = ({ isHelp, onCloseHelp, titulo, text }) => {
  if (!isHelp) return null;

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-slate-400 bg-opacity-[0.4] z-50 ">
      <div className=" bg-white border-customBlack border-[1px] rounded-lg pt-12 pb-8 pr-8 pl-8 shadow-lg relative w-[600px] flex flex-col items-center">
        <button onClick={onCloseHelp} className="absolute top-3 right-3 text-gray-500">
          <img src={close} alt="close" />
        </button>
        <h2 className="font-secular text-lg text-customBlack">
            {titulo}
        </h2>
        <p className="font-roboto text-sm text-left text-customBlack whitespace-pre-line mt-10">{text}</p>
        <button onClick={onCloseHelp} className="px-8 py-2 mt-10 bg-customHover rounded-[20px] text-white">
          Ok 
        </button>
      </div>
    </section>
  );
};

export default Help;
