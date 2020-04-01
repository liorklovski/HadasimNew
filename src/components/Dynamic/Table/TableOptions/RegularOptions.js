const RegularOptions = ({ rowsNum = 15, isDisabled = false }) => {
  return {
    actionsCellStyle: {
      paddingRight: "0.5vw",
      justifyContent: "center",
      display: "flex"
    },
    disabled: isDisabled,
    search: false,
    Selection: true,
    sorting: false,
    paging: false,
    pageSize: rowsNum,
    minBodyHeight: 200,
    maxBodyHeight: 300,
    showTitle: false,
    headerStyle: {
      minWidth: "6vw",
      textAlign: "center",
      fontFamily: "Heebo",
      fontSize: "1.2vw",
      flexDirection: "initial"
    },
    rowStyle: {
      background: "rgba(251, 251, 253, 0.58)",
      fontFamily: "Heebo"
    }
  };
};
export default RegularOptions;
