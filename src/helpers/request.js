import axios from "axios";

const request = axios.create({
  baseURL: "https://frosty-wood-6558.getsandbox.com:443/dishes",

  validateStatus: false,
});

export default request;
