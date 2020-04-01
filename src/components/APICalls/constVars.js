var locationCurr = window.location.hostname
if (locationCurr === "localhost") {
}
export const consts = {
  //Hadas
  searchHadasimUrl:
    "https://" + locationCurr + "/sap/bc/zym_rest/ZHDS_GET_HADASIM",
  getHadasDet:
    "https://" + locationCurr + "/sap/bc/zym_rest/ZHDS_GET_HADAS_DETAILS",
  updateHadasDet:
    "https://" + locationCurr + "/sap/bc/zym_rest/ZHDS_UPDATE_HADAS_DETAILS",

  // Certification
  searchCertificationsUrl:
    "https://" + locationCurr + "/sap/bc/zym_rest/ZHDS_GET_CERTIFICATIONS",
  getCerDet:
    "https://" + locationCurr + "/sap/bc/zym_rest/ZHDS_GET_HADAS_CER_DETAILS",
  updateCerDet:
    "https://" +
    locationCurr +
    "/sap/bc/zym_rest/ZHDS_UPDATE_HADAS_CER_DETAILS",

  // Users Get
  usersGet:
    "https://" + locationCurr + "/sap/bc/zym_rest/ZHDS_GET_SOLDIERS_BY_USER",

  // FollowUp
  followUp: "https://" + locationCurr + "/sap/bc/zym_rest/ZHDS_FOLLOWUP",
}
