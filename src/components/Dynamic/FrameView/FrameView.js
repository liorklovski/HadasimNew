import React from "react";
import { CircularProgress, Button, ButtonGroup } from "@material-ui/core";

// Icons
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Save as SaveIcon
} from "@material-ui/icons";

// CSS:
import { Grid, Cell } from "styled-css-grid";
import SoldierTableView from "../../SoldierTableView/SoldierTableView";

const rows = "1fr";
const columns = "1fr 1fr 1fr";

const FrameView = ({
  triggerAlert,
  templGuid = "",
  isLoading = false,
  isCertification = false,
  handleOnSave,
  isDisabled = false,
  handleOnEdit
}) => {
  return (
    <div>
      <div hidden={!isLoading} className="loadingIcon">
        <CircularProgress disableShrink style={{ marginTop: "300px" }} />
      </div>
      <Grid gap="20px" rows={rows} columns={columns}>
        <Cell>
          <div hidden={true}>
            <Button variant="contained">
              <DeleteIcon />
            </Button>
          </div>
        </Cell>
        <Cell>
          <ButtonGroup>
            <Button
              variant="contained"
              onClick={handleOnEdit}
              disabled={!isDisabled}
            >
              <EditIcon />
            </Button>
            <Button
              variant="contained"
              onClick={handleOnSave}
              disabled={isDisabled}
            >
              <SaveIcon />
            </Button>
          </ButtonGroup>
        </Cell>
        <Cell>
          <div hidden={isCertification}>
            {isCertification ? (
              <div />
            ) : (
              <SoldierTableView
                templGuid={templGuid}
                triggerAlert={triggerAlert}
              />
            )}
          </div>
        </Cell>
      </Grid>
    </div>
  );
};
export default FrameView;
