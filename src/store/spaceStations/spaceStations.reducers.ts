import { initialState } from "./spaceStations.store";
import * as Type from "./spaceStations.types";

export const setFilter = (
  state: Type.SpaceStationsStore,
  payload: Partial<Type.Filter>,
) => ({
  ...state,
  filter: { ...state.filter, ...payload },
});

export const setPagination = (
  state: Type.SpaceStationsStore,
  payload: Partial<Type.Pagination>,
) => ({
  ...state,
  pagination: { ...state.pagination, ...payload },
});

export const resetFilter = (state: Type.SpaceStationsStore) => ({
  ...state,
  filter: initialState.filter,
});

export const resetPagination = (state: Type.SpaceStationsStore) => ({
  ...state,
  pagination: initialState.pagination,
});
export const resetSpaceStations = () => initialState;
