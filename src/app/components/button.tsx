import React from "react";
import "./button.scss";
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}
export const block = "button";
const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button className={`${block} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
