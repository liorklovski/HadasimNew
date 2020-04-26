// SearchTemplate
import React, { useState } from "react";
import Search from "../Dynamic/Search/Search";

import { Add as AddIcon } from "@material-ui/icons";

// Const import
import { consts } from "../APICalls/constVars";
import { Paper } from "@material-ui/core";

// CSS import
import "./SearchTemplate.css";
import { getDataByRest } from "../APICalls/APICalls";
import TemplateView from "../TemplateView/TemplateView";
import DialogField from "../Dynamic/FieldBlock/FieldTypes/DialogField";

const cellStyleDefault = {
  textAlign: "center",
  // fontFamily: "Heebo",
  // fontSize: 17,
  // backgroundColor: "rgba(251, 251, 253, 0.58)",
  // width: "50%"
  direction: "rtl"
};

const SearchTemplate = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };
  const dialogActions = [{ text: "סיום", onClick: closeDialog }];

  const getSearchData = () => {
    //   var data = getDataByRest({
    //     url: consts.searchHadasimUrl
    //   });

    //TEMP
    var data = [{ DESCRIPTION: "משהו משהו", OBJECT_ID: "2233" }];
    // TEMP
    return data;
  };
  const handleClick = (event, row) => {
    return process.env.PUBLIC_URL + "/TemplateView/" + row.OBJECT_ID;
  };
  return (
    <Paper className="search-page" elevation={3}>
      <DialogField
        isOpen={isOpen}
        onOpen={openDialog}
        onClose={closeDialog}
        dialogType="button"
        icon={AddIcon}
        dialogActions={dialogActions}
        contentView={<TemplateView showFrame={true} isDisabled={false} />}
      />
      <Search
        data={getSearchData()}
        handleClick={handleClick}
        columns={[
          {
            title: "סוג חייל",
            field: "SOLDIER_TYPE",
            cellStyle: cellStyleDefault
          },
          {
            title: "קטגוריה",
            field: "CATEGORY",
            cellStyle: cellStyleDefault
          },
          {
            title: "שם",
            field: "DESCRIPTION",
            cellStyle: cellStyleDefault
          },
          {
            title: "מזהה",
            field: "OBJECT_ID",
            cellStyle: cellStyleDefault
          }
        ]}
      />
    </Paper>
  );
};

export default SearchTemplate;
