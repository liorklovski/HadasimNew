import React from "react";
import { TextField } from "@material-ui/core";

const cellStyle = {
  textAlign: "center",
  fontFamily: "Heebo",
  fontSize: "1vw",
  minWidth: "5vw",
  maxWidth: "10vw",
  direction: "rtl",
  height: "2em"
};

export const templateColumns = [
  {
    title: "שם",
    field: "DESCRIPTION",
    cellStyle: cellStyle
  },
  {
    title: "משך",
    field: "NUMBER_EXT",
    filterPlaceholder: "משך(בימים)",
    cellStyle: cellStyle,
    type: "numeric",
    render: Data => {
      const last = Data["NUMBER_EXT"];
      if (last === 1) {
        return "יום";
      } else {
        return last !== undefined ? last + " ימים " : "";
      }
    }
  },
  {
    title: "הערות",
    field: "NOTE",
    cellStyle: {
      textAlign: "center",
      fontFamily: "Heebo",
      fontSize: "1vw",
      overFlow: "scroll",
      direction: "rtl",
      maxWidth: "10vw"
    },
    editComponent: props => (
      <div>
        <TextField
          id="comment"
          multiline
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        />
      </div>
    )
  }
];
