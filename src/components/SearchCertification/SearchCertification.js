// SearchCertification
import React, { useState } from "react";
import Search from "../Dynamic/Search/Search";

// Const import
import { consts } from "../APICalls/constVars";
import APICalls from "../APICalls/APICalls";

const SearchCertification = () => {
  const getSearchData = () => {
    var data = APICalls.getDataByRest({
      url: consts.searchCertificationsUrl
    });

    //TEMP
    if (!data) {
      data = [{ DESCRIPTION: "משהו משהו", OBJECT_ID: "2233" }];
    }
    return data;
  };
  const handleClick = (event, row) => {
    return process.env.PUBLIC_URL + "/CertificationView/" + row.OBJECT_ID;
  };
  return (
    <Search
      state={{ isCertification: true }}
      data={getSearchData}
      handleClick={handleClick}
    />
  );
};

export default SearchCertification;
