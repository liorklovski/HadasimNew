import React, { useState } from "react";

// Important
import { Redirect } from "react-router-dom";

// CSS:

// Const import
import Table from "../Table/Table";
import SearchOptions from "../Table/TableOptions/SearchOptions";

const cellStyleDefault = {
  textAlign: "center",
  fontFamily: "Heebo",
  fontSize: 17,
  backgroundColor: "rgba(251, 251, 253, 0.58)",
  width: "50%"
};

const Search = ({
  data,
  columns = [
    {
      title: "שם",
      field: "DESCRIPTION",
      cellStyle: cellStyleDefault
    },
    {
      title: "מזהה",
      field: "OBJECT_ID",
      cellStyle: cellStyleDefault
    }
  ],
  state = {},
  handleClick,
  ...others
}) => {
  // Function properties
  var numberOfRows = data.length;
  var options = SearchOptions(numberOfRows);

  // Other functions
  // When row clicked
  const [redirect, setRedirect] = useState(false);
  const handleRowClick = (event, row) => {
    const redirectPath = handleClick(event, row);
    setRedirect(redirectPath);
  };

  // Redirect when a row clicked
  function handleRedirect() {
    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: redirect,
            state: state
          }}
        />
      );
    }
  }

  // Render the final page
  return (
    <div>
      {handleRedirect()}
      <Table
        data={data}
        columns={columns}
        options={options}
        handleClick={handleRowClick}
      />
    </div>
  );
};

export default Search;
