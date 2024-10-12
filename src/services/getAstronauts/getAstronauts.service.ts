import { SpacesDevsApi } from "../_instances";

export const astronautsService = async () => {
  try {
    const response = await SpacesDevsApi.get("/2.3.0/astronauts/?format=json");

    return response.data;
  } catch (err) {
    throw err;
  }
};
