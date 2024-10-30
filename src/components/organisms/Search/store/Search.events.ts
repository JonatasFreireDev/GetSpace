import { createEvent } from "effector";
import * as Type from "./Search.types";

export const setSearch = createEvent<Type.SetSearchPayload>();
export const redefineSearch = createEvent();
