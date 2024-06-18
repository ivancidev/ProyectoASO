import React, { useState } from "react";
import Help from "../../modals/Help";
import Succesfully from "../../modals/Succesfully";
import { Link } from "react-router-dom";
const FooterButtonAdd = ({ title, description, handleSubmit, name, path }) => {
  const [isModalHelp, setModalHelp] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSend = () => {
    handleSubmit();
    setShowMessage(true);
  };

  const handleLoadingComplete = () => {
    setShowMessage(false);
  };
  return (
    <>
      {isModalHelp && (
        <Help
          isHelp={isModalHelp}
          onCloseHelp={() => setModalHelp(false)}
          titulo={title}
          text={description}
        />
      )}

      <Succesfully
        show={showMessage}
        onLoadingComplete={handleLoadingComplete}
        newName={name}
      />

      <div className="flex items-center justify-between font-roboto text-sm bottom-0 left-0 right-0 p-6 fixed">
        <button
          onClick={() => setModalHelp(true)}
          className="hover:bg-curtomButton bg-customHover w-10 h-10 p-1 text-white rounded-[100px]"
        >
          ?
        </button>
        <div className="flex items-center justify-between w-64">
          <Link to={"/Shares"}>
            
            <button className="hover:bg-curtomButton w-28 h-10 p-1 rounded-[100px] flex items-center justify-center bg-customHover text-white">Back</button>
          </Link>
          {name && path ? (
            <button
              onClick={handleSend}
              className="hover:border-curtomButton w-28 h-10 p-1 text-customHover rounded-[100px] flex items-center justify-center border-[1px] border-customBlack"
            >
              <p>Save</p>
            </button>
          ) : (
            <button className="hover:bg-curtomButton bg-customHover w-28 h-10 p-1 text-white rounded-[100px] flex items-center justify-center">
              <p>Ok</p>
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default FooterButtonAdd;
