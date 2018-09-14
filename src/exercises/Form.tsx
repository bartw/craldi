import React, { FormEvent } from "react";
import {Form, SubmitButton, TextInput} from "../shared/form";

interface Props {
  name: string;
  onChange: (name: string) => void;
  onSubmit: () => void;
}

const ExerciseForm = ({ name, onChange, onSubmit }: Props) => {
  return (
    <Form onSubmit={onSubmit}>
      <TextInput value={name} onChange={onChange} />
      <SubmitButton label="Save" onSubmit={onSubmit} />
    </Form>
  );
};

export default ExerciseForm;
