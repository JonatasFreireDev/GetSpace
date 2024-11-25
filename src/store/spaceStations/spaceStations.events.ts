import { createEvent } from "effector";
import * as Type from "./spaceStations.types";

export const setFilter = createEvent<Partial<Type.Filter>>();
export const setPagination = createEvent<Partial<Type.Pagination>>();

export const resetSpaceStations = createEvent();
export const resetFilter = createEvent();
export const resetPagination = createEvent();
