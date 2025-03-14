import React from "react";
import FilmCraftStudiosLogo from "../assets/FilmCraftStudiosLogo.svg";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import BasicButton from "./BasicButton";

const NavBar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="flex items-center justify-between">
        {/* Left NavBar */}
        <div className="flex gap-2 items-center">
          <div className="h-10 w-10">
            <img src={FilmCraftStudiosLogo} alt="FilmCraftStudiosLogo" />
          </div>
          <div className="text-lg font-bold flex gap-1.5">
            Film Craft <span className="font-light italic">Studios</span>
          </div>
        </div>
        {/* Right NavBar */}
        <div className="hidden md:flex gap-4">
          <div>
            <BasicButton
              iconLeft={<FaEnvelope />}
              variant="primary"
              size="small"
            >E-Mail</BasicButton>
          </div>
          <div>
            <BasicButton
              iconLeft={<FaWhatsapp />}
              variant="primary"
              size="small"
            >Whatsapp</BasicButton>
          </div>
        </div>
        {/* Mobile Menu button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
