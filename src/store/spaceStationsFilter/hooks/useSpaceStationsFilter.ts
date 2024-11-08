import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store/_hooks/redux";
import { spaceStationsFilterSelector } from "../spaceStationsFilter.slice";
import * as Slice from "../spaceStationsFilter.slice";
import * as Type from "../spaceStationsFilter.types";

export const useSpaceStationsFilterStore = () => {
  const dispatch = useAppDispatch();

  const spaceStationFilterData = useAppSelector(spaceStationsFilterSelector);

  const setStatus = useCallback(
    ({ value }: Type.SetStatusReducerAction) =>
      dispatch(Slice.setStatus({ value })),
    [dispatch]
  );

  const setType = useCallback(
    ({ value }: Type.SetTypeReducerAction) =>
      dispatch(Slice.setType({ value })),
    [dispatch]
  );

  const resetSpaceStationsFilter = useCallback(() => {
    dispatch(Slice.resetSpaceStationsFilter());
  }, [dispatch]);

  return {
    spaceStationFilterData,
    resetSpaceStationsFilter,
    setStatus,
    setType,
  };
};
