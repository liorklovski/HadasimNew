// SearchCertification
import React, { useState } from "react";
import Search from "../Dynamic/Search/Search";

// Const import
import { consts } from "../APICalls/constVars";

const SearchCertification = () => {
  const [data, setData] = useState([
    { DESCRIPTION: "משהו משהו", OBJECT_ID: "2233" }
  ]);
  const getSearchData = () => {
    // axios call
  };
  const handleClick = (event, row) => {
    return process.env.PUBLIC_URL + "/CertificationView/" + row.OBJECT_ID;
  };
  return (
    <Search
      restUrl={consts.searchCertificationsUrl}
      state={{ isCertification: true }}
      data={data}
      handleClick={handleClick}
    />
  );
};

export default SearchCertification;
