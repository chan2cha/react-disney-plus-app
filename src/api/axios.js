import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "1ad9272d85b3dbb9e859aa24ae838605",
    language: "ko-KR",
  },
});

export default instance;
