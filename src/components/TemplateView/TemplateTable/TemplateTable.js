import React from "react";
import Table from "../../Dynamic/Table/Table";
import { templateColumns } from "./TemplateColumns";
import options from "../../Dynamic/Table/TableOptions/RegularOptions";
const TemplateTable = ({ data = [], rowsNum = 15, isDisabled = false }) => {
  return (
    <div className="steps">
      <div className="TamplateClass">
        <Table
          data={data}
          options={options(rowsNum, isDisabled)}
          columns={templateColumns}
          editableType="all"
        />
      </div>
    </div>
  );
};
export default TemplateTable;
