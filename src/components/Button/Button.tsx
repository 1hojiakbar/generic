import React from "react";
import GenericButton from "../Generic/Button/Button";

const Button: React.FC = () => {
  return (
    <div>
      <h1 className="font-semibold xl:text-[35px] lg:text-[30px] md:text-[28px] sm:text-[24px] text-[26px]">
        Button
      </h1>
      <GenericButton variant="primary">Click me</GenericButton>
      <GenericButton variant="outlined">Click me</GenericButton>
      <GenericButton variant="text">Click me</GenericButton>
      <GenericButton variant="link">Click me</GenericButton>
    </div>
  );
};

export default Button;
