import React, { useState, useEffect } from "react";
import FCSLogo from "../assets/FCSlogo.png";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading process
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 3;

        // When loading reaches 100%, trigger the callback
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete?.();
          }, 500); // Short delay before hiding
          return 100;
        }

        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gray-950 flex flex-col items-center justify-center z-50">
      {/* Loading counter in center */}
      <div className="relative w-4/5 md:w-3/4 lg:w-full max-w-md mx-auto">
        <div className="text-white text-opacity-80 font-mono text-center">
          {/* Different font sizes for different screens */}
          <span className="hidden md:inline text-4xl lg:text-5xl">
            {Math.floor(progress)}%
          </span>
          <span className="md:hidden md:text-3xl">{Math.floor(progress)}%</span>
        </div>

        {/* Loading bar with reduced width on mobile */}
        <div className="w-full mt-2 bg-gray-800 rounded-full h-1 md:h-1.5 lg:h-2">
          <div
            className="bg-blue-400 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Logo text in bottom right */}
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10">
        <div className="text-white font-medium flex items-center">
          <img src={FCSLogo} alt="Logo" className="h-10 w-10 md:h-14 md:w-14" />
          <div className="text-white text-lg md:text-2xl lg:text-3xl font-bold flex gap-1.5">
            Film Craft <span className="font-light italic">Studios</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;