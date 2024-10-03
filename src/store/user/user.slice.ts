import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { UserState } from "./user.types";
import * as R from "./user.reducers";

const initialState: UserState = {
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
    setAddress: R.setAddressReducer,
  },
});

//Actions
export const { setUser, setAddress } = userSlice.actions;

//Selectors
export const userSelector = (state: RootState) => state.user;
export const userAddressSelector = (state: RootState) => state.user.address;
