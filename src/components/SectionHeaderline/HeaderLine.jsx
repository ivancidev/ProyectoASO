const HeaderLine = ({ text }) => {
  return (
    <div className="items-center flex">
      <h1 className="font-light text-[17px] font-secular">
        {text}
      </h1>
      <hr className="bg-black border-none h-0.5 ml-5 rounded grow" />
    </div>
  );
};

export default HeaderLine;
