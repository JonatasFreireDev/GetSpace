import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { SpaceStationsFilterState } from "./spaceStationsFilter.types";
import * as R from "./spaceStationsFilter.reducers";

export const initialState: SpaceStationsFilterState = {
  status: undefined,
  type: undefined,
};

//Slice
export const spaceStationsFilterSlice = createSlice({
  name: "spaceStationsFilter",
  initialState: initialState,
  reducers: {
    setStatus: R.setStatus,
    setType: R.setType,
    resetSpaceStationsFilter: R.resetSpaceStationsFilter,
  },
});

//Actions
export const { resetSpaceStationsFilter, setStatus, setType } =
  spaceStationsFilterSlice.actions;

//Selectors
export const spaceStationsFilterSelector = (state: RootState) =>
  state.spaceStationsFilter;
