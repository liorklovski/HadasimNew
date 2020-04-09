import React from "react";
import FieldBlock from "../../Dynamic/FieldBlock/FieldBlock";
import SoldierTableView from "../../SoldierTableView/SoldierTableView";

import Search from "../../Dynamic/Search/Search";

// Const import
import { consts } from "../../APICalls/constVars";
import { getDataByRest } from "../../APICalls/APICalls";

// Icon:
import { PersonAdd as PersonAddIcon } from "@material-ui/icons";

const CertificationFields = ({
  props = {},
  isDisabled = false,
  onChange,
  isOpen = false,
  onCloseDialog,
  onOpenDialog,
  onChangeDialog,
  handleDateChange
}) => {
  const SoldiersView = () => {
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
    return <Search data={data} handleClick={onChangeDialog} />;
  };
  const fieldGrid = {
    rows: "1fr 1fr",
    columns: "1fr 1fr 1fr"
  };

  const fields = [
    {
      fieldType: "text",
      label: "מס' אישי",
      value: props.soldierId ? props.soldierId : "לא נמצא מס' אישי",

      disabled: true,
      className: "disabledField"
    },
    {
      fieldType: "dialog", // BP dialog
      // props: {
      //   soldierId: props.soldierId,
      //   id: props.signatureId,
      //   table: false
      // },
      isOpen: isOpen,
      onClose: onCloseDialog,
      onOpen: onOpenDialog,
      icon: PersonAddIcon,
      dialogType: "text",
      value: props.signature,
      contentView: SoldiersView(),
      label: "חתימה",
      disabled: isDisabled
    },
    {
      fieldType: "text",
      label: "ציון",
      type: "number",
      className: "regularInput",
      value: props.grade,
      onChange: onChange("grade"),
      maxLength: "3",
      disabled: isDisabled
    },
    {
      fieldType: "date",
      maxDateMessage: "תאריך התחלה לא יכול להיות גדול מתאריך סיום",
      label: "תאריך התחלה",
      value: props.startDate,
      onChange: handleDateChange("startDate"),
      autoOk: true,
      disabled: isDisabled
    },
    {
      fieldType: "date",
      minDateMessage: "תאריך סיום לא יכול להיות קטן מתאריך התחלה",
      label: "תאריך סיום",
      value: props.endDate,
      disabled: true
    },
    {
      fieldType: "text",
      label: "הארכה בימים",
      className: "regularInput",
      value: props.extension,
      type: "number",
      disabled: isDisabled,
      onChange: onChange("extension")
    }
  ];
  return (
    <div className="Inputs">
      <div className="mainInputsCer">
        <FieldBlock fields={fields} fieldGrid={fieldGrid} />
      </div>
    </div>
  );
};
export default CertificationFields;
