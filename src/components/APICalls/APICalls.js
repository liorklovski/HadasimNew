import axios from "axios";

// const APICalls = () => {
export async function getDataByRest(url) {
  let res = await axios.get(url, { withCredentials: true });
  return res.data;
}
export async function saveDataByRest(url, dataToSave) {
  let resSave = await axios.post(url, dataToSave, {
    withCredentials: true
  });
  return resSave.data;
}
// };
// export default APICalls;
