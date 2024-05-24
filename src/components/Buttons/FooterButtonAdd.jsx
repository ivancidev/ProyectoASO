import React, { useState } from "react";
import Help from "../../modals/Help";
import Succesfully from "../../modals/Succesfully";
import { fetchRename } from "../../utils/api";
import Button from "./Button";
const FooterButtonAdd = ({
  title,
  description,
  oldName,
  newName,
  setNewName,
}) => {
  const [isModalHelp, setModalHelp] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    if (newName !== null) {
      fetchRename(oldName, newName);
      setShowMessage(true);
    }
  };

  const handleLoadingComplete = () => {
    setShowMessage(false);
    setNewName(null);
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
        newName={newName}
      />

      <div className="flex items-center justify-between font-roboto text-sm bottom-0 left-0 right-0 p-6 fixed">
        <button
          onClick={() => setModalHelp(true)}
          className="hover:bg-curtomButton bg-customHover w-10 h-10 p-1 text-white rounded-[100px]"
        >
          ?
        </button>
        <div className="flex items-center justify-between w-64">
          <Button text={"Back"} route={"/Shares"}/>
          <button
            onClick={handleClick}
            className="hover:bg-curtomButton bg-customHover w-28 h-10 p-1 text-white rounded-[100px] flex items-center justify-center"
          >
            <p>Continue</p>
          </button>
        </div>
      </div>
    </>
  );
};
export default FooterButtonAdd;
