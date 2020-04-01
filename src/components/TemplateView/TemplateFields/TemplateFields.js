import React from "react";
import FieldBlock from "../../Dynamic/FieldBlock/FieldBlock";

const TemplateFields = ({ props = {}, isDisabled = false, onChange }) => {
  const fieldGrid = {
    rows: "1fr 1fr",
    columns: "1fr 1fr 1fr"
  };

  const fields = [
    {
      fieldType: "text",
      label: 'שם הד"ס',
      // className: "regularInput",
      value: props.name,
      onChange: onChange("name"),
      disabled: isDisabled
    },
    {
      fieldType: "dropdown",
      label: "סטטוס",
      // className: "selectInput",
      value: props.status,
      dropdown: [
        { value: "E0001", text: "חדש" },
        { value: "E0002", text: "ממתין" },
        { value: "E0003", text: "בתהליך" },
        { value: "E0004", text: "סיום" }
      ],
      disabled: isDisabled,
      onChange: onChange("status")
    },
    {
      fieldType: "text",
      label: "זיהוי",
      // className: "disabledFieldID",
      value: props.id,
      disabled: true
    },
    {
      fieldType: "text",
      type: "number",
      label: "משך בימים",
      // className: "regularInput",
      value: props.long,
      onChange: onChange("long"),
      disabled: isDisabled
    },
    {
      fieldType: "dropdown",
      label: "קטגוריה",
      // className: "selectInput",
      dropdown: [
        { value: "100001", text: "אלקטרוניקה" },
        { value: "100002", text: "גנק" },
        { value: "100003", text: "נשק" },
        { value: "100004", text: "הגנה" }
      ],
      value: props.category,
      disabled: isDisabled,
      onChange: onChange("category")
    },
    {
      fieldType: "dropdown",
      label: "סוג חייל",
      // className: "selectInput",
      dropdown: [
        { value: "לוחם", text: "לוחם" },
        { value: "קצין", text: "קצין" }
      ],
      value: props.soldier,
      disabled: isDisabled,
      onChange: onChange("soldier")
    }
  ];
  return (
    // <div className="Inputs">
    // <div>{className="mainInputs"}
    <FieldBlock fields={fields} fieldGrid={fieldGrid} />
    // </div>
    // </div>
  );
};
export default TemplateFields;
