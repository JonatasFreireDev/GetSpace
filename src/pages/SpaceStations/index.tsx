import { useEffect, useMemo, useState } from "react";
import { Title } from "@/components/atoms";
import { SpaceStation } from "@/services/getSpaceStations/getSpaceStations.types";
import { Search } from "@/components/organisms/Search";
import { SpaceStationsFilter } from "./components/SpaceStationsFilter/SpaceStationsFilter";
import { SpaceStationsCard } from "./components/SpaceStationsCard/SpaceStationsCard";
import { useSearchStore } from "@/components/organisms/Search/store";
import { useGetSpaceStations } from "@/services";

export const SpaceStations = () => {
  const [filteredStations, setFilteredStations] = useState<SpaceStation[]>();
  const { data, refetch, isLoading } = useGetSpaceStations();
  const { searchData } = useSearchStore();

  const mapedData = useMemo(
    () => (!searchData ? data?.results : filteredStations),
    [searchData, filteredStations, data]
  );

  useEffect(() => {
    if (!searchData || searchData.trim() === "") {
      setFilteredStations([]);
      return;
    }

    const filteredResults = data?.results.filter(
      (station) =>
        station.name.toLowerCase().includes(searchData.toLowerCase()) ||
        station.founded.toLowerCase().includes(searchData.toLowerCase())
    );

    setFilteredStations(filteredResults);
  }, [searchData, data]);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-[300px_auto] ">
      <section className="px-5">
        <SpaceStationsFilter refetch={refetch} />
      </section>
      <section className="px-5">
        <Title text="Space Stations" />
        <Search />
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
