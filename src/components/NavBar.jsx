import React, { useState, useEffect, useRef } from "react";
import FilmCraftStudiosLogo from "../assets/FilmCraftStudiosLogo.svg";
import { FaEnvelope, FaWhatsapp, FaTimes } from "react-icons/fa";
import BasicButton from "./BasicButton";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [transparent, setTransparent] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

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

  // Handle clicks outside of mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
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
                Mail
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
            <button 
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className={`w-6 h-6 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
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

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-black z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <div className="flex gap-2 items-center">
                <div className="h-10 w-10">
                  <img src={FilmCraftStudiosLogo} alt="FilmCraftStudiosLogo" />
                </div>
                <div className="text-lg font-bold flex gap-1.5">
                  Film Craft <span className="font-light italic">Studios</span>
                </div>
              </div>
            </Link>
            <button 
              className="text-white p-2 focus:outline-none rounded-full hover:bg-gray-800 transition-all duration-300"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <FaTimes className="w-5 h-5 animate-spin-slow" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6">
            <Link
              to="/about"
              className="text-gray-400 hover:text-white transition-colors py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/works"
              className="text-gray-400 hover:text-white transition-colors py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Works
            </Link>
            <Link
              to="/testimonials"
              className="text-gray-400 hover:text-white transition-colors py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            
            <div className="pt-4 space-y-4">
              <BasicButton
                iconLeft={<FaEnvelope />}
                variant="primary"
                size="medium"
                className="w-full"
              >
                Mail
              </BasicButton>
              <BasicButton
                iconLeft={<FaWhatsapp />}
                variant="primary"
                size="medium"
                className="w-full"
              >
                Whatsapp
              </BasicButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;