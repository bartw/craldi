import React from "react";
import Button from "../Button";
import Action from "./Action";

interface Props<T> {
  item: T;
  actions: Action<T>[];
}

const ActionsCell = <T extends Object>({ item, actions }: Props<T>) => {
  const buttons = actions.map(({ action, label }, index) => (
    <Button key={index} onClick={() => action(item)}>
      {label}
    </Button>
  ));
  return <td>{buttons}</td>;
};

export default ActionsCell;
