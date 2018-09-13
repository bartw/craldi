import * as React from "react";
import mockData from "./mockData";
import Equipment from "./Equipment";

const equipment = mockData.map(({ id, name }: Equipment) => (
  <li key={id}>{name}</li>
));

const EquipmentList = () => (
  <div>
    <h2>Equipment</h2>
    <ul>{equipment}</ul>
  </div>
);

export default EquipmentList;
