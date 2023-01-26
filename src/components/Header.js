import React from "react";
import { BiGlobe } from "react-icons/bi";
import { RiUserFill } from "react-icons/ri";
import { RiUserAddFill } from "react-icons/ri";
const Header = () => {
  return (
    <div className="bg-brand-color">
      <div className="container mx-auto h-11 flex items-center justify-between">
        <a href="#">
          <img
            className="w-20 h-5"
            src={require("../assets/getir.png")}
            alt=""
          />
        </a>
        <nav className="flex gap-x-8 text-sm font-semibold">
          <a
            href="#"
            className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100"
          >
            <BiGlobe size={20} />
            Turkce(TR)
          </a>
          <a
            href="#"
            className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100"
          >
            <RiUserFill size={20} />
            Giris Yap
          </a>
          <a
            href="#"
            className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100"
          >
            <RiUserAddFill size={20} />
            Kayit Ol
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
