import React, { useState, useEffect } from "react";
import FilmCraftStudiosLogo from "../assets/FilmCraftStudiosLogo.svg";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import BasicButton from "./BasicButton";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Set transparency based on scroll position
      if (currentScrollPos > 20) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
      
      // Set visibility based on scroll direction
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        transparent ? 'bg-transparent' : 'bg-black bg-opacity-90'
      } text-white p-4`}
    >
      <div className="flex items-center justify-between">
        {/* Left NavBar */}
        <Link to="/">
          <div className="flex gap-2 items-center">
            <div className="h-10 w-10 md:h-14 md:w-14">
              <img src={FilmCraftStudiosLogo} alt="FilmCraftStudiosLogo" />
            </div>
            <div className="text-lg md:text-2xl lg:text-3xl font-bold flex gap-1.5">
              Film Craft <span className="font-light italic">Studios</span>
            </div>
          </div>
        </Link>
        {/* Right NavBar */}
        <div className="hidden md:flex gap-4 items-center">
          <div className="flex gap-6">
            <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
              <Link
                to="/about"
                className="text-gray-400 hover:text-white transition-colors ease-in-out"
              >
                About Us
              </Link>
            </div>
            <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
              <Link
                to="/works"
                className="text-gray-400 hover:text-white transition-colors ease-in-out"
              >
                Our Works
              </Link>
            </div>
            <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
              <Link
                to="/testimonials"
                className="text-gray-400 hover:text-white transition-colors ease-in-out"
              >
                Testimonials
              </Link>
            </div>
          </div>

          <div>
            <BasicButton
              iconLeft={<FaEnvelope />}
              variant="primary"
              size="medium"
            >
              E-Mail
            </BasicButton>
          </div>
          <div>
            <BasicButton
              iconLeft={<FaWhatsapp />}
              variant="primary"
              size="medium"
            >
              Whatsapp
            </BasicButton>
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