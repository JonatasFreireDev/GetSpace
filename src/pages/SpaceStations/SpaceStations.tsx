import { useFilterResponse } from "@/hooks/useFilterResponse/useFilterResponse";
import { useGetSpaceStations } from "@/services";
import { SpaceStation } from "@/services/getSpaceStations/getSpaceStations.types";
import { useCallback, useEffect } from "react";
import { SpaceStationsCard } from "./components/SpaceStationsCard/SpaceStationsCard";
import { useSpaceStationsFilter } from "./hooks/useSpaceStationsFilter/useSpaceStationsFilter";
import { Loading, NotFound } from "@/components/atoms";

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
          station.founded.toLowerCase().includes(search),
      ),
    [data?.results],
  );

  const { mapedData } = useFilterResponse<SpaceStation>(
    data?.results,
    filterFunc,
  );

  const render = () => {
    if (isLoading) return <Loading />;
    if (mapedData?.length === 0 || !mapedData) return <NotFound />;
    if (mapedData)
      return (
        <div className="my-5 grid gap-8 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {mapedData.map((spaceStation) => (
            <SpaceStationsCard
              spaceStation={spaceStation}
              key={spaceStation.id}
            />
          ))}
        </div>
      );
  };

  return render();
};
