import React, { FormEvent, ReactNode } from "react";

interface Props {
  onSubmit: () => void;
  children: ReactNode;
}

const Form = ({ onSubmit, children }: Props) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
