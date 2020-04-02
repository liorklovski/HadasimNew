// SearchTemplate
import React, { useState } from "react";
import Search from "../Dynamic/Search/Search";

// Const import
import { consts } from "../APICalls/constVars";
import { Paper } from "@material-ui/core";

// CSS import
import "./SearchTemplate.css";
import APICalls from "../APICalls/APICalls";

const SearchTemplate = () => {
  const getSearchData = () => {
    var data = APICalls.getDataByRest({
      url: consts.searchHadasimUrl
    });

    //TEMP
    if (!data) {
      data = [{ DESCRIPTION: "משהו משהו", OBJECT_ID: "2233" }];
    }
    return data;
  };
  const handleClick = (event, row) => {
    return process.env.PUBLIC_URL + "/TemplateView/" + row.OBJECT_ID;
  };
  return (
    <Paper className="search-page" elevation={3}>
      <Search data={getSearchData} handleClick={handleClick} />
    </Paper>
  );
};

export default SearchTemplate;
