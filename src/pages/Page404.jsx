import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FCSlogo from "../assets/FCSlogo.png";

const Page404 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-400 justify-center items-center px-4 md:px-8 lg:px-16">
      {/* Container with responsive sizing */}
      <div className="max-w-3xl w-full text-center">
        {/* Error code with responsive text size */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-300 mb-2">404</h1>
        
        {/* Main error message */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 md:mb-6">Page Not Found</h2>
        
        {/* Descriptive text with responsive styling */}
        <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-8 md:mb-10">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        {/* Navigation buttons container */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Home button */}
          <Link to="/" className="py-2 px-6 bg-blue-400 hover:bg-blue-500 text-white rounded-md transition-colors text-sm md:text-base">
            Back to Home
          </Link>
          
          {/* Works button */}
          <Link to="/works" className="py-2 px-6 bg-transparent border border-blue-400 hover:bg-blue-500/20 text-blue-400 rounded-md transition-colors text-sm md:text-base">
            See Our Works
          </Link>
        </div>
        
        {/* Studio name at the bottom */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <div className="text-lg md:text-xl lg:text-2xl font-bold flex items-center justify-center gap-1.5">
            <span>
                              <img
                                className="h-10 w-10"
                                src={FCSlogo}
                                alt="FilmCraftStudiosLogo"
                              />
                            </span>
            Film Craft <span className="font-light italic">Studios</span>
          </div>
        </div>
      </div>
        <div className="w-full">
          <Footer/>
        </div>
    </div>
  );
};

export default Page404;