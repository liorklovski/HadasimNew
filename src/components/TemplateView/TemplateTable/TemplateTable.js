import React from "react";
import Table from "../../Dynamic/Table/Table";
import { templateColumns } from "./TemplateColumns";
import options from "../../Dynamic/Table/TableOptions/RegularOptions";
const TemplateTable = ({
  data = [],
  rowsNum = 15,
  isDisabled = false,
  onUpdateSteps
}) => {
  return (
    <div className="steps">
      <div className="TamplateClass">
        <Table
          isDisabled={isDisabled}
          onChange={onUpdateSteps}
          data={data}
          options={options(rowsNum)}
          columns={templateColumns}
          editableType="all"
        />
      </div>
    </div>
  );
};
export default TemplateTable;
