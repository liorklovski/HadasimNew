import React from "react";
import { MenuItem, TextField } from "@material-ui/core";

const DropdownField = ({ dropdown: dorpdownOptions, ...others }) => {
  const onValid = e => e.target.setCustomValidity("");
  return (
    <TextField select {...others} onSelect={onValid} style={{ width: "12vw" }}>
      {dorpdownOptions.map((f, idx) => (
        <MenuItem key={f.value} value={f.value}>
          {f.text}
        </MenuItem>
      ))}
    </TextField>
    // <FormControl required={required} style={{ width: "12vw" }}>
    //   <InputLabel>{label}</InputLabel>
    //   <Select value={value} onChange={onChange}>
    //     <MenuItem value="" />
    //     {dorpdownOptions.map((f, idx) => (
    //       <MenuItem key={f.value} value={f.value}>
    //         {f.text}
    //       </MenuItem>
    //     ))}
    //   </Select>
    // </FormControl>
  );
};

export default DropdownField;
