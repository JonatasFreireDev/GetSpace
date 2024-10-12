import { SpacesDevsApi } from "../_instances";

export const spaceStationsService = async () => {
  try {
    const response = await SpacesDevsApi.get(
      "/2.3.0/space_stations/?format=json"
    );

    return response.data;
  } catch (err) {
    throw err;
  }
};
