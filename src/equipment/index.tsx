import * as React from "react";
import mockData from "./mockData";
import Equipment from "./Equipment";
import SubTitle from "../shared/SubTitle";
import Table from "../shared/table";

const EquipmentList = () => (
  <div>
    <SubTitle>Equipment</SubTitle>
    <Table items={mockData} keys={["name"]} />
  </div>
);

export default EquipmentList;
