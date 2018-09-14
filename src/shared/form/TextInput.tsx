import React, { FormEvent } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const TextInput = ({ value, onChange }: Props) => {
  const handleChange = (event: FormEvent<HTMLInputElement>) =>
    onChange(event.currentTarget.value);

  return <input type="text" value={value} onChange={handleChange} />;
};

export default TextInput;
