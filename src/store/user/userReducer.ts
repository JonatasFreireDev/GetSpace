import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

const setTokenReducer = (state, action: PayloadAction<string>) => {
  state.token = action.payload;
};

export interface UserState {
  token: string;
}

// Define the initial state using that type
const initialState: UserState = {
  token: "0",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setToken: setTokenReducer,
  },
});

export const { setToken } = userSlice.actions;

export const userSelector = (state: RootState) => state.user;
