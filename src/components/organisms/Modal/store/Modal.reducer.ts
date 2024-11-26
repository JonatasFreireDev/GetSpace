import { ModalProps } from "../Modal.types";

export const openModal = (state: Array<ModalProps>, modal: ModalProps) => [
  ...state,
  modal,
];

export const closeModal = (state: Array<ModalProps>, id: string) =>
  state.filter((modal) => modal.id !== id);

export const closeAllModals = () => [];
