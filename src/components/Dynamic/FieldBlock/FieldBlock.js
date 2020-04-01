import React from "react";
import { Grid, Cell } from "styled-css-grid";
import RegularField from "./FieldTypes/ReagularField";
import DateField from "./FieldTypes/DateField";
import DropdownField from "./FieldTypes/DropdownField";
import DialogField from "./FieldTypes/DialogField";
import { Typography } from "@material-ui/core";

const FieldTypes = {
  text: (field, value) => <RegularField {...field} value={value} />,
  dropdown: (field, value) => <DropdownField {...field} value={value} />,
  date: (field, value) => <DateField {...field} value={value} />,
  dialog: (field, value) => <DialogField {...field} value={value} />
};

const FieldBlock = ({
  data,
  onChange,
  blockTitle,
  fields,
  fieldGrid: { rows, columns } = {}
}) => {
  return (
    <Grid rows="auto 1fr" columns="1fr" areas={["title", "fields"]}>
      <Cell area="title">
        <Typography variant="n6">{blockTitle}</Typography>
      </Cell>
      <Cell area="fields">
        <Grid rows={rows || "auto"} columns={columns || "1fr 1fr"}>
          {fields.map(({ fieldType, value, ...others }, idx) => (
            <Cell key={idx}>
              {FieldTypes[fieldType](others, value) /*data[accessor]*/}
            </Cell>
          ))}
        </Grid>
      </Cell>
    </Grid>
  );
};
export default FieldBlock;
