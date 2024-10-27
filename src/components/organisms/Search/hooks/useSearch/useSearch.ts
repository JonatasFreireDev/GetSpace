import { debounceFunction } from "@/utils/functions";
import { useCallback, useState } from "react";

export const useSearch = () => {
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  const handleSearchChange = useCallback(
    debounceFunction((value: string) => {
      setDebouncedSearch(value);
    }, 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(e.target.value);
  };

  return {
    debouncedSearch,
    handleChange,
  };
};
