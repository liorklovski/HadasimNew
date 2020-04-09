import React, { Component } from "react";

// Components Import
import TemplateTable from "./TemplateTable/TemplateTable";
import TemplateFields from "./TemplateFields/TemplateFields";
import { getDataByRest, saveDataByRest } from "../APICalls/APICalls";

// Frame import
import FrameView from "../Dynamic/FrameView/FrameView";

// CSS:
// import "../../css/hadasTemplate.css";
import "./TemplateView.css";

// Const import
import { consts } from "../APICalls/constVars";
import { Paper } from "@material-ui/core";

// Hadas template class
class TemplateView extends Component {
  state = {
    id: "",
    name: "",
    category: "",
    templGuid: "",
    long: "",
    soldier: "",
    status: "",
    steps: [],
    numRows: "1",
    isDisabled: true,
    isLoading: false
  };

  componentDidMount = () => {
    if (this.props.match.params.id === undefined) {
      this.setState({ isDisabled: false, id: this.props.match.params.id });
    } else {
      // const data = getDataByRest({
      //   url:
      //     consts.getHadasDet + `/{"OBJECT_ID":"${this.props.match.params.id}"}`
      // });
      // this.setState({
      //   id: this.props.match.params.id,
      //   name: data.GEN_DET.DESCRIPTION,
      //   long: data.GEN_DET.ZZ_YTIMECOMMENT,
      //   status: data.GEN_DET.STATUS,
      //   category: data.GEN_DET.CATEGORY,
      //   soldier: data.GEN_DET.SOLDIER,
      //   templGuid: data.GEN_DET.NEW_GUID,
      //   steps: data.STEPS
      // });
      // this.setState({ numRows: data.STEPS.length });
    }
  };

  handleOnSave = () => {
    this.setState({ isLoading: true });

    var urlSave = consts.updateHadasDet;

    const paramsDet = {
      GEN_DET: {
        DESCRIPTION: this.state.name,
        ZZ_YTIMECOMMENT: this.state.long,
        STATUS: this.state.status,
        CATEGORY: this.state.category,
        SOLDIER: this.state.soldier
      },
      OBJECT_ID: this.props.match.params.id,
      STEPS: this.state.steps
    };

    // const data = saveDataByRest({
    //   url: urlSave,
    //   dataToSave: paramsDet
    // });
    // this.setState({
    //   templGuid: data.GEN_DET.GUID
    // });
    this.setState({ isLoading: false, isDisabled: true });
  };

  handleOnEdit = () => {
    this.setState({ isDisabled: false });
  };
  handleChangeWithName = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  onUpdateSteps = steps => {
    this.setState({ steps: steps });
  };
  render() {
    // Get cover stuff on save and edit send subtitle ,loading icon, left side button
    // Call fields
    // Call table
    return (
      <div>
        <Paper className="form-page" elevation={3}>
          <FrameView
            templGuid={this.state.templGuid}
            isLoading={this.state.isLoading}
            isDisabled={this.state.isDisabled}
            handleOnEdit={this.handleOnEdit}
            handleOnSave={this.handleOnSave}
          />
          <div className="report-form-grid">
            <TemplateFields
              onChange={this.handleChangeWithName}
              isDisabled={this.state.isDisabled}
              props={{
                name: this.state.name,
                id: this.state.id,
                category: this.state.category,
                soldier: this.state.soldier,
                status: this.state.status,
                long: this.state.long
              }}
            />
          </div>
          <TemplateTable
            onUpdateSteps={this.onUpdateSteps}
            data={this.state.steps}
            isDisabled={this.state.isDisabled}
            rowsNum={this.state.numRows}
          />
        </Paper>
      </div>
    );
  }
}
export default TemplateView;
