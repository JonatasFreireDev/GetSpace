import { Empty } from "@/utils/types";

export interface SpaceStationsStore {
  filter: Filter;
  pagination: Pagination;
}

export interface Filter {
  status: Status | Empty;
  type: Type | Empty;
}

export interface Pagination {
  itemsPerPage: number;
  currentPage: number;
  offset: number;
}

export enum Status {
  "active",
  "De-Orbited",
  "Decommissioned",
}

export enum Type {
  "Government",
  "Commercial",
}
