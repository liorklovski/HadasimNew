// SearchTemplate
import React, { useState } from "react";
import Search from "../Dynamic/Search/Search";

// Const import
import { consts } from "../APICalls/constVars";
import { Paper } from "@material-ui/core";

// CSS import
import "./SearchTemplate.css";

const SearchTemplate = () => {
  const [data, setData] = useState([
    { DESCRIPTION: "משהו משהו", OBJECT_ID: "2233" }
  ]);
  const getSearchData = () => {
    // axios call
  };
  const handleClick = (event, row) => {
    return process.env.PUBLIC_URL + "/TemplateView/" + row.OBJECT_ID;
  };
  return (
    <Paper className="search-page" elevation={3}>
      <Search
        restUrl={consts.searchHadasimUrl}
        data={data}
        handleClick={handleClick}
      />
    </Paper>
  );
};

export default SearchTemplate;
