import { PayloadAction } from "@reduxjs/toolkit";
import * as I from "./user.types";

export const setUserReducer = (
  state: any,
  action: PayloadAction<I.SetUserReducerAction>
) => {
  const { field, value } = action.payload;
  state[field] = value;
};

export const setAddressReducer = (
  state: I.UserState,
  action: PayloadAction<I.SetUserAddressReducerAction>
) => {
  const { field, value } = action.payload;
  state.address[field] = value;
};
