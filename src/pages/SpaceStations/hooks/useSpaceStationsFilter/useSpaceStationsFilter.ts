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
    [setStatus]
  );

  const onChangeType = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setType({ value: Number(e.target.value) });
    },
    [setType]
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
            { label: "Selecione o status", value: undefined },
            { label: "Ativa", value: 1 },
            { label: "Desorbitada", value: 3 },
            { label: "Descomissionada", value: 2 },
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
            { label: "Selecione o tipo", value: undefined },
            { label: "Comercial", value: 2 },
            { label: "Governo", value: 1 },
          ],
        },
      },
    ],
    [onChangeStatus, onChangeType]
  );

  return {
    definitions,
    spaceStationFilterData,
  };
};
