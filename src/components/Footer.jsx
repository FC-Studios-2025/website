import React from "react";
import { Link, useLocation } from "react-router-dom";
import FCSlogo from "../assets/FCSlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  // faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { pathname } = useLocation();
  const handleEmailClick = () => {
    window.location.href = "mailto:info@filmcraftstudios.com";
  };

  // Function to handle navigation link clicks
  const handleNavLinkClick = (e, path) => {
    // If clicking on the current page's link
    if (pathname === path) {
      e.preventDefault(); // Prevent default navigation
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Otherwise, let normal navigation happen
  };

  return (
    <div>
      <footer className="border-t border-gray-800 mt-16">
        <div className="md:max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span>
                  <img
                    className="h-10 w-10"
                    src={FCSlogo}
                    alt="FilmCraftStudiosLogo"
                  />
                </span>
                <h3 className="font-medium text-white">Film Craft Studios</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Elevate Your Content with Cutting-Edge <br />
                Video Editing and Content Creation.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-400">
                <div>
                  <Link
                    to="/"
                    className="hover:text-teal-400 transition-colors block"
                    onClick={(e) => handleNavLinkClick(e, "/")}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="hover:text-teal-400 transition-colors block mt-2"
                    onClick={(e) => handleNavLinkClick(e, "/about")}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/works"
                    className="hover:text-teal-400 transition-colors block mt-2"
                    onClick={(e) => handleNavLinkClick(e, "/works")}
                  >
                    Our Works
                  </Link>
                  <Link
                    to="/testimonials"
                    className="hover:text-teal-400 transition-colors block mt-2"
                    onClick={(e) => handleNavLinkClick(e, "/testimonials")}
                  >
                    Testimonials
                  </Link>
                </div>
                <div>
                  <Link
                    to="/contact"
                    className="hover:text-teal-400 transition-colors block"
                    onClick={(e) => handleNavLinkClick(e, "/contact")}
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/faq"
                    className="hover:text-teal-400 transition-colors block mt-2"
                    onClick={(e) => handleNavLinkClick(e, "/faq")}
                  >
                    FAQs
                  </Link>
                  <Link
                    to="/tnc"
                    className="hover:text-teal-400 transition-colors block mt-2"
                    onClick={(e) => handleNavLinkClick(e, "/tnc")}
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    to="/privacy"
                    className="hover:text-teal-400 transition-colors block mt-2"
                    onClick={(e) => handleNavLinkClick(e, "/privacy")}
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@filmcraftstudios.com</li>
                <li>
                  <a href="tel:+441293307403" className="hover:underline">
                    (+44) 01293 307403
                  </a>
                </li>
                <li>M George Corporation LTD</li>
                <li>86-90 Paul Street</li>
                <li>London, England EC2A 4NE</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            {/* Copyright and Social Links Row */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <p className="text-gray-500 text-xs md:text-sm">
                © 2025 Film Craft Studios. All rights reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0 md:text-sm text-gray-500">
                <a
                  href="https://www.instagram.com/film_craft_studios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-10 h-10 md:hidden"
                  />
                  <span className="hidden md:inline">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/share/16fSxLgpTh/?mibextid=qi2Omg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-10 h-10 md:hidden"
                  />
                  <span className="hidden md:inline">Facebook</span>
                </a>
                {/* <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="w-10 h-10 md:hidden"
                  />
                  <span className="hidden md:inline">Twitter</span>
                </a> */}
                <a
                  href="https://linkedin.com/company/film-craft-studios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="w-10 h-10 md:hidden"
                  />
                  <span className="hidden md:inline">LinkedIn</span>
                </a>
                <a
                  href="https://youtube.com/@film_craft_studios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="w-10 h-10 md:hidden"
                  />
                  <span className="hidden md:inline">YouTube</span>
                </a>
              </div>
            </div>

            {/* Stylish Credit Line */}
            <div className="text-center pt-4 border-t border-gray-800">
              <p className="text-xs sm:text-sm text-gray-400 font-light tracking-wide">
                Website crafted with{" "}
                <span className="text-red-500 animate-pulse inline-block transform hover:scale-110 transition-transform duration-200">
                  ❤️
                </span>{" "}
                by{" "}
                <a href="https://www.fcscreative.co.uk" target="_blank">
                  <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent font-medium hover:from-teal-300 hover:to-blue-400 transition-all duration-300 cursor-pointer">
                    FCS Creative
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
