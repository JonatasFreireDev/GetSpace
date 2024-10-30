import { createStore } from "effector";
import * as Event from "./Search.events";
import * as Reducer from "./Search.reducer";
import { Search } from "./Search.types";

export const searchStore = createStore<Search>(null)
  .on(Event.setSearch, Reducer.setSearch)
  .on(Event.redefineSearch, Reducer.redefineSearch);
