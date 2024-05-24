import React, { useState } from "react";
import Help from "../../modals/Help";
import Button from "./Button";

const FooterButtonsUsers = ({ title, description }) => {
    const [isModalHelp, setModalHelp] = useState(false);
    const handleLogout = () => {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "/";
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


      <div className="flex items-center justify-between font-roboto text-sm bottom-0 left-0 right-0 p-6 fixed">
        <button
          onClick={() => setModalHelp(true)}
          className="hover:bg-curtomButton bg-customHover w-10 h-10 p-1 text-white rounded-[100px]"
        >
          ?
        </button>
        <div className="flex items-center justify-between w-64">
            <button
            onClick={handleLogout}
            className="hover:border-curtomButton w-28 h-10 p-1 text-customHover rounded-[100px] flex items-center justify-center border-[1px] border-customBlack"
          >
            <p>Cancel</p>
          </button>
          <button
            
            className="hover:bg-curtomButton bg-customHover w-28 h-10 p-1 text-white rounded-[100px] flex items-center justify-center"
          >
            <p>Ok</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default FooterButtonsUsers;
