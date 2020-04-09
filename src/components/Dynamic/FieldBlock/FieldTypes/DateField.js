import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const DateField = ({ className, value, onChange, ...others }) => {
  const hebrewMessages = {
    cancelLable: "ביטול",
    clearLabel: "נקה",
    okLabel: "אישור",
    invalidDateMessage: "תאריך לא חוקי",
    maxDateMessage: ""
  };
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className={className}>
        <KeyboardDatePicker
          {...hebrewMessages}
          value={value}
          onChange={date => {
            onChange && onChange(date);
          }}
          format="DD/MM/YYYY"
          autoOk
          {...others}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
};
export default DateField;
