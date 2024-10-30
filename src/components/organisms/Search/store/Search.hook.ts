import { useUnit } from "effector-react";
import { searchStore } from "./Search.store";
import * as Event from "./Search.events";
import * as Type from "./Search.types";

export const useSearchStore = (): {
  searchData: Type.Search;
  setSearch: (payload: Type.SetSearchPayload) => string;
  redefineSearch: () => void;
} => {
  const [store, setSearch, redefineSearch] = useUnit([
    searchStore,
    Event.setSearch,
    Event.redefineSearch,
  ]);

  return { searchData: store, setSearch, redefineSearch };
};
