import { useEffect, useMemo, useState } from "react";
import { Title } from "@/components/atoms";
import { SpaceStation } from "@/services/getSpaceStations/getSpaceStations.types";
import { spaceStationsMock } from "@/__mocks__/spaceStations/get";
import { Search } from "@/components/organisms/Search";
import { useSearch } from "@/components/organisms/Search/hooks/useSearch/useSearch";
import { SpaceStationsFilter } from "./components/SpaceStationsFilter/SpaceStationsFilter";
import { SpaceStationsCard } from "./components/SpaceStationsCard/SpaceStationsCard";

export const SpaceStations = () => {
  const data = spaceStationsMock;
  const refetch = () => {};
  const isLoading = false;

  const [filteredStations, setFilteredStations] = useState<SpaceStation[]>();
  const { debouncedSearch, handleChange } = useSearch();

  const mapedData = useMemo(
    () =>
      debouncedSearch === undefined || debouncedSearch === ""
        ? data?.results
        : filteredStations,
    [debouncedSearch, filteredStations, data]
  );

  useEffect(() => {
    if (!debouncedSearch || debouncedSearch.trim() === "") {
      setFilteredStations([]);
      return;
    }

    const filteredResults = data?.results.filter(
      (station) =>
        station.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        station.founded.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    setFilteredStations(filteredResults);
  }, [debouncedSearch, data]);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-[300px_auto] ">
      <section className="px-5">
        <SpaceStationsFilter refetch={refetch} />
      </section>
      <section className="px-5">
        <Title text="Space Stations" />
        <Search handleChange={handleChange} />
        <div className="grid my-5  gap-8 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {isLoading ? <div>loagind..</div> : null}
          {mapedData?.map((spaceStation) => (
            <SpaceStationsCard
              spaceStation={spaceStation}
              key={spaceStation.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SpaceStations;
