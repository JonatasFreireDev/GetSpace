import { useUnit } from "effector-react";
import { modalsStore } from "./Modal.store";
import * as Event from "./Modal.events";

export const useModal = () => {
  const [modals, openModal, closeModal, closeAllModals] = useUnit([
    modalsStore,
    Event.openModal,
    Event.closeModal,
    Event.closeAllModals,
  ]);

  return { modals, openModal, closeModal, closeAllModals };
};
