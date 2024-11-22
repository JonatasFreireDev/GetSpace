import { SpacesDevsApi } from "../_instances";

export const spaceStationsService = async (searchParams: String) => {
  try {
    const response = await SpacesDevsApi.get(
      "/2.3.0/space_stations/?" + searchParams,
    );

    return response.data;
  } catch (err) {
    throw err;
  }
};
