import { FilterDefinitions } from "@/components/molecules/Filter/Filter.types";
import { useSpaceStationsStore } from "@/store";
import { useCallback, useMemo } from "react";

export const useSpaceStationsFilter = () => {
  const { setFilter, filterData } = useSpaceStationsStore();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter({ [e.target.name]: Number(e.target.value) });
    },
    [setFilter],
  );

  const definitions: FilterDefinitions[] = useMemo(
    () => [
      {
        name: "status",
        label: "Status",
        handleChange: handleChange,
        field: {
          type: "select",
          options: [
            { label: "Status", value: undefined },
            { label: "Active", value: 1 },
            { label: "De-Orbited", value: 3 },
            { label: "Decommissioned", value: 2 },
          ],
        },
      },
      {
        name: "type",
        label: "Type",
        handleChange: handleChange,
        field: {
          type: "select",
          options: [
            { label: "Type", value: undefined },
            { label: "Comercial", value: 1 },
            { label: "Government", value: 2 },
          ],
        },
      },
    ],
    [handleChange],
  );

  return {
    definitions,
    filterData,
  };
};
