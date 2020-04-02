import React, { Component } from "react";

// Components Import
import CertificationTable from "./CertificationTable/CertificationTable";
import CertificationFields from "./CertificationFields/CertificationFields";
import APICalls from "../APICalls/APICalls";

// CSS:

// Const import
import { consts } from "../APICalls/constVars";
import FrameView from "../Dynamic/FrameView/FrameView";

// Hadas template class
class TemplateView extends Component {
  state = {
    id: "",
    soliderName: "",
    signatureId: "",
    signature: "",
    startDate: "",
    endDate: "",
    grade: "",
    soldierId: "00000000",
    steps: [],
    numRows: "1",
    columnDet: [],
    isDisabled: true,
    isLoading: false
  };

  componentDidMount = () => {
    const bpRest = consts.usersGet;

    const bpData = APICalls.getDataByRest({ url: bpRest });
    var columnDet;
    bpData.forEach(d => {
      columnDet[d.OBJID] = d.SHORT;
    });
    this.setState({ columnDet: columnDet });

    const data = APICalls.getDataByRest({
      url: consts.getCerDet + `/{"OBJECT_ID":"${this.props.match.params.id}"}`
    });
    this.setState({
      name: data.GEN_DET.DESCRIPTION,
      soliderName: data.GEN_DET.SOLDIER_NAME,
      soldierId: data.GEN_DET.SOLDIER_ID,
      grade: data.GEN_DET.GRADE,
      startDate: data.GEN_DET.START_DATE,
      endDate: data.GEN_DET.END_DATE,
      extension: data.GEN_DET.EXTEN,
      signature: data.GEN_DET.IN_CHARGE,
      signatureId: data.GEN_DET.CHARGE_ID,
      steps: data.STEPS
    });
    this.setState({ numRows: data.STEPS.length });
  };

  handleOnSave = () => {
    this.setState({ isLoading: true });

    var restUrlSave = consts.updateHadasDet;

    const paramsDet = {
      GEN_DET: {
        OBJECT_ID: this.props.match.params.id,
        START_DATE: this.state.startDate,
        END_DATE: this.state.endDate,
        GRADE: this.state.grade,
        EXTEN: this.state.extension,
        IN_CHARGE: this.state.signatureId
      },
      OBJECT_ID: this.props.match.params.id,
      STEPS: this.state.steps
    };

    const data = APICalls.saveDataByRest({
      url: restUrlSave,
      dataToSave: paramsDet
    });
    this.setState({
      steps: data.STEPS,
      endDate: data.GEN_DET.END_DATE
    });
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
  render() {
    return (
      <div>
        <FrameView
          isCertification={true}
          isLoading={this.state.isLoading}
          isDisabled={this.state.isDisabled}
          handleOnEdit={this.handleOnEdit}
          handleOnSave={this.handleOnSave}
        />
        <CertificationFields
          onChange={this.handleChangeWithName}
          isDisabled={this.state.isDisabled}
          props={{
            signatureId: this.state.signatureId,
            soldierId: this.state.soldierId,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            grade: this.state.grade,
            extension: this.state.extension
          }}
        />
        <CertificationTable
          columnsDet={this.state.columnsDet}
          data={this.state.steps}
          isDisabled={this.state.isDisabled}
          rowsNum={this.state.numRows}
        />
      </div>
    );
  }
}
export default TemplateView;
