import React from "react";
import Table from "../../Dynamic/Table/Table";
import certificationColumns from "./CertificationColumns";
import options from "../../Dynamic/Table/TableOptions/RegularOptions";
const CertificationTable = ({
  data = [],
  rowsNum = 15,
  isDisabled = false,
  columnsDet
}) => {
  return (
    <div className="steps">
      <div className="TamplateClass">
        <Table
          data={data}
          editableType="edit"
          options={options(rowsNum, isDisabled)}
          columns={certificationColumns(columnsDet)}
        />
      </div>
    </div>
  );
};
export default CertificationTable;
