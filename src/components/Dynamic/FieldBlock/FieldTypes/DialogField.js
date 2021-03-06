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
  hidden = false,
  // onChange,
  // onRowClicked,
  icon: Icon,
  contentView: ContentView,
  dialogOptions = [],
  dialogActions = [],
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
      <div hidden={hidden}>
        <DialogComp onClick={onOpen} value={value} {...props} {...others}>
          <Icon />
        </DialogComp>
      </div>
    );
  };

  return (
    <div>
      <ActualField {...dialogTypes[dialogType]} />
      <Dialog open={isOpen} onClose={onClose}>
        <DialogContent>{ContentView}</DialogContent>
        <DialogActions>
          {dialogActions.map((f, idx) => (
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
