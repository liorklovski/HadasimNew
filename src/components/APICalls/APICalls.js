import React from "react";
import axios from "axios";

const APICalls = () => {
  const getDataByRest = async url => {
    let res = await axios.get(url, { withCredentials: true });
    return res.data;
  };
  const saveDataByRest = async (url, dataToSave) => {
    let resSave = await axios.post(url, dataToSave, {
      withCredentials: true
    });
    return resSave.data;
  };
};
export default APICalls;
