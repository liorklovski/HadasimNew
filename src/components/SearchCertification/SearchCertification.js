// SearchCertification
import React, { useState } from "react";
import Search from "../Dynamic/Search/Search";
import CertificationView from "../CertificationView/CertificationView";

import { Add as AddIcon } from "@material-ui/icons";

// Const import
import { consts } from "../APICalls/constVars";
import { getDataByRest } from "../APICalls/APICalls";
import { Paper } from "@material-ui/core";
import DialogField from "../Dynamic/FieldBlock/FieldTypes/DialogField";

const cellStyleDefault = {
  textAlign: "center",
  // fontFamily: "Heebo",
  // fontSize: 17,
  // backgroundColor: "rgba(251, 251, 253, 0.58)",
  // width: "50%"
  direction: "rtl"
};
const SearchCertification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currRow, setCurrRow] = useState();
  const [isViewDisabled, setIsViewDisabled] = useState(false);

  const getSearchData = () => {
    // var data = getDataByRest({
    //   url: consts.searchCertificationsUrl
    // });

    //TEMP
    var data = [{ DESCRIPTION: "משהו משהו", OBJECT_ID: "2233" }];
    //TEMP
    return data;
  };

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsViewDisabled(false);
    setIsOpen(false);
  };

  const dialogActions = [{ text: "סיום", onClick: closeDialog }];

  const handleClick = (event, row) => {
    setCurrRow(row.OBJECT_ID);
    setIsViewDisabled(true);
    setIsOpen(true);
    // return process.env.PUBLIC_URL + "/CertificationView/" + row.OBJECT_ID;
  };
  return (
    <Paper className="search-page" elevation={3}>
      <DialogField
        hidden={true}
        isOpen={isOpen}
        onOpen={openDialog}
        onClose={closeDialog}
        dialogType="text"
        icon={AddIcon}
        dialogActions={dialogActions}
        contentView={
          <CertificationView isDisabled={isViewDisabled} objID={currRow} />
        }
      />
      <Search
        data={getSearchData()}
        handleClick={handleClick}
        columns={[
          {
            title: "סטטוס",
            field: "STATUS",
            cellStyle: cellStyleDefault
          },
          {
            title: "שם חייל",
            field: "SOLDIER_NAME",
            cellStyle: cellStyleDefault
          },
          {
            title: "שם הד״ס",
            field: "DESCRIPTION",
            cellStyle: cellStyleDefault
          },
          {
            title: "מס׳ זיהוי",
            field: "OBJECT_ID",
            cellStyle: cellStyleDefault
          }
        ]}
      />
    </Paper>
  );
};

export default SearchCertification;
