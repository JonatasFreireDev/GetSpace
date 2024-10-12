import { SpacesDevsApi } from "../_instances";

export const launchService = async () => {
  try {
    const response = await SpacesDevsApi.get("/2.3.0/launches/?format=json");

    return response.data;
  } catch (err) {
    throw err;
  }
};
