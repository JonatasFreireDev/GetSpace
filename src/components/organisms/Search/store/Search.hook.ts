import { useUnit } from "effector-react";
import { searchStore } from "./Search.store";
import * as Event from "./Search.events";

export const useSearchStore = () => {
  const [store, setSearch, redefineSearch] = useUnit([
    searchStore,
    Event.setSearch,
    Event.redefineSearch,
  ]);

  return { searchData: store, setSearch, redefineSearch };
};
