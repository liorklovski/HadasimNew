import React, { useState } from "react";
import {
  Dialog,
  IconButton,
  TextField,
  Button,
  InputAdornment,
  DialogActions,
  DialogContent
} from "@material-ui/core";

const DialogField = ({
  value,
  onOpen,
  onClose,
  isOpen,
  dialogType,
  handleOk,
  // onChange,
  // onRowClicked,
  icon: Icon,
  contentView: ContentView,
  dialogOptions = [],
  dialogActions,
  ...others
}) => {
  // const [isDialogOpen, setIsDialogOpen] = useState(isOpen);

  // const openDialog = () => {
  //   if (!others.disabled) {
  //     setIsOpen(true);
  //   }
  // };

  // const closeDialog = () => {
  //   setIsOpen(false);
  // };

  const dialogTypes = {
    text: {
      comp: TextField,
      props: {
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">{<Icon />}</InputAdornment>
          )
        }
      }
    },
    button: {
      comp: IconButton,
      icon: Icon
    }
  };

  const ActualField = ({ comp: DialogComp, props, icon: Icon }) => {
    if (!DialogComp) return null;

    return (
      <DialogComp onClick={onOpen} value={value} {...props} {...others}>
        <Icon />
      </DialogComp>
    );
  };

  return (
    <div>
      <ActualField {...dialogTypes[dialogType]} />
      <Dialog open={isOpen} onClose={onClose}>
        <DialogContent>{ContentView}</DialogContent>
        <DialogActions>
          {dialogOptions.map((f, idx) => (
            <Button key={f.id} onClick={f.onClick}>
              {f.text}
            </Button>
          ))}
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default DialogField;
