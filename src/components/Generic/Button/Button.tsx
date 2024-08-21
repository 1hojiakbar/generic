import React from "react";

type GenericButtonProps = {
  variant: "primary" | "outlined" | "text" | "link";
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const GenericButton: React.FC<GenericButtonProps> = ({
  variant,
  children,
  leftIcon,
  rightIcon,
}) => {
  let baseClasses =
    "flex items-center justify-center px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ";

  let variantClasses = "";

  switch (variant) {
    case "primary":
      variantClasses =
        "text-white bg-blue-600 hover:bg-blue-500 focus:bg-blue-500";
      break;
    case "outlined":
      variantClasses =
        "text-blue-600 border border-blue-600 hover:bg-blue-100 focus:ring-blue-500";
      break;
    case "text":
      variantClasses = "text-blue-600 hover:bg-blue-100 focus:ring-blue-500";
      break;
    case "link":
      variantClasses =
        "text-blue-600 underline hover:text-blue-800 focus:ring-blue-500";
      break;
  }

  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default GenericButton;
