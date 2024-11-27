import { createStore } from "effector";
import { ModalProps } from "../Modal.types";
import * as Event from "./Modal.events";
import * as Reducer from "./Modal.reducer";

export const modalsStore = createStore<ModalProps[]>([])
  .on(Event.openModal, Reducer.openModal)
  .on(Event.closeModal, Reducer.closeModal)
  .on(Event.closeAllModals, Reducer.closeAllModals);

modalsStore.watch((state, payload) => console.log({ state, payload }));
