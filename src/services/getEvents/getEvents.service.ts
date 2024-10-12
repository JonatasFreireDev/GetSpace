import { SpacesDevsApi } from "../_instances";

export const eventsService = async () => {
  try {
    const response = await SpacesDevsApi.get("/2.3.0/events/?format=json");

    return response.data;
  } catch (err) {
    throw err;
  }
};
