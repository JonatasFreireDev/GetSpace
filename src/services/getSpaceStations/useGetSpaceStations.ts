import { useQuery } from "@tanstack/react-query";
import { spaceStationsService } from "./getSpaceStations.service";
import { SpaceStationsResponse } from "./getSpaceStations.types";

export const useGetSpaceStations = () => {
  const query = useQuery<SpaceStationsResponse>({
    queryKey: ["getSpaceStations"],
    queryFn: spaceStationsService,
    staleTime: Infinity,
  });

  return { ...query };
};
