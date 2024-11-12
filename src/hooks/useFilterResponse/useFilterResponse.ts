import { useSearchStore } from "@/components/organisms/Search/store";
import { useEffect, useMemo, useState } from "react";

export const useFilterResponse = <T>(
  data: T[] | undefined,
  filterFunc: (s: string) => T[] | undefined,
) => {
  const [filtredData, setfiltredData] = useState<T[]>();
  const { searchData } = useSearchStore();

  const mapedData = useMemo(
    () => (!searchData ? data : filtredData),
    [searchData, filtredData, data],
  );

  useEffect(() => {
    if (!searchData || searchData.trim() === "") {
      setfiltredData([]);
      return;
    }

    const filteredResults = filterFunc(searchData.toLowerCase());

    setfiltredData(filteredResults);
  }, [searchData, data, filterFunc]);

  return { mapedData };
};
