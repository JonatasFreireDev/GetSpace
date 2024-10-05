import { PayloadAction } from "@reduxjs/toolkit";
import * as I from "./user.types";
import { initialState } from "./user.slice";

export const setUserReducer = (
  state: I.UserState,
  action: PayloadAction<I.SetUserReducerAction>
) => {
  const { field, value } = action.payload;

  if (field.startsWith("address.")) {
    const addressField = field.split(".")[1] as keyof I.Address;
    state.address[addressField] = value;
  } else {
    (state as any)[field] = value;
  }
};

export const resetUserReducer = () => initialState;
