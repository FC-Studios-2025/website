import React from "react";
import { Link } from "react-router-dom";
import FCSlogo from "../assets/FCSlogo.png";

const Footer = () => {
  return (
    <div>
      

      <footer className="border-t border-gray-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span><img className="h-10 w-10" src={FCSlogo} alt="FilmCraftStudiosLogo" /></span>
                <h3 className="font-medium text-white">Film Craft Studios</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Creating compelling visual narratives that <br/> elevate your brand to
                new heights.
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
                <li>info@filmcraftstudios.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Creative Ave, Suite 101</li>
                <li>Los Angeles, CA 90001</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 Film Craft Studios. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span className="text-gray-500">Instagram</span>
              <span className="text-gray-500">Twitter</span>
              <span className="text-gray-500">LinkedIn</span>
              <span className="text-gray-500">YouTube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
