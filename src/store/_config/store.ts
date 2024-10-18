import { configureStore } from "@reduxjs/toolkit";
import * as Slice from "./slices";

const store = configureStore({
  reducer: {
    user: Slice.user.reducer,
    spaceStationsFilter: Slice.spaceStationsFilter.reducer,
  },
});

export { store };
