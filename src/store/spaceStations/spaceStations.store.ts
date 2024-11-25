import { createStore } from "effector";
import { SpaceStationsStore } from "./spaceStations.types";

import * as Event from "./spaceStations.events";
import * as Reducer from "./spaceStations.reducers";

export const initialState: SpaceStationsStore = {
  filter: {
    status: undefined,
    type: undefined,
  },
  pagination: {
    itemsPerPage: 5,
    currentPage: 1,
    offset: 0,
  },
};

export const spaceStationsStore = createStore(initialState)
  .on(Event.setFilter, Reducer.setFilter)
  .on(Event.setPagination, Reducer.setPagination)
  .on(Event.resetFilter, Reducer.resetFilter)
  .on(Event.resetPagination, Reducer.resetPagination)
  .on(Event.resetSpaceStations, Reducer.resetSpaceStations);
