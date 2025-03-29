import React from "react";

// Component for creating blurred circle backgrounds
const BlurredCircle = ({ 
  color = "bg-green-400",  // Default color
  positionClass = "",      // Custom positioning class
  zIndex = "z--10",        // Default z-index
  className = ""           // Additional classes
}) => {
  return (
    <div
      className={`
        absolute 
        rounded-[100%]
        ${color}
        ${zIndex}
        ${positionClass}
        
        /* Small screens (default) */
        w-[300px] 
        h-[200px] 
        blur-[180px]
        
        /* Medium screens */
        md:w-[400px] 
        md:h-[300px]
        md:blur-[180px]
        
        /* Large screens */
        lg:w-[560px] 
        lg:h-[400px]
        lg:blur-[180px]
        ${className}
      `}
    ></div>
  );
};

export default BlurredCircle;