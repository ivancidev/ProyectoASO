import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, image, onClick, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (route) {
      navigate(route);
    }
  };

  return (
    <button onClick={handleClick}  className="hover:bg-curtomButton bg-customHover w-28 h-10 p-1 text-white rounded-[100px] flex items-center justify-center" >
      <img src={ image } alt="" className="pr-3"/>
      <p>{ text }</p>
    </button>
  );
}

export default Button;
