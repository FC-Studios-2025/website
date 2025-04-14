import React from "react";
import { Link } from "react-router-dom";
import FCSlogo from "../assets/FCSlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:info@filmcraftstudios.com";
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
              <ul className="space-y-2 text-gray-400">
                <div>
                  <Link
                    to="/"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Home
                  </Link>
                </div>
                <div>
                  <Link
                    to="/about"
                    className="hover:text-teal-400 transition-colors"
                  >
                    About Us
                  </Link>
                </div>
                <div>
                  <Link
                    to="/works"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Our Works
                  </Link>
                </div>
                <div>
                  <Link
                    to="/testimonials"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Testimonials
                  </Link>
                </div>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li onClick={handleEmailClick}>info@filmcraftstudios.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Creative Ave, Suite 101</li>
                <li>Los Angeles, CA 90001</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
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
          <FontAwesomeIcon icon={faInstagram} className="w-10 h-10 md:hidden" />
          <span className="hidden md:inline">Instagram</span>
        </a>
        <a
          href="https://twitter.com/filmcraftstudio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer flex items-center"
        >
          <FontAwesomeIcon icon={faTwitter} className="w-10 h-10 md:hidden" />
          <span className="hidden md:inline">Twitter</span>
        </a>
        <a
          href="https://linkedin.com/company/filmcraftstudios"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer flex items-center"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-10 h-10 md:hidden" />
          <span className="hidden md:inline">LinkedIn</span>
        </a>
        <a
          href="https://youtube.com/c/filmcraftstudios"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer flex items-center"
        >
          <FontAwesomeIcon icon={faYoutube} className="w-10 h-10 md:hidden" />
          <span className="hidden md:inline">YouTube</span>
        </a>
      </div>
    </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
