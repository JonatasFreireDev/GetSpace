import axios from "axios";

export const SpacesDevsApi = axios.create({
  baseURL: "https://ll.thespacedevs.com/",
});
