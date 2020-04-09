// SearchCertification
import React, { useState } from "react";
import Search from "../Dynamic/Search/Search";

// Const import
import { consts } from "../APICalls/constVars";
import { getDataByRest } from "../APICalls/APICalls";

const SearchCertification = () => {
  const getSearchData = () => {
    // var data = getDataByRest({
    //   url: consts.searchCertificationsUrl
    // });

    //TEMP
    var data = [{ DESCRIPTION: "משהו משהו", OBJECT_ID: "2233" }];
    //TEMP
    return data;
  };
  const handleClick = (event, row) => {
    return process.env.PUBLIC_URL + "/CertificationView/" + row.OBJECT_ID;
  };
  return <Search data={getSearchData()} handleClick={handleClick} />;
};

export default SearchCertification;
