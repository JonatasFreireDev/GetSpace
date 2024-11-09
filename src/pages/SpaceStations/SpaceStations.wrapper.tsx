import { useSpaceStationsFilter } from "./hooks/useSpaceStationsFilter/useSpaceStationsFilter";
import { FilterLayout } from "@/components/templates/FilterLayout/FilterLayout";
import { SpaceStations } from "./SpaceStations";

export const SpaceStationsWrapper = () => {
  const { definitions } = useSpaceStationsFilter();

  return (
    <FilterLayout props={{ definitions, title: "Space Stations" }}>
      <SpaceStations />
    </FilterLayout>
  );
};

export default SpaceStationsWrapper;
