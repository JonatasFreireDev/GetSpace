import { FilterDefinitions } from "@/components/molecules/Filter/Filter.types";
import { useSpaceStationsFilterStore } from "@/store";
import { useCallback, useMemo } from "react";

export const useSpaceStationsFilter = () => {
  const { setStatus, setType, spaceStationFilterData } =
    useSpaceStationsFilterStore();

  const onChangeStatus = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setStatus({ value: Number(e.target.value) });
    },
    [setStatus],
  );

  const onChangeType = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setType({ value: Number(e.target.value) });
    },
    [setType],
  );

  const definitions: FilterDefinitions[] = useMemo(
    () => [
      {
        name: "status",
        label: "Status",
        handleChange: (e) => onChangeStatus(e),
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
        handleChange: (e) => onChangeType(e),
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
    [onChangeStatus, onChangeType],
  );

  return {
    definitions,
    spaceStationFilterData,
  };
};
