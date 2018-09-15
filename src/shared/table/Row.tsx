import React, { ReactText } from "react";
import Action from "./Action";
import ActionsCell from "./ActionsCell";

interface Props<T, K> {
  item: T;
  keys: K[];
  actions: Action<T>[];
}

const Row = <T extends Object, K extends keyof T>({
  item,
  keys,
  actions
}: Props<T, K>) => {
  const cells = keys.map((key: K) => (
    <td key={key as ReactText}>{item[key]}</td>
  ));
  return (
    <tr>
      {cells}
      {actions && <ActionsCell item={item} actions={actions} />}
    </tr>
  );
};

export default Row;
