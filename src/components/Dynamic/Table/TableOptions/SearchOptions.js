const SearchOptions = ({ rowsNum = 15 }) => {
  return {
    Selection: true,
    paging: false,
    pageSize: rowsNum,
    minBodyHeight: 100,
    maxBodyHeight: 590,
    showTitle: false,
    searchFieldAlignment: "right",
    headerStyle: {
      textAlign: "center"
      // fontFamily: "Heebo",
      // fontSize: 25,
      // paddingRight: "1em"
    },
    searchFieldStyle: {
      direction: "rtl",
      position: "center",
      marginLeft: "25vw"
      // backgroundColor: "rgba(251, 251, 253, 0.88)",
      // height: "5vh",
      // borderRadius: "10px"
    }
  };
};
export default SearchOptions;
