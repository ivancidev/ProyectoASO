const Button = ({ text, image }) => {
  return (
    <button className="bg-customHover w-28 h-10 p-1 text-white rounded-[100px] flex items-center justify-center" >
      <img src={ image } alt="Add" className="pr-3"/>
      <p>{ text }</p>
    </button>
  );
}

export default Button;
