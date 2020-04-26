import React, { useState } from "react";
import Search from "../Dynamic/Search/Search";

// Const import
import { consts } from "../APICalls/constVars";
import { getDataByRest } from "../APICalls/APICalls";
import DialogField from "../Dynamic/FieldBlock/FieldTypes/DialogField";
// Icons
import { PersonAdd as PersonAddIcon } from "@material-ui/icons";
import { TextField } from "@material-ui/core";

const SoldierTableView = ({ templGuid }) => {
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
    //   var data = getDataByRest({
    //     url: consts.followUp + `/{"SOLDIER_ID":"${row.OBJID}","TEMPL_GUID":"${this.props.templGuid}"}`
    //   });

    return process.env.PUBLIC_URL + "/CertificationView/" + row.OBJECT_ID;
  };
  return (
    <DialogField
      isOpen={isOpen}
      onOpen={openDialog}
      onClose={closeDialog}
      // disabled={templGuid === "" ? true : false}
      dialogType="button"
      icon={PersonAddIcon}
      contentView={
        <Search data={getSoldiersData()} handleClick={handleClick} />
      }
    />
  );
};

export default SoldierTableView;
