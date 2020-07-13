import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  IconButton,
  Checkbox,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

class NewTable extends React.Component {
  state = {
    selected: [],
    data: [],
  };
  componentDidMount = () => {
    this.setState({ data: this.props.data });
  };
  handleAddRow = () => {
    let { data } = this.state;
    //data.push(data.length);
    this.setState({ data: [...data, this.props.columns] });
    this.props.onChange(this.state.data);
  };
  handleButtonClicked = (event, actionName, index) => {
    if (actionName === "delete") {
      let { data } = this.state;
      data.splice(index, 1);
      this.setState({ data });
      this.props.onChange(this.state.data);
    } else if (actionName === "?") {
    }
  };
  isSelected = (name) => this.state.selected.indexOf(name) !== -1;
  render() {
    return (
      <div disabled={this.props.isDisabled} dir="rtl">
        <div
          hidden={
            this.props.isDisabled || !this.props.editableType ? true : false
          }
        >
          <Button onClick={this.handleAddRow} endIcon={AddIcon}>
            הוסף שורה
          </Button>
        </div>
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" hidden={!this.props.selection}>
                <Checkbox
                  indeterminate={
                    this.state.selected.length > 0 &&
                    this.state.selected.length < this.state.data.length
                  }
                  checked={
                    this.state.selected.length === this.state.data.length
                  }
                  onChange={() => {
                    this.setState({ selected: this.state.data });
                  }}
                  inputProps={{ "aria-label": "select all desserts" }}
                />
              </TableCell>
              {this.props.columns.map((title, idx) => (
                <TableCell key={title.name}>{title.text}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.data.map((item, i) => {
              const isItemSelected = this.isSelected(item.name);
              return (
                <TableRow key={i}>
                  <TableCell padding="checkbox" hidden={!this.props.selection}>
                    <Checkbox
                      checked={isItemSelected}
                      // inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </TableCell>
                  {item.map((name, id) => (
                    <TableCell key={name.value}>{name.prop}</TableCell>
                  ))}
                  {this.props.actions.map((action, id) => (
                    <TableCell key={action.id}>
                      <IconButton
                        onClick={this.handleButtonClicked(action.name, i)}
                        color="secondary"
                      >
                        {action.icon}
                      </IconButton>
                    </TableCell>
                  ))}
                  <TableCell>
                    <Button
                      onClick={this.deleteItem.bind(this, i)}
                      color="secondary"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}
export default NewTable;
