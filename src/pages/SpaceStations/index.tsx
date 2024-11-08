import { useCallback } from "react";
import { Title } from "@/components/atoms";
import { SpaceStation } from "@/services/getSpaceStations/getSpaceStations.types";
import { Search } from "@/components/organisms/Search";
import { SpaceStationsFilter } from "./components/SpaceStationsFilter/SpaceStationsFilter";
import { SpaceStationsCard } from "./components/SpaceStationsCard/SpaceStationsCard";
import { useGetSpaceStations } from "@/services";
import { useFilterResponse } from "@/hooks/useFilterResponse/useFilterResponse";

export const SpaceStations = () => {
  const { data, refetch, isLoading } = useGetSpaceStations();

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
    <div className="grid sm:grid-cols-1 md:grid-cols-[300px_auto] ">
      <section className="px-5">
        <SpaceStationsFilter refetch={refetch} />
      </section>
      <section className="px-5">
        <Title text="Space Stations" />
        <Search />
        <div className="grid my-5  gap-8 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {render()}
        </div>
      </section>
    </div>
  );
};

export default SpaceStations;
