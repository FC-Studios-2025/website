import React from "react";

const BasicButton = ({
  variant = "primary",
  size = "medium",
  children,
  onClick,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  className = "",
  href,
}) => {
  const baseClasses = `flex items-center justify-center rounded-md font-medium transition-all duration-200 gap-2 ${
    fullWidth ? "w-full" : "w-auto"
  } ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"}`;

  const variantClasses = {
    primary: "border text-white",
  };

  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // If href is provided, render as <a> instead of <button>
  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {iconLeft && <span>{iconLeft}</span>}
        {children}
        {iconRight && <span>{iconRight}</span>}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClasses}>
      {iconLeft && <span>{iconLeft}</span>}
      {children}
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
};

export default BasicButton;
