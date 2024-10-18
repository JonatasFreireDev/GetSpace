import { SpaceStationsFilterState } from "@/store/spaceStationsFilter/spaceStationsFilter.types";
import { SpacesDevsApi } from "../_instances";

export const spaceStationsService = async ({
  status,
  type,
}: SpaceStationsFilterState) => {
  const searchParams = new URLSearchParams();

  searchParams.append("format", "json");
  searchParams.append("limit", "9");

  if (status !== undefined) searchParams.append("status", status.toString());
  if (type !== undefined) searchParams.append("type", type.toString());

  try {
    const response = await SpacesDevsApi.get(
      "/2.3.0/space_stations/?" + searchParams.toString()
    );

    return response.data;
  } catch (err) {
    throw err;
  }
};
