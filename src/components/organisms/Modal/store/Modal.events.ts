import { createEvent } from "effector";
import { ModalProps } from "../Modal.types";

export const openModal = createEvent<ModalProps>();
export const closeModal = createEvent<string>();
export const closeAllModals = createEvent();
