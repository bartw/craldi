import React, { FormEvent } from "react";

interface Props {
  name: string;
  handleChange: (name: string) => void;
  handleSubmit: () => void;
}

const Form = ({ name, handleChange, handleSubmit }: Props) => {
  const onChange = (event: FormEvent<HTMLInputElement>) =>
    handleChange(event.currentTarget.value);

  const onSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <form>
      <input type="text" value={name} onChange={onChange} />
      <input type="button" value="Save" onClick={onSubmit} />
    </form>
  );
};

export default Form;
