import { useCallback, useEffect } from "react";
import { SpaceStation } from "@/services/getSpaceStations/getSpaceStations.types";
import { SpaceStationsCard } from "./components/SpaceStationsCard/SpaceStationsCard";
import { useGetSpaceStations } from "@/services";
import { useFilterResponse } from "@/hooks/useFilterResponse/useFilterResponse";
import { useSpaceStationsFilter } from "./hooks/useSpaceStationsFilter/useSpaceStationsFilter";
import { FilterLayout } from "@/components/templates/FilterLayout/FilterLayout";

export const SpaceStations = () => {
  const { data, refetch, isLoading } = useGetSpaceStations();
  const { definitions, spaceStationFilterData } = useSpaceStationsFilter();

  useEffect(() => {
    refetch();
  }, [spaceStationFilterData, refetch]);

  const filterFunc = useCallback(
    (serrch: string) =>
      data?.results.filter(
        (station) =>
          station.name.toLowerCase().includes(serrch) ||
          station.founded.toLowerCase().includes(serrch)
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

  return (
    <FilterLayout props={{ definitions, title: "Space Stations" }}>
      {render()}
    </FilterLayout>
  );
};

export default SpaceStations;
