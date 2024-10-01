import { SpacesDevsApi } from "../_instances";

export const launchService = async () => {
  try {
    const response = await SpacesDevsApi.get(
      "/2.3.0/launches/?format=json&limit=3"
    );

    return response.data;
  } catch (err) {
    throw err;
  }
};
