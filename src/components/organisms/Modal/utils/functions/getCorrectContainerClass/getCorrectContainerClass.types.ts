import { ModalSize, ModalType, Position } from "../../../Modal.types";

export interface getCorrectContainerClassProps {
  type: ModalType;
  size?: ModalSize;
  position?: Position;
}
