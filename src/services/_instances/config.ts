import { store } from "@/store/_config/store";
import { JsonPlaceHolderApi } from "./jsonPlaceHolder/jsonPlaceHolder";
import { SpacesDevsApi } from "./spacesDevs/spacesDevs";

const axiosInstances = [JsonPlaceHolderApi, SpacesDevsApi];

axiosInstances.forEach((axiosInstance) => {
  axiosInstance.defaults.timeout = 1000;
  axiosInstance.interceptors.request.use(
    (config) => {
      const state = store.getState();

      if (state.user.token) {
        config.headers.Authorization = `Bearer ${state.user.token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
});

export { JsonPlaceHolderApi, SpacesDevsApi };
