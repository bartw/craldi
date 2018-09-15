import * as React from "react";
import mockData from "./mockData";
import Equipment from "./Equipment";
import SubTitle from "../shared/SubTitle";

const equipment = mockData.map(({ id, name }: Equipment) => (
  <li key={id}>{name}</li>
));

const EquipmentList = () => (
  <div>
    <SubTitle>Equipment</SubTitle>
    <ul>{equipment}</ul>
  </div>
);

export default EquipmentList;
