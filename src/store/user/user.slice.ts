import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./user.types";
import { RootState } from "../_config/types";
import * as R from "./user.reducers";

export const initialState: UserState = {
  userId: "",
  email: "",
  name: "",
  address: {
    city: "",
    state: "",
  },
};

//Slice
export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: R.setUserReducer,
    resetUser: R.resetUserReducer,
  },
});

//Actions
export const { setUser, resetUser } = userSlice.actions;

//Selectors
export const userSelector = (state: RootState) => state.user;
