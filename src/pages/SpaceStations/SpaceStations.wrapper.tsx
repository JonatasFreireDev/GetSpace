import { Suspense } from "react";
import { useSpaceStationsFilter } from "./hooks/useSpaceStationsFilter/useSpaceStationsFilter";
import { FilterLayout } from "@/components/templates/FilterLayout/FilterLayout";
import { SpaceStations } from "./SpaceStations";
import { SpaceStationsCardSkeleton } from "./components/SpaceStationsCard/SpaceStationsCard.Skeleton";

export const SpaceStationsWrapper = () => {
  const { definitions } = useSpaceStationsFilter();

  return (
    <FilterLayout props={{ definitions, title: "Space Stations" }}>
      <Suspense fallback={<SpaceStationsCardSkeleton />}>
        <SpaceStations />
      </Suspense>
    </FilterLayout>
  );
};

export default SpaceStationsWrapper;
