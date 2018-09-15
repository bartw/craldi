import React, { ReactNode, FormEvent } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
  const handleClick = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick();
  };
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
