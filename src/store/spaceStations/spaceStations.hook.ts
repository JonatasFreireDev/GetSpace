import * as Event from "./spaceStations.events";
import * as Type from "./spaceStations.types";
import { useUnit, useStoreMap } from "effector-react";
import { spaceStationsStore } from "./spaceStations.store";

export const useSpaceStationsStore = (): {
  filterData: Type.Filter;
  paginationData: Type.Pagination;

  setFilter: (payload: Partial<Type.Filter>) => Partial<Type.Filter>;
  setPagination: (
    payload: Partial<Type.Pagination>,
  ) => Partial<Type.Pagination>;
  resetFilter: () => void;
  resetPagination: () => void;
  resetSpaceStations: () => void;
} => {
  const filterData = useStoreMap({
    store: spaceStationsStore,
    fn: (state: Type.SpaceStationsStore) => state.filter,
    keys: [],
  });

  const paginationData = useStoreMap({
    store: spaceStationsStore,
    fn: (state: Type.SpaceStationsStore) => state.pagination,
    keys: [],
  });

  const [
    setFilter,
    setPagination,
    resetFilter,
    resetPagination,
    resetSpaceStations,
  ] = useUnit([
    Event.setFilter,
    Event.setPagination,
    Event.resetFilter,
    Event.resetPagination,
    Event.resetSpaceStations,
  ]);

  return {
    filterData,
    paginationData,
    setFilter,
    setPagination,
    resetFilter,
    resetPagination,
    resetSpaceStations,
  };
};
