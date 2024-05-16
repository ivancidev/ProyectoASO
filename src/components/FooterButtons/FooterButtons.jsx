import React from "react";

const FooterButtons = () => {
  return (
    <div className="flex items-center justify-between font-roboto text-sm fixed bottom-0 left-0 right-0 p-6 z-50">
      <button className="hover:bg-curtomButton bg-customHover w-10 h-10 p-1 text-white rounded-[100px]">
        ?
      </button>
      <div className="flex items-center justify-between w-64">
        <button className="hover:border-curtomButton bg-white w-28 h-10 p-1 text-customHover rounded-[100px] flex items-center justify-center border-2 border-[#787A7D]">
          <p>Cancel</p>
        </button>
        <button className="hover:bg-curtomButton bg-customHover w-28 h-10 p-1 text-white rounded-[100px] flex items-center justify-center">
          <p>Ok</p>
        </button>
      </div>
    </div>
  );
};

export default FooterButtons;
