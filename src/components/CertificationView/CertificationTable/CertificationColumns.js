import React from "react";
import { TextField, FormControl } from "@material-ui/core";
import Moment from "moment";
Moment.locale("en");

const cellStyle = {
  textAlign: "center",
  fontFamily: "Heebo",
  fontSize: "1vw",
  minWidth: "5vw",
  maxWidth: "10vw",
  direction: "rtl",
  height: "2em"
};

function certificationColumns({ columnDet = [] }) {
  return [
    {
      title: "שם",
      field: "DESCRIPTION",
      //cellStyle ?
      cellStyle: {
        textAlign: "center",
        fontFamily: "Heebo",
        fontSize: "1vw",
        minWidth: "7vw",
        maxWidth: "10vw",
        direction: "rtl",
        height: "2em"
      },
      readonly: true
    },
    {
      title: "אחראי",
      field: "IN_CHARGE",
      cellStyle: {
        textAlign: "center",
        fontFamily: "Heebo",
        fontSize: "1vw",
        direction: "rtl",
        width: "9vw",
        padding: "4vw 0 4vw 0"
        //   padding: "0px"
      },
      lookup: { ...columnDet },
      editComponent: props => (
        <div>
          <FormControl
            style={{
              minWidth: "100px",
              textAlign: "right"
            }}
          >
            {/* <BPDialog
            soldierId={this.state.soldierId}
            table={true}
            value={props.value}
            onChange={props.onChange}
          /> */}
          </FormControl>
        </div>
      )
    },
    {
      title: "התחלה",
      field: "START_DATE",
      cellStyle: this.state.cellStyleDefault,
      type: "date",
      render: Data => {
        const date = new Date(Data["START_DATE"]);
        return Moment(date).format("DD.MM.YYYY");
      },
      readonly: true
    },
    {
      title: "סיום",
      field: "LAST_DATE",
      cellStyle: this.state.cellStyleDefault,
      type: "date",
      render: Data => {
        const date = new Date(Data["LAST_DATE"]);
        return Moment(date).format("DD.MM.YYYY");
      },
      readonly: true
    },
    {
      title: "סטטוס",
      field: "STATUS",
      lookup: { E0001: "ממתין", E0002: "בתהליך", E0003: "סיום" },
      cellStyle: {
        textAlign: "center",
        fontFamily: "Heebo",
        fontSize: "1vw",
        overFlow: "scroll",
        direction: "rtl",
        width: "5vw"
      }
    },
    {
      title: "ציון",
      field: "GRADE",
      cellStyle: {
        textAlign: "center",
        fontFamily: "Heebo",
        fontSize: "1vw",
        minWidth: "4vw",
        maxWidth: "6vw",
        direction: "rtl",
        height: "2em"
      },
      type: "numeric"
    },
    {
      title: "הערות",
      field: "NOTE",
      cellStyle: {
        textAlign: "center",
        fontFamily: "Heebo",
        maxWidth: "10vw",
        minWidth: "8vw",
        fontSize: "1vw",
        overFlow: "scroll",
        direction: "rtl"
      },
      editComponent: props => (
        <div>
          <TextField
            id="note"
            multiline
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
          />
        </div>
      )
    }
  ];
}
export default certificationColumns;
