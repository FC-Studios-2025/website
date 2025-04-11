import React from "react";
import { Link } from "react-router-dom";

export default function HeroText() {
  return (
    <div className="w-full flex items-center justify-center bg-black py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-white">Elevate Your Content with</span>{" "}
          <br className="hidden md:block" />
          <span className="text-white">Cutting-Edge Video Editing</span>{" "}
          <br className="hidden lg:block" />
          <span className="text-white">and</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500">
            Content Creation.
          </span>
        </h1>
        <p className="text-center text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mt-4">
          Transforming visions into captivating visual stories that leave
          lasting impressions.
        </p>
        <div className="flex justify-center mt-8 md:mt-10">
          <button className="bg-transparent cursor-pointer border-2 border-white text-white font-medium py-2 px-6 md:px-8 rounded-lg hover:bg-white hover:text-black transition duration-300 mr-4">
            Get Started
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium py-2 px-6 md:px-8 rounded-lg hover:opacity-90 transition duration-300">
            <Link to={"/works"}>Watch Demo</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
