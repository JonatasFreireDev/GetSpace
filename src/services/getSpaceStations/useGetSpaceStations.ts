import { useQuery } from "@tanstack/react-query";
import { spaceStationsService } from "./getSpaceStations.service";
import { SpaceStationsResponse } from "./getSpaceStations.types";
import { useSpaceStationsFilter } from "@/store";

export const useGetSpaceStations = () => {
  const { spaceStationFilterData } = useSpaceStationsFilter();

  const query = useQuery<SpaceStationsResponse>({
    queryKey: ["getSpaceStations"],
    queryFn: () => spaceStationsService(spaceStationFilterData),
    staleTime: Infinity,
    retry: false,
  });

  return { ...query };
};
