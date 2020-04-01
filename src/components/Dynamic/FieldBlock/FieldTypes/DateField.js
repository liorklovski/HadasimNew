import React from 'react'
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns'

const DateField = ({className, value, onChange, ...others}) => {
    const hebrewMessages = {
        cancelLable: "ביטול",
        clearLabel: "נקה",
        okLabel: "אישור",
        invalidDateMessage: "תאריך לא חוקי",
        maxDateMessage: ""
    }
    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className={className}>
        <KeyboardDatePicker
        {...hebrewMessages}
        selected={value}
        value={value}
        onChange={date => {
            onChange && onChange(date)
        }}
        format="dd/MM/yyyy"
        autoOk
        {...others}
        />
        </div>
        </MuiPickersUtilsProvider>
    )
}
export default DateField