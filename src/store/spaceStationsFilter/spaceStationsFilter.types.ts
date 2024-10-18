import { Empty } from "@/utils/types";

export interface SpaceStationsFilterState {
  status: Status | Empty;
  type: Type | Empty;
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

export interface SetStatusReducerAction {
  value: Status | Empty;
}

export interface SetTypeReducerAction {
  value: Type | Empty;
}
