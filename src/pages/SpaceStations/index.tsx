import { useCallback, useEffect } from "react";
import { SpaceStation } from "@/services/getSpaceStations/getSpaceStations.types";
import { SpaceStationsCard } from "./components/SpaceStationsCard/SpaceStationsCard";
import { useGetSpaceStations } from "@/services";
import { useFilterResponse } from "@/hooks/useFilterResponse/useFilterResponse";
import { useSpaceStationsFilter } from "./hooks/useSpaceStationsFilter/useSpaceStationsFilter";
import { FilterLayout } from "@/components/templates/FilterLayout/FilterLayout";
import { Teste } from "./teste";

export const SpaceStations = () => {
  const { definitions } = useSpaceStationsFilter();

  return (
    <FilterLayout props={{ definitions, title: "Space Stations" }}>
      <Teste />
    </FilterLayout>
  );
};

export default SpaceStations;
