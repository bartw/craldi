import React from "react";
import Exercise from "./Exercise";
import TableRow from "./TableRow";
  
  interface Props {
    exercises: Exercise[];
    onEdit: (exercise: Exercise) => void;
  }
  
  const Table = ({ exercises, onEdit }: Props) => {
    const rows = exercises.map(exercise => (
      <TableRow key={exercise.id} exercise={exercise} onEdit={onEdit} />
    ));
    return (
      <table>
        <thead>
          <th>Name</th>
          <th />
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  };

  export default Table;