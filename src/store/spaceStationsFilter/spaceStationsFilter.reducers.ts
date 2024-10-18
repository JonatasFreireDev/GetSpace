import { PayloadAction } from "@reduxjs/toolkit";
import * as I from "./spaceStationsFilter.types";
import { initialState } from "./spaceStationsFilter.slice";

export const setStatus = (
  state: I.SpaceStationsFilterState,
  action: PayloadAction<I.SetStatusReducerAction>
) => {
  const { value } = action.payload;
  state.status = value;
};

export const setType = (
  state: I.SpaceStationsFilterState,
  action: PayloadAction<I.SetTypeReducerAction>
) => {
  const { value } = action.payload;
  state.type = value;
};

export const resetSpaceStationsFilter = () => initialState;
