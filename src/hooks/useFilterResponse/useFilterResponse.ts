import { useSearchStore } from "@/components/organisms/Search/store";
import { useEffect, useMemo, useState } from "react";

export const useFilterResponse = <T>(
  data: T[] | undefined,
  filterFunc: (s: string) => T[] | undefined
) => {
  const [filteredStations, setFilteredStations] = useState<T[]>();
  const { searchData } = useSearchStore();

  const mapedData = useMemo(
    () => (!searchData ? data : filteredStations),
    [searchData, filteredStations, data]
  );

  useEffect(() => {
    if (!searchData || searchData.trim() === "") {
      setFilteredStations([]);
      return;
    }

    const filteredResults = filterFunc(searchData.toLowerCase());

    setFilteredStations(filteredResults);
  }, [searchData, data, filterFunc]);

  return { mapedData };
};
