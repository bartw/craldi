import React from "react";
import Exercise from "./Exercise";
import Button from "../shared/Button";

interface Props {
    exercise: Exercise;
    onEdit: (exercise: Exercise) => void;
  }
  
  const TableRow = ({ exercise, onEdit }: Props) => (
    <tr>
      <td>{exercise.name}</td>
      <td>
        <Button onClick={() => onEdit(exercise)}>Edit</Button>
      </td>
    </tr>
  );

  export default TableRow;