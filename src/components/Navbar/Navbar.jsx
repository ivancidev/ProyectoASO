import React from "react";
import iconSamba from './assets/iconSamba.svg';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-[80px] px-4 py-3 bg-customBlack text-white font-secular font-light">
      <div className="flex items-center">
        <img src={iconSamba} alt="Logo" className="h-8 mr-4" />
        <span className="cursor-pointer">Samba Server</span>
      </div>
      <ul className="flex items-center space-x-32 mr-28">
        <li>
          <a href="#" className="hover:text-customHover">
            Start-Up
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-customHover">
            Shares
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-customHover">
            Identity
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
