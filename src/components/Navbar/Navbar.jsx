import React, { useEffect, useState } from "react";
import iconSamba from "./assets/iconSamba.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
import StartUp from "../../pages/StartUp/StartUp";

const Navbar = () => {
  const [showStartUp, setShowStartUp] = useState(true);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    setShowStartUp(location.pathname === '/');
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleSharesClick = (path) => {
    setShowStartUp(false);
    setActiveLink(path)
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[80px] px-4 py-3 bg-customBlack text-white font-secular font-light">
        <div className="flex items-center">
          <img src={iconSamba} alt="Logo" className="h-8 mr-4" />
          <span className="cursor-pointer">Samba Server</span>
        </div>
        <ul className="flex items-center space-x-32 mr-28">
          <li onClick={() => handleSharesClick("/Start-Up")}>
            <Link to={"/Start-Up"} className={`hover:text-customHover ${activeLink === "/Start-Up" ? "text-customHover": ""}`}>
              Start-Up
            </Link>
          </li>
          <li onClick={() => handleSharesClick("/Shares")}>
            <Link to={"/Shares"} className={`hover:text-customHover ${activeLink === "/Shares" ? "text-customHove": ""}`}>
              Shares
            </Link>
          </li>
          <li onClick={() => handleSharesClick("/Identity")}>
            <Link to={"/Identity"} className={`hover:text-customHover ${activeLink === "/Identity" ? "text-customHover": ""}`}>
              Identity
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
      {showStartUp && <StartUp />}
    </>
  );
};

export default Navbar;
