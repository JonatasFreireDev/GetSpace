import { useQuery } from "@tanstack/react-query";
import { spaceStationsService } from "./getSpaceStations.service";
import { SpaceStationsResponse } from "./getSpaceStations.types";
import { useSpaceStationsStore } from "@/store";

export const useGetSpaceStations = () => {
  const {
    filterData: { status, type },
    paginationData: { currentPage, itemsPerPage, offset },
  } = useSpaceStationsStore();

  const searchParams = new URLSearchParams();

  searchParams.append("format", "json");
  searchParams.append("limit", String(itemsPerPage));
  searchParams.append("offset", String(offset));

  if (status) searchParams.append("status", status.toString());
  if (type) searchParams.append("type", type.toString());

  const query = useQuery<SpaceStationsResponse>({
    queryKey: ["getSpaceStations", currentPage, status, type],
    queryFn: () => spaceStationsService(searchParams.toString()),
    staleTime: Infinity,
    enabled: false,
    retry: false,
  });

  return { ...query };
};
