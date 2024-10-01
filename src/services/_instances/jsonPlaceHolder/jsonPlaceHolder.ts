import axios from "axios";

export const JsonPlaceHolderApi = axios.create({
  baseURL: "https://jsonplaceholder.org/",
});
