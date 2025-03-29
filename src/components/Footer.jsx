import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div>
        <hr />
      </div>
      <div className="flex justify-around p-8">
        <div>
          <Link
            to="/testimonials"
            className="hover:text-teal-400 transition-colors"
          >
            Testimonials
          </Link>
        </div>
        <div>
          <Link to="/about" className="hover:text-teal-400 transition-colors">
            About Us
          </Link>
        </div>
        <div>
          <Link to="/works" className="hover:text-teal-400 transition-colors">
            Our Works
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
