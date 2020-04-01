import React, { useState } from "react";
import {
  Dialog,
  IconButton,
  TextField,
  Button,
  InputAdornment,
  DialogActions
} from "@material-ui/core";

const DialogField = ({
  value,
  type,
  handleOk,
  icon: Icon,
  contentView: ContentView,
  dialogOptions = [],
  dialogActions,
  ...others
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const dialogTypes = {
    text: {
      comp: TextField,
      props: {
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">
              <Icon />
            </InputAdornment>
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
      <DialogComp onClick={openDialog} value={value} {...props} {...others}>
        <Icon />
      </DialogComp>
    );
  };

  return (
    <div>
      <ActualField {...dialogTypes[type]} />
      <Dialog {...dialogOptions} open={isOpen} onClose={closeDialog}>
        <ContentView />
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
