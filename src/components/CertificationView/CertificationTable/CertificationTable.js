import React from "react";
import Table from "../../Dynamic/Table/Table";
import { CertificationColumns } from "./CertificationColumns";
import options from "../../Dynamic/Table/TableOptions/RegularOptions";
const CertificationTable = ({
  data = [],
  rowsNum = 15,
  isDisabled = false,
  columnsDet = {},
  onUpdateSteps
}) => {
  return (
    <div className="steps">
      <div className="TamplateClass">
        <Table
          isDisabled={isDisabled}
          onChange={onUpdateSteps}
          data={data}
          editableType="edit"
          options={options(rowsNum, isDisabled)}
          columns={CertificationColumns(columnsDet)}
        />
      </div>
    </div>
  );
};
export default CertificationTable;
