import React, { FormEvent } from "react";

interface Props {
  label: string;
  onSubmit: () => void;
}

const SubmitButton = ({ label, onSubmit }: Props) => {
  const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return <input type="submit" value={label} onSubmit={handleSubmit} />;
};

export default SubmitButton;
