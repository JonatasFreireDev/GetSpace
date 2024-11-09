import { useFilterResponse } from "@/hooks/useFilterResponse/useFilterResponse";
import { useGetSpaceStations } from "@/services";
import { SpaceStation } from "@/services/getSpaceStations/getSpaceStations.types";
import { useCallback, useEffect } from "react";
import { SpaceStationsCard } from "./components/SpaceStationsCard/SpaceStationsCard";
import { useSpaceStationsFilter } from "./hooks/useSpaceStationsFilter/useSpaceStationsFilter";

export const SpaceStations = () => {
  const { data, refetch, isLoading } = useGetSpaceStations();
  const { spaceStationFilterData } = useSpaceStationsFilter();

  useEffect(() => {
    refetch();
  }, [spaceStationFilterData, refetch]);

  const filterFunc = useCallback(
    (search: string) =>
      data?.results.filter(
        (station) =>
          station.name.toLowerCase().includes(search) ||
          station.founded.toLowerCase().includes(search)
      ),
    [data?.results]
  );

  const { mapedData } = useFilterResponse<SpaceStation>(
    data?.results,
    filterFunc
  );

  const render = () => {
    if (isLoading) return <div>loagind..</div>;
    if (!mapedData) return <div>not Found</div>;
    if (mapedData)
      return mapedData.map((spaceStation) => (
        <SpaceStationsCard spaceStation={spaceStation} key={spaceStation.id} />
      ));
  };

  return render();
};
