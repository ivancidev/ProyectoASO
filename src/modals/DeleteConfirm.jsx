import close from "../assets/close.svg";
const DeleteConfirmation = ({ isOpen, onClose, onConfirm, shareName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-400 bg-opacity-[0.4] z-50">
      <div className="bg-white pt-12 pb-8 pr-8 pl-8  border-customBlack border-[1px] rounded-lg shadow-lg relative w-80">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          <img src={close} alt="close" />
        </button>
        <h2 className="text-lg font-semibold text-center">Confirm Delete</h2>
        <p className="font-roboto text-base">If you delete share 
        "{shareName}" all its settings will be lost. <br />
          Really delete it?
        </p>
        <div className="flex items-center justify-center space-x-6 mt-8">
            <button onClick={onConfirm} 
            className="w-20 py-2 bg-customHover rounded-[20px] text-white">
               Yes 
            </button>
            <button onClick={onClose}  className="w-20 py-2 border-black border-[1px] text-customHover rounded-[20px]">
                No
            </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
