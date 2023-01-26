import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  // headers: {
  //   Accept: "application/vnd.api+json",
  //   "Content-Type": "application/vnd.api+json",
  //   "Cache-control": "no-cache",
  //   // 'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ='
  // },
});

export default instance;
