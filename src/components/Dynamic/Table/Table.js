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

class Table extends React.Component {
  state = {
    data: []
  };
  //   = ({
  //   data = [],
  //   columns = [],
  //   options = {},
  //   editableType = "",
  //   handleClick,
  //   onChange,
  //   ...others
  // }) => {

  componentDidMount = () => {
    // this.initTable();
    this.setState({ data: this.props.data });
  };

  // componentDidUpdate(prevProps, prevState) {
  //     if (prevProps.id !== this.props.id) {
  //         this.initTable();
  //     }
  // }

  // initTable = () => {
  //     if (this.props.id) {
  //         //TODO: SERVER Get sudars of specific sea report by id
  //         this.setState({ data: sudars });
  //     } else {
  //         this.setState({ data: [] });
  //     }
  // };

  onRowUpdate = (newData, oldData) =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        if (oldData) {
          this.setState(
            prevState => {
              const data = [...prevState.data];
              data[data.indexOf(oldData)] = newData;
              return {
                ...prevState,
                data
              };
            },
            () => this.props.onChange(this.state.data)
          );
        }
      }, 500);
    });

  onRowDelete = oldData =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        this.setState(
          prevState => {
            const data = [...prevState.data];
            data.splice(data.indexOf(oldData), 1);
            return { ...prevState, data };
          },
          () => this.props.onChange(this.state.data)
        );
      }, 500);
    });
  onRowAdd = newData =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        this.setState(
          prevState => {
            const data = [...prevState.data];
            data.push(newData);
            return { ...prevState, data };
          },
          () => this.props.onChange(this.state.data)
        );
      }, 500);
    });
  render() {
    return (
      <div dir="rtl">
        <MaterialTable
          icons={{
            Filter: () => <FilterListIcon />,
            ResetSearch: () => <ClearIcon />,
            Search: () => <SearchIcon />,
            Delete: () =>
              this.props.editableType === "edit" ? <div /> : <DeleteIcon />,
            Edit: () => <EditIcon />,
            Add: () =>
              this.props.isDisabled || this.props.editableType === "edit" ? (
                <div />
              ) : (
                <AddIcon />
              ),
            Check: () => <CheckIcon />,
            Clear: () => <ClearIcon />
          }}
          onRowClick={this.props.handleClick}
          columns={this.props.columns}
          data={this.props.data}
          editable={
            this.props.isDisabled || !this.props.editableType
              ? {}
              : this.props.editableType === "all"
              ? {
                  onRowUpdate: this.onRowUpdate,
                  onRowAdd: this.onRowAdd,
                  onRowDelete: this.onRowDelete
                }
              : { onRowUpdate: this.onRowUpdate }
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
          options={{ ...this.props.options, disabled: this.props.isDisabled }}
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
      </div>
    );
  }
}
export default Table;
