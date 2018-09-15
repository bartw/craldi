import React, { ReactText } from "react";
import Row from "./Row";
import Action from "./Action";

interface Item {
  id: string | number;
}

interface GenericProps<T, K> {
  items: T[];
  keys: K[];
  actions?: Action<T>[];
}

const Table = <T extends Item, K extends keyof T>({
  items,
  keys,
  actions
}: GenericProps<T, K>) => {
  const headers = keys.map(key => <th key={key as ReactText}>{key}</th>);
  const rows = items.map(item => (
    <Row key={item.id} item={item} keys={keys} actions={actions} />
  ));
  return (
    <table>
      <thead>
        <tr>
          {headers}
          {actions && <th />}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;
