import React, { useState } from "react";
import MaterialTable from "material-table";
import {
  FilterList as FilterListIcon,
  Clear as ClearIcon,
  Search as SearchIcon,
  Delete as DeleteIcon,
  Check as CheckIcon,
  Edit as EditIcon,
  Add as AddIcon
} from "@material-ui/icons";

const Table = ({
  data = [],
  columns = [],
  options = {},
  editableType = "",
  handleClick,
  ...others
}) => {
  const [myData, setMyData] = useState(data);
  return (
    <MaterialTable
      icons={{
        Filter: () => <FilterListIcon />,
        ResetSearch: () => <ClearIcon />,
        Search: () => <SearchIcon />,
        Delete: () => <DeleteIcon />,
        Edit: () => <EditIcon />,
        Add: () => <AddIcon />,
        Check: () => <CheckIcon />,
        Clear: () => <ClearIcon />
      }}
      onRowClick={handleClick}
      columns={columns}
      data={data}
      editable={
        editableType
          ? editableType === "all"
            ? {
                onRowAdd: newData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const currData = myData;
                        currData.push(newData);
                        setMyData(currData, () => resolve());
                      }
                      resolve();
                    }, 500);
                  }),
                onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const currdata = myData;
                        const index = currdata.indexOf(oldData);
                        currdata.splice(index, 1);
                        setMyData(currdata, () => resolve());
                      }
                      resolve();
                    }, 500);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const currdata = myData;
                        const index = currdata.indexOf(oldData);
                        currdata[index] = newData;
                        setMyData(currdata, () => resolve());
                      }
                      resolve();
                    }, 500);
                  })
              }
            : {
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const currData = myData;
                        const index = currData.indexOf(oldData);
                        currData[index] = newData;
                        setMyData(currData, () => resolve());
                      }
                      resolve();
                    }, 500);
                  })
              }
          : {}
      }
      components={{
        Container: props => (
          <div
            style={{
              fontFamily: "Heebo"
            }}
          >
            {props.children}
          </div>
        )
      }}
      options={options}
      localization={{
        header: {
          actions: " פעולות "
        },
        body: {
          emptyDataSourceMessage: "אין מידע",
          editRow: {
            deleteText: "בטוח שברצונך למחוק שורה זאת?",
            cancelTooltip: "בטל",
            saveTooltip: "שמור",
            invalidDateMessage: "תאריך לא חוקי"
          }
        }
      }}
    />
  );
};
export default Table;
