import React from "react";
import FieldBlock from "../../Dynamic/FieldBlock/FieldBlock";

const CertificationFields = ({ props = {}, isDisabled = false, onChange }) => {
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
      props: {
        soldierId: props.soldierId,
        id: props.signatureId,
        table: false
      },
      value: props.signature,
      onChange: onChange,
      onChangeId: onChange("signature"),
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
      value:
        props.startDate !== "0000-00-00" && props.startDate !== ""
          ? props.startDate
          : Date.now(),
      onChange: onChange("startDate"),
      autoOk: true,
      disabled: isDisabled
    },
    {
      fieldType: "date",
      minDateMessage: "תאריך סיום לא יכול להיות קטן מתאריך התחלה",
      label: "תאריך סיום",
      value:
        props.endDate !== "0000-00-00" && props.endDate !== ""
          ? props.endDate
          : Date.now(),
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
