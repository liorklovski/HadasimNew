import React, { useState } from "react";
import Search from "../Dynamic/Search/Search";

// Const import
import { consts } from "../APICalls/constVars";
import { getDataByRest } from "../APICalls/APICalls";
import DialogField from "../Dynamic/FieldBlock/FieldTypes/DialogField";
// import Alert from '@material-ui/lab/Alert';
// Icons
import { PersonAdd as PersonAddIcon } from "@material-ui/icons";
import { TextField, Button } from "@material-ui/core";

const SoldierTableView = ({ templGuid, triggerAlert }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };
  const getSoldiersData = () => {
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
    return data;
  };
  const handleClick = (event, row) => {
    // TODO: Mark the row
    //   var data = getDataByRest({
    //     url: consts.followUp + `/{"SOLDIER_ID":"${row.OBJID}","TEMPL_GUID":"${this.props.templGuid}"}`
    //   });
    closeDialog();
    triggerAlert();
    // return (<Alert severity="success">החיילים שיוכו בהצלחה</Alert>)
    // return process.env.PUBLIC_URL + "/CertificationView/" + row.OBJECT_ID;
  };

  const dialogActions = [
    { text: "שיוך", onClick: handleClick },
    { text: "ביטול", onClick: closeDialog }
  ];
  return (
    <DialogField
      isOpen={isOpen}
      onOpen={openDialog}
      onClose={closeDialog}
      dialogActions={dialogActions}
      // disabled={templGuid === "" ? true : false}
      dialogType="button"
      icon={PersonAddIcon}
      contentView={
        <div>
          <Search data={getSoldiersData()} handleClick={handleClick} />
          {/* <Button onClick={handleClick}>שיוך</Button> */}
        </div>
      }
    />
  );
};

export default SoldierTableView;
