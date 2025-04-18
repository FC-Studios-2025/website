import React from "react";

export default function SecondaryHeroText() {
  return (
    <div className="w-full flex items-center justify-center bg-black py-10 md:py-14 lg:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          {/* <span className="text-white">Elevate Your Content with</span>{" "}
          <br className="hidden md:block" /> */}
          <span className="text-white">Let Film craft studios be</span>{" "}
          <br className="hidden lg:block" />
          <span className="text-white">your</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500">
            creative partner!
          </span>
        </h1>
      </div>
    </div>
  );
}
