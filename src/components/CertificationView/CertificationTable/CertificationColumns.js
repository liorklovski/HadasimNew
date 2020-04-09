import React, { useState } from "react";
import { TextField, FormControl } from "@material-ui/core";

// Icons
import { PersonAdd as PersonAddIcon } from "@material-ui/icons";

import Moment from "moment";
import DialogField from "../../Dynamic/FieldBlock/FieldTypes/DialogField";
import Search from "../../Dynamic/Search/Search";
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

export const CertificationColumns = columnDet => {
  const [isOpen, setIsOpen] = useState(false);
  const [inCharge, setInCharge] = useState("");
  const handleClick = (event, row) => {
    setIsOpen(false);
    setInCharge(row.DESCRIPTION);
    return row.DESCRIPTION; // SHORT, ObJID
  };
  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };
  const getSoldiersView = () => {
    //   var data = getDataByRest({
    //     url: consts.usersGet
    //   });

    //TEMP
    var data = [
      { DESCRIPTION: "משהו משהו", OBJECT_ID: "2233" },
      { DESCRIPTION: "משהו משהו", OBJECT_ID: "2233" },
      { DESCRIPTION: "משהו משהו", OBJECT_ID: "2233" },
      { DESCRIPTION: "משהו משהו", OBJECT_ID: "2233" },
      { DESCRIPTION: "משהו משהו", OBJECT_ID: "2233" },
      { DESCRIPTION: "משהו משהו", OBJECT_ID: "2233" },
      { DESCRIPTION: "משהו משהו", OBJECT_ID: "2233" }
    ];
    // TEMP
    return <Search data={data} handleClick={handleClick} />;
  };
  const dialogProps = {
    // onRowClicked: handleClick,
    isOpen: isOpen,
    onClose: closeDialog,
    onOpen: openDialog,
    icon: PersonAddIcon,
    dialogType: "text",
    contentView: getSoldiersView()
  };
  return [
    {
      title: "שם",
      field: "DESCRIPTION",
      //cellStyle ?
      // cellStyle: {
      //   textAlign: "center",
      //   fontFamily: "Heebo",
      //   fontSize: "1vw",
      //   minWidth: "7vw",
      //   maxWidth: "10vw",
      //   direction: "rtl",
      //   height: "2em"
      // },
      readonly: true
    },
    {
      title: "אחראי",
      field: "IN_CHARGE",
      // cellStyle: {
      //   textAlign: "center",
      //   fontFamily: "Heebo",
      //   fontSize: "1vw",
      //   direction: "rtl",
      //   width: "9vw",
      //   padding: "4vw 0 4vw 0"
      //   //   padding: "0px"
      // },
      lookup: { ...columnDet },
      editComponent: props => (
        <div>
          {/* <BPDialog
            soldierId={this.state.soldierId}
            table={true}
            value={props.value}
            onChange={props.onChange}
          /> */}
          <DialogField
            {...dialogProps}
            value={props.value}
            // onRowClicked={inCharge}
            onChange={props.onChange}
          />
        </div>
      )
    },
    {
      readonly: true,
      title: "התחלה",
      field: "START_DATE",
      // cellStyle: this.state.cellStyleDefault,
      type: "date",
      render: Data => {
        var date;
        if (Data["START_DATE"]) {
          date = new Date(Data["START_DATE"]);
        } else {
          date = new Date();
        }
        return Moment(date).format("DD.MM.YYYY");
      }
    },
    {
      title: "סיום",
      field: "LAST_DATE",
      // cellStyle: this.state.cellStyleDefault,
      type: "date",
      render: Data => {
        var date;
        if (Data["START_DATE"]) {
          date = new Date(Data["LAST_DATE"]);
        } else {
          date = new Date();
        }
        return Moment(date).format("DD.MM.YYYY");
      },
      readonly: true
    },
    {
      title: "סטטוס",
      field: "STATUS",
      lookup: { E0001: "ממתין", E0002: "בתהליך", E0003: "סיום" },
      cellStyle: {
        // textAlign: "center",
        // fontFamily: "Heebo",
        // fontSize: "1vw",
        // overFlow: "scroll",
        // direction: "rtl",
        // width: "10vw"
        // fullWidth: true
      }
    },
    {
      title: "ציון",
      field: "GRADE",
      // cellStyle: {
      //   textAlign: "center",
      //   fontFamily: "Heebo",
      //   fontSize: "1vw",
      //   minWidth: "4vw",
      //   maxWidth: "6vw",
      //   direction: "rtl",
      //   height: "2em"
      // },
      type: "numeric"
    },
    {
      title: "הערות",
      field: "NOTE",
      // cellStyle: {
      //   textAlign: "center",
      //   fontFamily: "Heebo",
      //   maxWidth: "10vw",
      //   minWidth: "8vw",
      //   fontSize: "1vw",
      //   overFlow: "scroll",
      //   direction: "rtl"
      // },
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
};
